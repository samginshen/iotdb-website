(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1083:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Before importing data to IoTDB, we first select the appropriate data storage model according to the "),s("router-link",{attrs:{to:"./../3-Operation Manual/1-Sample Data.html"}},[t._v("sample data")]),t._v(", and then create the storage group and timeseries using "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("SET STORAGE GROUP")]),t._v(" statement and "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("CREATE TIMESERIES")]),t._v(" statement respectively.")],1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("According to the data attribute layers described in "),s("router-link",{attrs:{to:"./../3-Operation Manual/1-Sample Data.html"}},[t._v("sample data")]),t._v(', we can express it as an attribute hierarchy structure based on the coverage of attributes and the subordinate relationship between them, as shown in Figure 3.1 below. Its hierarchical relationship is: power group layer - power plant layer - device layer - sensor layer. ROOT is the root node, and each node of sensor layer is called a leaf node. In the process of using IoTDB, you can directly connect the attributes on the path from ROOT node to each leaf node with ".", thus forming the name of a timeseries in IoTDB. For example, The left-most path in Figure 3.1 can generate a timeseries named '),s("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v(".")],1),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577327-7aa50780-1ef4-11e9-9d75-cadabb62444e.jpg"}})]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("After getting the name of the timeseries, we need to set up the storage group according to the actual scenario and scale of the data. Because in the scenario of this chapter data is usually arrived in the unit of groups (i.e., data may be across electric fields and devices), in order to avoid frequent switching of IO when writing data, and to meet the user's requirement of physical isolation of data in the unit of  groups, we set the storage group at the group layer.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("After selecting the storage model, according to which we can set up the corresponding storage group. The SQL statements for creating storage groups are as follows:")]),t._v(" "),t._m(5),s("p",[t._v("We can thus create two storage groups using the above two SQL statements.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("After the storage group is created, we can use the "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("SHOW STORAGE GROUP")]),t._v(" statement to view all the storage groups. The SQL statement is as follows:")],1),t._v(" "),t._m(9),s("p",[t._v("The result is as follows:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:")]),t._v(" "),t._m(11),s("p",[t._v("It is worth noting that when in the CRATE TIMESERIES statement the encoding method conflicts with the data type, the system will give the corresponding error prompt as shown below:")]),t._v(" "),t._m(12),s("p",[t._v("Please refer to "),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("Encoding")]),t._v(" for correspondence between data type and encoding.")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Currently, IoTDB supports two ways of viewing timeseries:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),s("p",[t._v("The results are shown below respectly:")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),t._v(" "),s("p",[t._v("It is worth noting that when the queried path does not exist, the system will return no timeseries.")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("Version 0.8.2 imposes some limitations on the scale of data that users can operate:")]),t._v(" "),s("p",[t._v("Limit 1: Assuming that the JVM memory allocated to IoTDB at runtime is p and the user-defined size of data in memory written to disk ("),s("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("group_size_in_byte")]),t._v(") is Q, then the number of storage groups should not exceed p/q.")],1),t._v(" "),s("p",[t._v("Limit 2: The number of timeseries should not exceed the ratio of JVM memory allocated to IoTDB at run time to 20KB.")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data-model-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model-selection"}},[this._v("#")]),this._v(" Data Model Selection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-model-selection-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model-selection-2"}},[this._v("#")]),this._v(" Data Model Selection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"storage-model-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage-model-selection"}},[this._v("#")]),this._v(" Storage Model Selection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Figure 3.1 Attribute hierarchy structure")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"storage-group-creation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage-group-creation"}},[this._v("#")]),this._v(" Storage Group Creation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set "),e("code",[this._v("root.ln.wf01")]),this._v(" as a storage group when there exist two storage groups "),e("code",[this._v("root.ln")]),this._v(" and "),e("code",[this._v("root.sgcc")]),this._v(". The system will give the corresponding error prompt as shown below:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"show-storage-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-storage-group"}},[this._v("#")]),this._v(" Show Storage Group")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> show storage group\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"timeseries-creation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeseries-creation"}},[this._v("#")]),this._v(" Timeseries Creation")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"show-timeseries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries"}},[this._v("#")]),this._v(" Show Timeseries")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("SHOW TIMESERIES statement presents all timeseries information in JSON form")]),t._v(" "),s("li",[t._v("SHOW TIMESERIES <"),s("code",[t._v("Path")]),t._v("> statement returns all timeseries information and the total number of timeseries under the given <"),s("code",[t._v("Path")]),t._v(">  in tabular form. timeseries information includes: timeseries path, storage group it belongs to, data type, encoding type.  <"),s("code",[t._v("Path")]),t._v("> needs to be a prefix path or a path with star or a timeseries path. SQL statements are as follows:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"precautions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#precautions"}},[this._v("#")]),this._v(" Precautions")])}],!1,null,null,null);e.default=r.exports}}]);