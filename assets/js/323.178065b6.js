(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{884:function(e,t,s){"use strict";s.r(t);var v=s(69),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"加载外部tsfile文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载外部tsfile文件"}},[e._v("#")]),e._v(" 加载外部tsfile文件")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%8A%A0%E8%BD%BD%E5%A4%96%E9%83%A8tsfile%E6%96%87%E4%BB%B6"}},[e._v("加载外部tsfile文件")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[e._v("介绍")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F"}},[e._v("使用方式")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%8A%A0%E8%BD%BDtsfile%E6%96%87%E4%BB%B6"}},[e._v("加载tsfile文件")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%A0%E9%99%A4tsfile%E6%96%87%E4%BB%B6"}},[e._v("删除tsfile文件")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E7%A7%BB%E5%87%BAtsfile%E6%96%87%E4%BB%B6%E8%87%B3%E6%8C%87%E5%AE%9A%E7%9B%AE%E5%BD%95"}},[e._v("移出tsfile文件至指定目录")])])])])]),e._v(" "),s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("p",[e._v("加载外部tsfile文件工具允许用户向正在运行中的Apache IoTDB中加载、删除或移出tsfile文件。")]),e._v(" "),s("h1",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),s("p",[e._v("用户通过Cli工具或JDBC向Apache IoTDB系统发送指定命令实现文件加载的功能。")]),e._v(" "),s("h2",{attrs:{id:"加载tsfile文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载tsfile文件"}},[e._v("#")]),e._v(" 加载tsfile文件")]),e._v(" "),s("p",[e._v("加载tsfile文件的指令为："),s("code",[e._v("load <path/dir> [true/false] [storage group level]")])]),e._v(" "),s("p",[e._v("该指令有两种用法：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("通过指定文件路径(绝对路径)加载单tsfile文件。\n第二个参数表示待加载的tsfile文件的路径，其中文件名称需要符合tsfile的命名规范，即"),s("code",[e._v("{systemTime}-{versionNum}-{mergeNum}.tsfile")]),e._v("。第三、四个参数为可选项。当待加载的tsfile文件中时间序列对应的元数据不存在时，用户可以选择是否自动创建schema，参数为true表示自动创建schema，相反false表示不创建，缺省时默认创建schema。当tsfile对应的存储组不存在时，用户可以通过第四个参数来制定存储组的级别，默认为"),s("code",[e._v("iotdb-engine.properties")]),e._v("中设置的级别。若待加载的tsfile文件对应的"),s("code",[e._v(".resource")]),e._v("文件存在，会被一并加载至Apache IoTDB数据文件的目录和引擎中，否则将通过tsfile文件重新生成对应的"),s("code",[e._v(".resource")]),e._v("文件，即加载的tsfile文件所对应的"),s("code",[e._v(".resource")]),e._v("文件不是必要的。\n示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile false")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile true")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile true 2")])])])]),e._v(" "),s("li",[s("p",[e._v("通过指定文件夹路径(绝对路径)批量加载文件。\n第二个参数表示待加载的tsfile文件的路径，其中文件名称需要符合tsfile的命名规范，即"),s("code",[e._v("{systemTime}-{versionNum}-{mergeNum}.tsfile")]),e._v("。第三、四个参数为可选项。当待加载的tsfile文件中时间序列对应的元数据不存在时，用户可以选择是否自动创建schema，参数为true表示自动创建schema，相反false表示不创建，缺省时默认创建schema。当tsfile对应的存储组不存在时，用户可以通过第四个参数来制定存储组的级别，默认为"),s("code",[e._v("iotdb-engine.properties")]),e._v("中设置的级别。若待加载文件对应的"),s("code",[e._v(".resource")]),e._v("文件存在，则会一并加载至Apache IoTDB数据文件目录和引擎中，否则将通过tsfile文件重新生成对应的"),s("code",[e._v(".resource")]),e._v("文件，即加载的tsfile文件所对应的"),s("code",[e._v(".resource")]),e._v("文件不是必要的。\n示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("load /Users/Desktop/data")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data false")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data true")])]),e._v(" "),s("li",[s("code",[e._v("load /Users/Desktop/data true 2")])])])])]),e._v(" "),s("h2",{attrs:{id:"删除tsfile文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除tsfile文件"}},[e._v("#")]),e._v(" 删除tsfile文件")]),e._v(" "),s("p",[e._v("删除tsfile文件的指令为："),s("code",[e._v("remove <path>")])]),e._v(" "),s("p",[e._v("该指令通过指定文件路径删除tsfile文件，具体做法是将该tsfile和其对应的"),s("code",[e._v(".resource")]),e._v("和"),s("code",[e._v(".modification")]),e._v("文件全部删除。")]),e._v(" "),s("p",[e._v("注意path至少要包含倒数两层路径，不可以直接指定文件名称(即最后一层路径)，示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("remove root.vehicle/1575028885956-101-0.tsfile")]),e._v(" 是正确的")]),e._v(" "),s("li",[s("code",[e._v("remove 1575028885956-101-0.tsfile")]),e._v(" 是错误的")])]),e._v(" "),s("h2",{attrs:{id:"移出tsfile文件至指定目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移出tsfile文件至指定目录"}},[e._v("#")]),e._v(" 移出tsfile文件至指定目录")]),e._v(" "),s("p",[e._v("移出tsfile文件的指令为："),s("code",[e._v("remove <path> <dir>")])]),e._v(" "),s("p",[e._v("该指令将指定路径的tsfile文件移动至目标文件夹(绝对路径)中，具体做法是在引擎中移除该tsfile，并将该tsfile文件和其对应的"),s("code",[e._v(".resource")]),e._v("文件移动到目标文件夹下")]),e._v(" "),s("p",[e._v("注意path至少要包含倒数两层路径，不可以直接指定文件名称(即最后一层路径)，示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("move root.vehicle/1575029224130-101-0.tsfile /data/data/tmp")]),e._v(" 是正确的")]),e._v(" "),s("li",[s("code",[e._v("move 1575029224130-101-0.tsfile /data/data/tmp")]),e._v(" 是错误的")])])])}),[],!1,null,null,null);t.default=a.exports}}]);