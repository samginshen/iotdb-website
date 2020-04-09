(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{871:function(e,t,s){"use strict";s.r(t);var i=s(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("There are several ways to identify the version of IoTDB that you are using:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),s("p",[e._v("Suppose your root directory is:")]),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("Use IoTDB's Command Line Interface:")]),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("If you are using Linux, you can use the following shell command:")]),e._v(" "),e._m(18),e._m(19),e._v(" "),s("p",[e._v("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hadoop"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spark"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),s("OutboundLink")],1),e._v(" visualization tool.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),s("p",[e._v("If you want to query specific sensor, you can replace the <timeseries path> with the sensor name. For example:")]),e._v(" "),e._m(26),s("p",[e._v("Otherwise, you can also use wildcard in timeseries path:")]),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"frequently-asked-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[this._v("#")]),this._v(" Frequently Asked Questions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-can-i-identify-my-version-of-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-identify-my-version-of-iotdb"}},[this._v("#")]),this._v(" How can I identify my version of IoTDB?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Launch IoTDB's Command Line Interface:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> ./start-client.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Check pom.xml file:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<version>0.9.1</version>\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Use JDBC API:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"where-can-i-find-iotdb-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-logs"}},[this._v("#")]),this._v(" Where can I find IoTDB logs?")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pwd\n/workspace/incubator-iotdb\n\n$ ls -l\nserver/\nclient/\npom.xml\nReadme.md\n...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Let "),t("code",[this._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Let "),t("code",[this._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default settings, the logs are stored under "),t("code",[this._v("IOTDB_HOME/logs")]),this._v(". You can change log level and storage path by configuring "),t("code",[this._v("logback.xml")]),this._v(" under "),t("code",[this._v("IOTDB_HOME/conf")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"where-can-i-find-iotdb-data-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-data-files"}},[this._v("#")]),this._v(" Where can I find IoTDB data files?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default settings, the data files (including tsfile, metadata, and WAL files) are stored under "),t("code",[this._v("IOTDB_HOME/data")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[this._v("#")]),this._v(" How do I know how many time series are stored in IoTDB?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show timeseries root.*\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the result, there will be a statement shows "),t("code",[this._v("Total timeseries number")]),this._v(", this number is the timeseries number in IoTDB.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[this._v("#")]),this._v(" Can I use Hadoop and Spark to read TsFile in IoTDB?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-does-iotdb-handle-duplicate-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-iotdb-handle-duplicate-points"}},[this._v("#")]),this._v(" How does IoTDB handle duplicate points?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A data point is uniquely identified by a full time series path (e.g. "),t("code",[this._v("root.vehicle.d0.s0")]),this._v(") and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB will update the value of this point instead of inserting a new point.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-can-i-tell-what-type-of-the-specific-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-tell-what-type-of-the-specific-timeseries"}},[this._v("#")]),this._v(" How can I tell what type of the specific timeseries?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use "),t("code",[this._v("SHOW TIMESERIES <timeseries path>")]),this._v(" SQL in IoTDB's Command Line Interface:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For example, if you want to know the type of all timeseries, the <timeseries path> should be "),t("code",[this._v("root")]),this._v(". The statement will be:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show timeseries root\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> show timeseries root.fit.d1.*\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-can-i-change-iotdb-s-client-time-display-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-change-iotdb-s-client-time-display-format"}},[this._v("#")]),this._v(" How can I change IoTDB's Client time display format?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The default IoTDB's Client time display format is human readable (e.g. "),t("code",[this._v("1970-01-01T08:00:00.001")]),this._v("), if you want to display time in timestamp type or other readable format, add parameter "),t("code",[this._v("-disableIS08601")]),this._v(" in start command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("> $IOTDB_CLI_HOME/sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableIS08601\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);t.default=a.exports}}]);