(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09cbc8d6"],{"0d61":function(t,e,s){"use strict";var a=s("f97c"),i=s.n(a);i.a},1299:function(t,e,s){},4636:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("combobox",{attrs:{label:t.label,disabled:t.disabled,options:t.booleanOptions,value:t.value},on:{input:t.emitValue,enter:t.emitEnter}})},i=[],o=s("992f"),r={name:"combobox-boolean",components:{Combobox:o["a"]},props:{label:{default:"",type:String},value:{default:"false",type:String},options:{default:function(){return[]},type:Array},disabled:{default:!1,type:Boolean}},data:function(){return{booleanOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}]}},computed:{},methods:{emitValue:function(t){this.$emit("input",t)},emitEnter:function(t){this.$emit("enter",t)}}},n=r,l=s("2877"),c=Object(l["a"])(n,a,i,!1,null,"5da9e2c2",null);e["a"]=c.exports},"9f1e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-status page fixed-page"},[s("div",{staticClass:"level page-header"},[s("div",{staticClass:"level-left"},[s("page-title",{attrs:{text:t.$t("task_status.title")}})],1),s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("button-link",{staticClass:"level-item task-status-new",attrs:{icon:"plus",text:t.$t("task_status.new_task_status"),path:"/task-status/new"}})],1)])]),s("task-status-list",{attrs:{entries:t.taskStatus,"is-loading":t.taskStatusList.isLoading,"is-error":t.taskStatusList.isError}}),s("edit-task-status-modal",{attrs:{active:t.modals.isNewDisplayed,"is-loading":t.editStatus.isLoading,"is-error":t.editStatus.isError,"cancel-route":"/task-status","task-status-to-edit":t.taskStatusToEdit},on:{confirm:t.confirmEditTaskStatus}}),s("delete-modal",{attrs:{active:t.modals.isDeleteDisplayed,"is-loading":t.deleteStatus.isLoading,"is-error":t.deleteStatus.isError,"cancel-route":"/task-status",text:t.deleteText(),"error-text":t.$t("task_status.delete_error")},on:{confirm:t.confirmDeleteTaskStatus}})],1)},i=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("7f7f"),s("bd86")),r=s("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list"},[s("div",{staticStyle:{overflow:"hidden"}},[s("table",{ref:"headerWrapper",staticClass:"table table-header"},[s("thead",[s("tr",[s("th",{staticClass:"name"},[t._v("\n            "+t._s(t.$t("task_status.fields.name"))+"\n          ")]),s("th",{staticClass:"short-name"},[t._v("\n            "+t._s(t.$t("task_status.fields.short_name"))+"\n          ")]),s("th",{staticClass:"is-done"},[t._v("\n            "+t._s(t.$t("task_status.fields.is_done"))+"\n          ")]),s("th",{staticClass:"is-retake"},[t._v("\n            "+t._s(t.$t("task_status.fields.is_retake"))+"\n          ")]),s("th",{staticClass:"is-artist-allowed"},[t._v("\n            "+t._s(t.$t("task_status.fields.is_artist_allowed"))+"\n          ")]),s("th",{staticClass:"is-client-allowed"},[t._v("\n            "+t._s(t.$t("task_status.fields.is_client_allowed"))+"\n          ")]),s("th",{staticClass:"actions"})])])])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}],staticClass:"table-body"},[s("table",{staticClass:"table"},[s("tbody",t._l(t.entries,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"name"},[t._v("\n            "+t._s(e.name)+"\n          ")]),s("task-status-name",{staticClass:"short-name",attrs:{entry:e}}),s("td",{staticClass:"is-done"},[t._v("\n            "+t._s(t.formatBoolean(e.is_done))+"\n          ")]),s("td",{staticClass:"is-retake"},[t._v("\n            "+t._s(t.formatBoolean(e.is_retake))+"\n          ")]),s("td",{staticClass:"is-artist-allowed"},[t._v("\n            "+t._s(t.formatBoolean(e.is_artist_allowed))+"\n          ")]),s("td",{staticClass:"is-client-allowed"},[t._v("\n            "+t._s(t.formatBoolean(e.is_client_allowed))+"\n          ")]),s("row-actions",{attrs:{"entry-id":e.id,"edit-route":{name:"edit-task-status",params:{task_status_id:e.id}},"delete-route":{name:"delete-task-status",params:{task_status_id:e.id}},"hide-edit":"todo"===e.short_name,"hide-delete":"todo"===e.short_name}})],1)})),0)])]),s("p",{staticClass:"has-text-centered nb-task-status"},[t._v("\n    "+t._s(t.entries.length)+" "+t._s(t.$tc("task_status.number",t.entries.length))+"\n  ")])],1)},l=[],c=s("4f18"),u=s("03b1"),d=s("e60b"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"name"},[s("div",{staticClass:"tag",style:{background:t.color,color:t.textColor}},[t._v("\n    "+t._s(t.entry.short_name)+"\n  ")])])},m=[];function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={name:"task-status-name",components:{},props:["entry"],computed:p({},Object(r["c"])(["isDarkTheme"]),{color:function(){return"todo"===this.entry.short_name&&this.isDarkTheme?"#5F626A":this.entry.color},textColor:function(){return"todo"!==this.entry.short_name||this.isDarkTheme?"white":"#333"}}),methods:p({},Object(r["b"])([]))},_=h,k=(s("f2a2"),s("2877")),v=Object(k["a"])(_,f,m,!1,null,"42a13a88",null),O=v.exports;function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var g={name:"task-status-list",mixins:[c["a"]],props:["entries","isLoading","isError"],data:function(){return{}},components:{RowActions:u["a"],TableInfo:d["a"],TaskStatusName:O},computed:S({},Object(r["c"])([])),methods:S({},Object(r["b"])([]),{onBodyScroll:function(t,e){this.$refs.headerWrapper.style.left="-".concat(e.scrollLeft,"px")}})},w=g,j=(s("0d61"),Object(k["a"])(w,n,l,!1,null,"1f77fa29",null)),E=j.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{modal:!0,"is-active":t.active}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[t.isEditing()?s("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("task_status.edit_title"))+" "+t._s(t.taskStatusToEdit.name)+"\n      ")]):s("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("task_status.new_task_status"))+"\n      ")]),s("form",{on:{submit:function(t){t.preventDefault()}}},[s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{"input-class":"task-status-name",label:t.$t("task_status.fields.name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"shortNameField",attrs:{"input-class":"task-status-short-name",label:t.$t("task_status.fields.short_name")},model:{value:t.form.short_name,callback:function(e){t.$set(t.form,"short_name",e)},expression:"form.short_name"}}),s("combobox-boolean",{attrs:{label:t.$t("task_status.fields.is_done")},model:{value:t.form.is_done,callback:function(e){t.$set(t.form,"is_done",e)},expression:"form.is_done"}}),s("combobox-boolean",{attrs:{label:t.$t("task_status.fields.is_retake")},model:{value:t.form.is_retake,callback:function(e){t.$set(t.form,"is_retake",e)},expression:"form.is_retake"}}),s("combobox-boolean",{attrs:{label:t.$t("task_status.fields.is_artist_allowed")},model:{value:t.form.is_artist_allowed,callback:function(e){t.$set(t.form,"is_artist_allowed",e)},expression:"form.is_artist_allowed"}}),s("combobox-boolean",{attrs:{label:t.$t("task_status.fields.is_client_allowed")},model:{value:t.form.is_client_allowed,callback:function(e){t.$set(t.form,"is_client_allowed",e)},expression:"form.is_client_allowed"}}),s("color-field",{ref:"colorField",attrs:{label:t.$t("task_status.fields.color"),colors:t.colors},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1),s("p",{staticClass:"has-text-right"},[s("a",{class:{button:!0,"confirm-edit-task-status":!0,"is-primary":!0,"is-loading":t.isLoading},on:{click:t.confirmClicked}},[t._v("\n          "+t._s(t.$t("main.confirmation"))+"\n        ")]),s("router-link",{staticClass:"button is-link",attrs:{to:t.cancelRoute}},[t._v("\n          "+t._s(t.$t("main.cancel"))+"\n        ")])],1)])])])},C=[],D=s("7bf8"),x=s("4636"),T=s("f865");function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function B(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var F={name:"edit-task-status-modal",components:{ComboboxBoolean:x["a"],TextField:D["a"],ColorField:T["a"]},props:["onConfirmClicked","text","active","cancelRoute","isLoading","isError","errorText","taskStatusToEdit"],data:function(){return{form:{name:"",short_name:"",color:"$grey999",is_reviewable:"true",is_done:"false"},isRetakeOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],isDoneOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],isArtistAllowedOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}],colors:["#000000","#E81123","#ff3860","#FF5722","#FFA000","#AFB42B","#22d160","#43A047","#498205","#607D8B","#3273dc","#8764B8","#ab26ff"]}},computed:B({},Object(r["c"])(["taskStatus","taskStatusStatusOptions"])),methods:B({},Object(r["b"])([]),{confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.taskStatusToEdit&&this.taskStatusToEdit.id},resetForm:function(){this.taskStatusToEdit&&(this.form={name:this.taskStatusToEdit.name,short_name:this.taskStatusToEdit.short_name,color:this.taskStatusToEdit.color,is_reviewable:String(this.taskStatusToEdit.is_reviewable),is_done:String(this.taskStatusToEdit.is_done),is_retake:String(this.taskStatusToEdit.is_retake||!1),is_artist_allowed:String(this.taskStatusToEdit.is_artist_allowed),is_client_allowed:String(this.taskStatusToEdit.is_client_allowed)})}}),watch:{taskStatusToEdit:function(){this.resetForm()},active:function(){var t=this;this.active&&(this.resetForm(),setTimeout((function(){t.$refs.nameField.focus()}),100))}}},L=F,A=(s("ee42"),Object(k["a"])(L,$,C,!1,null,"62c788fc",null)),N=A.exports,M=s("8d07"),R=s("5f48"),I=s("e211");function J(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function V(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?J(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):J(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var W={name:"task-status",components:{ButtonLink:I["a"],DeleteModal:R["a"],EditTaskStatusModal:N,PageTitle:M["a"],TaskStatusList:E},data:function(){return{taskStatusToDelete:null,taskStatusToEdit:null,modals:{isNewDisplayed:!1,isDeleteDisplayed:!1},taskStatusList:{isLoading:!1,isError:!1},editStatus:{isLoading:!1,isError:!1},deleteStatus:{isLoading:!1,isError:!1}}},computed:V({},Object(r["c"])(["taskStatus","taskStatusMap"])),created:function(){this.handleModalsDisplay()},methods:V({},Object(r["b"])(["deleteTaskStatus"]),{confirmEditTaskStatus:function(t){var e=this,s=!(this.taskStatusToEdit&&this.taskStatusToEdit.id),a="newTaskStatus";s||(a="saveTaskStatus",t.id=this.taskStatusToEdit.id),this.editStatus.isLoading=!0,this.editStatus.isError=!1,this.$store.dispatch(a,{form:t,callback:function(t){e.editStatus.isLoading=!1,t?e.editStatus.isError=!0:e.$router.push({name:"task-status"})}})},confirmDeleteTaskStatus:function(){var t=this;this.deleteStatus.isLoading=!0,this.deleteStatus.isError=!1,this.deleteTaskStatus({taskStatus:this.taskStatusToDelete,callback:function(e){t.deleteStatus.isLoading=!1,e?t.deleteStatus.isError=!0:t.$router.push({name:"task-status"})}})},deleteText:function(){var t=this.taskStatusToDelete;return t?this.$t("task_status.delete_text",{name:t.name}):""},handleModalsDisplay:function(){var t=this.$store.state.route.path,e=this.$store.state.route.params.task_status_id;t.indexOf("new")>0?(this.taskStatusToEdit={color:"#000000"},this.modals.isNewDisplayed=!0):t.indexOf("edit")>0?(this.taskStatusToEdit=this.taskStatusMap[e],this.modals.isNewDisplayed=!0):t.indexOf("delete")>0?(this.taskStatusToDelete=this.taskStatusMap[e],this.modals.isDeleteDisplayed=!0):(this.modals.isNewDisplayed=!1,this.modals.isDeleteDisplayed=!1)}}),watch:{$route:function(){this.handleModalsDisplay()}},metaInfo:function(){return{title:"".concat(this.$t("task_status.title")," - Kitsu")}}},K=W,q=Object(k["a"])(K,a,i,!1,null,"04787091",null);e["default"]=q.exports},b196:function(t,e,s){},edc6:function(t,e,s){"use strict";var a=s("1299"),i=s.n(a);i.a},ee42:function(t,e,s){"use strict";var a=s("f7c7"),i=s.n(a);i.a},f2a2:function(t,e,s){"use strict";var a=s("b196"),i=s.n(a);i.a},f7c7:function(t,e,s){},f865:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v(t._s(t.label))]),s("div",{staticClass:"control colors"},t._l(t.colors,(function(e,a){return s("div",{key:"color-"+a,ref:"color-"+a,refInFor:!0,class:{color:!0,selected:t.value===e},on:{click:function(s){return t.colorChanged(e)}}},[s("span",{style:{background:e}})])})),0)])},i=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var c={name:"text-field",props:{label:{default:"",type:String},value:{default:"$grey999",type:String},placeholder:{default:"",type:String},type:{default:"text",type:String},colors:{default:function(){return["#999999","#8D6E63","#43A047","#7CB342","#009688","#9CCC65","#AFB42B","#F9A825","#F57C00","#ff5252","#F06292","#AB47BC","#5C6BC0","#039BE5","#26C6DA","#64B5F6","#78909C"]}}},data:function(){return{selectedColor:"$grey999"}},computed:l({},Object(r["c"])([])),methods:l({},Object(r["b"])([]),{colorChanged:function(t,e){this.$emit("input",t)}})},u=c,d=(s("edc6"),s("2877")),f=Object(d["a"])(u,a,i,!1,null,"69fc363c",null);e["a"]=f.exports},f97c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-09cbc8d6.0ab5c273.js.map