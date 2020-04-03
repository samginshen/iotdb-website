(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1035:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("IoTDB为用户提供多种插入实时数据的方式，例如在"),s("router-link",{attrs:{to:"./../4-Client/1-Command Line Interface.html"}},[t._v("Cli/Shell工具")]),t._v("中直接输入插入数据的INSERT语句，或使用Java API（标准"),s("router-link",{attrs:{to:"./../4-Client/2-Programming - JDBC.html"}},[t._v("Java JDBC")]),t._v("接口）单条或批量执行插入数据的INSERT语句。")],1),t._v(" "),s("p",[t._v("本节主要为您介绍实时数据接入的INSERT语句在场景中的实际使用示例，有关INSERT SQL语句的详细语法请参见本文"),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("INSERT语句")]),t._v("节。")],1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("使用INSERT语句可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的时间戳和一个数值或布尔值、字符串类型的传感器采集值组成。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("单列数据插入示例代码如下：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("INSERT语句还可以支持在同一个时间点下多列数据的插入，同时向2时间点插入上述两个时间序列的值，多列数据插入示例代码如下：")]),t._v(" "),t._m(7),s("p",[t._v("插入数据后我们可以使用SELECT语句简单查询已插入的数据。")]),t._v(" "),t._m(8),s("p",[t._v("结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51605021-c2ee1500-1f48-11e9-8f6b-ba9b48875a41.png"}})])],1),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("若用户向一个不存在的时间序列中插入数据，例如执行以下命令：")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),s("p",[t._v("若用户插入的数据类型与该Timeseries对应的数据类型不一致，例如执行以下命令：")]),t._v(" "),t._m(13),s("p",[t._v("系统将会返回以下ERROR告知数据类型有误：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("本节主要介绍时间切片查询的相关示例，主要使用的是"),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("IoTDB SELECT语句")]),t._v("。同时，您也可以使用"),s("router-link",{attrs:{to:"./../4-Client/2-Programming - JDBC.html"}},[t._v("Java JDBC")]),t._v("标准接口来执行相关的查询语句。")],1),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("SQL语句为：")]),t._v(" "),t._m(18),s("p",[t._v("其含义为：")]),t._v(" "),s("p",[t._v("被选择的设备为ln集团wf01子站wt01设备；被选择的时间序列为温度传感器（temperature）；该语句要求选择出该设备在“2017-11-01T00:08:00.000”（此处可以使用多种时间格式，详情可参看"),s("router-link",{attrs:{to:"./../2-Concept/1-Data Model and Terminology.html"}},[t._v("2.1节")]),t._v("）时间点以前的所有温度传感器的值。")],1),t._v(" "),s("p",[t._v("该SQL语句的执行结果如下：")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/23614968/61280074-da1c0a00-a7e9-11e9-8eb8-3809428043a8.png"}})]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("SQL语句为：")]),t._v(" "),t._m(20),s("p",[t._v("其含义为：")]),t._v(" "),s("p",[t._v("被选择的设备为ln集团wf01子站wt01设备；被选择的时间序列为供电状态（status）和温度传感器（temperature）；该语句要求选择出“2017-11-01T00:05:00.000”至“2017-11-01T00:12:00.000”之间的所选时间序列的值。")]),t._v(" "),s("p",[t._v("该SQL语句的执行结果如下：")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/23614968/61280328-40a12800-a7ea-11e9-85b9-3b8db67673a3.png"}})]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("IoTDB支持在一次查询中指定多个时间区间条件，用户可以根据需求随意组合时间区间条件。例如，")]),t._v(" "),s("p",[t._v("SQL语句为：")]),t._v(" "),t._m(22),s("p",[t._v("其含义为：")]),t._v(" "),s("p",[t._v("被选择的设备为ln集团wf01子站wt01设备；被选择的时间序列为“供电状态（status）”和“温度传感器（temperature）”；该语句指定了两个不同的时间区间，分别为“2017-11-01T00:05:00.000至2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000至2017-11-01T16:37:00.000”；该语句要求选择出满足任一时间区间的被选时间序列的值。")]),t._v(" "),s("p",[t._v("该SQL语句的执行结果如下：\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/23614968/61280449-780fd480-a7ea-11e9-8ed0-70fa9dfda80f.png"}})])],1),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("该系统支持在一次查询中选择任意列的数据，也就是说，被选择的列可以来源于不同的设备。例如，SQL语句为：")]),t._v(" "),t._m(24),s("p",[t._v("其含义为：")]),t._v(" "),s("p",[t._v("被选择的时间序列为“ln集团wf01子站wt01设备的供电状态”以及“ln集团wf02子站wt02设备的硬件版本”；该语句指定了两个时间区间，分别为“2017-11-01T00:05:00.000至2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000至2017-11-01T16:37:00.000”；该语句要求选择出满足任意时间区间的被选时间序列的值。")]),t._v(" "),s("p",[t._v("该SQL语句的执行结果如下：\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577450-dcfe0800-1ef4-11e9-9399-4ba2b2b7fb73.jpg"}})])],1),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("本章节主要介绍降频聚合查询的相关示例，主要使用的是IoTDB SELECT语句的"),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("GROUP BY子句")]),t._v("，该子句是IoTDB中用于根据用户给定划分条件对结果集进行划分，并对已划分的结果集进行聚合计算的语句。IoTDB支持根据时间间隔对结果集进行划分，默认结果按照时间升序排列。同时，您也可以使用Java JDBC标准接口来执行相关的查询语句。")],1),t._v(" "),s("p",[t._v("GROUP BY语句为用户提供三类指定参数：")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("用户使用"),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("DELETE语句")]),t._v("可以删除指定的时间序列中符合时间删除条件的数据。在删除数据时，用户可以选择需要删除的一个或多个时间序列、时间序列的前缀、时间序列带*路径对某时间之前的数据进行删除（当前版本暂不支持删除某一闭时间区间范围内的数据）。")],1),t._v(" "),s("p",[t._v("在JAVA编程环境中，您可以使用JDBC API单条或批量执行DELETE语句。")]),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("以测控ln集团为例，存在这样的使用场景：")]),t._v(" "),s("p",[t._v("wf02子站的wt02设备在2017-11-01 16:26:00之前的供电状态出现多段错误，且无法分析其正确数据，错误数据影响了与其他设备的关联分析。此时，需要将此时间段前的数据删除。进行此操作的SQL语句为：")]),t._v(" "),t._m(30),t._m(31),t._v(" "),s("p",[t._v("当ln集团wf02子站的wt02设备在2017-11-01 16:26:00之前的供电状态和设备硬件版本都需要删除，此时可以使用含义更广的"),s("router-link",{attrs:{to:"./../2-Concept/1-Data Model and Terminology.html"}},[t._v("前缀路径或带"),s("code",[t._v("*")]),t._v("路径")]),t._v("进行删除操作，进行此操作的SQL语句为：")],1),t._v(" "),t._m(32),s("p",[t._v("或")]),t._v(" "),t._m(33),s("p",[t._v("需要注意的是，当删除的路径不存在时，IoTDB会提示路径不存在，无法删除数据，如下所示。")]),t._v(" "),t._m(34)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dml-数据操作语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dml-数据操作语言"}},[this._v("#")]),this._v(" DML (数据操作语言)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据接入"}},[this._v("#")]),this._v(" 数据接入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用insert语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用insert语句"}},[this._v("#")]),this._v(" 使用INSERT语句")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在本节的场景实例下，以其中的两个时间序列"),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v("和"),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v("为例 ，它们的数据类型分别为BOOLEAN和TEXT。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp,status) values(1,true)\nIoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1, "v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以上示例代码将长整型的timestamp以及值为true的数据插入到时间序列"),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v("中和将长整型的timestamp以及值为”v1”的数据插入到时间序列"),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v("中。执行成功后会返回执行时间，代表数据插入已完成。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：在IoTDB中，TEXT类型的数据单双引号都可以来表示,上面的插入语句是用的是双引号表示TEXT类型数据，下面的示例将使用单引号表示TEXT类型数据。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp, status, hardware) VALUES (2, false, 'v2')\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > select * from root.ln.wf02 where time < 3\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"insert语句的错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert语句的错误处理"}},[this._v("#")]),this._v(" INSERT语句的错误处理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp, temperature) values(1,"v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("由于"),e("code",[this._v("root.ln.wf02.wt02. temperature")]),this._v("时间序列不存在，系统将会返回以下ERROR告知该Timeseries路径不存在：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Msg: Current deviceId[root.ln.wf02.wt02] does not contains measurement:temperature\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1,100)\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("error: The TEXT data type should be covered by \" or '\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据查询"}},[this._v("#")]),this._v(" 数据查询")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"时间切片查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间切片查询"}},[this._v("#")]),this._v(" 时间切片查询")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"根据一个时间区间选择一列数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据一个时间区间选择一列数据"}},[this._v("#")]),this._v(" 根据一个时间区间选择一列数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select temperature from root.ln.wf01.wt01 where time < 2017-11-01T00:08:00.000\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"根据一个时间区间选择多列数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据一个时间区间选择多列数据"}},[this._v("#")]),this._v(" 根据一个时间区间选择多列数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select status, temperature from root.ln.wf01.wt01 where time > 2017-11-01T00:05:00.000 and time < 2017-11-01T00:12:00.000;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"按照多个时间区间选择同一设备的多列数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按照多个时间区间选择同一设备的多列数据"}},[this._v("#")]),this._v(" 按照多个时间区间选择同一设备的多列数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select status,temperature from root.ln.wf01.wt01 where (time > 2017-11-01T00:05:00.000 and time < 2017-11-01T00:12:00.000) or (time >= 2017-11-01T16:35:00.000 and time <= 2017-11-01T16:37:00.000);\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"按照多个时间区间选择不同设备的多列数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按照多个时间区间选择不同设备的多列数据"}},[this._v("#")]),this._v(" 按照多个时间区间选择不同设备的多列数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select wf01.wt01.status,wf02.wt02.hardware from root.ln where (time > 2017-11-01T00:05:00.000 and time < 2017-11-01T00:12:00.000) or (time >= 2017-11-01T16:35:00.000 and time <= 2017-11-01T16:37:00.000);\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"降频聚合查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降频聚合查询"}},[this._v("#")]),this._v(" 降频聚合查询")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("参数1：划分时间轴的时间间隔参数")]),this._v(" "),e("li",[this._v("参数2：时间轴划分原点参数（可选参数）")]),this._v(" "),e("li",[this._v("参数3：时间轴显示时间窗参数（一个或多个）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据维护"}},[this._v("#")]),this._v(" 数据维护")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据删除"}},[this._v("#")]),this._v(" 数据删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"单传感器时间序列值删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单传感器时间序列值删除"}},[this._v("#")]),this._v(" 单传感器时间序列值删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02.status where time<=2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"多传感器时间序列值删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多传感器时间序列值删除"}},[this._v("#")]),this._v(" 多传感器时间序列值删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02 where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02.* where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> delete from root.ln.wf03.wt02.status where time < now()\nMsg: TimeSeries does not exist and its data cannot be deleted\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])}],!1,null,null,null);e.default=r.exports}}]);