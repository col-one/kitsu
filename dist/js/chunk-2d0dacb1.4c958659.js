(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dacb1"],{"6cb0":function(s,e,t){"use strict";t.r(e);var r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"hero is-fullheight"},[t("div",{staticClass:"container has-text-centered"},[t("div",{staticClass:"box has-text-left"},[t("div",{staticClass:"has-text-centered"},[t("h1",{staticClass:"title"},[s._v(" "+s._s(s.$t("login.reset_change_password_title"))+" ")])]),t("div",{staticClass:"field mt2"},[t("p",{staticClass:"control has-icon"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"},{name:"focus",rawName:"v-focus"}],staticClass:"input is-medium email",attrs:{type:"password",placeholder:s.$t("login.fields.password")},domProps:{value:s.password},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.confirmResetChangePassword(e)},input:function(e){e.target.composing||(s.password=e.target.value)}}}),t("span",{staticClass:"icon"},[t("lock-icon",{attrs:{width:"20",height:"20"}})],1)]),t("p",{staticClass:"control has-icon"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password2,expression:"password2"}],staticClass:"input is-medium email",attrs:{type:"password",placeholder:s.$t("login.fields.password2")},domProps:{value:s.password2},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.confirmResetChangePassword(e)},input:function(e){e.target.composing||(s.password2=e.target.value)}}}),t("span",{staticClass:"icon"},[t("lock-icon",{attrs:{width:"20",height:"20"}})],1)])]),t("p",{staticClass:"control"},[t("a",{class:{"main-button":!0,"is-fullwidth":!0,"is-loading":s.isLoading},on:{click:s.confirmResetChangePassword}},[s._v(" "+s._s(s.$t("login.reset_change_password"))+" ")])]),t("p",{directives:[{name:"show",rawName:"v-show",value:s.isFormError,expression:"isFormError"}],staticClass:"error"},[s._v(" "+s._s(s.$t("login.reset_change_password_form_failed"))+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:s.isError,expression:"isError"}],staticClass:"error"},[s._v(" "+s._s(s.$t("login.reset_change_password_failed"))+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:s.isSuccess,expression:"isSuccess"}],staticClass:"success"},[s._v(" "+s._s(s.$t("login.reset_change_password_succeed"))+" ")]),t("p",{staticClass:"has-text-centered"},[t("router-link",{attrs:{to:{name:"login"}}},[s._v(" "+s._s(s.$t("login.login_page"))+" ")])],1)])])])},o=[],a=(t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("ade3")),i=t("2f62"),n=t("0a35"),c=t("48c6");function d(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.push.apply(t,r)}return t}function l(s){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){Object(a["a"])(s,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(t,e))}))}return s}var p={name:"reset-password",components:{LockIcon:n["t"]},data:function(){return{password:"",password2:"",isLoading:!1,isError:!1,isFormError:!1,isSuccess:!1}},mounted:function(){this.$store.commit("LOGIN_SUCCESS")},computed:l({},Object(i["c"])([])),methods:l({},Object(i["b"])(["resetChangePassword"]),{confirmResetChangePassword:function(){var s=this;this.isFormError=!1,this.isError=!1,c["a"].isPasswordValid(this.password,this.password2)?(this.isLoading=!0,this.isSuccess=!1,this.resetChangePassword({token:this.$route.params.token,password:this.password,password2:this.password2}).then((function(){s.isLoading=!1,s.isSuccess=!0,setTimeout((function(){s.$router.push({name:"login"})}),3e3)})).catch((function(){s.isLoading=!1,s.isError=!0,s.isSuccess=!1}))):this.isFormError=!0}}),metaInfo:function(){return{title:this.$t("login.reset_change_password_title")}}},u=p,h=t("2877"),w=Object(h["a"])(u,r,o,!1,null,"7333edd2",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0dacb1.4c958659.js.map