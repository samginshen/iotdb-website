(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{475:function(e,t,a){"use strict";a.r(t);var o=a(49),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"some-notes-on-release-0-9-3-and-upcoming-0-10-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-notes-on-release-0-9-3-and-upcoming-0-10-0"}},[e._v("#")]),e._v(" Some Notes on Release 0.9.3 and upcoming 0.10.0")]),e._v(" "),a("p",[a("em",[e._v("Note:")]),e._v(" This Blog Post was initially written by "),a("a",{attrs:{href:"mailto:qjl16@mails.tsinghua.edu.cn"}},[e._v("Jialin Qiao")]),e._v(" and has been published here: https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA.\nThis Text was translated with "),a("a",{attrs:{href:"www.DeepL.com/Translator"}},[e._v("DeepL")]),e._v(" and slightly corrected by "),a("a",{attrs:{href:"mailto:jfeinauer@pragmaticminds.de"}},[e._v("Julian Feinauer")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"notes-on-0-9-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-0-9-3"}},[e._v("#")]),e._v(" Notes on 0.9.3")]),e._v(" "),a("p",[e._v("It's been a long time since I've written an article, I've been working on development and took advantage of this release to write a bit now. The Release 0.9.3 is a minor release with no changes in file structure or RPC and can be upgraded painlessly. In fact, shortly after 0.9.2 was released, a serious bug was found, so the IoTDB Community decided to Release 0.9.3 shortly after.")]),e._v(" "),a("p",[e._v("Let me say a few general things.")]),e._v(" "),a("p",[e._v("The official website of IoTDB has gotten a big upgrade in the last few months, with a much more beautiful interface than before! You can have a look at: http://iotdb.apache.org/.")]),e._v(" "),a("p",[e._v("The official website has also added Chinese and English design documents, although not yet complete, but basically all the big modules are documented in both languages and the IoTDB Community highly welcomes suggestions how to improve or contributions that do so:")]),e._v(" "),a("p",[e._v("English: http://iotdb.apache.org/SystemDesign/0-Architecture/1-Architecture.html\nChinese: http://iotdb.apache.org/zh/SystemDesign/0-Architecture/1-Architecture.html")]),e._v(" "),a("p",[e._v("The Release 0.9.3 is a minor/bugfix release in the 0.9 release series that mainly fixes one serious bug: if the wrong metadata operation is performed, such as deleting a non-existent storage group, the metadata is empty after server restart. This is caused by the metadata module beeing nulled when the metadata log was redone. The fix is to skip the wrong metadata log. In the preparation of version 0.10, we take an execution before logging approach and do not log errors again.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue module"),a("OutboundLink")],1),e._v(" is open on Github, so you can ask questions about bugs or new requirements, and we will answer them promptly.")]),e._v(" "),a("h2",{attrs:{id:"fixes-in-0-9-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixes-in-0-9-3"}},[e._v("#")]),e._v(" Fixes in 0.9.3")]),e._v(" "),a("ul",[a("li",[e._v("[IOTDB-531] Fix the bug that JDBC UTL does not support domain names")]),e._v(" "),a("li",[e._v("[IOTDB-563] Fix pentaho cannot be downloaded")]),e._v(" "),a("li",[e._v("[IOTDB-608] Error metadata log skipped on reboot")]),e._v(" "),a("li",[e._v("[IOTDB-634] Fixes data merge issues when setting the underlying file system to HDFS")]),e._v(" "),a("li",[e._v("[IOTDB-636] Fix Grafana connector not using correct time granularity")]),e._v(" "),a("li",[e._v("[IOTDB-528] Adding a downsampling method for the Grafana connector")]),e._v(" "),a("li",[e._v("[IOTDB-635] When Grafana uses the wrong aggregation for a data type, modify to the generic aggregation function last retry")]),e._v(" "),a("li",[e._v("Remove the official website about loading external TsFile documentation (this feature is version 0.10, not yet released)")])]),e._v(" "),a("p",[e._v("To download and use the new Version of IoTDB go to: https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip")]),e._v(" "),a("p",[e._v("User documentation for this release can be found under: http://iotdb.apache.org/UserGuide/Master/0-Get%20Started/1-QuickStart.html")]),e._v(" "),a("p",[e._v("The github repository has a well-established example module that contains sample code for each of the other modules.")]),e._v(" "),a("h2",{attrs:{id:"some-previews-about-upcoming-release-0-10-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-previews-about-upcoming-release-0-10-0"}},[e._v("#")]),e._v(" Some previews About upcoming release 0.10.0")]),e._v(" "),a("p",[e._v("The release manual for version 0.9.3 is shorter because many features and improvements were put into version 0.10.0, including query engine upgrades, TsFile structure upgrades, cache optimization, tags, property management, and more. The file structure of 0.10.0 has been fixed and the upgrade tool is almost complete, 0.10.0 will be released soon.")])])}),[],!1,null,null,null);t.default=n.exports}}]);