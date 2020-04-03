(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1055:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("本文将介绍关于IoTDB使用的基本流程，如果需要更多信息，请浏览我们官网的"),e("router-link",{attrs:{to:"./../1-Overview/1-What is IoTDB.html"}},[t._v("指引")]),t._v(".")],1),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("安装前需要保证设备上配有JDK>=1.8的运行环境，并配置好JAVA_HOME环境变量。")]),t._v(" "),e("p",[t._v("设置最大文件打开数为65535。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("IoTDB支持多种安装途径。用户可以使用三种方式对IoTDB进行安装——下载二进制可运行程序、使用源码、使用docker镜像。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("您可以从这里下载程序："),e("router-link",{attrs:{to:"/Download/"}},[t._v("下载")])],1),t._v(" "),t._m(7),t._v(" "),e("p",[t._v('配置文件在"conf"文件夹下，包括：')]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("想要了解更多，请浏览"),e("router-link",{attrs:{to:"./../3-Server/1-Download.html"}},[t._v("Chapter3: Server")]),t._v("\n​")],1),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("用户可以根据以下操作对IoTDB进行简单的试用，若以下操作均无误，则说明IoTDB安装成功。")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("用户可以使用sbin文件夹下的start-server脚本启动IoTDB。")]),t._v(" "),e("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),t._m(11),e("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("IoTDB为用户提供多种与服务器交互的方式，在此我们介绍使用Cli工具进行写入、查询数据的基本步骤。")]),t._v(" "),e("p",[t._v('初始安装后的IoTDB中有一个默认用户：root，默认密码为root。用户可以使用该用户运行Cli工具操作IoTDB。Cli工具启动脚本为sbin文件夹下的start-client脚本。启动脚本时需要指定运行ip、port、username和password。若脚本未给定对应参数,则默认参数为"-h 127.0.0.1 -p 6667 -u root -pw -root"')]),t._v(" "),e("p",[t._v("以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。")]),t._v(" "),e("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),t._m(15),e("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),t._m(16),e("p",[t._v("启动后出现如图提示即为启动成功。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("在这里，我们首先介绍一下使用Cli工具创建时间序列、插入数据并查看数据的方法。")]),t._v(" "),e("p",[t._v("数据在IoTDB中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，每一个时间序列属于一个存储组。在定义时间序列之前，要首先使用SET STORAGE GROUP语句定义存储组。SQL语句如下：")]),t._v(" "),t._m(19),e("p",[t._v("我们可以使用SHOW STORAGE GROUP语句来查看系统当前所有的存储组，SQL语句如下：")]),t._v(" "),t._m(20),e("p",[t._v("执行结果为：")]),t._v(" "),t._m(21),e("p",[t._v("存储组设定后，使用CREATE TIMESERIES语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码方式。此处我们创建两个时间序列，SQL语句如下：")]),t._v(" "),t._m(22),e("p",[t._v("为了查看指定的时间序列，我们可以使用SHOW TIMESERIES <Path>语句，其中<Path>表示时间序列对应的路径，默认值为空，表示查看系统中所有的时间序列。下面是两个例子：")]),t._v(" "),e("p",[t._v("使用SHOW TIMESERIES语句查看系统中存在的所有时间序列，SQL语句如下：")]),t._v(" "),t._m(23),e("p",[t._v("执行结果为：")]),t._v(" "),t._m(24),e("p",[t._v("查看具体的时间序列root.ln.wf01.wt01.status的SQL语句如下：")]),t._v(" "),t._m(25),e("p",[t._v("执行结果为：")]),t._v(" "),t._m(26),e("p",[t._v("接下来，我们使用INSERT语句向root.ln.wf01.wt01.status时间序列中插入数据，在插入数据时需要首先指定时间戳和路径后缀名称：")]),t._v(" "),t._m(27),e("p",[t._v("我们也可以向多个时间序列中同时插入数据，这些时间序列同属于一个时间戳：")]),t._v(" "),t._m(28),e("p",[t._v("最后，我们查询之前插入的数据。使用SELECT语句我们可以查询指定的时间序列的数据结果，SQL语句如下：")]),t._v(" "),t._m(29),e("p",[t._v("查询结果如下：")]),t._v(" "),t._m(30),e("p",[t._v("我们也可以查询多个时间序列的数据结果，SQL语句如下：")]),t._v(" "),t._m(31),e("p",[t._v("查询结果如下：")]),t._v(" "),t._m(32),e("p",[t._v("输入quit或exit可退出Cli结束本次会话。")]),t._v(" "),t._m(33),e("p",[t._v("或")]),t._v(" "),t._m(34),e("p",[t._v("想要浏览更多IoTDB数据库支持的命令，请浏览"),e("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("SQL Reference")]),t._v(".")],1),t._v(" "),t._m(35),t._v(" "),e("p",[t._v("用户可以使用$IOTDB_HOME/sbin文件夹下的stop-server脚本停止IoTDB。")]),t._v(" "),e("p",[t._v("Linux系统与MacOS系统停止命令如下：")]),t._v(" "),t._m(36),e("p",[t._v("Windows系统停止命令如下：")]),t._v(" "),t._m(37),t._m(38),t._v(" "),e("p",[t._v("在incubator-iotdb的根路径下：")]),t._v(" "),t._m(39),e("p",[t._v("构建后，IoTDB客户端将位于文件夹“ client / target / iotdb-client- {project.version}”下。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[this._v("#")]),this._v(" 快速入门")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[this._v("#")]),this._v(" 概览")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("快速入门")]),t._v(" "),e("li",[t._v("安装环境")]),t._v(" "),e("li",[t._v("IoTDB安装\n"),e("ul",[e("li",[t._v("从源代码生成\n"),e("ul",[e("li",[t._v("配置文件")])])])])]),t._v(" "),e("li",[t._v("IoTDB试用\n"),e("ul",[e("li",[t._v("启动IoTDB")]),t._v(" "),e("li",[t._v("操作IoTDB\n"),e("ul",[e("li",[t._v("使用Cli工具")]),t._v(" "),e("li",[t._v("IoTDB的基本操作")])])]),t._v(" "),e("li",[t._v("停止IoTDB")])])]),t._v(" "),e("li",[t._v("单独打包服务器")]),t._v(" "),e("li",[t._v("单独打包客户端")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[this._v("#")]),this._v(" 安装环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"iotdb安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[this._v("#")]),this._v(" IoTDB安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。")])]),this._v(" "),s("li",[s("p",[this._v("二进制可运行程序：请从Download页面下载最新的安装包，解压后即完成安装。")])]),this._v(" "),s("li",[s("p",[this._v("使用Docker镜像：dockerfile 文件位于 https://github.com/apache/incubator-iotdb/blob/master/docker/src/main")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"iotdb下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb下载"}},[this._v("#")]),this._v(" IoTDB下载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("环境配置模块 ("),e("code",[t._v("iotdb-env.bat")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v("),")]),t._v(" "),e("li",[t._v("系统配置模块 ("),e("code",[t._v("tsfile-format.properties")]),t._v(", "),e("code",[t._v("iotdb-engine.properties")]),t._v(")")]),t._v(" "),e("li",[t._v("日志配置模块 ("),e("code",[t._v("logback.xml")]),t._v(").")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"iotdb试用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb试用"}},[this._v("#")]),this._v(" IoTDB试用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"启动iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb"}},[this._v("#")]),this._v(" 启动IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> sbin/start-server.sh\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> sbin\\start-server.bat\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"操作iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作iotdb"}},[this._v("#")]),this._v(" 操作IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用cli工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用cli工具"}},[this._v("#")]),this._v(" 使用Cli工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"iotdb的基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb的基本操作"}},[this._v("#")]),this._v(" IoTDB的基本操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SHOW STORAGE GROUP\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SHOW TIMESERIES\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-------------------------------+---------------+--------+--------+\n|                     Timeseries|  Storage Group|DataType|Encoding|\n+-------------------------------+---------------+--------+--------+\n|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|\n|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|\n+-------------------------------+---------------+--------+--------+\nTotal timeseries number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> quit\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> exit\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"停止iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止iotdb"}},[this._v("#")]),this._v(" 停止IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> $sbin/stop-server.sh\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> $sbin\\stop-server.bat\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"只建立客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只建立客户端"}},[this._v("#")]),this._v(" 只建立客户端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> mvn clean package -pl client -am -DskipTests\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);s.default=n.exports}}]);