(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[979],{41979:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"_cropImage"},[a("div",{staticClass:"_sidebyside"},[a("div",{staticClass:"_leftBtns"},[t.base_media?[a("ToggledSection",{staticClass:"u-spacingBottom",attrs:{label:t.$t("crop"),show_toggle:t.show_crop},on:{"update:show_toggle":function(e){t.show_crop=e}}},[a("div",{staticClass:"_btnRow"},[a("button",{staticClass:"u-button u-button_small u-button_orange",attrs:{type:"button"},on:{click:t.resetCrop}},[a("b-icon",{attrs:{icon:"plus-square-dotted"}}),t._v(" "+t._s(t.$t("reset_crop"))+" ")],1),a("button",{staticClass:"u-button u-button_small u-button_bleuvert",attrs:{type:"button",disabled:""},on:{click:function(e){return t.rotateImage(90)}}},[a("b-icon",{attrs:{icon:"arrow-clockwise"}})],1),a("button",{staticClass:"u-button u-button_small u-button_bleuvert",attrs:{type:"button",disabled:""},on:{click:function(e){return t.rotateImage(-90)}}},[a("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)]),a("div",{staticClass:"_values"},[a("NumberInput",{attrs:{label:"x",value:t.make.crop_options&&t.make.crop_options.x?t.make.crop_options.x:0,min:0,suffix:"%"},on:{save:function(e){return t.updateFromInputs({x:e})}}}),a("NumberInput",{attrs:{label:"y",value:t.make.crop_options&&t.make.crop_options.y?t.make.crop_options.y:0,min:0,suffix:"%"},on:{save:function(e){return t.updateFromInputs({y:e})}}})],1),a("div",{staticClass:"u-spacingBottom _values"},[a("NumberInput",{attrs:{label:t.$t("width"),value:t.make.crop_options&&t.make.crop_options.width?t.make.crop_options.width:30,min:0,suffix:"%"},on:{save:function(e){return t.updateFromInputs({width:e})}}}),a("NumberInput",{attrs:{label:t.$t("height"),value:t.make.crop_options&&t.make.crop_options.height?t.make.crop_options.height:20,min:0,suffix:"%"},on:{save:function(e){return t.updateFromInputs({height:e})}}})],1)]),a("ToggledSection",{staticClass:"u-spacingBottom",attrs:{label:t.$t("adjust"),show_toggle:t.show_adjust},on:{"update:show_toggle":function(e){t.show_adjust=e}}},[a("DLabel",{attrs:{str:t.$t("adjust")}}),a("RangeValueInput",{attrs:{can_toggle:!0,label:t.$t("brightness"),value:t.make.image_brightness,min:0,max:200,step:1,default_value:100,suffix:"%"},on:{save:function(e){return t.updatePubliMeta({image_brightness:e})}}}),a("RangeValueInput",{attrs:{can_toggle:!0,label:t.$t("contrast"),value:t.make.image_contrast,min:0,max:200,step:1,default_value:100,suffix:"%"},on:{save:function(e){return t.updatePubliMeta({image_contrast:e})}}}),a("RangeValueInput",{attrs:{can_toggle:!0,label:t.$t("saturation"),value:t.make.image_saturation,min:0,max:200,step:1,default_value:100,suffix:"%"},on:{save:function(e){return t.updatePubliMeta({image_saturation:e})}}}),a("RangeValueInput",{attrs:{can_toggle:!0,label:t.$t("blur"),value:t.make.image_blur,min:0,max:100,step:1,default_value:0,suffix:"px"},on:{save:function(e){return t.updatePubliMeta({image_blur:e})}}})],1),a("div",{},[a("button",{staticClass:"u-button u-button_bleumarine",attrs:{type:"button"},on:{click:function(e){t.show_save_export_modal=!0}}},[a("b-icon",{attrs:{icon:"check"}}),t._v(" "+t._s(t.$t("submit"))+" ")],1)])]:t._e()],2),a("div",{staticClass:"_cropWindow"},[a("div",{ref:"cropCanvasContainer",staticClass:"_canvasContainer"},[a("canvas",{ref:"cropCanvas",staticClass:"_canvas",attrs:{width:"1280",height:"720"}}),a("div",{staticClass:"_mask"},[a("div",{staticClass:"_maskContent",style:t.mask_styles})]),a("DDR",{key:t.crop_key,staticClass:"_cropFrame",attrs:{value:t.crop_transform,rotatable:!1,acceptRatio:t.aspect_ratio,id:"1",parent:!0,handlerSize:20},on:{drag:t.updateMask,dragend:t.dragEnd,resizestart:t.resizeStart,resize:t.updateMask,resizeend:t.dragEnd}})],1)])]),t.show_save_export_modal?a("ExportSaveMakeModal",{attrs:{title:t.$t("save_export_cropped"),export_blob:t.export_blob,export_name:t.image_export_name,project_path:t.project_path},on:{close:function(e){t.show_save_export_modal=!1}}},[a("div",{staticClass:"u-spacingBottom _preview"},[a("canvas",{ref:"previewCanvas",staticClass:"_previewCanvas",attrs:{width:"1280",height:"720"}})]),t._v(" "+t._s(t.$t("resolution"))+": "+t._s(t.export_width)+"×"+t._s(t.export_height)+" ")]):t._e()],1)},i=[],r=a(1148),o=(a(13382),a(66768)),n={props:{make:Object,project_path:String,base_media:Object},components:{DDR:r.Z,ExportSaveMakeModal:o.Z},data(){return{scale:1,export_blob:!1,export_width:0,export_height:0,crop_key:(new Date).getTime(),aspect_ratio:!0,show_crop:!0,crop_transform:{x:0,y:0,width:100,height:100,rotation:0},mask_prop:{x:0,y:0,width:100,height:100,rotation:0},show_adjust:!0,show_save_export_modal:!1}},created(){},async mounted(){this.base_media&&this.$nextTick((async()=>{await this.drawImageToCanvas(),this.setTransformFromMake()}))},beforeDestroy(){},watch:{"make.crop_options":{handler(){this.setTransformFromMake()},deep:!0},async"make.image_brightness"(){await this.drawImageToCanvas()},async"make.image_contrast"(){await this.drawImageToCanvas()},async"make.image_saturation"(){await this.drawImageToCanvas()},async"make.image_blur"(){await this.drawImageToCanvas()},base_media(){(async()=>{await this.drawImageToCanvas(),await this.resetCrop()})()},show_save_export_modal(){this.show_save_export_modal&&this.$nextTick((()=>{this.$nextTick((()=>{this.updatePreviewCanvas()}))}))},"$root.window.innerWidth"(){this.setTransformFromMake()},"$root.window.innerHeight"(){this.setTransformFromMake()}},computed:{image_export_name(){return this.base_media.$media_filename+"_edited.png"},mask_styles(){return{left:this.mask_prop.x+"px",top:this.mask_prop.y+"px",width:this.mask_prop.width+"px",height:this.mask_prop.height+"px"}}},methods:{async updatePubliMeta(t){return await this.$api.updateMeta({path:this.make.$path,new_meta:t})},async resetCrop(){const t={x:0,y:0,width:100,height:100,rotation:0};await this.updatePubliMeta({crop_options:t})},setTransformFromMake(){let t=this.make.crop_options?.x||0,e=this.make.crop_options?.y||0,a=this.make.crop_options?.width||100,s=this.make.crop_options?.height||100;const i=this.$refs.cropCanvas,r=i.parentElement.offsetWidth,o=i.parentElement.offsetHeight;this.crop_transform.x=t/100*r,this.crop_transform.y=e/100*o,this.crop_transform.width=a/100*r,this.crop_transform.height=s/100*o,this.setMaskProps(this.crop_transform),this.crop_key=(new Date).getTime()},async drawImageToCanvas(){const t=this.$refs.cropCanvas,e=this.$refs.cropCanvasContainer;if(!t||!e)return!1;let a=this.base_media.$infos?.width||1280,s=this.base_media.$infos?.height||720;const i=a/s,r=.75*this.$root.window.innerHeight;s>r&&(s=r,a=s*i);const o=.75*this.$root.window.innerWidth;a>o&&(a=o,s=a/i),a!==t.width&&(t.width=a),s!==t.height&&(t.height=s),e.style.width=a+"px",e.style.height=s+"px";const n=this.makeMediaFileURL({$path:this.base_media.$path,$media_filename:this.base_media.$media_filename});let h=new Image;h.src=n,await h.decode();const l=t.getContext("2d");l.clearRect(0,0,t.width,t.height);let d="";Object.prototype.hasOwnProperty.call(this.make,"image_brightness")&&(d+=`brightness(${this.make.image_brightness}%)`),Object.prototype.hasOwnProperty.call(this.make,"image_contrast")&&(d+=`contrast(${this.make.image_contrast}%)`),Object.prototype.hasOwnProperty.call(this.make,"image_blur")&&(d+=`blur(${this.make.image_blur}px)`),Object.prototype.hasOwnProperty.call(this.make,"image_saturation")&&(d+=`saturate(${this.make.image_saturation}%)`),l.filter=d,l.drawImage(h,0,0,a,s)},updateMask(t,e){this.setMaskProps(e)},setMaskProps(t){this.mask_prop.x=t.x,this.mask_prop.y=t.y,this.mask_prop.width=t.width,this.mask_prop.height=t.height},dragEnd(t,e){this.updateCrop(e),t.stopPropagation()},resizeStart(t){return t.target.classList.contains("br")||t.target.classList.contains("bl")||t.target.classList.contains("tl")||t.target.classList.contains("tr")?this.aspect_ratio=!0:this.aspect_ratio=!1},updateCrop(t){const e=this.$refs.cropCanvas;if(!e)return!1;const a=e.parentElement.offsetWidth,s=e.parentElement.offsetHeight;let i={x:0,y:0,width:100,height:100,rotation:0};Object.prototype.hasOwnProperty.call(t,"x")&&(i.x=this.roundToDec(t.x/a*100)),Object.prototype.hasOwnProperty.call(t,"y")&&(i.y=this.roundToDec(t.y/s*100)),Object.prototype.hasOwnProperty.call(t,"width")&&(i.width=this.roundToDec(t.width/a*100)),Object.prototype.hasOwnProperty.call(t,"height")&&(i.height=this.roundToDec(t.height/s*100)),this.updatePubliMeta({crop_options:i})},updateFromInputs(t){const e=Object.assign({},this.make.crop_options,t);this.updatePubliMeta({crop_options:e})},async updatePreviewCanvas(){const t=this.$refs.cropCanvas,e=this.$refs.previewCanvas;if(!t||!e)return!1;const a=e.getContext("2d"),s=Math.round(this.make.crop_options?.x/100*t.width),i=Math.round(this.make.crop_options?.y/100*t.height),r=Math.round(this.make.crop_options?.width/100*t.width),o=Math.round(this.make.crop_options?.height/100*t.height);e.width=r,e.height=o,a.drawImage(t,s,i,r,o,0,0,r,o),this.export_width=r,this.export_height=o,this.export_blob=await new Promise((t=>{e.toBlob(t,"image/jpeg",.95)}))}}},h=n,l=(a(26253),a(1001)),d=(0,l.Z)(h,s,i,!1,null,"08c9c9f2",null),c=d.exports},66768:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseModal2",{attrs:{title:t.title||t.$t("export")},on:{close:function(e){return t.$emit("close")}}},[a("div",{staticClass:"_cont"},[a("div",{staticClass:"u-spacingBottom"},[t._t("default")],2),a("div",{},[a("div",{staticClass:"u-sameRow"},[a("a",{staticClass:"u-buttonLink",attrs:{disabled:!t.export_href,download:t.export_name,href:t.export_href,target:"_blank"}},[t._v(" "+t._s(t.$t("download"))+" ")]),a("button",{staticClass:"u-button u-button_red",attrs:{type:"button"},on:{click:t.saveToProject}},[a("svg",{staticStyle:{"enable-background":"new 0 0 168 168"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 168 168","xml:space":"preserve"}},[a("path",{staticStyle:{fill:"var(--c-rouge)"},attrs:{d:"M84,0C37.6,0,0,37.6,0,84c0,46.4,37.6,84,84,84c46.4,0,84-37.6,84-84 C168,37.6,130.4,0,84,0z"}}),a("g",{staticStyle:{fill:"var(--c-orange)"}},[a("path",{attrs:{d:"m42 42h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m73.2 42h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m104.4 42h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m42 73.5h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m73.2 73.5h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m104.4 73.5h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m42 105h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m73.2 105h21.6v21h-21.6z"}}),a("path",{attrs:{d:"m104.4 105h21.6v21h-21.6z"}})])]),t._v(" "+t._s(t.$t("save_to_project"))+" ")])])]),t.finished_saving_to_project?a("div",{staticClass:"_saveNotice"},[t._v(" "+t._s(t.$t("media_was_saved"))+" ")]):t._e()])])},i=[],r={props:{title:String,export_name:{type:String,default:"file"},export_blob:[Boolean,Blob],project_path:String},components:{},data(){return{finished_saving_to_project:!1}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{export_href(){return!!this.export_blob&&window.URL.createObjectURL(this.export_blob)}},methods:{async saveToProject(){const t={$origin:"make"};await this.$api.uploadFile({path:this.project_path,filename:this.export_name,file:this.export_blob,additional_meta:t}).catch((t=>{throw this.$alertify.delay(4e3).error(t),t})),this.finished_saving_to_project=!0,setTimeout((()=>{this.$emit("close")}),3e3)}}},o=r,n=(a(96346),a(1001)),h=(0,n.Z)(o,s,i,!1,null,"17b4b184",null),l=h.exports},1148:function(t,e,a){"use strict";a.d(e,{Z:function(){return T}});a(26699),a(57658),a(21703);class s{constructor(t){this._values=t}toString(){return`Vector(${this._values.join(", ")})`}get length(){return this._values.length}dot(t){if(t instanceof s&&this.length===t.length)return this._values.map(((e,a)=>e*t._values[a])).reduce(((t,e)=>t+e));throw Error("The param `vector` must instance of Vector")}get(t){return this._values[t]}}var i=s;class r{constructor(t){this._values=t}static zeros(t){return new r(new Array(t[0]).fill(null).map((()=>new Array(t[1]).fill(0))))}valueOf(){return JSON.parse(JSON.stringify(this._values))}toString(){return"Matrix ( "+this._values.map((t=>t.join(" "))).join(", ")+" )"}rows(){return this._values.length}cols(){return this._values[0].length}rowVector(t){return new i(this._values[t].slice(0))}colVector(t){let e=new Array(this.rows()).fill(0);return this._values.forEach(((a,s)=>{e[s]=a[t]})),new i(e)}dot(t){if(t instanceof i&&this.cols()===t.length)return new i(new Array(t.length).fill(null).map(((e,a)=>this.rowVector(a).dot(t))));if(t instanceof r&&this.cols()===t.rows()){let e,a=t.cols(),s=t.rows(),i=r.zeros([s,a]);for(let r=0;r<a;r++){e=this.dot(t.colVector(r));for(let t=0;t<s;t++)i._values[t][r]=e.get(t)}return i}throw Error("expected a Vector or Matrix but got "+typeof t)}get(t,e){return this._values[t][e]}T(){return new r(new Array(this.cols()).fill(null).map(((t,e)=>new Array(this.rows()).fill(0).map(((t,a)=>this.get(a,e))))))}}var o=r;const n={br:0,bm:1,bl:2,l:3,tl:4,tm:5,tr:6,r:7},h={tl:0,tm:1,tr:2,r:3,br:4,bm:5,bl:6,l:7},l={br:0,bm:0,bl:2,l:2,tl:4,tm:4,tr:6,r:6},d={l:1,r:1},c={tm:1,bm:1},p={tr:1,bl:1,r:1,l:1};function u(t){return t*Math.PI/180}function m(t){return 180*t/Math.PI}function f({x:t,y:e,width:a,height:s,rotation:i},r){let n=i*Math.PI/180,h=a/2*r,l=s/2*r,d=new o([[Math.cos(n),Math.sin(n)],[-Math.sin(n),Math.cos(n)]]),c=new o([[-h,l],[0,l],[h,l],[h,0],[h,-l],[0,-l],[-h,-l],[-h,0]]);return d.dot(c.T()).T().valueOf().map((a=>({x:a[0]+h+t*r,y:-(a[1]-l)+e*r})))}function g({type:t,x:e,y:a,dis:s,pressAngle:i,startAngle:r}){let o,n,h=m(Math.atan2(a,e)),l=u(i+h-r);return p[t]?(n=Math.cos(l)*s,o=Math.sin(l)*s):(n=Math.sin(l)*s,o=Math.cos(l)*s),{w:o,h:n}}const _=["nw","n","ne","e","se","s","sw","w"],b={tl:0,tm:1,tr:2,r:3,br:4,bm:5,bl:6,l:7};function y(t,e){let a=b[t],s=(a+Math.floor(e/45))%8;return _[s]}var v,w,x={name:"ddr",props:{value:{default:function(){return{x:0,y:0,width:100,height:100,rotation:0}},type:Object},handlerSize:{type:Number,default:11},active:{default:!0,type:Boolean},resizeHandler:{default:function(){return["tl","tm","tr","r","br","bm","bl","l"]},type:Array},resizable:{default:!0,type:Boolean},rotatable:{default:!0,type:Boolean},draggable:{default:!0,type:Boolean},acceptRatio:{default:!1,type:Boolean},minWidth:{type:Number,default:1},minHeight:{type:Number,default:1},maxWidth:{type:Number,default:1e8},maxHeight:{type:Number,default:1e8},parent:{type:Boolean,default:!1},beforeActive:{type:Function,default:()=>!1},id:[Number,String],renderContent:Function,grid:{type:Array,default:()=>[1,1]},stop:{default:!0,type:Boolean},prevent:{default:!0,type:Boolean},zoom:{default:1,type:Number},axis:{type:String,default:"xy"}},data(){return{transform:Object.assign({},this.value),currentRatio:1,isInitialRatio:!1,isDragging:!1,isResizing:!1,isRotating:!1,isReadyToDrag:!1,isReadyToResize:!1,isReadyToRotate:!1}},created(){this.localeTransform={...this.transform}},watch:{value(t){this.transform={...t}}},computed:{rotateHandler(){let t=Math.ceil(this.handlerSize/this.zoom)+"px";return`width:${t};height:${t};top:-25px;margin-left:${-Math.floor(this.handlerSize/2)}px`},style(){let t=this.transform;return`left:${t.x}px;top:${t.y}px;width:${t.width}px;height:${t.height}px;transform:rotate(${t.rotation}deg)`}},methods:{handleDefaultEvent(t){this.stop&&t.stopPropagation(),this.prevent&&t.preventDefault()},getNewHandler(t){let e=y(t,this.transform.rotation),{handlerSize:a}=this,s={},i=-Math.floor(a/2)+"px";switch(t){case"tl":s={top:i,left:i};break;case"tm":s={top:i,"margin-left":i};break;case"tr":s={right:i,top:i};break;case"r":s={right:i,"margin-top":i};break;case"br":s={bottom:i,right:i};break;case"bm":s={"margin-left":i,bottom:i};break;case"bl":s={left:i,bottom:i};break;case"l":s={"margin-top":i,left:i};break}let r={cursor:e+"-resize",width:Math.ceil(a/this.zoom)+"px",height:Math.ceil(a/this.zoom)+"px",...s};return Object.keys(r).map((t=>`${t}:${r[t]}`)).join(";")},emitChange(){this.$emit("input",{...this.transform})},handleMouseDown(t){if(!this.active&&!this.beforeActive(this.id))return;this.handleDefaultEvent(t);let e=t.touches?t.touches[0]:t,{clientX:a,clientY:s}=e;if(this._lastX=a,this._lastY=s,this._activeTarget=t.target,this._parentRect=this.$refs.wrapper.parentNode.getBoundingClientRect(),this._resizeHandler=t.target.dataset.resizetype,this.localeTransform={...this.transform},this.parent){let t=0,e=this._parentRect.width/this.zoom-this.transform.width,a=0,s=this._parentRect.height/this.zoom-this.transform.height,i=this.transform.x+this.transform.width,r=this._parentRect.width/this.zoom-this.transform.x,o=this.transform.y+this.transform.height,n=this._parentRect.height/this.zoom-this.transform.y;this.bounday={minLeft:t,maxLeft:e,minTop:a,maxTop:s,maxLeftWidth:i,maxRightWidth:r,maxTopHeight:o,maxBottomHeight:n}}document.addEventListener("mousemove",this.handleMouseMove,!1),document.addEventListener("touchmove",this.handleMouseMove,!1),document.addEventListener("touchend",this.handleMouseUp,!1),document.addEventListener("mouseup",this.handleMouseUp,!1),"rotate"===t.target.dataset.type?(this._handlerType="rotate",this.isReadyToRotate=!0,this.handleRotateStart(t),this.$emit("rotatestart",t,this.transform)):this._activeTarget.dataset.resizetype?(this._handlerType="resize",this.isReadyToResize=!0,this.handleResizeStart(t),this.$emit("resizestart",t,this.transform)):(this._handlerType="drag",this.isReadyToDrag=!0,this.draggable&&this.$emit("dragstart",t,this.transform))},handleMouseMove(t){this.handleDefaultEvent(t);let{clientX:e,clientY:a}=t.touches?t.touches[0]:t;this.isReadyToDrag=!1,this.isReadyToResize=!1,this.isReadyToRotate=!1,this._deltaX=e-this._lastX,this._deltaY=a-this._lastY,this._lastX=e,this._lastY=a,"resize"===this._handlerType?(this.isResizing=!0,this.handleResizeMove(t),this.$emit("resize",t,this.transform)):"drag"===this._handlerType&&this.draggable?(this.isDragging=!0,this.doMove(t),this.$emit("drag",t,this.transform)):"rotate"===this._handlerType&&(this.isRotating=!0,this.handleRotateMove(t),this.$emit("rotate",t,this.transform)),this.emitChange()},doMove(){let[t,e]=this.grid,a=this._deltaX/this.zoom,s=this._deltaY/this.zoom,i=this.localeTransform.x=Math.round(this.localeTransform.x+a),r=this.localeTransform.y=Math.round(this.localeTransform.y+s);this.axis.includes("x")&&(i>this.transform.x?this.transform.x=this.restrictToLeftOfParent(i-i%t):i<this.transform.x&&(this.transform.x=this.restrictToLeftOfParent(i-(i%t-t)))),this.axis.includes("y")&&(r>this.transform.y?this.transform.y=this.restrictToTopOfParent(r-r%e):r<this.transform.y&&(this.transform.y=this.restrictToTopOfParent(r-(r%e-e))))},restrictToLeftOfParent(t){return this.parent?(t=Math.max(this.bounday.minLeft,t),t=Math.min(this.bounday.maxLeft,t),t):t},restrictToTopOfParent(t){return this.parent?(t=Math.max(this.bounday.minTop,t),t=Math.min(this.bounday.maxTop,t),t):t},restrictHeight(t,e){return!this.parent||this.transform.rotation>0?t:["bl","bm","br"].includes(e)?Math.min(this.bounday.maxBottomHeight,t):["tl","tm","tr"].includes(e)?Math.min(this.bounday.maxTopHeight,t):t},restrictWidth(t,e){return!this.parent||this.transform.rotation>0?t:["tl","l","bl"].includes(e)?Math.min(this.bounday.maxLeftWidth,t):["tr","r","br"].includes(e)?Math.min(this.bounday.maxRightWidth,t):t},handleMouseUp(t){this.handleDefaultEvent(t),document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1);let e={drag:"draggable",resize:"resizable",rotate:"rotatable"};this.isInitialRatio=this.isDragging=this.isResizing=this.isRotating=!1,this.isReadyToDrag=this.isReadyToResize=this.isReadyToRotate=!1,this[e[this._handlerType]]&&this.$emit(this._handlerType+"end",t,this.transform)},handleResizeStart(t){let e,a=this._resizeHandler,s=this.transform,i=f(s,this.zoom),r=i[n[a]],o=i[l[a]],{clientX:u,clientY:g}=t.touches?t.touches[0]:t,_=i[h[a]],b=u-_.x,y=g-_.y,v=u-o.x-b,w=g-o.y-y,x=s.width,k=s.height;e=p[a]?m(Math.atan2(x,d[a]?k/2:k)):m(Math.atan2(k,c[a]?x/2:x));let M=m(Math.atan2(w,v));this._resizeOpt={matrix:i,rect:s,type:a,opposite:r,opp2:o,pressAngle:e,startAngle:M,offsetX:b,offsetY:y}},handleResizeMove(t){let{clientX:e,clientY:a}=t.touches?t.touches[0]:t,{opposite:s,opp2:i,type:r,pressAngle:o,startAngle:h,offsetX:l,offsetY:p}=this._resizeOpt,u=e-i.x-l,m=a-i.y-p,_=Math.hypot(m,u),b=t.shiftKey||this.acceptRatio,[y,v]=this.grid;!this.isInitialRatio&&b&&(this.currentRatio=this.transform.width/this.transform.height,this.isInitialRatio=!0),b||(this.isInitialRatio=!1);let{w:w,h:x}=g({type:r,dis:_,x:u,y:m,startAngle:h,pressAngle:o}),k={...this.localeTransform};this.isInitialRatio&&(d[r]?x=w/this.currentRatio:w=x*this.currentRatio),w/=this.zoom,x/=this.zoom,w=Math.min(Math.max(Math.round(w),this.minWidth),this.maxWidth),x=Math.min(Math.max(Math.round(x),this.minHeight),this.maxHeight),d[r]&&!b?k.width=w:(c[r]&&!b||(k.width=w),k.height=x);let M=this._resizeHandler;k.width%y>0&&(k.width>this.localeTransform.width?k.width=k.width-k.width%y:k.width=k.width-(k.width%y-y)),k.height%v>0&&(k.height>this.localeTransform.height?k.height=k.height-k.height%v:k.height=k.height-(k.height%v-v)),k.height=this.restrictHeight(k.height,M),k.width=this.restrictWidth(k.width,M);let z=f(k,this.zoom),T=z[n[r]],R=-(T.x-s.x)/this.zoom,C=-(T.y-s.y)/this.zoom;k.x=Math.round(k.x+R),k.y=Math.round(k.y+C),this.transform=k},handleRotateStart(t){let{clientX:e,clientY:a}=t.touches?t.touches[0]:t,s=this.$refs.wrapper.getBoundingClientRect(),i=s.left+s.width/2,r=s.top+s.height/2,o=180/Math.PI*Math.atan2(a-r,e-i),n=this.transform.rotation;this._rotateOpt={cx:i,cy:r,startAngle:o,rotation:n}},handleRotateMove(t){let{cx:e,cy:a,startAngle:s,rotation:i}=this._rotateOpt,{clientX:r,clientY:o}=t.touches?t.touches[0]:t,n=r-e,h=o-a,l=180/Math.PI*Math.atan2(h,n),d=l-s,c=i+d;c%=360,c=c<0?c+360:c,c=this.roundRotate(c),this.transform.rotation=Math.floor(c)},roundRotate(t){const e=5;return t>360-e||t<0+e?0:t>90-e&&t<90+e?90:t>180-e&&t<180+e?180:t>270-e&&t<270+e?270:t},getClassNames(){const t=["yoyoo-ddr"];return this.active&&t.push("active"),this.isDragging&&t.push("ddr-dragging"),this.isResizing&&t.push("ddr-resizing"),this.isRotating&&t.push("ddr-rotating"),this.isReadyToDrag&&t.push("ddr-ready-drag"),this.isReadyToResize&&t.push("ddr-ready-resize"),this.isReadyToRotate&&t.push("ddr-ready-rotate"),t}},render(){const t=arguments[0];return t("div",{ref:"wrapper",style:this.style,class:this.getClassNames(),on:{touchstart:this.handleMouseDown,mousedown:this.handleMouseDown}},[this.renderContent?this.renderContent(this):this.$slots.default,this.resizable&&t("div",{class:"resize-handler-wrapper"},[this.resizeHandler.map((e=>t("span",{attrs:{"data-resizetype":e},key:e,style:this.getNewHandler(e),class:`resize-handler ${e}`})))]),this.rotatable&&t("span",{style:this.rotateHandler,attrs:{"data-type":"rotate"},class:"rotate-handler"})])}},k=x,M=(a(52046),a(1001)),z=(0,M.Z)(k,v,w,!1,null,null,null),T=z.exports},71533:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),r=a(23645),o=a.n(r),n=o()(i());n.push([t.id,".yoyoo-ddr{position:absolute}.yoyoo-ddr .resize-handler.tm{left:50%}.yoyoo-ddr .resize-handler.r{top:50%}.yoyoo-ddr .resize-handler.bm{left:50%}.yoyoo-ddr .resize-handler.l{top:50%;cursor:pointer}.yoyoo-ddr .resize-handler,.yoyoo-ddr .rotate-handler{display:none;position:absolute;border:1px solid #607d8b;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%}.yoyoo-ddr .rotate-handler{left:50%;cursor:crosshair}.yoyoo-ddr.active{border:1px dashed #607d8b}.yoyoo-ddr.active>.resize-handler-wrapper>.resize-handler,.yoyoo-ddr.active>.rotate-handler{display:inline-block}.yoyoo-ddr .bl,.yoyoo-ddr .br,.yoyoo-ddr .tl,.yoyoo-ddr .tr{background:#607d8b}",""]),e["default"]=n},55939:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),r=a(23645),o=a.n(r),n=o()(i());n.push([t.id,"._cropImage[data-v-08c9c9f2]{margin:0;background:#fff;padding:calc(var(--spacing)/1);border-radius:6px;height:auto}._sidebyside[data-v-08c9c9f2]{display:flex;flex-flow:row wrap;align-items:flex-start;gap:calc(var(--spacing)*1)}._sidebyside ._leftBtns[data-v-08c9c9f2]{flex:0 1 250px}._sidebyside ._cropWindow[data-v-08c9c9f2]{flex:1 1 250px}._cropWindow[data-v-08c9c9f2]{width:100%;overflow:visible}._canvasContainer[data-v-08c9c9f2],._cropWindow[data-v-08c9c9f2]{position:relative}._canvasContainer canvas[data-v-08c9c9f2]{max-width:100%}._cropFrame[data-v-08c9c9f2]{cursor:grab}._cropFrame.ddr-dragging[data-v-08c9c9f2]{cursor:-moz-grabbing;cursor:dragging}._cropFrame[data-v-08c9c9f2]  .bl,._cropFrame[data-v-08c9c9f2]  .br,._cropFrame[data-v-08c9c9f2]  .tl,._cropFrame[data-v-08c9c9f2]  .tr{background:var(--c-orange)}._canvas[data-v-08c9c9f2],._previewCanvas[data-v-08c9c9f2]{width:100%;margin:0 auto;display:block}._previewCanvas[data-v-08c9c9f2]{max-width:100%;max-height:40vh;width:auto}._btnRow[data-v-08c9c9f2]{display:flex;flex-flow:column nowrap;gap:calc(var(--spacing)/8);margin-bottom:var(--spacing)}._values[data-v-08c9c9f2]{display:flex;flex-flow:row nowrap;gap:calc(var(--spacing)/2);align-items:center;width:100%;background:#fff}._values>*[data-v-08c9c9f2]{flex:1 1 0}._modalP[data-v-08c9c9f2]{position:relative}._mask[data-v-08c9c9f2]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;pointer-events:none}._mask ._maskContent[data-v-08c9c9f2]{position:absolute;box-shadow:0 0 0 max(100vh,100vw) rgba(0,0,0,.4)}",""]),e["default"]=n},52092:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),r=a(23645),o=a.n(r),n=o()(i());n.push([t.id,"._cont[data-v-17b4b184]{position:relative}._saveNotice[data-v-17b4b184]{position:absolute;inset:-2px;background:hsla(0,0%,100%,.95);display:flex;justify-content:center;align-items:center}",""]),e["default"]=n},73589:function(t,e,a){"use strict";a.r(e);var s=a(8081),i=a.n(s),r=a(23645),o=a.n(r),n=o()(i());n.push([t.id,".yoyoo-ddr{position:absolute}.yoyoo-ddr .resize-handler.tm{left:50%}.yoyoo-ddr .resize-handler.r{top:50%}.yoyoo-ddr .resize-handler.bm{left:50%}.yoyoo-ddr .resize-handler.l{top:50%;cursor:pointer}.yoyoo-ddr .resize-handler,.yoyoo-ddr .rotate-handler{display:none;position:absolute;border:1px solid #607d8b;background:#fff;box-sizing:border-box;border-radius:50%}.yoyoo-ddr .rotate-handler{left:50%;cursor:crosshair}.yoyoo-ddr.active{border:1px dashed #607d8b}.yoyoo-ddr.active>.resize-handler-wrapper>.resize-handler,.yoyoo-ddr.active>.rotate-handler{display:inline-block}.yoyoo-ddr .bl,.yoyoo-ddr .br,.yoyoo-ddr .tl,.yoyoo-ddr .tr{background:#607d8b}",""]),e["default"]=n},13382:function(t,e,a){var s=a(71533);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(31982).Z;i("9124acb2",s,!0,{sourceMap:!1,shadowMode:!1})},26253:function(t,e,a){var s=a(55939);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(31982).Z;i("0af37418",s,!0,{sourceMap:!1,shadowMode:!1})},96346:function(t,e,a){var s=a(52092);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(31982).Z;i("79f136bb",s,!0,{sourceMap:!1,shadowMode:!1})},52046:function(t,e,a){var s=a(73589);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var i=a(31982).Z;i("7060f4ae",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=979.js.map