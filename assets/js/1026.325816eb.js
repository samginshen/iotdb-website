(window.webpackJsonp=window.webpackJsonp||[]).push([[1026],{1347:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("用户使用"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("UPDATE语句")]),t._v("可以更新指定的时间序列中一段时间的数据。在更新数据时，用户可以选择需要更新的一个时间序列（0.8.2版本暂不支持多个时间序列的更新）并指定更新某个时间点或时间段的数据（0.8.2版本必须有时间过滤条件）。")],1),t._v(" "),s("p",[t._v("在JAVA编程环境中，您可以使用"),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[t._v("JDBC API")]),t._v("单条或批量执行UPDATE语句。")],1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("以测控ln集团wf02子站wt02设备供电状态为例，存在这样的使用场景：")]),t._v(" "),s("p",[t._v("当数据接入并分析后，发现从2017-11-01 15:54:00到2017-11-01 16:00:00内的供电状态为true，但实际供电状态存在异常。需要将这段时间状态更新为false。进行此操作的SQL语句为：")]),t._v(" "),t._m(3),s("p",[t._v("需要注意的是，当更新数据类型与实际类型不符时，IoTDB会给出相应的错误提示：")]),t._v(" "),t._m(4),s("p",[t._v("当更新的列不存在时，IoTDB给出没有存在的路径的错误提示：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("用户使用"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("DELETE语句")]),t._v("可以删除指定的时间序列中符合时间删除条件的数据。在删除数据时，用户可以选择需要删除的一个或多个时间序列、时间序列的前缀、时间序列带*路径对某时间之前的数据进行删除（0.8.2版本暂不支持删除某一闭时间区间范围内的数据）。")],1),t._v(" "),s("p",[t._v("在JAVA编程环境中，您可以使用"),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[t._v("JDBC API")]),t._v("单条或批量执行UPDATE语句。")],1),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("以测控ln集团为例，存在这样的使用场景：")]),t._v(" "),s("p",[t._v("wf02子站的wt02设备在2017-11-01 16:26:00之前的供电状态出现多段错误，且无法分析其正确数据，错误数据影响了与其他设备的关联分析。此时，需要将此时间段前的数据删除。进行此操作的SQL语句为：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("当ln集团wf02子站的wt02设备在2017-11-01 16:26:00之前的供电状态和设备硬件版本都需要删除，此时可以使用含义更广的"),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[t._v("前缀路径或带"),s("code",[t._v("*")]),t._v("路径")]),t._v("进行删除操作，进行此操作的SQL语句为：")],1),t._v(" "),t._m(10),s("p",[t._v("或")]),t._v(" "),t._m(11),s("p",[t._v("需要注意的是，当删除的路径不存在时，IoTDB会提示路径不存在，无法删除数据，如下所示。")]),t._v(" "),t._m(12)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据维护"}},[this._v("#")]),this._v(" 数据维护")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据更新"}},[this._v("#")]),this._v(" 数据更新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"单传感器时间序列值更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单传感器时间序列值更新"}},[this._v("#")]),this._v(" 单传感器时间序列值更新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("update root.ln.wf02 SET wt02.status = false where time <=2017-11-01T16:00:00 and time >= 2017-11-01T15:54:00\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> update root.ln.wf02 set wt02.status = 1205 where time < now()\nerror: The BOOLEAN data type should be true/TRUE or false/FALSE\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> update root.ln.wf02 set wt02.sta = false where time < now()\nMsg: do not select any existing series\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据删除"}},[this._v("#")]),this._v(" 数据删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"单传感器时间序列值删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单传感器时间序列值删除"}},[this._v("#")]),this._v(" 单传感器时间序列值删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02.status where time<=2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"多传感器时间序列值删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多传感器时间序列值删除"}},[this._v("#")]),this._v(" 多传感器时间序列值删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02 where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("delete from root.ln.wf02.wt02.* where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> delete from root.ln.wf03.wt02.status where time < now()\nMsg: TimeSeries does not exist and its data cannot be deleted\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])}],!1,null,null,null);e.default=r.exports}}]);