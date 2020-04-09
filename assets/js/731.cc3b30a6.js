(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1051:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("According to the storage model we can set up the corresponding storage group. The SQL statements for creating storage groups are as follows:")]),e._v(" "),e._m(2),s("p",[e._v("We can thus create two storage groups using the above two SQL statements.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),s("p",[e._v("After the storage group is created, we can use the "),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[e._v("SHOW STORAGE GROUP")]),e._v(" statement to view all the storage groups. The SQL statement is as follows:")],1),e._v(" "),e._m(6),s("p",[e._v("The result is as follows:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:")]),e._v(" "),e._m(8),s("p",[e._v("It is worth noting that when in the CRATE TIMESERIES statement the encoding method conflicts with the data type, the system will give the corresponding error prompt as shown below:")]),e._v(" "),e._m(9),s("p",[e._v("Please refer to "),s("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[e._v("Encoding")]),e._v(" for correspondence between data type and encoding.")],1),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("Currently, IoTDB supports two ways of viewing timeseries:")]),e._v(" "),e._m(11),e._v(" "),e._m(12),s("p",[e._v("The results are shown below respectly:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),e._v(" "),s("p",[e._v("It is worth noting that when the queried path does not exist, the system will return no timeseries.")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),s("p",[e._v("For example, if there are several timeseires (use "),s("code",[e._v("show timeseries")]),e._v(" to show all timeseries):\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"}})])],1),e._v(" "),s("p",[e._v("Then the Metadata Tree will be as below:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})])],1),e._v(" "),e._m(17),e._v(" "),e._m(18),s("p",[e._v("You will get following results:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),s("p",[e._v("As for the above mentioned example and Metadata tree, you can get following results:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"}})]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("The usage are as follows:")]),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),s("p",[e._v("IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.")]),e._v(" "),e._m(32),e._v(" "),s("p",[e._v("The SQL Statement for setting TTL is as follow:")]),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),e._v(" "),s("p",[e._v("To unset TTL, we can use follwing SQL statement:")]),e._v(" "),e._m(36),e._m(37)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"ddl-data-definition-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddl-data-definition-language"}},[this._v("#")]),this._v(" DDL (Data Definition Language)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-storage-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-storage-group"}},[this._v("#")]),this._v(" Create Storage Group")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set "),t("code",[this._v("root.ln.wf01")]),this._v(" as a storage group when there exist two storage groups "),t("code",[this._v("root.ln")]),this._v(" and "),t("code",[this._v("root.sgcc")]),this._v(". The system will give the corresponding error prompt as shown below:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"show-storage-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-storage-group"}},[this._v("#")]),this._v(" Show Storage Group")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show storage group\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-timeseries"}},[this._v("#")]),this._v(" Create Timeseries")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"show-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries"}},[this._v("#")]),this._v(" Show Timeseries")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("SHOW TIMESERIES statement presents all timeseries information in JSON form")]),e._v(" "),s("li",[e._v("SHOW TIMESERIES <"),s("code",[e._v("Path")]),e._v("> statement returns all timeseries information and the total number of timeseries under the given <"),s("code",[e._v("Path")]),e._v(">  in tabular form. timeseries information includes: timeseries path, storage group it belongs to, data type, encoding type.  <"),s("code",[e._v("Path")]),e._v("> needs to be a prefix path or a path with star or a timeseries path. SQL statements are as follows:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"count-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#count-timeseries"}},[this._v("#")]),this._v(" Count Timeseries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("IoTDB is able to use "),t("code",[this._v("COUNT TIMESERIES <Path>")]),this._v(" to count the number of timeseries in the path. SQL statements are as follows:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Besides, "),t("code",[this._v("LEVEL")]),this._v(" could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: "),t("code",[this._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As can be seen, "),t("code",[this._v("root")]),this._v(" is considered as "),t("code",[this._v("LEVEL=0")]),this._v(". So when you enter statements such as:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"count-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#count-nodes"}},[this._v("#")]),this._v(" Count Nodes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("IoTDB is able to use "),t("code",[this._v("COUNT NODES <Path> LEVEL=<INTEGER>")]),this._v(" to count the number of nodes at the given level in current Metadata Tree. This could be used to query the number of devices. The usage are as follows:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"delete-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-timeseries"}},[this._v("#")]),this._v(" Delete Timeseries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To delete the timeseries we created before, we are able to use "),t("code",[this._v("DELETE TimeSeries <PrefixPath>")]),this._v(" statement.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"show-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-devices"}},[this._v("#")]),this._v(" Show Devices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Similar to "),t("code",[this._v("Show Timeseries")]),this._v(", IoTDB also supports two ways of viewing devices:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("SHOW DEVICES")]),e._v(" statement presents all devices information, which is equal to "),s("code",[e._v("SHOW DEVICES root")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("SHOW DEVICES <PrefixPath>")]),e._v(" statement specifies the "),s("code",[e._v("PrefixPath")]),e._v(" and returns the devices information under the given level.\nSQL statement is as follows:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[this._v("#")]),this._v(" TTL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"set-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-ttl"}},[this._v("#")]),this._v(" Set TTL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> set ttl to root.ln 3600000\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This example means that for data in "),t("code",[this._v("root.ln")]),this._v(", only that of the latest 1 hour will remain, the older one is removed or made invisible.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"unset-ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unset-ttl"}},[this._v("#")]),this._v(" Unset TTL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> unset ttl to root.ln\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After unset TTL, all data will be accepted in "),t("code",[this._v("root.ln")])])}],!1,null,null,null);t.default=i.exports}}]);