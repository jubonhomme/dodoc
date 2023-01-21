(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[614],{1090:function(t,e,s){"use strict";s.d(e,{Z:function(){return V}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"_projectInfos",class:{"is--list":"list"===t.context,"is--tiny":"tiny"===t.context,"u-card":"list"===t.context,"is--linkToProject":"full"!==t.context,"is--mobileView":t.$root.is_mobile_view}},[s("div",{staticClass:"_projectInfos--cover",class:{"is--fullscreen":t.is_fullscreen}},[s("div",{ref:"coverImage",staticClass:"_projectInfos--cover--content",class:{"is--empty":!t.cover_thumb}},[t.cover_thumb?[s("img",{attrs:{src:t.cover_thumb}}),"full"===t.context?s("sl-button",{staticClass:"_fsButton u-buttonLink",attrs:{size:"small",variant:"neutral"},on:{click:t.toggleFs}},[s("sl-icon",{attrs:{name:t.is_fullscreen?"fullscreen-exit":"arrows-fullscreen"}})],1):t._e()]:s("div",{staticClass:"_noImage"}),"full"===t.context&&t.can_edit_project?s("CoverField",{staticClass:"_coverPicker",attrs:{cover:t.project.$cover,path:t.project.$path}}):t._e()],2)]),s("div",{staticClass:"_projectInfos--infos"},["invisible"===t.project.$status?s("sl-badge",{attrs:{variant:"neutral"}},[t._v(" "+t._s(t.$t("invisible"))+" ")]):t._e(),"tiny"!==t.context&&"list"!==t.context?s("AuthorField",{attrs:{label:"full"===t.context?t.$t("contributors"):"",authors_paths:t.project.$authors,path:t.project.$path,can_edit:t.can_edit_project,instructions:t.$t("project_author_instructions")}}):t._e(),s("TitleField",{staticClass:"_title",attrs:{field_name:"title",label:"full"===t.context?t.$t("title"):"",content:t.project.title,path:t.project.$path,required:!0,maxlength:40,tag:"full"===t.context?"h1":"h3",can_edit:t.can_edit_project,instructions:t.$t("project_title_instructions")}}),"list"===t.context?[t.project.description?s("button",{staticClass:"u-buttonLink _showDescription",attrs:{type:"button"},domProps:{innerHTML:t._s(t.show_description?t.$t("hide_description"):t.$t("show_description"))},on:{click:function(e){t.show_description=!t.show_description}}}):s("small",{staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_description"))+" ")])]:t._e(),"tiny"!==t.context&&t.show_description?s("TitleField",{staticClass:"_description",attrs:{field_name:"description",label:"full"===t.context&&(t.project.description||t.can_edit_project)?t.$t("description"):"",content:t.project.description,path:t.project.$path,maxlength:280,can_edit:t.can_edit_project,instructions:t.$t("project_desc_instructions")}}):t._e()],2),s("transition",{attrs:{name:"fade"}},["full"===t.context?s("button",{directives:[{name:"show",rawName:"v-show",value:!t.$root.is_mobile_view,expression:"!$root.is_mobile_view"}],key:"show_meta-"+t.show_meta,staticClass:"u-buttonLink _showMeta",attrs:{type:"button"},on:{click:function(e){t.show_meta=!t.show_meta}}},[t.show_meta?[t._v(" "+t._s(t.$t("hide_meta"))+" ")]:[t._v(" "+t._s(t.$t("show_meta"))+" ")]],2):t._e()]),"full"===t.context?s("div",{staticClass:"_projectInfos--meta",class:{"is--hidden":!t.show_meta}},[s("CardMeta",{attrs:{project:t.project,can_edit:t.can_edit_project}}),s("CardStatus",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),s("CardKeywords",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),s("CardMachines",{attrs:{project:t.project,can_edit_project:t.can_edit_project}})],1):t._e(),"list"===t.context||"tiny"===t.context?s("div",{staticClass:"_projectInfos--open"},[s("router-link",{attrs:{to:{path:"/"+t.project.$path}}},[s("div",{staticClass:"_clickZone"})])],1):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ProjectCard",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("informations"))+" ")]),s("DateField",{attrs:{title:"date_created",date:t.project.$date_created}}),s("br"),s("DateField",{attrs:{title:"date_modified",date:t.project.$date_modified}}),s("br"),s("DLabel",{attrs:{str:t.$t("license"),instructions:t.can_edit?t.$t("licence_instructions"):""}}),s("div",{},[s("RadioField",{attrs:{field_name:"license",content:t.project.license,path:t.project.$path,can_edit:t.can_edit,options:t.license_options}})],1),s("br"),s("div",{},[t.can_edit?s("RemoveMenu",{attrs:{remove_text:t.$t("remove_project")},on:{remove:t.removeProject}}):t._e()],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("sl-card",{staticClass:"_projectCard u-card"},[t.$slots["header"]?s("header",{attrs:{slot:"header"},slot:"header"},[t._t("header")],2):t._e(),t._t("default")],2)},n=[],l={props:{},components:{},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},p=l,d=(s(2655),s(1001)),_=(0,d.Z)(p,c,n,!1,null,"38fce0f1",null),u=_.exports,h={props:{project:Object,can_edit:Boolean},components:{ProjectCard:u},data(){return{edit_mode:!1,license_options:[{key:"creativecommons_by_nc_sa",text:"creativecommons_by_nc_sa_explanations"},{key:"all_rights_reserved",text:"all_rights_reserved_explanations"},{key:"copyleft",text:"copyleft_explanations"},{key:"custom_license",text:"custom_license_explanations"}]}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{enableEditMode(){this.edit_mode=!0},async removeProject(){this.fetch_status="pending",this.fetch_error=null;try{const t=await this.$api.deleteItem({path:this.project.$path});this.response=t.data,this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},f=h,v=(0,d.Z)(f,r,i,!1,null,"0e8f14d5",null),j=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ProjectCard",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("keywords"))+" ")]),s("div",{},[s("TagsField",{attrs:{field_name:"keywords",content:t.project.keywords,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},b=[],g={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},w=g,x=(0,d.Z)(w,m,b,!1,null,"733fe7a8",null),$=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ProjectCard",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("machines_and_materials"))+" ")]),s("div",{},[s("TagsField",{attrs:{field_name:"materials",content:t.project.materials,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},k=[],C={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},I=C,P=(0,d.Z)(I,y,k,!1,null,"15b186fb",null),M=P.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ProjectCard",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("visibility"))+" "),s("sl-icon",{attrs:{name:"globe"}})],1),s("div",[t._v(" "+t._s(t.$t("visibility_text"))+" ")]),s("br"),s("div",{},[s("DLabel",{attrs:{str:t.$t("status")}}),s("SelectField",{attrs:{field_name:"$status",content:t.project.$status,path:t.project.$path,can_edit:t.can_edit_project,options:t.status_options}})],1)])},D=[],F={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{status_options:[{key:"draft",text:this.$t("draft"),instruction:this.$t("draft_status_explanations")},{key:"finished",text:this.$t("finished"),instruction:this.$t("finished_status_explanations")},{key:"invisible",text:this.$t("invisible"),instruction:this.$t("invisible_status_explanations_projects")}],visible_value:this.project.status}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},T=F,Z=(0,d.Z)(T,L,D,!1,null,"5c02d098",null),z=Z.exports,S={props:{project:Object,context:String,can_edit_project:Boolean},components:{CardMeta:j,CardKeywords:$,CardMachines:M,CardStatus:z},data(){return{new_title:this.project.title,fetch_status:null,fetch_error:null,response:null,show_meta:!0,show_description:!0,is_fullscreen:!1}},created(){"list"===this.context&&(this.show_description=!1)},mounted(){document.addEventListener("fullscreenchange",this.detectFullScreen)},beforeDestroy(){document.removeEventListener("fullscreenchange",this.detectFullScreen)},watch:{"$root.is_mobile_view"(){this.$root.is_mobile_view&&(this.show_meta=!0)}},computed:{cover_thumb(){return this.makeRelativeURLFromThumbs({$thumbs:this.project.$cover,$type:"image",$path:this.project.$path,resolution:"full"===this.context?2e3:640})}},methods:{detectFullScreen(){document.fullscreenElement?this.is_fullscreen=!0:(this.is_fullscreen=!1,this.$nextTick((()=>{})))},toggleFs(){const t=this.$refs.coverImage;this.is_fullscreen?document.exitFullscreen():t.requestFullscreen().catch((t=>t))},async updateProject(){this.fetch_status="pending",this.fetch_error=null;try{this.response=await this.$api.updateMeta({path:this.project.$path,new_meta:{title:this.new_title}}),this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},E=S,B=(s(5351),(0,d.Z)(E,a,o,!1,null,"1536c2c6",null)),V=B.exports},5298:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return P}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"_projectsView"},[s("div",{staticClass:"_u-sidepadding"},[s("div",{},[s("router-link",{staticClass:"u-buttonLink",attrs:{to:"/"}},[s("sl-icon",{attrs:{name:"arrow-left-short"}}),t._v(" "+t._s(t.$root.app_infos.name_of_instance)+" ")],1)],1),s("br"),s("div",{staticClass:"_title"},[s("h1",[t._v(t._s(t.$t("list_of_projects")))])])]),s("transition",{attrs:{name:"fade_fast",mode:"out-in"}},[t.projects?t.fetch_projects_error?s("div",{key:"err",staticClass:"_u-sidepadding"},[t._v(" "+t._s(t.fetch_projects_error)+" ")]):s("div",{key:"projects"},[s("div",{staticClass:"_u-sidepadding"},[t.connected_as?t._e():[t._v(" Vous devez "),s("button",{staticClass:"u-button u-button_bleumarine u-button_small",attrs:{type:"button"},on:{click:function(e){return t.$eventHub.$emit("toolbar.openAuthor")}}},[t._v(" vous inscrire ")]),t._v(" pour pouvoir créer ou rejoindre un projet. ")],t.show_create_modal?s("CreateProject",{on:{close:function(e){t.show_create_modal=!1},openNewProject:t.openNewProject}}):t._e(),(t.is_admin,t._e())],2),s("br"),t.connected_as?s("div",{staticClass:"_myProjects"},[s("div",{staticClass:"_u-sidepadding _projectsSection"},[s("div",{key:"label",staticClass:"_sectionLabel"},[s("sl-icon",{attrs:{name:"person-circle"}}),s("h3",[t._v(" "+t._s(t.$t("my_projects"))+"  "),s("small",[t._v("("+t._s(t.my_projects.length)+")")])]),s("div",[t.connected_as?s("button",{staticClass:"u-button u-button_red u-button_small",attrs:{type:"button"},on:{click:function(e){t.show_create_modal=!0}}},[s("svg",{staticStyle:{"enable-background":"new 0 0 168 168"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 168 168","xml:space":"preserve"}},[s("path",{staticStyle:{fill:"#fc4b60"},attrs:{d:"M24.6,24.4c-32.8,32.8-32.8,86.1,0,119c32.8,32.8,85.9,32.8,118.7,0c32.8-32.8,32.8-85.9,0-118.7\n\t\tC110.5-8.2,57.5-8.2,24.6,24.4z"}}),s("polygon",{staticStyle:{fill:"#ffbe32"},attrs:{points:"132.3,73.4 132.3,94.4 94.6,94.4 94.6,132.1 73.6,132.1 73.6,94.4 35.9,94.4 35.9,73.4 \n\t\t73.6,73.4 73.6,35.7 94.6,35.7 94.6,73.4 \t\t"}})]),t._v(" "+t._s(t.$t("create_a_project"))+" ")]):t._e()])],1),s("ProjectsList",{attrs:{projects:t.my_projects}})],1),s("br")]):t._e(),s("div",{staticClass:"_u-sidepadding _projectsSection _otherProjects"},[s("div",{key:"label",staticClass:"_sectionLabel"},[s("sl-icon",{attrs:{name:"star-fill"}}),s("h3",[t._v(" "+t._s(t.$t("finished_projects"))+"  "),s("small",[t._v("("+t._s(t.finalized_projects.length)+")")])])],1),s("ProjectsList",{attrs:{projects:t.finalized_projects}})],1),s("br"),s("div",{staticClass:"_u-sidepadding _projectsSection _otherProjects"},[s("div",{key:"label",staticClass:"_sectionLabel"},[s("sl-icon",{attrs:{name:"cone-striped"}}),s("h3",[t._v(" "+t._s(t.$t("projects_in_progress"))+"  "),s("small",[t._v("("+t._s(t.draft_projects.length)+")")])])],1),s("ProjectsList",{attrs:{projects:t.draft_projects}})],1),t.is_admin?[s("br"),s("div",{staticClass:"_u-sidepadding _projectsSection _invisibleProjects"},[s("div",{key:"label",staticClass:"_sectionLabel"},[s("sl-icon",{attrs:{name:"incognito"}}),s("h3",[t._v(" "+t._s(t.$t("invisible_nonauthor_projects"))+"  "),s("small",[t._v("("+t._s(t.invisible_nonauthor_projects.length)+")")])])],1),s("ProjectsList",{attrs:{projects:t.invisible_nonauthor_projects}})],1)]:t._e()],2):s("div",{key:"loader",staticClass:"u-divCentered _u-sidepadding"},[s("LoaderSpinner")],1)])],1)},o=[],r=(s(7658),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BaseModal2",{attrs:{title:t.$t("create_a_project")},on:{close:function(e){return t.$emit("close")}}},[s("form",{staticClass:"input-validation-required",on:{submit:function(e){return e.preventDefault(),t.createProject.apply(null,arguments)}}},[s("DLabel",{attrs:{str:t.$t("title")}}),s("TextInput",{attrs:{content:t.new_project_title,maxlength:40,required:!0},on:{"update:content":function(e){t.new_project_title=e},toggleValidity:function(e){return t.allow_save=e}}}),s("br"),s("div",{},[s("ToggleInput",{attrs:{content:t.new_project_is_invisible,label:t.$t("invisible"),options:{true:t.$t("invisible_status_explanations_projects"),false:t.$t("visible_status_explanations_projects")}},on:{"update:content":function(e){t.new_project_is_invisible=e}}})],1),s("br"),s("button",{staticClass:"u-button u-button_bleuvert",attrs:{slot:"footer",type:"submit",loading:t.is_creating_project},slot:"footer"},[t._v(" "+t._s(t.$t("create_and_open"))+" ")]),t.error_msg?[s("br"),s("br"),s("div",{staticClass:"u-errorMsg",domProps:{textContent:t._s(t.error_msg)}})]:t._e()],2)])}),i=[],c={props:{},components:{},data(){return{new_project_title:"",new_project_is_invisible:!1,is_creating_project:!1,allow_save:!1,error_msg:""}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async createProject(){this.is_creating_project=!0;try{const t=await this.$api.createFolder({path:"/projects",additional_meta:{title:this.new_project_title,requested_slug:this.new_project_title,status:"draft",license:"CC",$status:!0===this.new_project_is_invisible?"invisible":"draft",$authors:[this.$api.tokenpath.token_path]}});setTimeout((()=>{this.$emit("openNewProject",t)}),50)}catch(t){this.error_msg="Error: "+t.message,setTimeout((()=>{this.error_msg=""}),5e3),this.is_creating_project=!1}}}},n=c,l=s(1001),p=(0,l.Z)(n,r,i,!1,null,"60fb9478",null),d=p.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[0===t.projects.length?s("div",{key:"noprojects",staticClass:"u-instructions _projectsNotice"},[t._v(" "+t._s(t.$t("no_projects"))+" ")]):s("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:"",duration:700}},t._l(t.projects,(function(t){return s("ProjectPresentation",{key:t.$path,staticClass:"_project",attrs:{project:t,context:"list"}})})),1)],1)},u=[],h=s(1090),f={props:{projects:Array},components:{ProjectPresentation:h.Z},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},v=f,j=(s(9690),(0,l.Z)(v,_,u,!1,null,"18967745",null)),m=j.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("DLabel",{attrs:{str:"routine"}}),t.routine_is_started?[s("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.stopRoutine}},[t._v(" stop routine ")])]:[s("button",{staticClass:"u-button u-button_red u-button_big",attrs:{type:"button"},on:{click:t.startRoutine}},[t._v(" start ")])]],2)},g=[],w={props:{},components:{},data(){return{routine_is_started:!1}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async startRoutine(){this.routine_is_started=!0;const t=await this.$api.createFolder({path:"projects",additional_meta:{title:"Z test project "+this.$api.socket.userID,$authors:["sarah"]}});await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{$authors:["louis","pauline"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`/projects/${t}`,new_meta:{title:"Nouveau titre "+this.$api.socket.userID}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plop"]}}),await new Promise((t=>setTimeout(t,200))),await this.$api.updateMeta({path:`projects/${t}`,new_meta:{keywords:["plip"]}}),await new Promise((t=>setTimeout(t,500))),await this.$api.deleteItem({path:`projects/${t}`}),await new Promise((t=>setTimeout(t,250))),this.routine_is_started&&this.startRoutine()},async stopRoutine(){this.routine_is_started=!1}}},x=w,$=(s(7215),(0,l.Z)(x,b,g,!1,null,"675e8e12",null)),y=$.exports,k={props:{},components:{CreateProject:d,ProjectsTester:y,ProjectsList:m},data(){return{path:"projects",projects:[],fetch_projects_error:null,show_create_modal:!1}},created(){},async mounted(){this.projects=await this.$api.getFolders({path:this.path}).catch((t=>{this.fetch_project_error=t.response,this.is_loading=!1})),this.$api.join({room:this.path})},beforeDestroy(){this.$api.leave({room:this.path})},watch:{},computed:{sorted_projects(){let t=this.projects.slice();return t=t.filter((t=>this.canLoggedinSeeProject({project:t}))),t.sort(((t,e)=>+new Date(e.$date_created)-+new Date(t.$date_created)))},finalized_projects(){return this.sorted_projects.filter((t=>"finished"===t.$status))},draft_projects(){return this.sorted_projects.filter((t=>"finished"!==t.$status&&"invisible"!==t.$status))},my_projects(){return this.sorted_projects.filter((t=>Array.isArray(t.$authors)&&t.$authors.includes(this.connected_as.$path)))},invisible_nonauthor_projects(){return this.sorted_projects.filter((t=>"invisible"===t.$status&&(!Array.isArray(t.$authors)||!t.$authors.includes(this.connected_as.$path))))}},methods:{openNewProject(t){this.show_create_modal=!1,this.$router.push(`/projects/${t}`)}}},C=k,I=(s(823),(0,l.Z)(C,a,o,!1,null,"0f0fcca1",null)),P=I.exports},3355:function(t,e,s){"use strict";s.r(e);var a=s(8081),o=s.n(a),r=s(3645),i=s.n(r),c=i()(o());c.push([t.id,"._topLabel[data-v-675e8e12]{text-align:left}",""]),e["default"]=c},3552:function(t,e,s){"use strict";s.r(e);var a=s(8081),o=s.n(a),r=s(3645),i=s.n(r),c=i()(o());c.push([t.id,"._projectCard[data-v-38fce0f1]{border:0;border-radius:0;box-shadow:none}",""]),e["default"]=c},935:function(t,e,s){"use strict";s.r(e);var a=s(8081),o=s.n(a),r=s(3645),i=s.n(r),c=i()(o());c.push([t.id,"._project[data-v-1536c2c6],._projectInfos[data-v-1536c2c6]{position:relative}._projectInfos[data-v-1536c2c6]{display:flex;flex-flow:row nowrap;align-items:stretch;margin:0 auto;overflow:hidden;background:#fff;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos.is--linkToProject[data-v-1536c2c6]:hover{transform:translateY(-12px);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._projectInfos.is--list[data-v-1536c2c6],._projectInfos.is--tiny[data-v-1536c2c6]{box-shadow:0 1px 4px rgba(0,0,0,.2);border-radius:4px}._projectInfos.is--list ._description[data-v-1536c2c6],._projectInfos.is--list ._title[data-v-1536c2c6],._projectInfos.is--tiny ._description[data-v-1536c2c6],._projectInfos.is--tiny ._title[data-v-1536c2c6]{font-size:90%}._projectInfos.is--list[data-v-1536c2c6]{display:block}._projectInfos.is--mobileView[data-v-1536c2c6]{flex-flow:row wrap}._projectInfos>*[data-v-1536c2c6]{flex:10 1 320px;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos>._projectInfos--meta[data-v-1536c2c6]{flex:1 0 260px}._projectInfos>._projectInfos--meta.is--hidden[data-v-1536c2c6]{flex:0 0 0;opacity:0}._projectInfos.is--mobileView ._projectInfos--meta[data-v-1536c2c6]{flex:0 0 100%}._projectInfos--infos[data-v-1536c2c6]{display:flex;flex-flow:column nowrap;place-content:center;gap:calc(var(--spacing)/1);padding:calc(var(--spacing)/1);transition:all .4s}.is--list ._projectInfos--infos[data-v-1536c2c6],.is--tiny ._projectInfos--infos[data-v-1536c2c6]{gap:calc(var(--spacing)/2);order:0;padding-top:0;pointer-events:none}.is--list ._projectInfos--infos ._showDescription[data-v-1536c2c6],.is--tiny ._projectInfos--infos ._showDescription[data-v-1536c2c6]{pointer-events:auto}._projectInfos--infos>*[data-v-1536c2c6]{max-width:56ch}._imageSelect[data-v-1536c2c6]{background:#fff;position:relative}._projectInfos--cover[data-v-1536c2c6]{position:relative;aspect-ratio:1/1;width:40vh;height:40vh;flex:0 0 40vh}@supports not (aspect-ratio:1/1){._projectInfos--cover[data-v-1536c2c6]{width:500px;height:500px}}.is--list ._projectInfos--cover[data-v-1536c2c6]{width:100%;height:auto}.is--mobileView ._projectInfos--cover[data-v-1536c2c6]{flex:1 1 auto;max-height:40vh;max-width:40vh;height:auto}._projectInfos--cover ._projectInfos--cover--content[data-v-1536c2c6]{position:absolute;inset:0;margin:calc(var(--spacing)*1);overflow:hidden;border-radius:6px;--color1:var(--c-gris);--color2:var(--c-gris_clair)}._projectInfos--cover ._projectInfos--cover--content.is--empty[data-v-1536c2c6]{background:radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent),radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent) 15px 15px,linear-gradient(var(--color2) 1.2px,transparent 1.2px) 0 -.6px,linear-gradient(90deg,var(--color2) 1.2px,var(--color1) 1.2px) -.6px 0;background-size:30px 30px,30px 30px,15px 15px,15px 15px}._projectInfos--cover img[data-v-1536c2c6]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}._projectInfos--cover.is--fullscreen img[data-v-1536c2c6]{-o-object-fit:contain;object-fit:contain}._projectInfos--cover[data-v-1536c2c6]  ._noImage{position:absolute;z-index:-1;width:100%;height:100%;background-color:var(--c-gris_fonce)}._projectInfos--cover[data-v-1536c2c6]  ._fsButton{position:absolute;bottom:0;margin:calc(var(--spacing)/1)}._projectInfos--meta[data-v-1536c2c6]{display:flex;flex-flow:column nowrap;font-size:90%;overflow-x:hidden;overflow-y:auto;background:var(--c-gris_clair);gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/2) calc(var(--spacing)/2);height:40vh}._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar{height:18px;width:18px;background-color:transparent}._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar-thumb,._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar-track{border:6px solid hsla(0,0%,100%,0);border-radius:24px;background-clip:padding-box;-webkit-transition:all .4s;transition:all .4s}._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar-track{background-color:transparent}._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar-thumb{background-color:var(--c-noir)}._projectInfos--meta[data-v-1536c2c6]::-webkit-scrollbar-thumb:hover{background-color:var(--c-gris);border:6px solid hsla(0,0%,100%,0)}.is--mobileView ._projectInfos--meta[data-v-1536c2c6]{flex-flow:row nowrap;max-height:none;overflow-x:auto;overflow-y:hidden;height:auto}._projectInfos--meta>*[data-v-1536c2c6]{flex:0 0 auto;min-width:220px;background:#fff;box-shadow:0 1px 6px var(--c-gris);border-radius:8px}.is--mobileView ._projectInfos--meta>*[data-v-1536c2c6]{flex:1 0 220px}._projectInfos--open[data-v-1536c2c6]{display:flex;justify-content:center}._projectInfos--open ._clickZone[data-v-1536c2c6]{position:absolute;top:0;left:0;width:100%;height:100%}._projectInfos--open ._openBtn[data-v-1536c2c6]{text-decoration:underline;position:relative;margin:calc(var(--spacing)/2);transition:all .25s cubic-bezier(.19,1,.22,1)}._projectInfos--open ._openBtn[data-v-1536c2c6]:focus,._projectInfos--open ._openBtn[data-v-1536c2c6]:hover{transform:translateY(-4px) rotate(-2deg);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._coverPicker[data-v-1536c2c6]{bottom:0;padding:calc(var(--spacing)/1)}._coverPicker[data-v-1536c2c6],._showMeta[data-v-1536c2c6]{position:absolute;right:0}._showMeta[data-v-1536c2c6]{top:0;z-index:100;background:#fff;margin:calc(var(--spacing)/4)}._showDescription[data-v-1536c2c6]{position:relative;z-index:100;padding:0;text-align:left}",""]),e["default"]=c},3836:function(t,e,s){"use strict";s.r(e);var a=s(8081),o=s.n(a),r=s(3645),i=s.n(r),c=i()(o());c.push([t.id,"._projectsNotice[data-v-18967745]{width:100%;text-align:center}._projectsList[data-v-18967745]{display:grid;grid-auto-rows:max-content;grid-gap:calc(var(--spacing)/1);align-items:stretch;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}._projectsList>*[data-v-18967745]{margin:0}._project[data-v-18967745]{box-shadow:0 1px 4px rgba(0,0,0,.1);cursor:pointer}._project[data-v-18967745]  ._projectInfos{min-height:100%}",""]),e["default"]=c},7171:function(t,e,s){"use strict";s.r(e);var a=s(8081),o=s.n(a),r=s(3645),i=s.n(r),c=i()(o());c.push([t.id,"._projectsView[data-v-0f0fcca1]{padding:calc(var(--spacing)*2) 0}._projectsView>*[data-v-0f0fcca1]{margin-bottom:var(--spacing)}._otherProjects[data-v-0f0fcca1]{padding-top:calc(var(--spacing)/2)}._myProjects[data-v-0f0fcca1],._otherProjects[data-v-0f0fcca1]{padding-bottom:calc(var(--spacing)/2)}._myProjects[data-v-0f0fcca1]{background:var(--c-bleumarine_clair)}._u-sidepadding[data-v-0f0fcca1]{padding-left:calc(var(--spacing)*2);padding-right:calc(var(--spacing)*2)}._sectionLabel[data-v-0f0fcca1]{margin-left:calc(var(--spacing)*-2);width:calc(100% + var(--spacing)*4);height:100%;box-shadow:none;text-align:center;position:sticky;top:0;z-index:1000;display:flex;justify-content:center;align-items:center;gap:calc(var(--spacing)/1);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);-webkit-mask:linear-gradient(#000 55%,transparent);mask:linear-gradient(#000 55%,transparent);padding:calc(var(--spacing)*1) calc(var(--spacing)*2) calc(var(--spacing)*2);font-size:var(--sl-font-size-x-large)}._sectionLabel h3[data-v-0f0fcca1]{font-size:inherit;text-align:center}",""]),e["default"]=c},7215:function(t,e,s){var a=s(3355);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=s(1982).Z;o("ae852a16",a,!0,{sourceMap:!1,shadowMode:!1})},2655:function(t,e,s){var a=s(3552);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=s(1982).Z;o("4d002b02",a,!0,{sourceMap:!1,shadowMode:!1})},5351:function(t,e,s){var a=s(935);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=s(1982).Z;o("098cddd3",a,!0,{sourceMap:!1,shadowMode:!1})},9690:function(t,e,s){var a=s(3836);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=s(1982).Z;o("6337a35d",a,!0,{sourceMap:!1,shadowMode:!1})},823:function(t,e,s){var a=s(7171);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=s(1982).Z;o("0a67c358",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=ProjectsView.js.map