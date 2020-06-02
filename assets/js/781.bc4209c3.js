(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{1352:function(s,e,t){"use strict";t.r(e);var a=t(71),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"编程-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程-session"}},[s._v("#")]),s._v(" 编程 - Session")]),s._v(" "),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),t("ul",[t("li",[s._v("JDK >= 1.8")]),s._v(" "),t("li",[s._v("Maven >= 3.1")])]),s._v(" "),t("h2",{attrs:{id:"仅在client模块中打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仅在client模块中打包"}},[s._v("#")]),s._v(" 仅在client模块中打包")]),s._v(" "),t("p",[s._v("在根目录下运行:")]),s._v(" "),t("blockquote",[t("p",[s._v("mvn clean package -pl client -am -Dmaven.test.skip=true")])]),s._v(" "),t("h2",{attrs:{id:"安装到本地-maven-库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装到本地-maven-库"}},[s._v("#")]),s._v(" 安装到本地 maven 库")]),s._v(" "),t("p",[s._v("在根目录下运行:")]),s._v(" "),t("blockquote",[t("p",[s._v("mvn clean install -pl session -am -Dmaven.test.skip=true")])]),s._v(" "),t("h2",{attrs:{id:"在-maven-中使用-session-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-maven-中使用-session-接口"}},[s._v("#")]),s._v(" 在 maven 中使用 session 接口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<dependencies>\n    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>iotdb-session</artifactId>\n      <version>0.9.1</version>\n    </dependency>\n</dependencies>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"session-接口使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-接口使用示例"}},[s._v("#")]),s._v(" Session 接口使用示例")]),s._v(" "),t("p",[s._v("下面将给出Session对应的接口的简要介绍和对应参数：")]),s._v(" "),t("h3",{attrs:{id:"启动session的相关命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动session的相关命令："}},[s._v("#")]),s._v(" 启动Session的相关命令：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("初始化Session\n​\tSession(String host, int port)\n​\tSession(String host, String port, String username, String password)\n​\tSession(String host, int port, String username, String password)")])]),s._v(" "),t("li",[t("p",[s._v("开启Session\n​\tSession.open()")])]),s._v(" "),t("li",[t("p",[s._v("关闭Session\n​\tSession.close()")])])]),s._v(" "),t("h3",{attrs:{id:"session的相关数据操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session的相关数据操作命令"}},[s._v("#")]),s._v(" Session的相关数据操作命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("设置存储组")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("TSStatus setStorageGroup(String storageGroupId)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除单个或多个存储组")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\tTSStatus deleteStorageGroup(String storageGroup)\n\tTSStatus deleteStorageGroups(List<String> storageGroups)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建单个时间序列")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\tTSStatus createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除一个或多个时间序列")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\tTSStatus deleteTimeseries(String path)\n\tTSStatus deleteTimeseries(List<String> paths)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除某一特定时间前的时间序列")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\tTSStatus deleteData(String path, long time)\n\tTSStatus deleteData(List<String> paths, long time)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("插入时序数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("TSStatus insert(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("批量插入时序数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("TSExecuteBatchStatementResp insertBatch(RowBatch rowBatch)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"示例代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[s._v("#")]),s._v(" 示例代码")]),s._v(" "),t("p",[s._v("浏览上述接口的详细信息，请参阅代码session/src/main/java/org/apache/iotdb/session/Session.java")]),s._v(" "),t("p",[s._v("使用上述接口的示例代码在example/session/src/main/java/org/apache/iotdb/SessionExample.java，在此文件中包含了开启session和执行批量插入等操作")]),s._v(" "),t("h1",{attrs:{id:"针对原生接口的连接池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#针对原生接口的连接池"}},[s._v("#")]),s._v(" 针对原生接口的连接池")]),s._v(" "),t("p",[s._v("我们提供了一个针对原生接口的连接池("),t("code",[s._v("SessionPool")]),s._v(")，使用该接口时，你只需要指定连接池的大小，就可以在使用时从池中获取连接。\n如果超过60s都没得到一个连接的话，那么会打印一条警告日志，但是程序仍将继续等待。")]),s._v(" "),t("p",[s._v("当一个连接被用完后，他会自动返回池中等待下次被使用；\n当一个连接损坏后，他会从池中被删除，并重建一个连接重新执行用户的操作。")]),s._v(" "),t("p",[s._v("对于查询操作：")]),s._v(" "),t("ol",[t("li",[s._v("使用SessionPool进行查询时，得到的结果集是"),t("code",[s._v("SessionDataSet")]),s._v("的封装类"),t("code",[s._v("SessionDataSetWrapper")]),s._v(";")]),s._v(" "),t("li",[s._v("若对于一个查询的结果集，用户并没有遍历完且不再想继续遍历时，需要手动调用释放连接的操作"),t("code",[s._v("closeResultSet")]),s._v(";")]),s._v(" "),t("li",[s._v("若对一个查询的结果集遍历时出现异常，也需要手动调用释放连接的操作"),t("code",[s._v("closeResultSet")]),s._v(".")])]),s._v(" "),t("p",[s._v("使用示例可以参见 "),t("code",[s._v("session/src/test/java/org/apache/iotdb/session/pool/SessionPoolTest.java")])])])}),[],!1,null,null,null);e.default=n.exports}}]);