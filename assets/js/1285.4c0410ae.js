(window.webpackJsonp=window.webpackJsonp||[]).push([[1285],{1606:function(t,_,v){"use strict";v.r(_);var a=v(1),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"同步工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步工具"}},[t._v("#")]),t._v(" 同步工具")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E5%90%8C%E6%AD%A5%E5%B7%A5%E5%85%B7"}},[t._v("同步工具")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[t._v("介绍")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"}},[t._v("配置参数")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E5%90%8C%E6%AD%A5%E5%B7%A5%E5%85%B7%E6%8E%A5%E6%94%B6%E7%AB%AF"}},[t._v("同步工具接收端")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%90%8C%E6%AD%A5%E5%B7%A5%E5%85%B7%E5%8F%91%E9%80%81%E7%AB%AF"}},[t._v("同步工具发送端")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F"}},[t._v("使用方式")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E5%90%8C%E6%AD%A5%E5%8A%9F%E8%83%BD%E6%8E%A5%E6%94%B6%E7%AB%AF"}},[t._v("启动同步功能接收端")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%85%B3%E9%97%AD%E5%90%8C%E6%AD%A5%E5%8A%9F%E8%83%BD%E6%8E%A5%E6%94%B6%E7%AB%AF"}},[t._v("关闭同步功能接收端")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E5%90%8C%E6%AD%A5%E5%8A%9F%E8%83%BD%E5%8F%91%E9%80%81%E7%AB%AF"}},[t._v("启动同步功能发送端")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%85%B3%E9%97%AD%E5%90%8C%E6%AD%A5%E5%8A%9F%E8%83%BD%E5%8F%91%E9%80%81%E7%AB%AF"}},[t._v("关闭同步功能发送端")])])])])]),t._v(" "),v("h1",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),v("p",[t._v("同步工具是定期将本地磁盘中和新增的已持久化的tsfile文件上传至云端并加载到IoTDB套件工具。")]),t._v(" "),v("p",[t._v("在同步工具的发送端，同步模块是一个独立的进程，独立于本地的IoTDB。通过独立的脚本进行启动和关闭(详见章节"),v("code",[t._v("使用方式")]),t._v(")，同步的频率周期可由用户设置。")]),t._v(" "),v("p",[t._v("在同步工具的的接收端，同步模块内嵌于IoTDB的引擎，和IoTDB处于同一个进程中。同步模块监听一个独立的端口，该端口可由用户设置(详见章节"),v("code",[t._v("配置参数")]),t._v(")。用户使用前，需要在同步接收端设置同步白名单，以网段形式表示，接收端的同步模块只接受位于白名单网段中的发送端同步的数据.")]),t._v(" "),v("p",[t._v("同步工具具有多对一的发送-接受模式，即一个同步接收端可以同时接受多个同步发送端传输的数据，一个同步发送端只能向一个同步接收端发送数据")]),t._v(" "),v("blockquote",[v("p",[t._v("注意：在使用同步工具前，同步工具的接收端和发送端需要单独配置。")])]),t._v(" "),v("h1",{attrs:{id:"配置参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),v("h2",{attrs:{id:"同步工具接收端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步工具接收端"}},[t._v("#")]),t._v(" 同步工具接收端")]),t._v(" "),v("p",[t._v("同步工具接收端的参数配置位于IoTDB的配置文件iotdb-engine.properties中，其安装目录为$IOTDB_HOME/conf/iotdb-engine.properties。在该配置文件中，有四个参数和同步接收端有关，配置说明如下:")]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: is_sync_enable")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步功能开关，配置为true表示接收端允许接收同步的数据并加载，设置为false的时候表示接收端不允许接收同步的数据")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启服务器生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: IP_white_list")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("设置同步功能发送端IP地址的白名单，以网段的形式表示，多个网段之间用逗号分隔。发送端向接收端同步数据时，只有当该发送端IP地址处于该白名单设置的网段范围内，接收端才允许同步操作。如果白名单为空，则接收端不允许任何发送端同步数据。默认接收端接受全部IP的同步请求。")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("0.0.0.0/0")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启服务器生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: update_historical_data_possibility")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步服务端在合并同步的数据时选择的处理策略。如果同步的数据对历史数据(相比本地该存储组数据的最新时间戳)更新占比超过50%，则建议选择策略1，将参数设置为true，使用该策略对IoTDB系统的写入性能产生较大影响，对机器的CPU占用较小；如果同步的数据对历史数据更新占比少于50%，则建议选择策略2，将参数设置为false，使用该策略对IoTDB系统的写入性能产生较小影响，对机器CPU的占用较大。"),v("br")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启服务器生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: sync_server_port")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步接收端服务器监听接口，请确认该端口不是系统保留端口并且未被占用。参数is_sync_enable设置为true时有效，参数is_sync_enable设置为false时无效")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("5555")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启服务器生效")])])]),t._v(" "),v("h2",{attrs:{id:"同步工具发送端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步工具发送端"}},[t._v("#")]),t._v(" 同步工具发送端")]),t._v(" "),v("p",[t._v("同步功能发送端的参数配置在一个单独的配置文件中，其安装目录为"),v("code",[t._v("$IOTDB_HOME/conf/iotdb-sync-client.properties")]),t._v("。在该配置文件中，有五个参数和同步发送端有关，配置说明如下：\n"),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: server_ip")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步接收端的IP地址")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("127.0.0.1")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: server_port")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步接收端服务器监听端口，需要保证该端口和同步接收端配置的监听端口一致")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("5555")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启同步功能发送端生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: sync_period_in_second")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步周期，两次同步任务开始时间的间隔，单位为秒(s)")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("Int : [0,2147483647]")])]),t._v(" "),v("tr",[v("td",[t._v("默认值")]),t._v(" "),v("td",[t._v("600")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启同步功能发送端生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: iotdb_schema_directory")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步发送端的IoTDB schema文件的绝对路径，例如$IOTDB_HOME /data/system/schema/mlog.txt(若用户未手动设置schema元数据的路径，则该路径为默认路径)，该参数默认不生效，用户有需求时进行手动设置")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启同步功能发送端生效")])])]),t._v(" "),v("table",[v("tr",[v("td",{attrs:{colspan:"2"}},[t._v("参数名: iotdb_bufferWrite_directory")])]),t._v(" "),v("tr",[v("td",{attrs:{width:"20%"}},[t._v("描述")]),t._v(" "),v("td",[t._v("同步发送端的IoTDB 的bufferWrite数据(tsfile文件)目录的绝对路径，定位至bufferWrite目录下，例如： $IOTDB_HOME /data/data/settled(若用户未手动设置数据路径，则该路径为默认路径)，该参数默认不生效，用户有需求时进行手动设置。该参数需要保证和参数iotdb_schema_directory属于同一个IoTDB")])]),t._v(" "),v("tr",[v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("改后生效方式")]),t._v(" "),v("td",[t._v("重启同步功能发送端生效")])])]),t._v(" "),v("h1",{attrs:{id:"使用方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),v("h2",{attrs:{id:"启动同步功能接收端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动同步功能接收端"}},[t._v("#")]),t._v(" 启动同步功能接收端")]),t._v(" "),v("ol",[v("li",[t._v("配置接收端的参数，例如：\n"),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494502-daaa4380-8ebf-11e9-8bce-363e2433005a.png"}})]),t._v(" "),v("li",[t._v("启动IoTDB引擎，同步功能接收端会同时启动，启动时LOG日志会出现"),v("code",[t._v("IoTDB: start SYNC ServerService successfully")]),t._v("字样，表示同步接收端启动成功，如图所示：\n"),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494513-df6ef780-8ebf-11e9-83e1-ee8ae64b76d0.png"}})])]),t._v(" "),v("h2",{attrs:{id:"关闭同步功能接收端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关闭同步功能接收端"}},[t._v("#")]),t._v(" 关闭同步功能接收端")]),t._v(" "),v("p",[t._v("关闭IoTDB，同步功能接收端会同时关闭。")]),t._v(" "),v("h2",{attrs:{id:"启动同步功能发送端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动同步功能发送端"}},[t._v("#")]),t._v(" 启动同步功能发送端")]),t._v(" "),v("ol",[v("li",[t._v("配置发送端的参数， 如图所示:\n"),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494559-f9a8d580-8ebf-11e9-875e-355199c1a1e9.png"}})]),t._v(" "),v("li",[t._v("启动同步功能发送端")])]),t._v(" "),v("p",[t._v("用户可以使用"),v("code",[t._v("$IOTDB_HOME/bin")]),t._v("文件夹下的脚本启动同步功能的发送端\nLinux系统与MacOS系统启动命令如下：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  Shell >$IOTDB_HOME/bin/start-sync-client.sh\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  Shell >$IOTDB_HOME\\bin\\start-sync-client.bat\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494951-dc283b80-8ec0-11e9-9575-5d8578c08ceb.png"}}),t._v(" "),v("h2",{attrs:{id:"关闭同步功能发送端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关闭同步功能发送端"}},[t._v("#")]),t._v(" 关闭同步功能发送端")]),t._v(" "),v("p",[t._v("用户可以使用"),v("code",[t._v("$IOTDB_HOME/bin")]),t._v("文件夹下的脚本关闭同步功能的发送端。\nLinux系统与MacOS系统停止命令如下：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  Shell >$IOTDB_HOME/bin/stop-sync-client.sh\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("Windows系统停止命令如下：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  Shell >$IOTDB_HOME\\bin\\stop-sync-client.bat\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])])])}],!1,null,null,null);_.default=r.exports}}]);