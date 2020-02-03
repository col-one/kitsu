(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-721eb754"],{"3a81":function(e,t,a){"use strict";var s=a("8fab"),n=a.n(s);n.a},"8fab":function(e,t,a){},9633:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns fixed-page"},[a("div",{staticClass:"column main-column"},[a("div",{staticClass:"flexrow project-dates"},[a("div",{staticClass:"flexrow-item"},[a("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("main.start_date"))+" ")]),a("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"d MMMM yyyy"},model:{value:e.selectedStartDate,callback:function(t){e.selectedStartDate=t},expression:"selectedStartDate"}})],1),a("div",{staticClass:"flexrow-item field"},[a("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("main.end_date"))+" ")]),a("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"d MMMM yyyy"},model:{value:e.selectedEndDate,callback:function(t){e.selectedEndDate=t},expression:"selectedEndDate"}})],1),a("text-field",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"flexrow-item overall-man-days",attrs:{type:"number",label:e.$t("schedule.overall_man_days"),disabled:!e.isCurrentUserAdmin},model:{value:e.overallManDays,callback:function(t){e.overallManDays=t},expression:"overallManDays"}}),a("combobox-number",{staticClass:"flexrow-item zoom-level",attrs:{label:e.$t("schedule.zoom_level"),options:e.zoomOptions},model:{value:e.zoomLevel,callback:function(t){e.zoomLevel=t},expression:"zoomLevel"}})],1),a("schedule",{attrs:{"start-date":e.startDate,"end-date":e.endDate,hierarchy:e.scheduleItems,"zoom-level":e.zoomLevel,"is-loading":e.loading.schedule,"is-error":e.errors.schedule},on:{"item-changed":e.saveScheduleItem,"change-zoom":e.changeZoom,"root-element-expanded":e.expandTaskTypeElement}})],1),e.currentTask?a("div",{staticClass:"column side-column is-hidden-mobile hide-small-screen"},[a("task-info",{attrs:{task:e.currentTask,"is-loading":!1}})],1):e._e()])},n=[],r=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),o=a("2f62"),d=a("7f45"),i=a.n(d),c=a("2430"),l=a("fa33"),u=a("2229"),h=a("9d8b"),m=a("1e4c"),p=a("9d94"),f=a("7bf8"),D=a("d7c7");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={name:"production-schedule",components:{ComboboxNumber:m["a"],Datepicker:l["a"],Schedule:D["a"],TaskInfo:p["a"],TextField:f["a"]},data:function(){return{currentTask:null,overallManDays:0,endDate:i()().add(6,"months").endOf("day"),scheduleItems:[],startDate:i()().startOf("day"),selectedStartDate:null,selectedEndDate:null,zoomLevel:2,zoomOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}],loading:{schedule:!1},errors:{schedule:!1}}},mounted:function(){this.reset()},computed:v({},Object(o["c"])(["assetTypeMap","currentEpisode","currentProduction","isCurrentUserAdmin","isCurrentUserManager","isTVShow","taskTypeMap","timezone","user"]),{locale:function(){return"fr_FR"===this.user.locale?c["fr"]:c["en"]}}),methods:v({},Object(o["b"])(["editProduction","loadAssetTypeScheduleItems","loadEpisodeScheduleItems","loadMilestones","loadScheduleItems","loadSequenceScheduleItems","saveScheduleItem"]),{loadData:function(){var e=this;this.loading.schedule=!0,this.loadScheduleItems(this.currentProduction).then((function(t){t=t.map((function(t){var a,s,n=e.taskTypeMap[t.task_type_id];return a=t.start_date?i()(t.start_date,"YYYY-MM-DD","en"):i()(),s=t.end_date?i()(t.end_date,"YYYY-MM-DD","en"):a.clone().add(1,"days"),v({},t,{color:n.color,for_shots:n.for_shots,name:n.name,priority:n.priority,startDate:a,endDate:s,editable:e.isCurrentUserManager,expanded:!1,loading:!1,route:Object(h["e"])(n.id,e.currentProduction.id,e.currentEpisode?e.currentEpisode.id:null,n.for_shots?"shots":"assets"),children:[]})})),e.scheduleItems=Object(u["h"])(t,e.taskTypeMap),e.loading.schedule=!1})).then(this.loadMilestones).catch((function(t){console.error(t),e.loading.schedule=!1}))},changeZoom:function(e){e.wheelDelta<0&&this.zoomLevel>1&&this.zoomLevel--,e.wheelDelta>0&&this.zoomLevel<3&&this.zoomLevel++},reset:function(){this.currentProduction.start_date&&(this.startDate=i.a.utc(this.currentProduction.start_date,"YYYY-MM-DD","en")),this.currentProduction.end_date&&(this.endDate=i()(this.currentProduction.end_date)),this.overallManDays=this.currentProduction.man_days,this.selectedStartDate=this.startDate.toDate(),this.selectedEndDate=this.endDate.toDate(),this.loadData()},convertScheduleItems:function(e){var t=this;return e.map((function(e){var a,s;return a=e.start_date?i()(e.start_date,"YYYY-MM-DD","en"):i()(),s=e.end_date?i()(e.end_date,"YYYY-MM-DD","en"):a.clone().add(1,"days"),v({},e,{startDate:a,endDate:s,expanded:!1,loading:!1,editable:t.isCurrentUserManager,children:[]})}))},expandTaskTypeElement:function(e){var t=this,a={production:this.currentProduction,taskType:this.taskTypeMap[e.task_type_id]};if(e.expanded=!e.expanded,e.expanded){e.loading=!0;var s="loadAssetTypeScheduleItems";e.for_shots&&(s=this.isTVShow?"loadEpisodeScheduleItems":"loadSequenceScheduleItems"),this[s](a).then((function(a){e.loading=!1,e.children=t.convertScheduleItems(a)})).catch((function(t){console.error(t),e.loading=!1,e.children=[]}))}}}),socket:{},watch:{selectedStartDate:function(){this.startDate=i.a.utc(this.selectedStartDate,"YYYY-MM-DD","en"),this.editProduction({data:v({},this.currentProduction,{start_date:this.startDate.format("YYYY-MM-DD")})})},selectedEndDate:function(){this.endDate=i()(this.selectedEndDate),this.editProduction({data:v({},this.currentProduction,{end_date:this.endDate.format("YYYY-MM-DD")})})},overallManDays:function(){this.overallManDays!==this.currentProduction.man_days&&this.editProduction({data:v({},this.currentProduction,{man_days:this.overallManDays})})},currentProduction:function(){this.reset()}},metaInfo:function(){return this.isTVShow?{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" - ".concat(this.currentEpisode?this.currentEpisode.name:"")+" | ".concat(this.$t("schedule.title")," - Kitsu")}:{title:"".concat(this.currentProduction.name," ")+"| ".concat(this.$t("schedule.title")," - Kitsu")}}},M=y,_=(a("3a81"),a("2877")),Y=Object(_["a"])(M,s,n,!1,null,"5c63d9c3",null);t["default"]=Y.exports}}]);
//# sourceMappingURL=chunk-721eb754.e695975a.js.map