(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{743:function(t,e,a){"use strict";a.r(e);var i=a(1),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("In IoTDB, there are many kinds of data needed to be storage. In this section, we will introduce IoTDB's data storage strategy in order to give you an intuitive understanding of IoTDB's data management.")]),t._v(" "),a("p",[t._v("The data that IoTDB stores is divided into three categories, namely data files, system files, and pre-write log files.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),a("code",[t._v("tsfile_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("file layer")]),t._v(" for details). Other files can be configured through "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("data_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("Engine Layer")]),t._v(" for details).")],1),t._v(" "),a("p",[t._v("In order to better support users' storage requirements such as disk space expansion, IoTDB supports multiple file directorys storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("tsfile_dir")]),t._v(" configuration item), and you can specify or customize the directory selection policy (see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("mult_dir_strategy")]),t._v(" configuration item for details).")],1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("System files include restore files and schema files, which store metadata information of data in IoTDB. It can be configured through the "),a("code",[t._v("sys_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("System Layer")]),t._v(" for details).")],1),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Pre-write log files store WAL files. It can be configured through the "),a("code",[t._v("wal_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("System Layer")]),t._v(" for details).")],1),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("For a clearer understanding of configuring the data storage directory, we will give an excample in this section.")]),t._v(" "),a("p",[t._v("All data directory paths involved in storage directory setting are: data_dir, tsfile_dir, mult_dir_strategy, sys_dir, and wal_dir, which refer to data files, stroage strategy, system files, and pre-write log files. You can choose to configure the items you'd like to change, otherwise, you can use the system default configuration item without any operation.")]),t._v(" "),a("p",[t._v("Here we give an example of a user who configures all five configurations mentioned above. The configuration items are as follow:")]),t._v(" "),t._m(5),a("p",[t._v("After setting the configuration, the system will:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("For example, modify the tsfile_dir to:")]),t._v(" "),t._m(8),a("p",[t._v("You need to move files in E:\\iotdb\\data\\data1 to D:\\data4, move files in %IOTDB_HOME%\\data\\data2 to E:\\data5, move files in F:\\data3 to F:\\data6. In this way, the system will operation normally.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-management"}},[this._v("#")]),this._v(" Data Management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-files"}},[this._v("#")]),this._v(" Data Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"system-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-files"}},[this._v("#")]),this._v(" System Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pre-write-log-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-write-log-files"}},[this._v("#")]),this._v(" Pre-write Log Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-of-setting-data-storage-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-of-setting-data-storage-directory"}},[this._v("#")]),this._v(" Example of Setting Data storage Directory")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("data_dir = D:\\\\iotdb\\\\data\\\\data  \ntsfile_dir = E:\\\\iotdb\\\\data\\\\data1, data\\\\data2, F:\\\\data3 \nmult_dir_strategy = MaxDiskUsableSpaceFirstStrategy\nsys_dir = data\\\\system\nwal_dir = data\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Save all data files except TsFile in D:\\iotdb\\data\\data")]),t._v(" "),a("li",[t._v("Save TsFile in E:\\iotdb\\data\\data1, $IOTDB_HOME\\data\\data2 and F:\\data3. And the choosing strategy is "),a("code",[t._v("MaxDiskUsableSpaceFirstStrategy")]),t._v(", that is every time data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.")]),t._v(" "),a("li",[t._v("Save system data in $IOTDB_HOME\\data\\system")]),t._v(" "),a("li",[t._v("Save WAL data in $IOTDB_HOME\\data")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note:")]),this._v(" "),e("p",[this._v("If you change directory names in tsfile_dir, the newer name and the older name should be one-to-one correspondence. Also, the files in the older directory needs to be moved to the newer directory.")]),this._v(" "),e("p",[this._v("If you add some directorys in tsfile_dir, IoTDB will add the path automatically. Nothing needs to do by your own.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("tsfile_dir = D:\\\\data4, E:\\\\data5, F:\\\\data6\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=s.exports}}]);