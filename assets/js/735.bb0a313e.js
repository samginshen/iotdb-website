(window.webpackJsonp=window.webpackJsonp||[]).push([[735],{1199:function(t,a,e){"use strict";e.r(a);var r=e(49),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"查询引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询引擎"}},[t._v("#")]),t._v(" 查询引擎")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625242-f648a100-467e-11ea-921c-b954a3ecae7a.png"}}),t._v(" "),e("h2",{attrs:{id:"设计思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计思想"}},[t._v("#")]),t._v(" 设计思想")]),t._v(" "),e("p",[t._v("查询引擎负责所有用户命令的解析、生成计划、交给对应的执行器、返回结果集。")]),t._v(" "),e("h2",{attrs:{id:"相关类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关类"}},[t._v("#")]),t._v(" 相关类")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("org.apache.iotdb.db.service.TSServiceImpl")]),t._v(" "),e("p",[t._v("IoTDB 服务器端 RPC 实现，与客户端进行直接交互。")])]),t._v(" "),e("li",[e("p",[t._v("org.apache.iotdb.db.qp.Planner")]),t._v(" "),e("p",[t._v("解析 SQL，生成逻辑计划，逻辑优化，生成物理计划。")])]),t._v(" "),e("li",[e("p",[t._v("org.apache.iotdb.db.qp.executor.PlanExecutor")]),t._v(" "),e("p",[t._v("分发物理计划给对应的执行器，主要包括以下四个具体的执行器。")]),t._v(" "),e("ul",[e("li",[t._v("MManager: 元数据操作")]),t._v(" "),e("li",[t._v("StorageEngine: 数据写入")]),t._v(" "),e("li",[t._v("QueryRouter: 数据查询")]),t._v(" "),e("li",[t._v("LocalFileAuthorizer: 权限操作")])])]),t._v(" "),e("li",[e("p",[t._v("org.apache.iotdb.db.query.dataset.*")]),t._v(" "),e("p",[t._v("分批构造结果集返回给客户端，包含部分查询逻辑。")])])]),t._v(" "),e("h2",{attrs:{id:"查询流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询流程"}},[t._v("#")]),t._v(" 查询流程")]),t._v(" "),e("ul",[e("li",[t._v("SQL 解析")]),t._v(" "),e("li",[t._v("生成逻辑计划")]),t._v(" "),e("li",[t._v("生成物理计划")]),t._v(" "),e("li",[t._v("构造结果集生成器")]),t._v(" "),e("li",[t._v("分批返回结果集")])]),t._v(" "),e("h2",{attrs:{id:"相关文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[t._v("#")]),t._v(" 相关文档")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/SystemDesign/QueryEngine/Planner.html"}},[t._v("查询计划生成器")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/SystemDesign/QueryEngine/PlanExecutor.html"}},[t._v("计划执行器")])],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);