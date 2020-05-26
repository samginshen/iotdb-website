(window.webpackJsonp=window.webpackJsonp||[]).push([[1212],{1677:function(a,t,e){"use strict";e.r(t);var s=e(49),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据管理"}},[a._v("#")]),a._v(" 数据管理")]),a._v(" "),e("p",[a._v("本节将介绍IoTDB的数据存储方式，便于您对IoTDB的数据管理有一个直观的了解。")]),a._v(" "),e("p",[a._v("IoTDB需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。")]),a._v(" "),e("h2",{attrs:{id:"数据文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[a._v("#")]),a._v(" 数据文件")]),a._v(" "),e("p",[a._v("数据文件存储了用户写入IoTDB系统的所有数据。包含TsFile文件和其他文件，其中，TsFile文件可以通过配置项"),e("code",[a._v("tsfile_dir")]),a._v("配置存储路径（详情见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("tsfile_dir配置项")]),a._v("），其他文件可通过"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("data_dir配置项")]),a._v("进行配置。")],1),a._v(" "),e("p",[a._v("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB为TsFile的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("tsfile_dir配置项")]),a._v("），并可以指定或自定义目录选择策略（详情见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("mult_dir_strategy配置项")]),a._v("）。")],1),a._v(" "),e("h2",{attrs:{id:"系统文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统文件"}},[a._v("#")]),a._v(" 系统文件")]),a._v(" "),e("p",[a._v("系统文件包括Restore文件和Schema文件，存储了数据文件的元数据信息。可通过sys_dir配置项进行配置（详情见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("sys_dir配置项")]),a._v("）。")],1),a._v(" "),e("h2",{attrs:{id:"写前日志文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写前日志文件"}},[a._v("#")]),a._v(" 写前日志文件")]),a._v(" "),e("p",[a._v("写前日志文件存储了系统的写前日志。可通过"),e("code",[a._v("wal_dir")]),a._v("配置项进行配置（详情见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[a._v("wal_dir配置项")]),a._v("）。")],1),a._v(" "),e("h2",{attrs:{id:"数据存储目录设置举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据存储目录设置举例"}},[a._v("#")]),a._v(" 数据存储目录设置举例")]),a._v(" "),e("p",[a._v("接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。")]),a._v(" "),e("p",[a._v("IoTDB涉及到的所有数据目录路径有：data_dir, tsfile_dir, mult_dir_strategy, sys_dir和wal_dir，它们分别涉及的是IoTDB的数据文件、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项（关于各个配置项的具体内容见本文第5.2.2.2.2节）。")]),a._v(" "),e("p",[a._v("以下我们给出一个用户对五个目录都进行自行配置的例子。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("data_dir = D:\\\\iotdb\\\\data\\\\data  \ntsfile_dir = E:\\\\iotdb\\\\data\\\\data1, data\\\\data2, F:\\\\data3 \nmult_dir_strategy = MaxDiskUsableSpaceFirstStrategy\nsys_dir = data\\\\system\nwal_dir = data\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("按照上述配置，系统会：")]),a._v(" "),e("ul",[e("li",[a._v("将除TsFile之外的数据文件存储在D:\\iotdb\\data\\data")]),a._v(" "),e("li",[a._v("将TsFile存储在路径E:\\iotdb\\data\\data1、路径%IOTDB_HOME%\\data\\data2和路径F:\\data3中。且对这三个路径的选择策略是："),e("code",[a._v("优先选择磁盘剩余空间最大的目录")]),a._v("，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入")]),a._v(" "),e("li",[a._v("将TsFile之外的其他数据文件存储在路径D:\\iotdb\\data\\data中")]),a._v(" "),e("li",[a._v("将系统文件存储在%IOTDB_HOME%\\data\\system")]),a._v(" "),e("li",[a._v("将写前日志文件存储在%IOTDB_HOME%\\data")])]),a._v(" "),e("blockquote",[e("p",[a._v("如果对上述TsFile的目录进行了修改，那么需要将旧目录中的所有TsFile移动到新的目录中，并且要严格按照目录的顺序。\n如果您在TsFile的目录中增加了新路径，那么IoTDB会直接将该目录纳入到多目录选择的范围中，用户无需有其他的操作。")])]),a._v(" "),e("p",[a._v("例如，将tsfile_dir修改为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("D:\\\\data4, E:\\\\data5, F:\\\\data6\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("那么就需要将E:\\iotdb\\data\\data1中的文件移动到D:\\data4，%IOTDB_HOME%\\data\\data2的文件移动到E:\\data5，F:\\data3的文件移动到F:\\data6。系统即可继续正常运行。")])])}),[],!1,null,null,null);t.default=r.exports}}]);