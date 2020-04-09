(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1067:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("TsFile-Hive-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate Tsfile by Hive.")]),e._v(" "),s("p",[e._v("With this connector, you can")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("To use hive-connector in hive, we should add the hive-connector jar into hive.")]),e._v(" "),s("p",[e._v("After downloading the code of iotdb from "),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-iotdb"),s("OutboundLink")],1),e._v(", you can use the command of "),s("code",[e._v("mvn clean package -pl hive-connector -am -Dmaven.test.skip=true")]),e._v(" to get a "),s("code",[e._v("hive-connector-X.X.X-jar-with-dependencies.jar")]),e._v(".")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("Also provide a location from which hive-connector will pull the most current data for the table.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),s("p",[e._v("At this point, the Tsfile-backed table can be worked with in Hive like any other table.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._m(24),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),e._m(29),e._v(" "),s("p",[e._v("We're currently only supporting read operation.\nWriting tables to Tsfiles is under development.")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"tsfile-hive-connector-user-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-hive-connector-user-guide"}},[this._v("#")]),this._v(" TsFile-Hive-Connector User Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[this._v("#")]),this._v(" Outline")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("TsFile-Hive-Connector User Guide\n"),s("ul",[s("li",[e._v("About TsFile-Hive-Connector")]),e._v(" "),s("li",[e._v("System Requirements")]),e._v(" "),s("li",[e._v("Data Type Correspondence")]),e._v(" "),s("li",[e._v("Add Dependency For Hive")]),e._v(" "),s("li",[e._v("Creating Tsfile-backed Hive tables")]),e._v(" "),s("li",[e._v("Querying from Tsfile-backed Hive tables\n"),s("ul",[s("li",[e._v("Select Clause Example")]),e._v(" "),s("li",[e._v("Aggregate Clause Example")])])]),e._v(" "),s("li",[e._v("What's Next")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"about-tsfile-hive-connector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-tsfile-hive-connector"}},[this._v("#")]),this._v(" About TsFile-Hive-Connector")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Load a single TsFile, from either the local file system or hdfs, into hive")]),this._v(" "),t("li",[this._v("Load all files in a specific directory, from either the local file system or hdfs, into hive")]),this._v(" "),t("li",[this._v("Query the tsfile through HQL.")]),this._v(" "),t("li",[this._v("As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[this._v("#")]),this._v(" System Requirements")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Hadoop Version")]),e._v(" "),s("th",[e._v("Hive Version")]),e._v(" "),s("th",[e._v("Java Version")]),e._v(" "),s("th",[e._v("TsFile")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("2.7.3")]),e._v(" or "),s("code",[e._v("3.2.1")])]),e._v(" "),s("td",[s("code",[e._v("2.3.6")]),e._v(" or "),s("code",[e._v("3.1.2")])]),e._v(" "),s("td",[s("code",[e._v("1.8")])]),e._v(" "),s("td",[s("code",[e._v("0.10.0")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: For more information about how to download and use TsFile, please see the following link: https://github.com/apache/incubator-iotdb/tree/master/tsfile.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-type-correspondence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-type-correspondence"}},[this._v("#")]),this._v(" Data Type Correspondence")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("TsFile data type")]),e._v(" "),s("th",[e._v("Hive field type")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("BOOLEAN")]),e._v(" "),s("td",[e._v("Boolean")])]),e._v(" "),s("tr",[s("td",[e._v("INT32")]),e._v(" "),s("td",[e._v("INT")])]),e._v(" "),s("tr",[s("td",[e._v("INT64")]),e._v(" "),s("td",[e._v("BIGINT")])]),e._v(" "),s("tr",[s("td",[e._v("FLOAT")]),e._v(" "),s("td",[e._v("Float")])]),e._v(" "),s("tr",[s("td",[e._v("DOUBLE")]),e._v(" "),s("td",[e._v("Double")])]),e._v(" "),s("tr",[s("td",[e._v("TEXT")]),e._v(" "),s("td",[e._v("STRING")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"add-dependency-for-hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-dependency-for-hive"}},[this._v("#")]),this._v(" Add Dependency For Hive")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then in hive, use the command of "),t("code",[this._v("add jar XXX")]),this._v(" to add the dependency. For example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("hive> add jar /Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar;\n\nAdded [/Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar] to class path\nAdded resources: [/Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar]\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-tsfile-backed-hive-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-tsfile-backed-hive-tables"}},[this._v("#")]),this._v(" Creating Tsfile-backed Hive tables")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("To create a Tsfile-backed table, specify the "),s("code",[e._v("serde")]),e._v(" as "),s("code",[e._v("org.apache.iotdb.hive.TsFileSerDe")]),e._v(",\nspecify the "),s("code",[e._v("inputformat")]),e._v(" as "),s("code",[e._v("org.apache.iotdb.hive.TSFHiveInputFormat")]),e._v(",\nand the "),s("code",[e._v("outputformat")]),e._v(" as "),s("code",[e._v("org.apache.iotdb.hive.TSFHiveOutputFormat")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Also provide a schema which only contains two fields: "),s("code",[e._v("time_stamp")]),e._v(" and "),s("code",[e._v("sensor_id")]),e._v(" for the table.\n"),s("code",[e._v("time_stamp")]),e._v(" is the time value of the time series\nand "),s("code",[e._v("sensor_id")]),e._v(" is the name of the sensor you want to extract from the tsfile to hive such as "),s("code",[e._v("sensor_1")]),e._v(".\nThe name of the table can be any valid tables names in hive.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The location must be a specific directory, it can be on your local file system or HDFS if you have set up Hadoop.\nIf it is in your local file system, the location should look like "),t("code",[this._v("file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At last, you should set the "),t("code",[this._v("device_id")]),this._v(" in "),t("code",[this._v("TBLPROPERTIES")]),this._v(" to the device name you want to analyze.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(\n  time_stamp TIMESTAMP,\n  sensor_1 BIGINT)\nROW FORMAT SERDE 'org.apache.iotdb.hive.TsFileSerDe'\nSTORED AS\n  INPUTFORMAT 'org.apache.iotdb.hive.TSFHiveInputFormat'\n  OUTPUTFORMAT 'org.apache.iotdb.hive.TSFHiveOutputFormat'\nLOCATION '/data/data/sequence/root.baic2.WWS.leftfrontdoor/'\nTBLPROPERTIES ('device_id'='root.baic2.WWS.leftfrontdoor.plc1');\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In this example we're pulling the data of "),t("code",[this._v("root.baic2.WWS.leftfrontdoor.plc1.sensor_1")]),this._v(" from the directory of "),t("code",[this._v("/data/data/sequence/root.baic2.WWS.leftfrontdoor/")]),this._v(".\nThis table might result in a description as below:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("hive> describe only_sensor_1;\nOK\ntime_stamp          \ttimestamp              \tfrom deserializer\nsensor_1            \tbigint              \tfrom deserializer\nTime taken: 0.053 seconds, Fetched: 2 row(s)\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"querying-from-tsfile-backed-hive-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-from-tsfile-backed-hive-tables"}},[this._v("#")]),this._v(" Querying from Tsfile-backed Hive tables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Before we do any queries, we should set the "),t("code",[this._v("hive.input.format")]),this._v(" in hive by executing the following command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("hive> set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now, we already have an external table named "),t("code",[this._v("only_sensor_1")]),this._v(" in hive.\nWe can use any query operations through HQL to analyse it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"select-clause-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-clause-example"}},[this._v("#")]),this._v(" Select Clause Example")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> select * from only_sensor_1 limit 10;\nOK\n1\t1000000\n2\t1000001\n3\t1000002\n4\t1000003\n5\t1000004\n6\t1000005\n7\t1000006\n8\t1000007\n9\t1000008\n10\t1000009\nTime taken: 1.464 seconds, Fetched: 10 row(s)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"aggregate-clause-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-clause-example"}},[this._v("#")]),this._v(" Aggregate Clause Example")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> select count(*) from only_sensor_1;\nWARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.\nQuery ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6\nTotal jobs = 1\nLaunching Job 1 out of 1\nNumber of reduce tasks determined at compile time: 1\nIn order to change the average load for a reducer (in bytes):\n  set hive.exec.reducers.bytes.per.reducer=<number>\nIn order to limit the maximum number of reducers:\n  set hive.exec.reducers.max=<number>\nIn order to set a constant number of reducers:\n  set mapreduce.job.reduces=<number>\nJob running in-process (local Hadoop)\n2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%\n2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%\nEnded Job = job_local867757288_0002\nMapReduce Jobs Launched:\nStage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS\nTotal MapReduce CPU Time Spent: 0 msec\nOK\n1000000\nTime taken: 11.334 seconds, Fetched: 1 row(s)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-s-next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[this._v("#")]),this._v(" What's Next")])}],!1,null,null,null);t.default=n.exports}}]);