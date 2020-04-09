(window.webpackJsonp=window.webpackJsonp||[]).push([[1520],{1841:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"内存预估工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存预估工具"}},[t._v("#")]),t._v(" 内存预估工具")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%86%85%E5%AD%98%E9%A2%84%E4%BC%B0%E5%B7%A5%E5%85%B7"}},[t._v("内存预估工具")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[t._v("介绍")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0"}},[t._v("输入参数")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F"}},[t._v("使用方式")])])]),t._v(" "),e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("本工具通过用户输入的若干参数，计算出IoTDB运行此负载的最小写内存。(IoTDB中的内存分为三部分：写内存，读内存，预留内存。写内存是用于数据写入分配的内存，三者的比例可在配置文件中设置)，结果以GB为单位。")]),t._v(" "),e("h1",{attrs:{id:"输入参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入参数"}},[t._v("#")]),t._v(" 输入参数")]),t._v(" "),e("p",[t._v("本工具使用时，需要输入的参数如下:\n"),e("table",[e("tr",[e("td",[t._v("参数名")]),t._v(" "),e("td",[t._v("参数说明")]),t._v(" "),e("td",[t._v("示例")]),t._v(" "),e("td",[t._v("是否必需")])]),t._v(" "),e("tr",[e("td",[t._v("-sg | --storagegroup <storage group number>")]),t._v(" "),e("td",[t._v("存储组数量")]),t._v(" "),e("td",[t._v("-sg 20")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("-ts | --timeseries <total timeseries number>")]),t._v(" "),e("td",[t._v("总时间序列数量")]),t._v(" "),e("td",[t._v("-ts 10000")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("-mts | --maxtimeseries <max timeseries>")]),t._v(" "),e("td",[t._v("存储组中的最大时间序列的数量，如果时间序列均匀分配在存储组中，本参数可以不设置")]),t._v(" "),e("td",[t._v("-mts 10000")]),t._v(" "),e("td",[t._v("否")])])]),t._v("\n在内存预估时，若工具计算需要较长的时间，则会在下方显示出运行进度，便于用户掌握进度。")]),t._v(" "),e("h1",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),e("p",[t._v("用户可以使用"),e("code",[t._v("$IOTDB_HOME/bin")]),t._v("文件夹下的脚本使用该工具\nLinux系统与MacOS系统启动命令如下：")]),t._v(" "),e("ul",[e("li",[t._v("以20个存储组，共10w条时间序列，时间序列在存储组中均分为例：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("以20个存储组，共10w条时间序列，存储组中最大时间序列数为50000为例：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000 -tsm -50000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),e("ul",[e("li",[t._v("以20个存储组，共10w条时间序列，时间序列在存储组中均分为例：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("以20个存储组，共10w条时间序列，存储组中最大时间序列数为50000为例：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000 -tsm -50000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}],!1,null,null,null);s.default=r.exports}}]);