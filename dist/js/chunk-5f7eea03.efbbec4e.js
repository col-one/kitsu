(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7eea03"],{"2cb5":function(e,s,t){"use strict";var a=t("ac73"),n=t.n(a);n.a},a01b:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns fixed-page"},[t("div",{staticClass:"column main-column"},[t("div",{staticClass:"person page"},[t("div",{staticClass:"flexrow page-header"},[e.person?t("div",{staticClass:"flexrow-item"},[t("people-avatar",{attrs:{person:e.person,size:80,"font-size":30,"is-text":!1}})],1):e._e(),t("div",{staticClass:"flexrow-item"},[t("page-title",{attrs:{text:e.person?e.person.name:""}})],1)]),t("div",{staticClass:"task-tabs tabs"},[e.person?t("ul",[t("li",{class:{"is-active":e.isActiveTab("todos")}},[t("router-link",{attrs:{to:{name:"person",params:{person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("tasks.current"))+" ")])],1),t("li",{class:{"is-active":e.isActiveTab("done")},on:{click:function(s){return e.selectTab("done")}}},[t("router-link",{attrs:{to:{name:"person-tab",params:{tab:"done",person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("tasks.done"))+" ("+e._s(e.displayedPersonDoneTasks.length)+") ")])],1),e.isCurrentUserManager?t("li",{class:{"is-active":e.isActiveTab("timesheets")},on:{click:function(s){return e.selectTab("timesheets")}}},[t("router-link",{attrs:{to:{name:"person-tab",params:{tab:"timesheets",person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("timesheets.title"))+" ")])],1):e._e()]):e._e()]),t("div",{staticClass:"flexrow"},[e.isActiveTab("done")?e._e():t("search-field",{ref:"person-tasks-search-field",class:{"search-field":!0,"flexrow-item":!0},attrs:{"can-save":!0},on:{change:e.onSearchChange,save:e.saveSearchQuery}}),t("span",{staticClass:"filler"}),t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("main.sorted_by"),options:e.sortOptions,"locale-key-prefix":"tasks.fields."},model:{value:e.currentSort,callback:function(s){e.currentSort=s},expression:"currentSort"}})],1),e.isActiveTab("todos")||e.isActiveTab("timesheets")?t("div",{staticClass:"query-list"},[t("search-query-list",{attrs:{queries:e.personTaskSearchQueries},on:{changesearch:e.changeSearch,removesearch:e.removeSearchQuery}})],1):e._e(),e.isActiveTab("todos")?t("todos-list",{ref:"task-list",attrs:{tasks:e.sortedTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,"selection-grid":e.personTaskSelectionGrid},on:{scroll:e.setPersonTasksScrollPosition}}):e._e(),e.isActiveTab("done")?t("todos-list",{ref:"done-list",attrs:{tasks:e.displayedPersonDoneTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,done:!0,selectionGrid:e.personTaskSelectionGrid}}):e._e(),e.isActiveTab("timesheets")?t("timesheet-list",{attrs:{tasks:e.loggablePersonTasks,"done-tasks":e.loggableDoneTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,"time-spent-map":e.personTimeSpentMap,"time-spent-total":e.personTimeSpentTotal,"hide-done":e.personTasksSearchText.length>0},on:{"date-changed":e.onDateChanged,"time-spent-change":e.onTimeSpentChange}}):e._e()],1)]),1===e.nbSelectedTasks?t("div",{staticClass:"column side-column"},[t("task-info",{attrs:{task:Object.values(e.selectedTasks)[0]}})],1):e._e()])},n=[],r=(t("a4d3"),t("4de4"),t("4160"),t("caad"),t("d81d"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("2909")),i=t("ade3"),o=t("7f45"),c=t.n(o),l=t("ceca"),d=t.n(l),h=t("2f62"),u=t("992f"),p=t("8d07"),T=t("eb8c"),f=t("4d04"),k=t("55ce"),m=t("b11e"),b=t("e739"),v=t("9d94");function g(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,a)}return t}function _(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?g(Object(t),!0).forEach((function(s){Object(i["a"])(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var S={name:"person",components:{Combobox:u["a"],PageTitle:p["a"],PeopleAvatar:T["a"],SearchField:f["a"],SearchQueryList:k["a"],TaskInfo:v["a"],TodosList:b["a"],TimesheetList:m["a"]},data:function(){return{activeTab:"todos",isTasksLoading:!1,isTasksLoadingError:!1,person:null,selectedDate:c()().format("YYYY-MM-DD"),currentSort:"entity_name",sortOptions:["entity_name","priority","task_status_short_name","estimation","last_comment_date"].map((function(e){return{label:e,value:e}}))}},mounted:function(){var e=this;this.updateActiveTab(),this.personTasksSearchText.length>0&&this.searchField.setValue(this.personTasksSearchText),setTimeout((function(){e.searchField&&e.searchField.focus()}),100),this.loadPerson(this.$route.params.person_id)},afterDestroy:function(){this.$store.commit("LOAD_PERSON_TASKS_END",{tasks:[],userFilters:{},taskTypeMap:this.taskTypeMap})},computed:_({},Object(h["c"])(["displayedPersonTasks","displayedPersonDoneTasks","isCurrentUserManager","nbSelectedTasks","personMap","personTasksScrollPosition","personTasksSearchText","personTaskSearchQueries","personTaskSelectionGrid","personTimeSpentMap","personTimeSpentTotal","selectedTasks","taskTypeMap"]),{loggablePersonTasks:function(){var e=this;return this.displayedPersonTasks.filter((function(s){return e.taskTypeMap[s.task_type_id].allow_timelog}))},loggableDoneTasks:function(){var e=this;return this.displayedPersonDoneTasks.filter((function(s){return e.taskTypeMap[s.task_type_id].allow_timelog}))},searchField:function(){return this.$refs["person-tasks-search-field"]},taskList:function(){return this.$refs["task-list"]},haveDoneList:function(){return this.$refs["done-list"]},sortedTasks:function(){var e="entity_name"===this.currentSort,s=Object(r["a"])(this.displayedPersonTasks);return e?s.sort(d()("project_name").thenBy("task_type_name").thenBy("full_entity_name")):s.sort(d()(this.currentSort,-1).thenBy("project_name").thenBy("task_type_name").thenBy("entity_name"))}}),methods:_({},Object(h["b"])(["loadPersonTasks","setPersonTasksSearch","savePersonTasksSearch","removePersonTasksSearch","setPersonTasksScrollPosition","setTimeSpent"]),{isActiveTab:function(e){return this.activeTab===e},selectTab:function(e){var s=this;this.activeTab=e,this.isActiveTab("todos")&&setTimeout((function(){s.searchField&&s.searchField.focus()}),100)},onSearchChange:function(e){this.setPersonTasksSearch(e)},loadPerson:function(e){var s=this;this.person=this.personMap[e],this.isTasksLoading=!0,this.loadPersonTasks({personId:this.person.id,date:this.selectedDate,callback:function(e){e&&console.error(e),s.isTasksLoading=!1,s.isTasksLoadingError=!1,setTimeout((function(){s.taskList&&s.$nextTick((function(){s.taskList.setScrollPosition(s.personTasksScrollPosition)})),s.resizeHeaders()}),0)}})},resizeHeaders:function(){var e=this;this.$nextTick((function(){e.taskList&&e.taskList.resizeHeaders(),e.haveDoneList&&e.haveDoneList.resizeHeaders()}))},selectCurrent:function(){var e=this;this.activeTab="current",setTimeout((function(){e.$refs["person-tasks-search-field"].focus()}),100)},selectDone:function(){this.activeTab="done"},changeSearch:function(e){this.$refs["person-tasks-search-field"].setValue(e.search_query),this.$refs["person-tasks-search-field"].$emit("change",e.search_query)},saveSearchQuery:function(e){this.savePersonTasksSearch(e).then((function(){})).catch((function(e){e&&console.error(e)}))},removeSearchQuery:function(e){this.removePersonTasksSearch(e).then((function(){})).catch((function(e){e&&console.error(e)}))},updateActiveTab:function(){["done","timesheets"].includes(this.$route.params.tab)?this.activeTab=this.$route.params.tab:this.activeTab="todos"},onTimeSpentChange:function(e){e.personId=this.person.id,e.date=this.selectedDate,this.setTimeSpent(e)},onDateChanged:function(e){this.selectedDate=c()(e).format("YYYY-MM-DD"),this.loadPerson(this.person.id)}}),metaInfo:function(){return{title:this.person?"".concat(this.person.name," - Kitsu"):"... - Kitsu"}},watch:{$route:function(){var e=this.$route.params.person_id;this.updateActiveTab(),this.person.id!==e&&this.loadPerson()}}},y=S,P=(t("2cb5"),t("2877")),D=Object(P["a"])(y,a,n,!1,null,"955719b2",null);s["default"]=D.exports},ac73:function(e,s,t){}}]);
//# sourceMappingURL=chunk-5f7eea03.efbbec4e.js.map