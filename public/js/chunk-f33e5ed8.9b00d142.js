(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f33e5ed8"],{"4de4":function(e,t,a){"use strict";var l=a("23e7"),r=a("b727").filter,n=a("1dde"),i=a("ae40"),s=n("filter"),o=i("filter");l({target:"Array",proto:!0,forced:!s||!o},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"9c0a":function(e,t,a){"use strict";a("bcf9")},a623:function(e,t,a){"use strict";var l=a("23e7"),r=a("b727").every,n=a("a640"),i=a("ae40"),s=n("every"),o=i("every");l({target:"Array",proto:!0,forced:!s||!o},{every:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},bcf9:function(e,t,a){},c70a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"custom-label"},[a("el-container",[a("el-aside",{staticClass:"tabs",staticStyle:{width:"210px"}},[a("div",{staticClass:"group-main"},[a("el-button",{staticClass:"btn-blue",attrs:{size:"small"},on:{click:function(){e.operationType="add",e.addGroupFlag=!0}}},[e._v("新增分组")]),a("el-tree",{ref:"tree",staticStyle:{"margin-top":"20px"},attrs:{data:e.groupData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"highlight-current":!0,"current-node-key":e.label.labelGroupId},on:{"node-click":e.handleTreeNode},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var l=t.data;return[a("div",{staticClass:"tree-wrap"},[a("span",{class:e.label.labelGroupId===l.id?"active name-wrap":"name-wrap",attrs:{title:l.name}},[e._v(e._s(l.name))]),a("div",{staticClass:"drop-wrap"},[a("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:"所有"!==l.name&&"未分组"!==l.name,expression:"data.name !== '所有' && data.name !== '未分组'"}],on:{command:function(t){return e.handleCommand(t,l)}}},[a("span",{staticClass:"el-dropdown-link span-wrap"},[a("i",{staticClass:"more el-icon-more"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑分组")]),a("el-dropdown-item",{attrs:{command:"delete"}},[e._v("删除分组")])],1)],1)],1)])]}}])})],1)]),a("el-main",[a("div",{staticClass:"title"},[e._v(" "+e._s(e.$route.meta.title)+"管理 "),a("i",{staticClass:"iconfont icon-question-circle",staticStyle:{cursor:"pointer"},on:{click:function(t){e.showCourse=!e.showCourse}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCourse,expression:"showCourse"}],staticClass:"course"},[a("p",[a("span",{staticClass:"black"},[e._v("1、标签分组名称不可重复，同一分组下的标签名称不可重复。")])]),a("p",[a("span",{staticClass:"black"},[e._v("2、标签组一旦被删除，该标签组下的标签将移至【未分组】。")])]),a("p",[a("span",{staticClass:"black"},[e._v("3、【未分组】为系统分组，不可修改与删除。")])])]),a("div",{staticClass:"btns"},[a("el-input",{staticStyle:{width:"200px",margin:"0 10px"},attrs:{size:"small",placeholder:"搜索标签名称"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"},on:{click:e.handleSearch}},[e._v("查找")]),a("el-button",{staticClass:"btn-white",attrs:{size:"small"},on:{click:function(t){e.keyword=""}}},[e._v(" 清空 ")]),a("el-button",{class:0!==e.selectData.length?"btn-blue right":"btn-opacity right",attrs:{disabled:0===e.selectData.length,size:"small"},on:{click:e.handleBatchDeleteLabel}},[e._v("删除标签")]),a("el-button",{class:0===e.selectData.length?"btn-blue":"btn-opacity",attrs:{disabled:0!==e.selectData.length,size:"small"},on:{click:function(){e.labelType="add",e.label.labelGroupId=e.label.labelGroupId||e.groupData[1].id,e.addFlag=!0}}},[e._v("新建标签")])],1),a("div",{staticClass:"table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading",data:e.tableData,"tooltip-effect":"dark","header-cell-style":{color:"#333",fontSize:"14px",backgroundColor:"#F6F7FB",fontWeight:"normal"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"标签名称"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"flex-wrap"},[a("span",{attrs:{size:"small"}},[e._v(" "+e._s(t.row.name)+" ")])])}}])}),a("el-table-column",{attrs:{prop:"staff_num",label:"员工数"}}),a("el-table-column",{attrs:{prop:"name",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEditLabel(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleDeleteLabel(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.total,expression:"total !== 0"}],staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":function(t){e.limit=t,e.getData()},"current-change":e.handlePageChange}})],1)])],1),a("el-dialog",{attrs:{width:"600px",title:"add"===e.labelType?"新增标签":"edit"===e.labelType?"编辑标签":"",visible:e.addFlag,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFlag=t},close:e.dialogBeforeClose}},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:"add"===e.labelType||"edit"===e.labelType,expression:"labelType === 'add' || labelType === 'edit'"}],ref:"label",staticStyle:{"margin-top":"20px"},attrs:{model:e.label,rules:e.labelRules}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"delete"!==e.labelType,expression:"labelType !== 'delete'"}],attrs:{label:"选择分组","label-width":"100px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",size:"small"},model:{value:e.label.labelGroupId,callback:function(t){e.$set(e.label,"labelGroupId",t)},expression:"label.labelGroupId"}},e._l(e.groupSelectData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"标签名称","label-width":"100px",prop:"labelValue"}},[a("el-input",{attrs:{maxlength:"edit"===e.labelType?15:"",placeholder:"请输入标签（不得超过15个字符）",size:"small"},model:{value:e.label.labelValue,callback:function(t){e.$set(e.label,"labelValue",t)},expression:"label.labelValue"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"===e.labelType,expression:"labelType === 'add'"}],attrs:{label:"","label-width":"100px"}},[a("span",{staticStyle:{"font-size":"12px",color:"#999"}},[e._v("每个标签名称最多15个字，同时新建多个标签时，请用“空格” 隔开。")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"delete"===e.labelType,expression:"labelType === 'delete'"}],staticStyle:{"margin-top":"20px"}},[e._v(" 【"+e._s(e.label.labelValue)+"】一旦删除，归属于该分组的所有标签都将被移至【未分组】，确定删除分组吗? ")]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn-white",attrs:{size:"small"},on:{click:function(t){e.addFlag=!1}}},[e._v("取 消")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"},on:{click:e.handleLabelSubmit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{width:"600px",title:"add"===e.operationType?"新增分组":"edit"===e.operationType?"编辑分组":"delete"===e.operationType?"删除分组":"",visible:e.addGroupFlag,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addGroupFlag=t},close:e.dialogBeforeClose}},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:"add"===e.operationType||"edit"===e.operationType,expression:"operationType === 'add' || operationType === 'edit'"}],ref:"label",staticStyle:{"margin-top":"20px"},attrs:{model:e.label,rules:e.labelRules}},[a("el-form-item",{attrs:{label:"分组名称","label-width":"100px",prop:"labelGroupName"}},[a("el-input",{attrs:{placeholder:"请输入分组名（不得超过15个字符）",maxlength:"15",size:"small"},model:{value:e.label.labelGroupName,callback:function(t){e.$set(e.label,"labelGroupName",t)},expression:"label.labelGroupName"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"delete"===e.operationType,expression:"operationType === 'delete'"}],staticStyle:{"margin-top":"20px"}},[e._v(" 【"+e._s(e.label.labelGroupName)+"】一旦删除，归属于该分组的所有标签都将被移至【未分组】，确定删除分组吗? ")]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn-white",attrs:{size:"small"},on:{click:function(t){e.addGroupFlag=!1}}},[e._v("取 消")]),a("el-button",{staticClass:"btn-blue",attrs:{size:"small"},on:{click:e.handleSubmitGroup}},[e._v("确 定")])],1)],1)],1)},r=[],n=(a("a623"),a("4de4"),a("4160"),a("b0c0"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),i=a("365c"),s={data:function(){return{addGroupFlag:!1,addFlag:!1,page:1,total:0,limit:10,tableData:[],groupData:[],showCourse:!1,loading:!1,selectData:[],label:{labelGroupName:"",labelValue:"",labelGroupId:"",title:"",labelId:""},operationType:"",labelType:"",labelRules:{labelValue:[{required:!0,message:"请输入标签名称",trigger:"blur"}],labelGroupName:[{required:!0,message:"请输入标签组名称",trigger:"blur"}]},keyword:""}},watch:{keyword:function(e){e||this.reqGetStaffTagList()}},computed:{groupSelectData:function(){return this.groupData.filter((function(e){return e.id}))}},mounted:function(){var e=this;this.$bus.$on("update",(function(){e.getData()})),this.getData()},methods:{handlePageChange:function(e){this.page=e,this.getData()},getData:function(){var e=this;this.loading=!0;var t=[];t[0]=Object(i["xb"])({}),t[1]=Object(i["db"])({group_id:"",limit:this.limit,page:this.page,keyword:""}),Promise.all(t).then((function(t){e.loading=!1,200==t[0].code?0!=t[0].data.length?(e.groupData=JSON.parse(JSON.stringify(t[0].data)),e.groupData2=JSON.parse(JSON.stringify(t[0].data)),e.groupData.unshift({id:"",name:"所有"}),e.syncDate=t[0].data[0].update_at,e.$nextTick((function(){e.$refs.tree.setCurrentKey("")}))):e.groupData=[{id:"",name:"所有"}]:(e.$message.error(t[0].msg),e.groupData=[{id:"",name:"所有"}]),200==t[1].code?(e.tableData=t[1].data,e.total=t[1].count||0):(e.tableData=[],e.total=0,e.$message.error(t[1].msg))}))},reqAddStaffTagGroup:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function l(){var r;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,Object(i["w"])({id:e,name:t});case 2:r=l.sent,200===r.code?(a.addGroupFlag=!1,a.reqStaffTagGroup(),a.$message.success(r.msg)):a.$message.error(r.msg);case 4:case"end":return l.stop()}}),l)})))()},reqDeleteStaffTagGroup:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["F"])({id:e});case 2:l=a.sent,200===l.code?(t.reqStaffTagGroup(),t.addGroupFlag=!1,t.$message.success(l.msg)):t.$message.error(l.msg);case 4:case"end":return a.stop()}}),a)})))()},reqStaffTagGroup:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["xb"])({});case 2:a=t.sent,200==a.code?0!=a.data.length?(e.groupData=JSON.parse(JSON.stringify(a.data)),e.groupData.unshift({id:"",name:"所有"}),e.$nextTick((function(){e.$refs.tree.setCurrentKey("")}))):e.groupData=[{id:"",name:"所有"}]:(e.$message.error(a.msg),e.groupData=[{id:"",name:"所有"}]);case 4:case"end":return t.stop()}}),t)})))()},reqGetStaffTagList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["db"])({group_id:e.label.labelGroupId,page:e.page,limit:e.limit,keyword:e.keyword});case 2:a=t.sent,200===a.code?(e.$nextTick((function(){e.$refs.tree.setCurrentKey(e.label.labelGroupId)})),e.tableData=a.data,e.total=a.count||0):(e.tableData=[],e.total=0,e.$message.error(a.msg));case 4:case"end":return t.stop()}}),t)})))()},reqAddStaffTag:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["v"])(e);case 2:l=a.sent,200===l.code?(t.addFlag=!1,t.reqGetStaffTagList(),t.$message.success(l.msg)):t.$message.error(l.msg);case 4:case"end":return a.stop()}}),a)})))()},reqDeleteStaffTag:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["E"])(e);case 2:l=a.sent,200===l.code?(t.addFlag=!1,t.reqGetStaffTagList(),t.$message.success(l.msg)):t.$message.error(l.msg);case 4:case"end":return a.stop()}}),a)})))()},handleSubmitGroup:function(){var e=this;if("add"===this.operationType)this.$refs.label.validate((function(t){if(!t)return!1;e.reqAddStaffTagGroup("",e.label.labelGroupName)}));else{if("delete"===this.operationType)return this.reqDeleteStaffTagGroup(this.label.labelGroupId),!1;"edit"===this.operationType&&this.$refs.label.validate((function(t){if(!t)return!1;e.reqAddStaffTagGroup(e.label.labelGroupId,e.label.labelGroupName)}))}},dialogBeforeClose:function(){this.label.labelGroupName="",this.operationType="",this.labelType="",this.label.labelValue="",this.label.labelId="",this.$refs.label.clearValidate()},handleSelectionChange:function(e){this.selectData=e},handleTreeNode:function(e){this.label.labelGroupId=e.id,this.reqGetStaffTagList()},handleDeleteLabel:function(e){var t=this;this.$confirm("确认删除所选标签?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){t.reqDeleteStaffTag({id:[e.id]})}))},handleBatchDeleteLabel:function(){var e=this,t=[];this.selectData.forEach((function(e){t.push(e.id)})),this.$confirm("确认删除所选标签?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){e.reqDeleteStaffTag({id:t})}))},handleEditLabel:function(e){this.label.labelGroupId=e.group_id,this.label.labelValue=e.name,this.label.labelId=e.id,this.labelType="edit",this.addFlag=!0},handleCommand:function(e,t){this.operationType=e,this.label.labelGroupId=t.id,this.label.labelGroupName=t.name,this.addGroupFlag=!0},handleLabelSubmit:function(){var e=this;"add"===this.labelType?this.$refs.label.validate((function(t){if(!t)return!1;var a=[],l=!0;a=e.label.labelValue.split(" "),a=a.filter((function(e){return e})),l=a.every((function(e){return e.length<=15})),l?(console.log(a),e.reqAddStaffTag({name:a,group_id:e.label.labelGroupId})):e.$message.warning("每个标签最多15个字")})):"edit"===this.labelType&&this.$refs.label.validate((function(t){if(!t)return!1;e.reqAddStaffTag({id:e.label.labelId,name:e.label.labelValue,group_id:e.label.labelGroupId})}))},handleSearch:function(){this.keyword&&this.reqGetStaffTagList()}}},o=s,d=(a("9c0a"),a("2877")),c=Object(d["a"])(o,l,r,!1,null,"6310f3d3",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f33e5ed8.9b00d142.js.map