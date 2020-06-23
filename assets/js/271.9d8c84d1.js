(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{830:function(t,e,a){"use strict";a.r(e);var s=a(69),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据模型选用与创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型选用与创建"}},[t._v("#")]),t._v(" 数据模型选用与创建")]),t._v(" "),a("p",[t._v("在向IoTDB导入数据之前，首先要根据"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/3-Operation Manual/1-Sample Data.html"}},[t._v("样例数据")]),t._v("选择合适的数据存储模型，然后使用"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("SET STORAGE GROUP")]),t._v("语句和"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("CREATE TIMESERIES")]),t._v("语句设置存储组，并创建时间序列。")],1),t._v(" "),a("h2",{attrs:{id:"选用存储模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选用存储模型"}},[t._v("#")]),t._v(" 选用存储模型")]),t._v(" "),a("p",[t._v("根据本文描述的"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/3-Operation Manual/1-Sample Data.html"}},[t._v("数据")]),t._v("属性层级，按照属性涵盖范围以及它们之间的从属关系，我们可将其表示为如下图3.1的属性层级组织结构，其层级关系为：集团层-电场层-设备层-传感器层。其中ROOT为根节点，传感器层的每一个节点称为叶子节点。在使用IoTDB的过程中，您可以直接将由ROOT节点到每一个叶子节点路径上的属性用“.”连接，将其作为一个IoTDB的时间序列的名称。图3.1中最左侧的路径可以生成一个名为"),a("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v("的时间序列。")],1),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577327-7aa50780-1ef4-11e9-9d75-cadabb62444e.jpg"}})]),t._v(" "),a("center",[t._v("**图3.1 属性层级组织结构**")]),t._v(" "),a("p",[t._v("得到时间序列的名称之后，我们需要根据数据的实际场景和规模设置存储组。由于在本文所述场景中，每次到达的数据通常以集团为单位（即数据可能为跨电场、跨设备的），为了写入数据时避免频繁切换IO降低系统速度，且满足用户以集团为单位进行物理隔离数据的要求，我们将存储组设置在集团层。")]),t._v(" "),a("h2",{attrs:{id:"创建存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[t._v("#")]),t._v(" 创建存储组")]),t._v(" "),a("p",[t._v("存储模型选用后，我们可以根据存储模型建立相应的存储组。创建存储组的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("根据以上两条SQL语句，我们可以创建出两个存储组。")]),t._v(" "),a("p",[t._v("需要注意的是，当系统中已经存在某个存储组或存储组的父亲节点或者孩子节点被设置为存储组的情况下，用户不可创建存储组。例如在已经有"),a("code",[t._v("root.ln")]),t._v("和"),a("code",[t._v("root.sgcc")]),t._v("这两个存储组的情况下，创建"),a("code",[t._v("root.ln.wf01")]),t._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[t._v("#")]),t._v(" 查看存储组")]),t._v(" "),a("p",[t._v("在存储组创建后，我们可以使用"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("SHOW STORAGE GROUP")]),t._v("语句来查看所有的存储组，SQL语句如下所示：")],1),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show storage group\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("执行结果为：\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),t._v(" "),a("h2",{attrs:{id:"创建时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[t._v("#")]),t._v(" 创建时间序列")]),t._v(" "),a("p",[t._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的SQL语句如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("详细的数据类型与编码方式的对应列表请参见"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("编码方式")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"查看时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[t._v("#")]),t._v(" 查看时间序列")]),t._v(" "),a("p",[t._v("目前，IoTDB支持两种查看时间序列的方式：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SHOW TIMESERIES语句以JSON形式展示系统中所有的时间序列信息")])]),t._v(" "),a("li",[a("p",[t._v("SHOW TIMESERIES <"),a("code",[t._v("Path")]),t._v(">语句以表格的形式返回给定路径的下的所有时间序列信息及时间序列总数。时间序列信息具体包括：时间序列路径名，数据类型，编码类型。其中，"),a("code",[t._v("Path")]),t._v("需要为一个前缀路径、带星路径或时间序列路径。例如，分别查看"),a("code",[t._v("root")]),t._v("路径和"),a("code",[t._v("root.ln")]),t._v("路径下的时间序列，SQL语句如下所示：")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("执行结果分别为：")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),t._v(" "),a("p",[t._v("需要注意的是，当查询路径不存在时，系统会返回0条时间序列。")]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("0.8.2版本对用户操作的数据规模进行一些限制：")]),t._v(" "),a("p",[t._v("限制1：假设运行时IoTDB分配到的JVM内存大小为p，用户自定义的每次将内存中的数据写入到磁盘时的大小（"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[t._v("group_size_in_byte")]),t._v("）为q。存储组的数量不能超过p/q。")],1),t._v(" "),a("p",[t._v("限制2：时间序列的数量不超过运行时IoTDB分配到的JVM内存与20KB的比值。")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);