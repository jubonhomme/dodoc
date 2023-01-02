(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[614],{6960:function(t,e,o){"use strict";o.d(e,{Z:function(){return V}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"_projectInfos",class:{"is--list":"list"===t.context,"is--tiny":"tiny"===t.context,"u-card":"list"===t.context,"is--linkToProject":"full"!==t.context,"is--mobileView":t.$root.is_mobile_view}},[o("div",{ref:"coverImage",staticClass:"_projectInfos--cover",class:{"is--fullscreen":t.is_fullscreen,"is--empty":!t.cover_thumb}},[t.cover_thumb?[o("img",{attrs:{src:t.cover_thumb}}),"full"===t.context?o("sl-button",{staticClass:"_fsButton u-buttonLink",attrs:{size:"small",variant:"neutral"},on:{click:t.toggleFs}},[o("sl-icon",{attrs:{name:t.is_fullscreen?"fullscreen-exit":"arrows-fullscreen"}})],1):t._e()]:o("div",{staticClass:"_noImage"}),"full"===t.context&&t.can_edit_project?o("CoverField",{staticClass:"_coverPicker",attrs:{cover:t.project.$cover,path:t.project.$path}}):t._e()],2),o("div",{staticClass:"_projectInfos--infos"},["invisible"===t.project.$status?o("sl-badge",{attrs:{variant:"neutral"}},[t._v(" "+t._s(t.$t("invisible"))+" ")]):t._e(),"tiny"!==t.context?o("AuthorField",{attrs:{label:"full"===t.context?t.$t("contributors"):"",authors_paths:t.project.$authors,path:t.project.$path,can_edit:t.can_edit_project,instructions:t.$t("project_author_instructions")}}):t._e(),"full"===t.context?o("br"):t._e(),o("TitleField",{staticClass:"_title",attrs:{field_name:"title",label:"full"===t.context?t.$t("title"):"",content:t.project.title,path:t.project.$path,required:!0,maxlength:40,tag:"full"===t.context?"h1":"tiny"!==t.context?"h2":"h3",can_edit:t.can_edit_project,instructions:t.$t("project_title_instructions")}}),"full"===t.context?o("br"):t._e(),"tiny"!==t.context?o("TitleField",{staticClass:"_description",attrs:{field_name:"description",label:"full"===t.context&&(t.project.description||t.can_edit_project)?t.$t("description"):"",content:t.project.description,path:t.project.$path,maxlength:280,can_edit:t.can_edit_project,instructions:t.$t("project_desc_instructions")}}):t._e()],1),o("transition",{attrs:{name:"fade"}},["full"===t.context?o("button",{directives:[{name:"show",rawName:"v-show",value:!t.$root.is_mobile_view,expression:"!$root.is_mobile_view"}],key:"show_meta-"+t.show_meta,staticClass:"u-buttonLink _showMeta",attrs:{type:"button"},on:{click:function(e){t.show_meta=!t.show_meta}}},[t.show_meta?[t._v(" "+t._s(t.$t("hide_meta"))+" ")]:[t._v(" "+t._s(t.$t("show_meta"))+" ")]],2):t._e()]),"full"===t.context?o("div",{staticClass:"_projectInfos--meta",class:{"is--hidden":!t.show_meta}},[o("CardMeta",{attrs:{project:t.project,can_edit:t.can_edit_project}}),o("CardStatus",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),o("CardKeywords",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),o("CardMachines",{attrs:{project:t.project,can_edit_project:t.can_edit_project}})],1):t._e(),"list"===t.context||"tiny"===t.context?o("div",{staticClass:"_projectInfos--open"},[o("router-link",{attrs:{to:{path:"/"+t.project.$path}}},[o("div",{staticClass:"_clickZone"}),"list"===t.context?o("div",{staticClass:"u-button u-button_red _openBtn"},[t._v(" "+t._s(t.$t("open"))+" "),o("sl-icon",{attrs:{name:"arrow-up-right"}})],1):t._e()])],1):t._e()],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ProjectCard",[o("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("informations"))+" ")]),o("DateField",{attrs:{title:"date_created",date:t.project.$date_created}}),o("br"),o("DateField",{attrs:{title:"date_modified",date:t.project.$date_modified}}),o("br"),o("DLabel",{attrs:{str:t.$t("license"),instructions:t.$t("licence_instructions")}}),o("div",{},[o("RadioField",{attrs:{field_name:"license",content:t.project.license,path:t.project.$path,can_edit:t.can_edit,options:t.license_options}})],1),o("br"),o("div",{},[t.can_edit?o("button",{staticClass:"u-buttonLink",attrs:{type:"button"},on:{click:function(e){t.show_confirm_delete=!t.show_confirm_delete}}},[t._v(" "+t._s(t.$t("remove_project"))+" ")]):t._e(),o("br"),o("br"),t.show_confirm_delete?o("button",{staticClass:"u-button u-button_red",attrs:{type:"button"},on:{click:t.removeProject}},[t._v(" "+t._s(t.$t("confirm_removal"))+" ")]):t._e()])],1)},i=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("sl-card",{staticClass:"_projectCard u-card"},[t.$slots["header"]?o("header",{attrs:{slot:"header"},slot:"header"},[t._t("header")],2):t._e(),t._t("default")],2)},c=[],l={props:{},components:{},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},p=l,d=(o(2655),o(1001)),_=(0,d.Z)(p,n,c,!1,null,"38fce0f1",null),u=_.exports,f={props:{project:Object,can_edit:Boolean},components:{ProjectCard:u},data(){return{edit_mode:!1,show_confirm_delete:!1,license_options:[{key:"creativecommons_by_nc_sa",text:"creativecommons_by_nc_sa_explanations"},{key:"all_rights_reserved",text:"all_rights_reserved_explanations"},{key:"copyleft",text:"copyleft_explanations"},{key:"custom_license",text:"custom_license_explanations"}]}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{enableEditMode(){this.edit_mode=!0},async removeProject(){this.fetch_status="pending",this.fetch_error=null;try{const t=await this.$api.deleteItem({path:this.project.$path});this.response=t.data,this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},h=f,v=(0,d.Z)(h,s,i,!1,null,"76f0711f",null),m=v.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ProjectCard",[o("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("keywords"))+" ")]),o("div",{},[o("TagsField",{attrs:{field_name:"keywords",content:t.project.keywords,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},b=[],w={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},g=w,x=(0,d.Z)(g,j,b,!1,null,"733fe7a8",null),$=x.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ProjectCard",[o("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("machines_and_materials"))+" ")]),o("div",{},[o("TagsField",{attrs:{field_name:"materials",content:t.project.materials,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},k=[],C={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},I=C,P=(0,d.Z)(I,y,k,!1,null,"15b186fb",null),M=P.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ProjectCard",[o("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("visibility_progress"))+" "),o("sl-icon",{attrs:{name:"globe"}})],1),o("div",[t._v(" "+t._s(t.$t("visibility_progress_text"))+" ")]),o("br"),o("div",{},[o("DLabel",{attrs:{str:t.$t("status")}}),o("SelectField",{attrs:{field_name:"$status",content:t.project.$status,path:t.project.$path,can_edit:t.can_edit_project,options:t.status_options}}),o("br"),o("DLabel",{attrs:{str:t.$t("progress"),instructions:t.$t("progress_instr")}}),o("sl-progress-bar",{staticClass:"progress-bar-values",attrs:{value:"50"}},[t._v(" 50% ")])],1)])},F=[],L={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{status_options:[{key:"draft",text:this.$t("draft"),instruction:"draft_status_explanations"},{key:"finished",text:this.$t("finished"),instruction:"finished_status_explanations"},{key:"invisible",text:this.$t("invisible"),instruction:"invisible_status_explanations_projects"}],visible_value:this.project.status}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},T=L,Z=(0,d.Z)(T,D,F,!1,null,"558115a3",null),z=Z.exports,S={props:{project:Object,context:String,can_edit_project:Boolean},components:{CardMeta:m,CardKeywords:$,CardMachines:M,CardStatus:z},data(){return{new_title:this.project.title,fetch_status:null,fetch_error:null,response:null,show_meta:!0,is_fullscreen:!1}},created(){},mounted(){document.addEventListener("fullscreenchange",this.detectFullScreen)},beforeDestroy(){document.removeEventListener("fullscreenchange",this.detectFullScreen)},watch:{"$root.is_mobile_view"(){this.$root.is_mobile_view&&(this.show_meta=!0)}},computed:{cover_thumb(){return this.makeRelativeURLFromThumbs({$thumbs:this.project.$cover,$type:"image",$path:this.project.$path,resolution:1200})}},methods:{detectFullScreen(){document.fullscreenElement?this.is_fullscreen=!0:(this.is_fullscreen=!1,this.$nextTick((()=>{})))},toggleFs(){const t=this.$refs.coverImage;this.is_fullscreen?document.exitFullscreen():t.requestFullscreen().catch((t=>t))},async updateProject(){this.fetch_status="pending",this.fetch_error=null;try{this.response=await this.$api.updateMeta({path:this.project.$path,new_meta:{title:this.new_title}}),this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},E=S,B=(o(8022),(0,d.Z)(E,r,a,!1,null,"313959f0",null)),V=B.exports},2375:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return x}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"_projectsView"},[o("transition",{attrs:{name:"fade_fast",mode:"out-in"}},[t.projects?t.fetch_projects_error?o("div",{key:"err"},[t._v(" "+t._s(t.fetch_projects_error)+" ")]):o("div",{key:"projects"},[o("div",{},[o("router-link",{staticClass:"u-buttonLink",attrs:{to:"/"}},[o("sl-icon",{attrs:{name:"arrow-left-short"}}),t._v(t._s(t.$t("general_informations"))+" ")],1),o("br"),o("br"),t.connected_as?o("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:function(e){t.show_create_modal=!0}}},[o("svg",{staticStyle:{"enable-background":"new 0 0 168 168"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 168 168","xml:space":"preserve"}},[o("path",{staticStyle:{fill:"#fc4b60"},attrs:{d:"M24.6,24.4c-32.8,32.8-32.8,86.1,0,119c32.8,32.8,85.9,32.8,118.7,0c32.8-32.8,32.8-85.9,0-118.7\n\t\tC110.5-8.2,57.5-8.2,24.6,24.4z"}}),o("polygon",{staticStyle:{fill:"#ffbe32"},attrs:{points:"132.3,73.4 132.3,94.4 94.6,94.4 94.6,132.1 73.6,132.1 73.6,94.4 35.9,94.4 35.9,73.4 \n\t\t73.6,73.4 73.6,35.7 94.6,35.7 94.6,73.4 \t\t"}})]),t._v(" "+t._s(t.$t("create_a_project"))+" ")]):[t._v(" Vous devez "),o("button",{staticClass:"u-button u-button_bleumarine u-button_small",attrs:{type:"button"},on:{click:function(e){return t.$eventHub.$emit("toolbar.openAuthor")}}},[t._v(" vous inscrire ")]),t._v(" pour pouvoir créer ou rejoindre un projet. ")],t.show_create_modal?o("CreateProject",{on:{close:function(e){t.show_create_modal=!1},openNewProject:t.openNewProject}}):t._e()],2),(t.is_admin,t._e()),o("br"),t.connected_as?[o("div",{staticClass:"_myProjects"},[o("h3",[t._v(" "+t._s(t.$t("my_projects"))+" "),o("small",[t._v("("+t._s(t.my_projects.length)+")")])]),0===t.my_projects.length?o("div",{key:"no_content",staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_projects"))+" ")]):o("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},t._l(t.my_projects,(function(t){return o("ProjectPresentation",{key:t.$path,attrs:{project:t,context:"tiny"}})})),1)],1),o("br")]:t._e(),o("div",{},[o("h3",[t._v(" "+t._s(t.$t("finished_projects"))+" "),o("small",[t._v("("+t._s(t.finalized_projects.length)+")")])]),0===t.finalized_projects.length?o("div",{key:"no_content",staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_finalized_projects"))+" ")]):o("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},t._l(t.finalized_projects,(function(t){return o("ProjectPresentation",{key:t.$path,attrs:{project:t,context:"list"}})})),1)],1),o("br"),o("div",{},[o("h3",[t._v(" "+t._s(t.$t("projects_in_progress"))+" "),o("small",[t._v("("+t._s(t.draft_projects.length)+")")])]),o("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},[0===t.draft_projects.length?o("div",{key:"no_content",staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_draft_projects"))+" ")]):t._e(),t._l(t.draft_projects,(function(t){return o("ProjectPresentation",{key:t.$path,attrs:{project:t,context:"list"}})}))],2)],1)],2):o("div",{key:"loader",staticClass:"u-divCentered"},[o("LoaderSpinner")],1)])],1)},a=[],s=(o(7658),o(6960)),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("BaseModal2",{attrs:{title:t.$t("create_a_project")},on:{close:function(e){return t.$emit("close")}}},[o("form",{staticClass:"input-validation-required",on:{submit:function(e){return e.preventDefault(),t.createProject.apply(null,arguments)}}},[o("DLabel",{attrs:{str:t.$t("title")}}),o("TextInput",{attrs:{content:t.new_project_title,maxlength:40,required:!0},on:{"update:content":function(e){t.new_project_title=e},toggleValidity:function(e){return t.allow_save=e}}}),o("br"),o("div",{},[o("ToggleInput",{attrs:{content:t.new_project_is_visible,label:t.$t("invisible"),options:{true:t.$t("visible_status_explanations_projects"),false:t.$t("invisible_status_explanations_projects")}},on:{"update:content":function(e){t.new_project_is_visible=e}}})],1),o("br"),o("sl-button",{attrs:{slot:"footer",variant:"primary",loading:t.is_creating_project,type:"submit"},slot:"footer"},[t._v(" "+t._s(t.$t("create_and_open"))+" ")]),t.error_msg?[o("br"),o("br"),o("div",{staticClass:"u-errorMsg",domProps:{textContent:t._s(t.error_msg)}})]:t._e()],2)])},n=[],c={props:{},components:{},data(){return{new_project_title:"",new_project_is_visible:!0,is_creating_project:!1,allow_save:!1,error_msg:""}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async createProject(){this.is_creating_project=!0;try{const t=await this.$api.createFolder({path:"/projects",additional_meta:{title:this.new_project_title,requested_slug:this.new_project_title,status:"draft",license:"CC",$status:!0===this.new_project_is_visible?"draft":"invisible",$authors:[this.$api.tokenpath.token_path]}});setTimeout((()=>{this.$emit("openNewProject",t)}),50)}catch(t){this.error_msg="Error: "+t.message,setTimeout((()=>{this.error_msg=""}),5e3),this.is_creating_project=!1}}}},l=c,p=o(1001),d=(0,p.Z)(l,i,n,!1,null,"36464ebf",null),_=d.exports,u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DLabel",{attrs:{str:"routine"}}),t.routine_is_started?[o("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.stopRoutine}},[t._v(" stop routine ")])]:[o("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.startRoutine}},[t._v(" start ")])]],2)},f=[],h={props:{},components:{},data(){return{routine_is_started:!1}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async startRoutine(){this.routine_is_started=!0;const t=await this.$api.createFolder({path:"projects",additional_meta:{title:"Z test project "+this.$api.socket.userID,$authors:["sarah"]}});await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{$authors:["louis","pauline"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`/projects/${t}`,new_meta:{title:"Nouveau titre "+this.$api.socket.userID}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plop"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plip"]}}),await new Promise((t=>setTimeout(t,500))),await this.$api.deleteItem({path:`projects/${t}`}),await new Promise((t=>setTimeout(t,250))),this.routine_is_started&&this.startRoutine()},async stopRoutine(){this.routine_is_started=!1}}},v=h,m=(o(7215),(0,p.Z)(v,u,f,!1,null,"675e8e12",null)),j=m.exports,b={props:{},components:{ProjectPresentation:s.Z,CreateProject:_,ProjectsTester:j},data(){return{path:"projects",projects:[],fetch_projects_error:null,show_create_modal:!1}},created(){},async mounted(){this.projects=await this.$api.getFolders({path:this.path}).catch((t=>{this.fetch_project_error=t.response,this.is_loading=!1})),this.$api.join({room:this.path})},beforeDestroy(){this.$api.leave({room:this.path})},watch:{},computed:{sorted_projects(){let t=this.projects.slice();return t=t.filter((t=>this.canLoggedinSeeProject({project:t}))),t.sort(((t,e)=>+new Date(e.$date_created)-+new Date(t.$date_created)))},finalized_projects(){return this.sorted_projects.filter((t=>"finished"===t.$status))},draft_projects(){return this.sorted_projects.filter((t=>"finised"!==t.$status&&"invisible"!==t.$status))},my_projects(){return this.sorted_projects.filter((t=>Array.isArray(t.$authors)&&t.$authors.includes(this.connected_as.$path)))}},methods:{openNewProject(t){this.show_create_modal=!1,this.$router.push(`/projects/${t}`)}}},w=b,g=(o(5278),(0,p.Z)(w,r,a,!1,null,"2f03a874",null)),x=g.exports},3355:function(t,e,o){"use strict";o.r(e);var r=o(8081),a=o.n(r),s=o(3645),i=o.n(s),n=i()(a());n.push([t.id,"._topLabel[data-v-675e8e12]{text-align:left}",""]),e["default"]=n},3552:function(t,e,o){"use strict";o.r(e);var r=o(8081),a=o.n(r),s=o(3645),i=o.n(s),n=i()(a());n.push([t.id,"._projectCard[data-v-38fce0f1]{border:0;border-radius:0;box-shadow:none}",""]),e["default"]=n},4147:function(t,e,o){"use strict";o.r(e);var r=o(8081),a=o.n(r),s=o(3645),i=o.n(s),n=i()(a());n.push([t.id,"._project[data-v-313959f0],._projectInfos[data-v-313959f0]{position:relative}._projectInfos[data-v-313959f0]{display:flex;flex-flow:row nowrap;align-items:stretch;margin:0 auto;overflow:hidden;background:#fff;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos.is--linkToProject[data-v-313959f0]:hover{transform:translateY(-4px);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._projectInfos.is--list[data-v-313959f0],._projectInfos.is--tiny[data-v-313959f0]{border-bottom:2px solid #b9b9b9;box-shadow:0 1px 4px rgba(0,0,0,.1);border-radius:4px}._projectInfos.is--list ._description[data-v-313959f0],._projectInfos.is--list ._title[data-v-313959f0],._projectInfos.is--tiny ._description[data-v-313959f0],._projectInfos.is--tiny ._title[data-v-313959f0]{font-size:90%}._projectInfos.is--list[data-v-313959f0]{display:block}._projectInfos.is--tiny[data-v-313959f0]{flex-flow:row nowrap}._projectInfos.is--tiny ._projectInfos--open[data-v-313959f0]{position:absolute;inset:0}._projectInfos.is--mobileView[data-v-313959f0]{flex-flow:row wrap}._projectInfos>*[data-v-313959f0]{flex:10 1 320px;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos>._projectInfos--meta[data-v-313959f0]{flex:1 0 260px}._projectInfos>._projectInfos--meta.is--hidden[data-v-313959f0]{flex:0 0 0;opacity:0}._projectInfos.is--mobileView ._projectInfos--meta[data-v-313959f0]{flex:0 0 100%}._projectInfos--infos[data-v-313959f0]{display:flex;flex-flow:column nowrap;place-content:center;gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/1);transition:all .4s}._projectInfos--infos>*[data-v-313959f0]{max-width:66ch}._imageSelect[data-v-313959f0]{background:#fff;position:relative}._projectInfos--cover[data-v-313959f0]{position:relative;overflow:hidden;aspect-ratio:1/1;--color1:var(--c-gris);--color2:var(--c-gris_clair)}._projectInfos--cover.is--empty[data-v-313959f0]{background:radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent),radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent) 15px 15px,linear-gradient(var(--color2) 1.2px,transparent 1.2px) 0 -.6px,linear-gradient(90deg,var(--color2) 1.2px,var(--color1) 1.2px) -.6px 0;background-size:30px 30px,30px 30px,15px 15px,15px 15px}._projectInfos--cover img[data-v-313959f0]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}._projectInfos--cover.is--fullscreen img[data-v-313959f0]{-o-object-fit:contain;object-fit:contain}._projectInfos--cover[data-v-313959f0]  ._noImage{position:absolute;z-index:-1;width:100%;height:100%;background-color:var(--c-gris_fonce)}._projectInfos--cover[data-v-313959f0]  ._fsButton{position:absolute;bottom:0;margin:calc(var(--spacing)/1)}._projectInfos--meta[data-v-313959f0]{display:flex;flex-flow:column nowrap;font-size:90%;overflow-x:hidden;overflow-y:auto;background:var(--c-gris_clair);gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/2) calc(var(--spacing)/2);max-height:calc(50vw - 130px)}._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar{height:18px;width:18px;background-color:transparent}._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar-thumb,._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar-track{border:6px solid hsla(0,0%,100%,0);border-radius:24px;background-clip:padding-box;-webkit-transition:all .4s;transition:all .4s}._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar-track{background-color:transparent}._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar-thumb{background-color:var(--c-noir)}._projectInfos--meta[data-v-313959f0]::-webkit-scrollbar-thumb:hover{background-color:var(--c-gris);border:6px solid hsla(0,0%,100%,0)}.is--mobileView ._projectInfos--meta[data-v-313959f0]{flex-flow:row nowrap;max-height:none;overflow-x:auto;overflow-y:hidden}._projectInfos--meta>*[data-v-313959f0]{flex:1 0 auto;min-width:220px;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.2);border-radius:8px}.is--mobileView ._projectInfos--meta>*[data-v-313959f0]{flex:1 0 220px}._projectInfos--open[data-v-313959f0]{display:flex;justify-content:center;margin:calc(var(--spacing)*1)}._projectInfos--open ._clickZone[data-v-313959f0]{position:absolute;top:0;left:0;width:100%;height:100%}._projectInfos--open ._openBtn[data-v-313959f0]{text-decoration:underline;position:relative;transition:all .25s cubic-bezier(.19,1,.22,1)}._projectInfos--open ._openBtn[data-v-313959f0]:focus,._projectInfos--open ._openBtn[data-v-313959f0]:hover{transform:translateY(-4px) rotate(-2deg);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._coverPicker[data-v-313959f0]{bottom:0;padding:calc(var(--spacing)/1)}._coverPicker[data-v-313959f0],._showMeta[data-v-313959f0]{position:absolute;right:0}._showMeta[data-v-313959f0]{top:0;z-index:100;background:#fff;margin:calc(var(--spacing)/4)}",""]),e["default"]=n},7491:function(t,e,o){"use strict";o.r(e);var r=o(8081),a=o.n(r),s=o(3645),i=o.n(s),n=i()(a());n.push([t.id,"._projectsView[data-v-2f03a874]{padding:calc(var(--spacing)*2)}._projectsView>*[data-v-2f03a874]{margin-bottom:var(--spacing)}._projectsList[data-v-2f03a874]{display:grid;grid-auto-rows:max-content;grid-gap:calc(var(--spacing)/1);align-items:flex-start;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));margin-top:calc(var(--spacing)/4)}._projectsList>*[data-v-2f03a874]{box-shadow:0 1px 4px rgba(0,0,0,.1);width:100%;cursor:pointer}._projectsList[data-v-2f03a874]  ._projectInfos{min-height:100%}._title[data-v-2f03a874]{text-align:center}._myProjects[data-v-2f03a874]{background:var(--c-bleumarine_clair);padding:calc(var(--spacing)/2) calc(var(--spacing)/2)}",""]),e["default"]=n},7215:function(t,e,o){var r=o(3355);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=o(1982).Z;a("ae852a16",r,!0,{sourceMap:!1,shadowMode:!1})},2655:function(t,e,o){var r=o(3552);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=o(1982).Z;a("4d002b02",r,!0,{sourceMap:!1,shadowMode:!1})},8022:function(t,e,o){var r=o(4147);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=o(1982).Z;a("38b923c8",r,!0,{sourceMap:!1,shadowMode:!1})},5278:function(t,e,o){var r=o(7491);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=o(1982).Z;a("49648123",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=ProjectsView.js.map