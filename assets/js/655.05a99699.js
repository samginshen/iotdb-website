(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1227:function(s,e,t){"use strict";t.r(e);var a=t(71),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"水印工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水印工具"}},[s._v("#")]),s._v(" 水印工具")]),s._v(" "),t("p",[t("strong",[s._v("目录")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("水印嵌入")]),s._v(" "),t("p",[s._v("1.1 配置")]),s._v(" "),t("p",[s._v("1.2 使用示例")])]),s._v(" "),t("li",[t("p",[s._v("水印检测")])])]),s._v(" "),t("p",[s._v("这个工具提供了 1）IoTDB查询结果水印嵌入功能，2）可疑数据的水印检测功能。")]),s._v(" "),t("h2",{attrs:{id:"_1-水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-水印嵌入"}},[s._v("#")]),s._v(" 1. 水印嵌入")]),s._v(" "),t("h3",{attrs:{id:"_1-1-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-配置"}},[s._v("#")]),s._v(" 1.1 配置")]),s._v(" "),t("p",[s._v("IoTDB默认关闭水印嵌入功能。为了使用这个功能，第一步要做的事情是修改配置文件"),t("code",[s._v("iotdb-engine.properties")]),s._v("中的以下各项：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("名称")]),s._v(" "),t("th",[s._v("示例")]),s._v(" "),t("th",[s._v("解释")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("watermark_module_opened")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[t("code",[s._v("true")]),s._v("打开水印嵌入功能; "),t("code",[s._v("false")]),s._v("关闭")])]),s._v(" "),t("tr",[t("td",[s._v("watermark_secret_key")]),s._v(" "),t("td",[s._v("IoTDB*2019@Beijing")]),s._v(" "),t("td",[s._v("自定义密钥")])]),s._v(" "),t("tr",[t("td",[s._v("watermark_bit_string")]),s._v(" "),t("td",[s._v("100101110100")]),s._v(" "),t("td",[s._v("要被嵌入的0-1比特串")])]),s._v(" "),t("tr",[t("td",[s._v("watermark_method")]),s._v(" "),t("td",[s._v("GroupBasedLSBMethod(embed_row_cycle=2,embed_lsb_num=5)")]),s._v(" "),t("td",[s._v("指定水印算法及其参数")])])])]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("watermark_module_opened")]),s._v(": 如果您想使用水印嵌入功能，请将其设置成"),t("code",[s._v("true")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("watermark_secret_key")]),s._v(": 不能使用字符 '&'。密钥长度没有限制，一般来说密钥越长，攻击难度就越高。")]),s._v(" "),t("li",[t("code",[s._v("watermark_bit_string")]),s._v(": 比特串长度没有限制（除了不能为空字符串），但是当长度过短时，水印检测可能达不到要求的显著性水平。")]),s._v(" "),t("li",[t("code",[s._v("watermark_method")]),s._v(": 现在仅支持一种算法GroupBasedLSBMethod，因此您实际上可以修改的只有这个算法的两个参数"),t("code",[s._v("embed_row_cycle")]),s._v("和"),t("code",[s._v("embed_lsb_num")]),s._v("的值：\n"),t("ul",[t("li",[s._v("均是正整数")]),s._v(" "),t("li",[t("code",[s._v("embed_row_cycle")]),s._v("控制了被嵌入水印的行占总行数的比例。"),t("code",[s._v("embed_row_cycle")]),s._v("越小，被嵌入水印的行的比例就越大。当"),t("code",[s._v("embed_row_cycle")]),s._v("等于1的时候，所有的行都将嵌入水印。")]),s._v(" "),t("li",[s._v("GroupBasedLSBMethod使用LSB嵌入。"),t("code",[s._v("embed_lsb_num")]),s._v("控制了允许嵌入水印的最低有效位的数量。"),t("code",[s._v("embed_lsb_num")]),s._v("越大，数值的可变化范围就越大。")])])]),s._v(" "),t("li",[t("code",[s._v("watermark_secret_key")]),s._v(", "),t("code",[s._v("watermark_bit_string")]),s._v("和"),t("code",[s._v("watermark_method")]),s._v("都不应该被攻击者获得。您需要自己负责配置文件"),t("code",[s._v("iotdb-engine.properties")]),s._v("的安全管理。")])]),s._v(" "),t("h3",{attrs:{id:"_1-2-使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用示例"}},[s._v("#")]),s._v(" 1.2 使用示例")]),s._v(" "),t("h4",{attrs:{id:"第一步：创建一个新用户alice，授予读权限，然后查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步：创建一个新用户alice，授予读权限，然后查询"}},[s._v("#")]),s._v(" 第一步：创建一个新用户Alice，授予读权限，然后查询")]),s._v(" "),t("p",[s._v("一个新创建的用户默认不使用水印。因此查询结果就是数据库中的原始数据。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\\start-client.bat -u root -pw root\ncreate user Alice 1234\ngrant user Alice privileges 'READ_TIMESERIES' on root.vehicle\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|              23.5|\n|      1970-01-01T08:00:00.004+08:00|              24.5|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|              26.5|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|              28.5|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|              35.5|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|              42.5|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|              44.5|\n|      1970-01-01T08:00:00.025+08:00|              45.5|\n|      1970-01-01T08:00:00.026+08:00|              46.5|\n|      1970-01-01T08:00:00.027+08:00|              47.5|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|              51.5|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("h4",{attrs:{id:"第二步：给alice施加水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步：给alice施加水印嵌入"}},[s._v("#")]),s._v(" 第二步：给Alice施加水印嵌入")]),s._v(" "),t("p",[s._v("sql用法："),t("code",[s._v("grant watermark_embedding to Alice")])]),s._v(" "),t("p",[s._v("您可以使用"),t("code",[s._v("grant watermark_embedding to user1,user2,...")]),s._v("来同时给多个用户施加水印嵌入。")]),s._v(" "),t("p",[s._v("只有root用户有权限运行该指令。在root给Alice施加水印嵌入之后，Alice的所有查询结果都将被嵌入水印。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\\start-client.bat -u root -pw root\ngrant watermark_embedding to Alice\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|         23.500008|\n|      1970-01-01T08:00:00.004+08:00|         24.500015|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|         26.500015|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|         28.500004|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|         35.500004|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|         42.500015|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|         44.500008|\n|      1970-01-01T08:00:00.025+08:00|          45.50003|\n|      1970-01-01T08:00:00.026+08:00|         46.500008|\n|      1970-01-01T08:00:00.027+08:00|         47.500008|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|         51.500008|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("h4",{attrs:{id:"第三步：撤销alice的水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步：撤销alice的水印嵌入"}},[s._v("#")]),s._v(" 第三步：撤销Alice的水印嵌入")]),s._v(" "),t("p",[s._v("sql用法："),t("code",[s._v("revoke watermark_embedding from Alice")])]),s._v(" "),t("p",[s._v("您可以使用"),t("code",[s._v("revoke watermark_embedding from user1,user2,...")]),s._v("来同时撤销多个用户的水印嵌入。")]),s._v(" "),t("p",[s._v("只有root用户有权限运行该指令。在root撤销Alice的水印嵌入之后，Alice的所有查询结果就又是数据库中的原始数据了。")]),s._v(" "),t("h2",{attrs:{id:"_2-水印检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-水印检测"}},[s._v("#")]),s._v(" 2. 水印检测")]),s._v(" "),t("p",[t("code",[s._v("detect-watermark.sh")]),s._v(" 和 "),t("code",[s._v("detect-watermark.bat")]),s._v(" 是给不同平台提供的功能相同的工具脚本。")]),s._v(" "),t("p",[s._v("用法： ./detect-watermark.sh [filePath] [secretKey] [watermarkBitString] [embed_row_cycle] [embed_lsb_num] [alpha] [columnIndex] [dataType: int/float/double]")]),s._v(" "),t("p",[s._v("示例： ./detect-watermark.sh /home/data/dump1.csv IoTDB*2019@Beijing 100101110100 2 5 0.05 1 float")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Args")]),s._v(" "),t("th",[s._v("示例")]),s._v(" "),t("th",[s._v("解释")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("filePath")]),s._v(" "),t("td",[s._v("/home/data/dump1.csv")]),s._v(" "),t("td",[s._v("可疑数据的文件路径")])]),s._v(" "),t("tr",[t("td",[s._v("secretKey")]),s._v(" "),t("td",[s._v("IoTDB*2019@Beijing")]),s._v(" "),t("td",[s._v("参见水印嵌入小节")])]),s._v(" "),t("tr",[t("td",[s._v("watermarkBitString")]),s._v(" "),t("td",[s._v("100101110100")]),s._v(" "),t("td",[s._v("参见水印嵌入小节")])]),s._v(" "),t("tr",[t("td",[s._v("embed_row_cycle")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("参见水印嵌入小节")])]),s._v(" "),t("tr",[t("td",[s._v("embed_lsb_num")]),s._v(" "),t("td",[s._v("5")]),s._v(" "),t("td",[s._v("参见水印嵌入小节")])]),s._v(" "),t("tr",[t("td",[s._v("alpha")]),s._v(" "),t("td",[s._v("0.05")]),s._v(" "),t("td",[s._v("显著性水平")])]),s._v(" "),t("tr",[t("td",[s._v("columnIndex")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("指定可疑数据的某一列进行检测")])]),s._v(" "),t("tr",[t("td",[s._v("dataType")]),s._v(" "),t("td",[s._v("float")]),s._v(" "),t("td",[s._v("指定检测列的数据类型；int/float/double任选其一")])])])]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("filePath")]),s._v(": 您可以使用export-csv工具来生成这样的数据文件。第一行是表头， 第一列是时间列。文件中的数据示例如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Time")]),s._v(" "),t("th",[s._v("root.vehicle.d0.s1")]),s._v(" "),t("th",[s._v("root.vehicle.d0.s1")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("1970-01-01T08:00:00.001+08:00")]),s._v(" "),t("td",[s._v("100")]),s._v(" "),t("td",[s._v("null")])]),s._v(" "),t("tr",[t("td",[s._v("...")]),s._v(" "),t("td",[s._v("...")]),s._v(" "),t("td",[s._v("...")])])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("watermark_secret_key")]),s._v(", "),t("code",[s._v("watermark_bit_string")]),s._v(", "),t("code",[s._v("embed_row_cycle")]),s._v("和"),t("code",[s._v("embed_lsb_num")]),s._v("应该和水印嵌入过程使用的值保持一致。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("alpha")]),s._v(": 取值范围[0,1]。水印检测基于显著性检验，"),t("code",[s._v("alpha")]),s._v("越小，没有嵌入水印的数据被检测成嵌入水印的可能性越低，从而检测出嵌入水印的结果的可信度越高。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("columnIndex")]),s._v(": 正整数")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);