// const dev = require("./dev-log"),
//   api = require("./api"),
//   auth = require("./auth"),
//   exporter = require("./exporter"),
//   file = require("./file"),
//   changelog = require("./changelog"),
//   access = require("./access");

// const bcrypt = require("bcryptjs");
const dev = require("./dev-log");
const notifier = require("./notifier");

module.exports = (function () {
  dev.log(`Sockets module initialized`);
  let app;
  let io;

  const API = {
    init: (app, io) => init(app, io),
  };

  function init(io) {
    io.use(function (socket, next) {
      // if (
      //   auth.isSubmittedSessionPasswordValid(
      //     socket.handshake.query.hashed_session_password
      //   )
      // ) {
      dev.log(`CONNECTION ALLOWED`);
      next();
      // } else {
      //   dev.error(`CONNECTION DENIED`);
      //   next(new Error("Authentication error"));
      // }
    });

    io.on("connection", async (socket) => {
      dev.log(`RECEIVED CONNECTION FROM SOCKET.id: ${socket.id}`);

      const sockets = await io.fetchSockets();
      dev.log(`Clients connected currently : ${Object.keys(sockets).length}`);

      // setTimeout(() => {
      // socket.emit("msg", "hello world");
      // }, 2000);

      let ip = "";
      if (socket.handshake) {
        if (socket.handshake.headers && socket.handshake.headers["x-real-ip"]) {
          // need to add the following to nginx .conf
          // proxy_set_header X-Real-IP $remote_addr;
          ip = socket.handshake.headers["x-real-ip"];
        } else if (socket.handshake.address) {
          ip = socket.handshake.address;
        }
      }

      let user_agent = "";
      if (
        socket.handshake &&
        socket.handshake.headers &&
        socket.handshake.headers["user-agent"]
      )
        user_agent = socket.handshake.headers["user-agent"];

      // access.append({
      //   ip,
      //   user_agent,
      // });
      socket._data = {};

      var onevent = socket.onevent;
      socket.onevent = function (packet) {
        var args = packet.data || [];
        onevent.call(this, packet); // original call
        packet.data = ["*"].concat(args);
        onevent.call(this, packet); // additional call to catch-all
      };

      socket.on("*", (event, data) => dev.log(`RECEIVED EVENT: ${event}`));

      notifier.on("createFolder", (content) => {
        socket.emit("createFolder", content);
      });
      notifier.on("editFolder", (content) => {
        socket.emit("editFolder", content);
      });
      notifier.on("removeFolder", (content) => {
        socket.emit("removeFolder", content);
      });

      // socket.on("authenticate", (d) => onAuthenticate(socket, d));
    });
  }

  return API;
})();
