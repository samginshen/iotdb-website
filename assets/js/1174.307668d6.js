(window.webpackJsonp=window.webpackJsonp||[]).push([[1174],{1743:function(s,a,e){"use strict";e.r(a);var t=e(71),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"经常问的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#经常问的问题"}},[s._v("#")]),s._v(" 经常问的问题")]),s._v(" "),e("h2",{attrs:{id:"如何识别我的iotdb版本？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何识别我的iotdb版本？"}},[s._v("#")]),s._v(" 如何识别我的IoTDB版本？")]),s._v(" "),e("p",[s._v("有几种方法可以识别您正在使用的IoTDB版本：")]),s._v(" "),e("ul",[e("li",[s._v("启动IoTDB的命令行界面：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> ./start-client.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("检查pom.xml文件：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<version>x.x.x</version>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用JDBC API：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用命令行界面：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show version\nshow version\n+---------------+\n|version        |\n+---------------+\n|x.x.x          |\n+---------------+\nTotal line number = 1\nIt costs 0.241s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"在哪里可以找到iotdb日志？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在哪里可以找到iotdb日志？"}},[s._v("#")]),s._v(" 在哪里可以找到IoTDB日志？")]),s._v(" "),e("p",[s._v("假设您的根目录是：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ pwd\n/workspace/incubator-iotdb\n\n$ ls -l\nserver/\nclient/\npom.xml\nReadme.md\n...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Let "),e("code",[s._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])]),s._v(" "),e("p",[s._v("Let "),e("code",[s._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])]),s._v(" "),e("p",[s._v("默认情况下，日志存储在IOTDB_HOME / logs下。 您可以通过在IOTDB_HOME / conf下配置logback.xml来更改日志级别和存储路径。")]),s._v(" "),e("h2",{attrs:{id:"在哪里可以找到iotdb数据文件？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在哪里可以找到iotdb数据文件？"}},[s._v("#")]),s._v(" 在哪里可以找到IoTDB数据文件？")]),s._v(" "),e("p",[s._v("默认设置下，数据文件（包括tsfile，元数据和WAL文件）存储在IOTDB_HOME / data下。")]),s._v(" "),e("h2",{attrs:{id:"我如何知道iotdb中存储了多少时间序列？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我如何知道iotdb中存储了多少时间序列？"}},[s._v("#")]),s._v(" 我如何知道IoTDB中存储了多少时间序列？")]),s._v(" "),e("p",[s._v("使用IoTDB的命令行界面：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("结果,将有一个声明显示 "),e("code",[s._v("Total timeseries number")]),s._v(", 此数字是IoTDB中的时间序列号。")]),s._v(" "),e("p",[s._v("在当前版本中，IoTDB支持查询时间序列数。 使用IoTDB的命令行界面：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> count timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果使用Linux，则可以使用以下shell命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"我可以使用hadoop和spark在iotdb中读取tsfile吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我可以使用hadoop和spark在iotdb中读取tsfile吗？"}},[s._v("#")]),s._v(" 我可以使用Hadoop和Spark在IoTDB中读取TsFile吗？")]),s._v(" "),e("p",[s._v("是的。  IoTDB与开源生态系统紧密集成。IoTDB支持 "),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hadoop"),e("OutboundLink")],1),s._v(", "),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spark"),e("OutboundLink")],1),s._v(" 和"),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grafana"),e("OutboundLink")],1),s._v(" 可视化工具。")]),s._v(" "),e("h2",{attrs:{id:"iotdb如何处理重复点？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iotdb如何处理重复点？"}},[s._v("#")]),s._v(" IoTDB如何处理重复点？")]),s._v(" "),e("p",[s._v("数据点由完整的时间序列路径（例如"),e("code",[s._v("root.vehicle.d0.s0")]),s._v("）和时间戳唯一标识。 如果您提交的新点的路径和时间戳与现有点相同，则IoTDB将更新该点的值，而不是插入新点。")]),s._v(" "),e("h2",{attrs:{id:"我如何知道特定时间序列的类型？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我如何知道特定时间序列的类型？"}},[s._v("#")]),s._v(" 我如何知道特定时间序列的类型？")]),s._v(" "),e("p",[s._v("采用"),e("code",[s._v("SHOW TIMESERIES <timeseries path>")]),s._v(" IoTDB的命令行界面中的SQL：")]),s._v(" "),e("p",[s._v("例如，如果您想知道所有时间序列的类型，则\\ <时间序列路径>应该是“ root”。 该语句将是：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果要查询特定的传感器，可以将"),e("code",[s._v("<timeseries path>")]),s._v("替换为传感器名称。 例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("否则，您也可以在时间序列路径中使用通配符：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show timeseries root.fit.d1.*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"如何更改iotdb的客户端时间显示格式？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何更改iotdb的客户端时间显示格式？"}},[s._v("#")]),s._v(" 如何更改IoTDB的客户端时间显示格式？")]),s._v(" "),e("p",[s._v("IoTDB的默认客户端时间显示格式是可读的 (例如 "),e("code",[s._v("1970-01-01T08:00:00.001")]),s._v("), 如果要以时间戳记类型或其他可读格式显示时间，请添加参数 "),e("code",[s._v("-disableIS08601")]),s._v(" 在启动命令中：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> $IOTDB_CLI_HOME/sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableIS08601\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);