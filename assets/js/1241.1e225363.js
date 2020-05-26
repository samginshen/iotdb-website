(window.webpackJsonp=window.webpackJsonp||[]).push([[1241],{1706:function(t,a,e){"use strict";e.r(a);var r=e(49),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"编程-其他语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编程-其他语言"}},[t._v("#")]),t._v(" 编程-其他语言")]),t._v(" "),e("h2",{attrs:{id:"python-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-api"}},[t._v("#")]),t._v(" Python API")]),t._v(" "),e("h3",{attrs:{id:"_1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),e("p",[t._v("这是一个如何使用thrift rpc接口通过python连接到IoTDB的示例。 在Linux或Windows上情况会有所不同，我们将介绍如何分别在两个系统上进行操作。")]),t._v(" "),e("h3",{attrs:{id:"_2-prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-prerequisites"}},[t._v("#")]),t._v(" 2. Prerequisites")]),t._v(" "),e("p",[t._v("首选python3.7或更高版本。")]),t._v(" "),e("p",[t._v("您必须安装Thrift（0.11.0或更高版本）才能将我们的Thrift文件编译为python代码。 以下是安装的官方教程：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http://thrift.apache.org/docs/install/\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-如何获取python库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何获取python库"}},[t._v("#")]),t._v(" 3. 如何获取Python库")]),t._v(" "),e("h4",{attrs:{id:"选项1：pip安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项1：pip安装"}},[t._v("#")]),t._v(" 选项1：pip安装")]),t._v(" "),e("p",[t._v("您可以在https://pypi.org/project/apache-iotdb/上找到Apache IoTDB Python客户端API软件包。\n​    下载命令为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pip install apache-iotdb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"选项2：使用我们提供的编译脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项2：使用我们提供的编译脚本"}},[t._v("#")]),t._v(" 选项2：使用我们提供的编译脚本")]),t._v(" "),e("p",[t._v("如果您在路径中添加了Thrift可执行文件，则可以只运行"),e("code",[t._v("client-py / compile.sh")]),t._v("或"),e("code",[t._v("client-py \\ compile.bat")]),t._v("，或者必须对其进行修改以将变量"),e("code",[t._v("THRIFT_EXE")]),t._v("设置为指向 您的可执行文件。 这将在文件夹“"),e("code",[t._v("target")]),t._v("下生成节俭的源代码，您可以将其添加到"),e("code",[t._v("PYTHONPATH")]),t._v("中，以便可以在代码中使用该库。 请注意，这些脚本按相对路径查找节俭源文件，因此，如果将脚本移动到其他位置，它们将不再有效。")]),t._v(" "),e("h4",{attrs:{id:"选项3：节俭的基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项3：节俭的基本用法"}},[t._v("#")]),t._v(" 选项3：节俭的基本用法")]),t._v(" "),e("p",[t._v("或者，如果您了解Thrift的基本用法，则只能将Thrift源文件下载到"),e("code",[t._v("service-rpc \\ src \\ main \\ thrift \\ rpc.thrift")]),t._v("中，而只需使用"),e("code",[t._v("thrift -gen py -out ./target/ iotdb rpc.thrift")]),t._v("生成python库。")]),t._v(" "),e("h3",{attrs:{id:"_4-使用范例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用范例"}},[t._v("#")]),t._v(" 4. 使用范例")]),t._v(" "),e("p",[t._v("我们在"),e("code",[t._v("client-py / src /client_example.py")]),t._v("中提供了一个示例，说明如何使用Thrift库连接到IoTDB，在编写自己的代码之前，请仔细阅读。")])])}),[],!1,null,null,null);a.default=s.exports}}]);