(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a764d46"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("d3b7");function n(t,e,a,n,r,i,o){try{var s=t[i](o),c=s.value}catch(l){return void a(l)}s.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var o=t.apply(e,a);function s(t){n(o,r,i,s,c,"next",t)}function c(t){n(o,r,i,s,c,"throw",t)}s(void 0)}))}}},"489c":function(t,e,a){},"96cf":function(t,e,a){var n=function(t){"use strict";var e,a=Object.prototype,n=a.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,a){return t[e]=a}}function l(t,e,a,n){var r=e&&e.prototype instanceof y?e:y,i=Object.create(r.prototype),o=new M(n||[]);return i._invoke=E(t,a,o),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function y(){}function _(){}function v(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(F([])));b&&b!==a&&n.call(b,i)&&(g=b);var x=v.prototype=y.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function a(r,i,o,s){var c=u(t[r],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,o,s)}),(function(t){a("throw",t,o,s)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return a("throw",t,o,s)}))}s(c.arg)}var r;function i(t,n){function i(){return new e((function(e,r){a(t,n,e,r)}))}return r=r?r.then(i,i):i()}this._invoke=i}function E(t,e,a){var n=d;return function(r,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===r)throw i;return O()}a.method=r,a.arg=i;while(1){var o=a.delegate;if(o){var s=L(o,a);if(s){if(s===m)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===d)throw n=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=f;var c=u(t,e,a);if("normal"===c.type){if(n=a.done?p:h,c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n=p,a.method="throw",a.arg=c.arg)}}}function L(t,a){var n=t.iterator[a.method];if(n===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,L(t,a),"throw"===a.method))return m;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(n,t.iterator,a.arg);if("throw"===r.type)return a.method="throw",a.arg=r.arg,a.delegate=null,m;var i=r.arg;return i?i.done?(a[t.resultName]=i.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,m):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function F(t){if(t){var a=t[i];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function a(){while(++r<t.length)if(n.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return _.prototype=x.constructor=v,v.constructor=_,_.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(C.prototype),C.prototype[o]=function(){return this},t.AsyncIterator=C,t.async=function(e,a,n,r,i){void 0===i&&(i=Promise);var o=new C(l(e,a,n,r),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var n=e.pop();if(n in t)return a.value=n,a.done=!1,a}return a.done=!0,a}},t.values=F,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(n,r){return s.type="throw",s.arg=t,a.next=n,r&&(a.method="next",a.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),S(a),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:F(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(r){Function("r","regeneratorRuntime = r")(n)}},dd41:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"statistic",attrs:{"element-loading-text":"拼命加载中...","element-loading-spinner":"el-icon-loading"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.name)+" ")]),a("el-button",{staticClass:"btn-blue right",attrs:{size:"small"},on:{click:t.handleBack}},[t._v("返回")])],1),a("div",{staticClass:"main-cards"},[a("div",{staticClass:"card"},[t._m(0),a("p",[a("span",[t._v(t._s(t.today_count.add_customer||0))]),a("span",[t._v("累计："+t._s(t.accum_count.add_customer||0))])])]),a("div",{staticClass:"card"},[t._m(1),a("p",[a("span",[t._v(t._s(t.today_count.deleted_customer||0))]),a("span",[t._v("累计："+t._s(t.accum_count.deleted_customer||0))])])]),a("div",{staticClass:"card"},[t._m(2),a("p",[a("span",[t._v(t._s(t.today_count.deleted_staff||0))]),a("span",[t._v("累计："+t._s(t.accum_count.deleted_staff||0))])])]),a("div",{staticClass:"card"},[t._m(3),a("p",[a("span",[t._v(t._s(t.today_count.growth||0))]),a("span",[t._v("累计："+t._s(t.accum_count.growth||0))])])])]),a("div",{staticClass:"date"},[a("el-button",{ref:"day",class:1===t.date_type?"btn-blue btn-active":"btn-white",attrs:{size:"small"},on:{click:function(e){t.date_type=1}}},[t._v("按日")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:1===t.date_type,expression:"date_type === 1"}],staticClass:"date-active",staticStyle:{width:"260px"},attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至",clearable:!1,"start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.daysValue,callback:function(e){t.daysValue=e},expression:"daysValue"}}),a("el-button",{ref:"week",class:2===t.date_type?"btn-blue btn-active":"btn-white",staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:function(e){t.date_type=2}}},[t._v("按周")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2===t.date_type,expression:"date_type === 2"}],staticClass:"date-active-center",staticStyle:{width:"160px"},attrs:{type:"week",format:"yyyy 第 WW 周","value-format":"yyyy-MM-dd","range-separator":"至",clearable:!1,"start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.weekValueStart,callback:function(e){t.weekValueStart=e},expression:"weekValueStart"}}),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:2===t.date_type,expression:"date_type === 2"}],staticClass:"date-active-left",staticStyle:{width:"160px"},attrs:{type:"week",format:"yyyy 第 WW 周","value-format":"yyyy-MM-dd",clearable:!1,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},model:{value:t.weekValueEnd,callback:function(e){t.weekValueEnd=e},expression:"weekValueEnd"}}),a("el-button",{ref:"month",class:3===t.date_type?"btn-blue btn-active":"btn-white",staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:function(e){t.date_type=3}}},[t._v("按月")]),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:3===t.date_type,expression:"date_type === 3"}],staticClass:"date-active",staticStyle:{width:"260px"},attrs:{size:"small",type:"monthrange",format:"yyyy-MM-dd",clearable:!1,"value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:t.monthValue,callback:function(e){t.monthValue=e},expression:"monthValue"}}),a("span",[t._v("这段时间里，共新增客户数 "+t._s(t.during.add_customer)+" 人、被客户删除/拉黑 "+t._s(t.during.deleted_customer)+" 人、员工删除客户 "+t._s(t.during.deleted_staff)+" 人、净增人数 "+t._s(t.during.growth)+" 人")])],1),a("div",{staticClass:"echarts",attrs:{id:"line"}}),a("div",{staticClass:"main-footer"},[a("div",[a("span",[t._v("客户明细数据")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"}},[t._v("导出数据")])],1),a("div",{staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{color:"#333",fontSize:"14px",backgroundColor:"#F6F7FB",fontWeight:"normal"}}},[a("el-table-column",{attrs:{label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.created_at)+" ")]}}])}),a("el-table-column",{attrs:{prop:"add_customer"}},[a("template",{slot:"header"},[t._v(" 新增客户数 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新增的客户人数（同一个客户重复被添加会重复计算）",placement:"top-start"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1)],2),a("el-table-column",{attrs:{prop:"deleted_customer"}},[a("template",{slot:"header"},[t._v(" 被客户删除/拉黑人数 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"同一个员工重复被删除会重复计算",placement:"top-start"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1)],2),a("el-table-column",{attrs:{prop:"deleted_staff"}},[a("template",{slot:"header"},[t._v(" 删除人数 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"员工删除的客户数（同一个客户重复被删除会重复计算）",placement:"top-start"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1)],2),a("el-table-column",{attrs:{prop:"growth"}},[a("template",{slot:"header"},[t._v(" 净增客户数 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新增人数-被客户删除/拉黑人数",placement:"top-start"}},[a("i",{staticClass:"iconfont icon-question-circle"})])],1)],2)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.tableData.length,expression:"tableData.length !== 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.page,"page-sizes":[10,20,50,100],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("今日新增客户数 "),a("i",{staticClass:"iconfont icon-question-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("今日被客户删除/拉黑的人数 "),a("i",{staticClass:"iconfont icon-question-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("今日删除人数 "),a("i",{staticClass:"iconfont icon-question-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("今日净增人数 "),a("i",{staticClass:"iconfont icon-question-circle"})])}],i=(a("4160"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),o=a("365c"),s={data:function(){return{id:"",loading:!1,name:"",tableData:[],page:1,limit:10,total:0,date_type:1,daysValue:[this.getCurrentMonthFirst(),this.getCurrentMonthLast()],weekValueStart:this.getCurrentMonthFirst(),weekValueEnd:this.getCurrentMonthLast(),monthValue:[this.getCurrentMonthFirst(),this.getCurrentMonthLast()],start_time:this.getCurrentMonthFirst(),end_time:this.getCurrentMonthLast(),today_count:{add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},accum_count:{add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},during:{add_customer:0,deleted_customer:0,deleted_staff:0,growth:0}}},watch:{date_type:function(t){this.change()},daysValue:function(t){this.start_time=t[0],this.end_time=t[1],this.refresh()},monthValue:function(t){this.start_time=t[0],this.end_time=t[1],this.refresh()},weekValueStart:function(t){t.toString()>this.weekValueEnd.toString()&&(this.weekValueStart=this.weekValueEnd),this.change()},weekValueEnd:function(t){t.toString()<this.weekValueStart.toString()&&(this.weekValueStart=this.weekValueEnd),this.change()}},mounted:function(){this.id=this.$route.query.id,this.initData()},methods:{initData:function(){var t=this;this.loading=!0;var e=[];e[0]=Object(o["nb"])({id:this.id}),e[1]=Object(o["mb"])({id:this.id,date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,page:1,limit:1e3}),e[2]=Object(o["mb"])({id:this.id,date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,page:this.page,limit:this.limit}),Promise.all(e).then((function(e){if(t.loading=!1,200===e[0].code?(t.name=e[0].data.live_name,t.today_count=e[0].data.today_count,t.accum_count=e[0].data.accum_count):(t.name="",t.today_count={add_customer:0,deleted_customer:0,deleted_staff:0,growth:0},t.accum_count={add_customer:0,deleted_customer:0,deleted_staff:0,growth:0}),200===e[1].code){t.during=e[1].data.during;var a=[],n=[],r=[],i=[],o=[];e[1].data.data.forEach((function(t){for(var e in o.push(t["created_at"]),t)"add_customer"===e?a.push(t[e]):"deleted_customer"===e?n.push(t[e]):"deleted_staff"===e?r.push(t[e]):"growth"===e&&i.push(t[e])})),t.getLine(o,a,n,r,i)}200===e[2].code&&(t.total=e[2].data.count,t.tableData=e[2].data.data)}))},refresh:function(){var t=this;this.loading=!0;var e=[];e[0]=Object(o["mb"])({id:this.id,date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,page:1,limit:1e3}),e[1]=Object(o["mb"])({id:this.id,date_type:this.date_type,start_time:this.start_time,end_time:this.end_time,page:this.page,limit:this.limit}),Promise.all(e).then((function(e){if(t.loading=!1,200===e[0].code){t.during=e[0].data.during;var a=[],n=[],r=[],i=[],o=[];e[0].data.data.forEach((function(t){for(var e in o.push(t["created_at"]),t)"add_customer"===e?a.push(t[e]):"deleted_customer"===e?n.push(t[e]):"deleted_staff"===e?r.push(t[e]):"growth"===e&&i.push(t[e])})),t.getLine(o,a,n,r,i)}200===e[1].code&&(t.total=e[1].data.count,t.tableData=e[1].data.data)}))},reqLiveQrEnd:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["mb"])({id:t.id,date_type:t.date_type,start_time:t.start_time,end_time:t.end_time,page:t.page,limit:t.limit});case 2:a=e.sent,200===a.code?(t.total=a.data.count,t.tableData=a.data.data):(t.total=0,t.tableData=[]);case 4:case"end":return e.stop()}}),e)})))()},change:function(){var t=this.date_type;1===t?(this.start_time=this.daysValue[0],this.end_time=this.daysValue[1]):2===t?(this.start_time=this.weekValueStart,this.end_time=this.weekValueEnd):3===t&&(this.start_time=this.monthValue[0],this.end_time=this.monthValue[1]),this.refresh()},handleSizeChange:function(t){this.limit=t,this.reqLiveQrEnd()},handleCurrentChange:function(t){this.page=t,this.reqLiveQrEnd()},getCurrentMonthFirst:function(){var t=new Date;t.setDate(1);var e=parseInt(t.getMonth()+1),a=t.getDate();return e<10&&(e="0"+e),a<10&&(a="0"+a),t.getFullYear()+"-"+e+"-"+a},getCurrentMonthLast:function(){var t=new Date,e=t.getMonth(),a=++e,n=new Date(t.getFullYear(),a,1),r=864e5,i=new Date(n-r),o=parseInt(i.getMonth()+1),s=i.getDate();return o<10&&(o="0"+o),s<10&&(s="0"+s),t.getFullYear()+"-"+o+"-"+s},handleBack:function(){this.$router.push("/live_code/manage")},getLine:function(t,e,a,n,r){var i=this.$echarts.init(document.getElementById("line")),o={tooltip:{trigger:"axis"},legend:{left:30,top:0,icon:"circle",itemWidth:8,itemHeight:8,itemGap:40,data:["新增客户数","被客户删除/拉黑人数","删除人数","净增人数"]},color:["#6881EC","#7FD5D8","#FFBBC0","#FEA96C"],grid:{left:"5%",right:"6%",bottom:20,top:50,containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:t,axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"dashed"}}},series:[{name:"新增客户数",type:"line",data:e},{name:"被客户删除/拉黑人数",type:"line",data:a},{name:"删除人数",type:"line",data:n},{name:"净增人数",type:"line",data:r}]};i.setOption(o)}}},c=s,l=(a("ffae"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"09ef661e",null);e["default"]=u.exports},ffae:function(t,e,a){"use strict";a("489c")}}]);
//# sourceMappingURL=chunk-7a764d46.255b5fc9.js.map