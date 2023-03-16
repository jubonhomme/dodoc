(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[119],{17708:function(t,e,a){"use strict";a.d(e,{Z:function(){return V}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"_projectInfos",class:{"is--list":"list"===t.context,"is--tiny":"tiny"===t.context,"u-card":"list"===t.context,"is--linkToProject":"full"!==t.context,"is--mobileView":t.$root.is_mobile_view}},[a("div",{staticClass:"_projectInfos--cover"},[a("div",{staticClass:"_projectInfos--cover--content",class:{"is--empty":!t.cover_thumb}},[t.cover_thumb?[a("img",{attrs:{src:t.cover_thumb}}),"full"===t.context?[a("FullscreenBtn",{staticClass:"u-floatingFsButton",attrs:{icon:"fullscreen",label:t.$t("fullscreen")},on:{click:function(e){t.show_cover_fullscreen=!0}}}),t.show_cover_fullscreen?a("FullscreenView",{attrs:{image_src:t.cover_thumb},on:{close:function(e){t.show_cover_fullscreen=!1}}}):t._e()]:t._e()]:a("div",{staticClass:"_noImage"}),"full"===t.context&&t.can_edit_project?a("CoverField",{staticClass:"_coverPicker",attrs:{cover:t.project.$cover,path:t.project.$path}}):t._e()],2)]),a("div",{staticClass:"_projectInfos--infos"},["invisible"===t.project.$status?a("sl-badge",{attrs:{variant:"neutral"}},[t._v(" "+t._s(t.$t("invisible"))+" ")]):t._e(),"tiny"!==t.context&&"list"!==t.context?a("AuthorField",{attrs:{label:"full"===t.context?t.$t("contributors"):"",authors_paths:t.project.$authors,path:t.project.$path,can_edit:t.can_edit_project,instructions:t.$t("project_author_instructions")}}):t._e(),a("TitleField",{staticClass:"_title",attrs:{field_name:"title",label:"full"===t.context?t.$t("title"):"",content:t.project.title,path:t.project.$path,required:!0,maxlength:40,tag:"full"===t.context?"h1":"h3",can_edit:t.can_edit_project,instructions:t.$t("project_title_instructions")}}),"list"===t.context?[t.project.description?a("button",{staticClass:"u-buttonLink _showDescription",attrs:{type:"button"},domProps:{innerHTML:t._s(t.show_description?t.$t("hide_description"):t.$t("show_description"))},on:{click:function(e){t.show_description=!t.show_description}}}):a("small",{staticClass:"u-instructions"},[t._v(" "+t._s(t.$t("no_description"))+" ")])]:t._e(),"tiny"!==t.context&&t.show_description?a("TitleField",{staticClass:"_description",attrs:{field_name:"description",label:"full"===t.context&&(t.project.description||t.can_edit_project)?t.$t("description"):"",content:t.project.description,path:t.project.$path,maxlength:280,can_edit:t.can_edit_project,instructions:t.$t("project_desc_instructions")}}):t._e()],2),a("transition",{attrs:{name:"fade"}},["full"===t.context?a("button",{directives:[{name:"show",rawName:"v-show",value:!t.$root.is_mobile_view,expression:"!$root.is_mobile_view"}],key:"show_meta-"+t.show_meta,staticClass:"u-buttonLink _showMeta",attrs:{type:"button"},on:{click:function(e){t.show_meta=!t.show_meta}}},[t.show_meta?[t._v(" "+t._s(t.$t("hide_meta"))+" ")]:[t._v(" "+t._s(t.$t("show_meta"))+" ")]],2):t._e()]),"full"===t.context?a("div",{staticClass:"_projectInfos--meta",class:{"is--hidden":!t.show_meta}},[a("CardMeta",{attrs:{project:t.project,can_edit:t.can_edit_project}}),a("CardStatus",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),a("CardKeywords",{attrs:{project:t.project,can_edit_project:t.can_edit_project}}),a("CardMachines",{attrs:{project:t.project,can_edit_project:t.can_edit_project}})],1):t._e(),"list"===t.context||"tiny"===t.context?a("div",{staticClass:"_projectInfos--open"},[a("router-link",{attrs:{to:{path:t.createURLFromPath(t.project.$path)}}},[a("div",{staticClass:"_clickZone"})])],1):t._e()],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ProjectCard",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("informations"))+" ")]),a("DateField",{attrs:{title:t.$t("date_created"),date:t.project.$date_created}}),a("br"),a("DateField",{attrs:{title:t.$t("date_modified"),date:t.project.$date_modified}}),a("br"),a("DLabel",{attrs:{str:t.$t("license"),instructions:t.can_edit?t.$t("licence_instructions"):""}}),a("div",{},[a("RadioField",{attrs:{field_name:"license",content:t.project.license,path:t.project.$path,can_edit:t.can_edit,options:t.license_options}})],1),a("br"),a("div",{},[t.can_edit?a("RemoveMenu",{attrs:{remove_text:t.$t("remove_project")},on:{remove:t.removeProject}}):t._e()],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("sl-card",{staticClass:"_projectCard u-card"},[t.$slots["header"]?a("header",{attrs:{slot:"header"},slot:"header"},[t._t("header")],2):t._e(),t._t("default")],2)},n=[],p={props:{},components:{},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},l=p,d=(a(52655),a(1001)),_=(0,d.Z)(l,c,n,!1,null,"38fce0f1",null),u=_.exports,h={props:{project:Object,can_edit:Boolean},components:{ProjectCard:u},data(){return{edit_mode:!1,license_options:[{key:"creativecommons_by_nc_sa",text:"creativecommons_by_nc_sa_explanations"},{key:"all_rights_reserved",text:"all_rights_reserved_explanations"},{key:"copyleft",text:"copyleft_explanations"},{key:"custom_license",text:"custom_license_explanations"}]}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{enableEditMode(){this.edit_mode=!0},async removeProject(){this.fetch_status="pending",this.fetch_error=null;try{const t=await this.$api.deleteItem({path:this.project.$path});this.response=t.data,this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},f=h,v=(0,d.Z)(f,s,i,!1,null,"ac29e166",null),m=v.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ProjectCard",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("keywords"))+" ")]),a("div",{},[a("TagsField",{attrs:{field_name:"keywords",content:t.project.keywords,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},b=[],x={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},g=x,w=(0,d.Z)(g,j,b,!1,null,"733fe7a8",null),$=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ProjectCard",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("machines_and_materials"))+" ")]),a("div",{},[a("TagsField",{attrs:{field_name:"materials",content:t.project.materials,path:t.project.$path,can_edit:t.can_edit_project}})],1)])},k=[],I={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},C=I,P=(0,d.Z)(C,y,k,!1,null,"15b186fb",null),M=P.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ProjectCard",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("visibility"))+" "),a("sl-icon",{attrs:{name:"globe"}})],1),a("div",[t._v(" "+t._s(t.$t("visibility_text"))+" ")]),a("br"),a("div",{},[a("DLabel",{attrs:{str:t.$t("status")}}),a("SelectField",{attrs:{field_name:"$status",content:t.project.$status,path:t.project.$path,can_edit:t.can_edit_project,options:t.status_options}})],1)])},F=[],L={props:{project:Object,can_edit_project:Boolean},components:{ProjectCard:u},data(){return{status_options:[{key:"draft",text:this.$t("draft"),instruction:this.$t("draft_status_explanations")},{key:"finished",text:this.$t("finished"),instruction:this.$t("finished_status_explanations")},{key:"invisible",text:this.$t("invisible"),instruction:this.$t("invisible_status_explanations_projects")}],visible_value:this.project.status}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},Z=L,S=(0,d.Z)(Z,D,F,!1,null,"5c02d098",null),T=S.exports,B={props:{project:Object,context:String,can_edit_project:Boolean},components:{CardMeta:m,CardKeywords:$,CardMachines:M,CardStatus:T},data(){return{new_title:this.project.title,fetch_status:null,fetch_error:null,response:null,show_meta:!0,show_description:!0,show_cover_fullscreen:!1}},created(){"list"===this.context&&(this.show_description=!1)},mounted(){},beforeDestroy(){},watch:{"$root.is_mobile_view"(){this.$root.is_mobile_view&&(this.show_meta=!0)}},computed:{cover_thumb(){return this.makeRelativeURLFromThumbs({$thumbs:this.project.$cover,$type:"image",$path:this.project.$path,resolution:"full"===this.context?2e3:640})}},methods:{async updateProject(){this.fetch_status="pending",this.fetch_error=null;try{this.response=await this.$api.updateMeta({path:this.project.$path,new_meta:{title:this.new_title}}),this.fetch_status="success"}catch(t){this.fetch_status="error",this.fetch_error=t.response.data}}}},E=B,z=(a(47837),(0,d.Z)(E,o,r,!1,null,"062f2ac6",null)),V=z.exports},35946:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return P}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"_spaceView"},[t.space?a("div",[a("SpacePresentation",{attrs:{space:t.space,can_edit:t.can_edit_space}}),a("br"),a("DLabel",{attrs:{str:t.$t("contributors"),instructions:t.$t("space_contrib_instr")}}),a("div",{staticClass:"_contributorsList"},t._l(t.contributors,(function(e){return a("div",{key:e},[a("sl-avatar",{attrs:{image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",label:"Avatar of a gray tabby kitten looking down"}}),t._v(" Pauline ")],1)})),0),a("br"),a("br"),a("h2",[t._v("Les projets")]),t.connected_as?a("button",{staticClass:"u-button u-button_red u-button_small",attrs:{type:"button"},on:{click:function(e){t.show_create_modal=!0}}},[a("svg",{staticStyle:{"enable-background":"new 0 0 168 168"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 168 168","xml:space":"preserve"}},[a("path",{staticStyle:{fill:"#fc4b60"},attrs:{d:"M24.6,24.4c-32.8,32.8-32.8,86.1,0,119c32.8,32.8,85.9,32.8,118.7,0c32.8-32.8,32.8-85.9,0-118.7\n\t\tC110.5-8.2,57.5-8.2,24.6,24.4z"}}),a("polygon",{staticStyle:{fill:"#ffbe32"},attrs:{points:"132.3,73.4 132.3,94.4 94.6,94.4 94.6,132.1 73.6,132.1 73.6,94.4 35.9,94.4 35.9,73.4 \n\t\t73.6,73.4 73.6,35.7 94.6,35.7 94.6,73.4 \t\t"}})]),t._v(" "+t._s(t.$t("create_a_project"))+" ")]):t._e(),t.show_create_modal?a("CreateProject",{attrs:{path:t.projects_path},on:{close:function(e){t.show_create_modal=!1},openNewProject:t.openNewProject}}):t._e(),a("br"),a("br"),t.projects?a("ProjectsList",{attrs:{projects:t.projects}}):t._e()],1):t._e()])},r=[],s=(a(57658),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseModal2",{attrs:{title:t.$t("create_a_project")},on:{close:function(e){return t.$emit("close")}}},[a("form",{staticClass:"input-validation-required",on:{submit:function(e){return e.preventDefault(),t.createProject.apply(null,arguments)}}},[a("DLabel",{attrs:{str:t.$t("title")}}),a("TextInput",{attrs:{content:t.new_project_title,maxlength:40,required:!0},on:{"update:content":function(e){t.new_project_title=e},toggleValidity:function(e){return t.allow_save=e}}}),a("br"),a("div",{},[a("ToggleInput",{attrs:{content:t.new_project_is_invisible,label:t.$t("invisible"),options:{true:t.$t("invisible_status_explanations_projects"),false:t.$t("visible_status_explanations_projects")}},on:{"update:content":function(e){t.new_project_is_invisible=e}}})],1),a("br"),a("button",{staticClass:"u-button u-button_bleuvert",attrs:{slot:"footer",type:"submit",loading:t.is_creating_project},slot:"footer"},[t._v(" "+t._s(t.$t("create_and_open"))+" ")]),t.error_msg?[a("br"),a("br"),a("div",{staticClass:"u-errorMsg",domProps:{textContent:t._s(t.error_msg)}})]:t._e()],2)])}),i=[],c={props:{path:String},components:{},data(){return{new_project_title:"",new_project_is_invisible:!1,is_creating_project:!1,allow_save:!1,error_msg:""}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{async createProject(){this.is_creating_project=!0;try{const t=await this.$api.createFolder({path:this.path,additional_meta:{title:this.new_project_title,requested_slug:this.new_project_title,status:"draft",license:"CC",$status:!0===this.new_project_is_invisible?"invisible":"draft",$authors:[this.$api.tokenpath.token_path]}});setTimeout((()=>{this.$emit("openNewProject",t)}),50)}catch(t){this.error_msg="Error: "+t.message,setTimeout((()=>{this.error_msg=""}),5e3),this.is_creating_project=!1}}}},n=c,p=a(1001),l=(0,p.Z)(n,s,i,!1,null,"79db495e",null),d=l.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[0===t.projects.length?a("div",{key:"noprojects",staticClass:"u-instructions _projectsNotice"},[t._v(" "+t._s(t.$t("no_projects"))+" ")]):a("transition-group",{staticClass:"_projectsList",attrs:{tag:"div",name:"StoryModules",appear:""}},t._l(t.projects,(function(t){return a("ProjectPresentation",{key:t.$path,staticClass:"_project",attrs:{project:t,context:"list"}})})),1)],1)},u=[],h=a(17708),f={props:{projects:Array},components:{ProjectPresentation:h.Z},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},v=f,m=(a(88031),(0,p.Z)(v,_,u,!1,null,"98f83c00",null)),j=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("TitleField",{staticClass:"_title",attrs:{field_name:"title",label:t.$t("title"),tag:"h1",content:t.space.title,path:t.space.$path,maxlength:280,can_edit:t.can_edit,instructions:t.$t("project_title_instructions")}})],1),a("br"),a("div",{},[a("TitleField",{staticClass:"_description",attrs:{field_name:"description",label:t.$t("description"),content:t.space.description,path:t.space.$path,maxlength:480,can_edit:t.can_edit,instructions:t.$t("project_description_instructions")}})],1)])},x=[],g={props:{space:Object,can_edit:Boolean},components:{},data(){return{}},created(){},mounted(){},beforeDestroy(){},watch:{},computed:{},methods:{}},w=g,$=(0,p.Z)(w,b,x,!1,null,"3062e212",null),y=$.exports,k={props:{},components:{CreateProject:d,ProjectsList:j,SpacePresentation:y},data(){return{space:void 0,projects:void 0,show_create_modal:!1,contributors:new Array(6).fill(void 0)}},created(){},async mounted(){this.getSpace(),this.getProjects()},beforeDestroy(){this.$api.leave({room:this.space_path}),this.$api.leave({room:this.projects_path})},watch:{},computed:{space_path(){return"spaces/"+this.$route.params.space_slug},projects_path(){return this.space_path+"/projects"},can_edit_space(){return this.canLoggedinEditProject({project_authors:this.space.$authors})}},methods:{async getSpace(){this.space=await this.$api.getFolder({path:this.space_path}).catch((()=>{})),this.$api.join({room:this.space_path})},async getProjects(){this.projects=await this.$api.getFolders({path:this.projects_path}).catch((()=>{})),this.$api.join({room:this.projects_path})},openNewProject(t){this.show_create_modal=!1;const e=this.createURLFromPath(this.projects_path+"/"+t);this.$router.push(e)}}},I=k,C=(a(30706),(0,p.Z)(I,o,r,!1,null,"49badd61",null)),P=C.exports},93552:function(t,e,a){"use strict";a.r(e);var o=a(8081),r=a.n(o),s=a(23645),i=a.n(s),c=i()(r());c.push([t.id,"._projectCard[data-v-38fce0f1]{border:0;border-radius:0;box-shadow:none}",""]),e["default"]=c},86442:function(t,e,a){"use strict";a.r(e);var o=a(8081),r=a.n(o),s=a(23645),i=a.n(s),c=i()(r());c.push([t.id,"._project[data-v-062f2ac6],._projectInfos[data-v-062f2ac6]{position:relative}._projectInfos[data-v-062f2ac6]{display:flex;flex-flow:row nowrap;align-items:stretch;margin:0 auto;max-width:180ch;max-width:var(--max-column-width);overflow:hidden;background:#fff;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos.is--linkToProject[data-v-062f2ac6]:hover{transform:translateY(-12px);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._projectInfos.is--list[data-v-062f2ac6],._projectInfos.is--tiny[data-v-062f2ac6]{box-shadow:0 1px 4px rgba(0,0,0,.2);border-radius:4px}._projectInfos.is--list ._description[data-v-062f2ac6],._projectInfos.is--list ._title[data-v-062f2ac6],._projectInfos.is--tiny ._description[data-v-062f2ac6],._projectInfos.is--tiny ._title[data-v-062f2ac6]{font-size:90%}._projectInfos.is--list[data-v-062f2ac6]{display:block}._projectInfos.is--mobileView[data-v-062f2ac6]{flex-flow:row wrap}._projectInfos>*[data-v-062f2ac6]{flex:10 1 320px;transition:all .4s cubic-bezier(.19,1,.22,1)}._projectInfos>._projectInfos--meta[data-v-062f2ac6]{flex:1 0 260px}._projectInfos>._projectInfos--meta.is--hidden[data-v-062f2ac6]{flex:0 0 0;opacity:0}._projectInfos.is--mobileView ._projectInfos--meta[data-v-062f2ac6]{flex:0 0 100%}._projectInfos--infos[data-v-062f2ac6]{display:flex;flex-flow:column nowrap;place-content:center;gap:calc(var(--spacing)/1);padding:calc(var(--spacing)/1);transition:all .4s}.is--list ._projectInfos--infos[data-v-062f2ac6],.is--tiny ._projectInfos--infos[data-v-062f2ac6]{gap:calc(var(--spacing)/2);order:0;padding-top:0;pointer-events:none}.is--list ._projectInfos--infos ._showDescription[data-v-062f2ac6],.is--tiny ._projectInfos--infos ._showDescription[data-v-062f2ac6]{pointer-events:auto}._projectInfos--infos>*[data-v-062f2ac6]{max-width:56ch}._imageSelect[data-v-062f2ac6]{background:#fff;position:relative}._projectInfos--cover[data-v-062f2ac6]{position:relative;aspect-ratio:1/1;width:40vh;height:40vh;flex:0 0 40vh}@supports not (aspect-ratio:1/1){._projectInfos--cover[data-v-062f2ac6]{width:500px;height:500px}}.is--list ._projectInfos--cover[data-v-062f2ac6]{width:100%;height:auto}.is--mobileView ._projectInfos--cover[data-v-062f2ac6]{flex:1 1 auto;max-height:40vh;max-width:40vh;height:auto}._projectInfos--cover ._projectInfos--cover--content[data-v-062f2ac6]{position:absolute;inset:0;margin:calc(var(--spacing)*1);margin:2px;overflow:hidden;border-radius:3px;--color1:var(--c-gris);--color2:var(--c-gris_clair)}._projectInfos--cover ._projectInfos--cover--content.is--empty[data-v-062f2ac6]{background:radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent),radial-gradient(circle,transparent 20%,var(--color1) 20%,var(--color1) 80%,transparent 80%,transparent) 15px 15px,linear-gradient(var(--color2) 1.2px,transparent 1.2px) 0 -.6px,linear-gradient(90deg,var(--color2) 1.2px,var(--color1) 1.2px) -.6px 0;background-size:30px 30px,30px 30px,15px 15px,15px 15px}._projectInfos--cover img[data-v-062f2ac6]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}._projectInfos--cover[data-v-062f2ac6]  ._noImage{position:absolute;z-index:-1;width:100%;height:100%;background-color:var(--c-gris_fonce)}._projectInfos--meta[data-v-062f2ac6]{display:flex;flex-flow:column nowrap;font-size:90%;overflow-x:hidden;overflow-y:auto;background:var(--c-gris_clair);gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/2) calc(var(--spacing)/2);height:40vh}._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar{height:18px;width:18px;background-color:transparent}._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar-thumb,._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar-track{border:6px solid hsla(0,0%,100%,0);border-radius:24px;background-clip:padding-box;-webkit-transition:all .4s;transition:all .4s}._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar-track{background-color:transparent}._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar-thumb{background-color:var(--c-noir)}._projectInfos--meta[data-v-062f2ac6]::-webkit-scrollbar-thumb:hover{background-color:var(--c-gris);border:6px solid hsla(0,0%,100%,0)}.is--mobileView ._projectInfos--meta[data-v-062f2ac6]{flex-flow:row nowrap;max-height:none;overflow-x:auto;overflow-y:hidden;height:auto}._projectInfos--meta>*[data-v-062f2ac6]{flex:0 0 auto;min-width:220px;background:#fff;box-shadow:0 1px 6px var(--c-gris);border-radius:8px}.is--mobileView ._projectInfos--meta>*[data-v-062f2ac6]{flex:1 0 220px}._projectInfos--open[data-v-062f2ac6]{display:flex;justify-content:center}._projectInfos--open ._clickZone[data-v-062f2ac6]{position:absolute;top:0;left:0;width:100%;height:100%}._projectInfos--open ._openBtn[data-v-062f2ac6]{text-decoration:underline;position:relative;margin:calc(var(--spacing)/2);transition:all .25s cubic-bezier(.19,1,.22,1)}._projectInfos--open ._openBtn[data-v-062f2ac6]:focus,._projectInfos--open ._openBtn[data-v-062f2ac6]:hover{transform:translateY(-4px) rotate(-2deg);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}._coverPicker[data-v-062f2ac6]{bottom:0;padding:calc(var(--spacing)/1)}._coverPicker[data-v-062f2ac6],._showMeta[data-v-062f2ac6]{position:absolute;right:0}._showMeta[data-v-062f2ac6]{top:0;z-index:100;background:#fff;margin:calc(var(--spacing)/4)}._showDescription[data-v-062f2ac6]{position:relative;z-index:100;padding:0;text-align:left}",""]),e["default"]=c},1993:function(t,e,a){"use strict";a.r(e);var o=a(8081),r=a.n(o),s=a(23645),i=a.n(s),c=i()(r());c.push([t.id,"._projectsNotice[data-v-98f83c00]{width:100%;text-align:center}._projectsList[data-v-98f83c00]{display:grid;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content;grid-gap:calc(var(--spacing)/1);align-items:stretch;grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}._projectsList>*[data-v-98f83c00]{margin:0}._project[data-v-98f83c00]{box-shadow:0 1px 4px rgba(0,0,0,.1);cursor:pointer}._project[data-v-98f83c00]  ._projectInfos{min-height:100%}",""]),e["default"]=c},59533:function(t,e,a){"use strict";a.r(e);var o=a(8081),r=a.n(o),s=a(23645),i=a.n(s),c=i()(r());c.push([t.id,"._spaceView[data-v-49badd61]{max-width:var(--max-column-width);margin:0 auto;padding:calc(var(--spacing)*2)}._contributorsList[data-v-49badd61]{display:grid;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content;grid-gap:calc(var(--spacing)/2);align-items:stretch;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}._contributorsList>*[data-v-49badd61]{background:#fff;display:flex;flex-flow:row nowrap;align-items:center;gap:calc(var(--spacing)/2);padding:calc(var(--spacing)/1)}",""]),e["default"]=c},52655:function(t,e,a){var o=a(93552);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var r=a(31982).Z;r("4d002b02",o,!0,{sourceMap:!1,shadowMode:!1})},47837:function(t,e,a){var o=a(86442);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var r=a(31982).Z;r("10b106f4",o,!0,{sourceMap:!1,shadowMode:!1})},88031:function(t,e,a){var o=a(1993);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var r=a(31982).Z;r("315e7bc1",o,!0,{sourceMap:!1,shadowMode:!1})},30706:function(t,e,a){var o=a(59533);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var r=a(31982).Z;r("3ff4bbba",o,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=SpaceView.js.map