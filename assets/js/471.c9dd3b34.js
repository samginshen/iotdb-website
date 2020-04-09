(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{791:function(t,e,a){"use strict";a.r(e);var s=a(1),i=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),a("h2",{attrs:{id:"_1-tsfile-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tsfile-design"}},[t._v("#")]),t._v(" 1. TsFile Design")]),t._v(" "),a("p",[t._v("This is an introduction to the design details of TsFile.")]),t._v(" "),a("h3",{attrs:{id:"_1-1-variable-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-variable-storage"}},[t._v("#")]),t._v(" 1.1 Variable Storage")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Big Endian")]),t._v("\n​\n"),a("ul",[a("li",[t._v("For Example, the "),a("code",[t._v("int")]),t._v(" "),a("code",[t._v("0x8")]),t._v(" will be stored as "),a("code",[t._v("00 00 00 08")]),t._v(", not "),a("code",[t._v("08 00 00 00")])])])]),t._v(" "),a("li",[a("strong",[t._v("String with Variable Length")]),t._v(" "),a("ul",[a("li",[t._v("The format is "),a("code",[t._v("int size")]),t._v(" plus "),a("code",[t._v("String literal")]),t._v(". Size can be zero.")]),t._v(" "),a("li",[t._v("Size equals the number of bytes this string will take, and it may not equal to the length of the string.")]),t._v(" "),a("li",[t._v('For example "sensor_1" will be stored as '),a("code",[t._v("00 00 00 08")]),t._v(' plus the encoding(ASCII) of "sensor_1".')]),t._v(" "),a("li",[t._v('Note that for the "Magic String"(file signature) "TsFilev0.8.0", the size(12) and encoding(ASCII)\nis fixed so there is no need to put the size before this string literal.')])])]),t._v(" "),a("li",[a("strong",[t._v("Data Type Hardcode")]),t._v(" "),a("ul",[a("li",[t._v("0: BOOLEAN")]),t._v(" "),a("li",[t._v("1: INT32 ("),a("code",[t._v("int")]),t._v(")")]),t._v(" "),a("li",[t._v("2: INT64 ("),a("code",[t._v("long")]),t._v(")")]),t._v(" "),a("li",[t._v("3: FLOAT")]),t._v(" "),a("li",[t._v("4: DOUBLE")]),t._v(" "),a("li",[t._v("5: TEXT ("),a("code",[t._v("String")]),t._v(")")])])]),t._v(" "),a("li",[a("strong",[t._v("Encoding Type Hardcode")]),t._v(" "),a("ul",[a("li",[t._v("0: PLAIN")]),t._v(" "),a("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),a("li",[t._v("2: RLE")]),t._v(" "),a("li",[t._v("3: DIFF")]),t._v(" "),a("li",[t._v("4: TS_2DIFF")]),t._v(" "),a("li",[t._v("5: BITMAP")]),t._v(" "),a("li",[t._v("6: GORILLA")]),t._v(" "),a("li",[t._v("7: REGULAR")])])]),t._v(" "),a("li",[a("strong",[t._v("Compressing Type Hardcode")]),t._v(" "),a("ul",[a("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),a("li",[t._v("1: SNAPPY")]),t._v(" "),a("li",[t._v("2: GZIP")]),t._v(" "),a("li",[t._v("3: LZO")]),t._v(" "),a("li",[t._v("4: SDT")]),t._v(" "),a("li",[t._v("5: PAA")]),t._v(" "),a("li",[t._v("6: PLA")])])]),t._v(" "),a("li",[a("strong",[t._v("TsDigest Statistics Type Hardcode")]),t._v(" "),a("ul",[a("li",[t._v("0: min_value")]),t._v(" "),a("li",[t._v("1: max_value")]),t._v(" "),a("li",[t._v("2: first_value")]),t._v(" "),a("li",[t._v("3: last_value")]),t._v(" "),a("li",[t._v("4: sum_value")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-tsfile-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-tsfile-overview"}},[t._v("#")]),t._v(" 1.2 TsFile Overview")]),t._v(" "),a("p",[t._v("Here is a graph about the TsFile structure.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})]),t._v(" "),a("h4",{attrs:{id:"_1-2-1-magic-string-and-version-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-magic-string-and-version-number"}},[t._v("#")]),t._v(" 1.2.1 Magic String and Version Number")]),t._v(" "),a("p",[t._v("A TsFile begins with a 6-byte magic string ("),a("code",[t._v("TsFile")]),t._v(") and a 6-byte version number ("),a("code",[t._v("000001")]),t._v(").")]),t._v(" "),a("h4",{attrs:{id:"_1-2-2-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-data"}},[t._v("#")]),t._v(" 1.2.2 Data")]),t._v(" "),a("p",[t._v("The content of a TsFile file can be divided as two parts: data and metadata. There is a byte "),a("code",[t._v("0x02")]),t._v(" as the marker between\ndata and metadata.")]),t._v(" "),a("p",[t._v("The data section is an array of "),a("code",[t._v("ChunkGroup")]),t._v(", each ChunkGroup represents a "),a("em",[t._v("device")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"chunkgroup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroup"}},[t._v("#")]),t._v(" ChunkGroup")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ChunkGroup")]),t._v(" has an array of "),a("code",[t._v("Chunk")]),t._v(", a following byte "),a("code",[t._v("0x00")]),t._v(" as the marker, and a "),a("code",[t._v("ChunkFooter")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[t._v("#")]),t._v(" Chunk")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Chunk")]),t._v(" represents a "),a("em",[t._v("sensor")]),t._v(". There is a byte "),a("code",[t._v("0x01")]),t._v(" as the marker, following a "),a("code",[t._v("ChunkHeader")]),t._v(" and an array of "),a("code",[t._v("Page")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"chunkheader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkheader"}},[t._v("#")]),t._v(" ChunkHeader")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("The name of this sensor(measurementID)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Size of this chunk")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data type of this chuck")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of pages")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Compression Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Encoding Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Max Tombstone Time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])])])]),t._v(" "),a("h5",{attrs:{id:"page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("Page")]),t._v(" represents some data in a "),a("code",[t._v("Chunk")]),t._v(". It contains a "),a("code",[t._v("PageHeader")]),t._v(" and the actual data (The encoded time-value pair).")]),t._v(" "),a("p",[t._v("PageHeader Structure")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data size before compressing")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data size after compressing(if use SNAPPY)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of values")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Maximum time stamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Minimum time stamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Maximum value of the page")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Minimum value of the page")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("First value of the page")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Sum of the Page")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("double")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Last value of the page")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])])])]),t._v(" "),a("h5",{attrs:{id:"chunkgroupfooter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[t._v("#")]),t._v(" ChunkGroupFooter")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DeviceId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data size of the ChunkGroup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of chunks")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),a("h4",{attrs:{id:"_1-2-3-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-metadata"}},[t._v("#")]),t._v(" 1.2.3  Metadata")]),t._v(" "),a("h5",{attrs:{id:"_1-2-3-1-tsdevicemetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-1-tsdevicemetadata"}},[t._v("#")]),t._v(" 1.2.3.1 TsDeviceMetaData")]),t._v(" "),a("p",[t._v("The first part of metadata is "),a("code",[t._v("TsDeviceMetaData")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("End time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of chunk groups")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("List of ChunkGroupMetaData")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("list")])])])]),t._v(" "),a("h6",{attrs:{id:"chunkgroupmetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[t._v("#")]),t._v(" ChunkGroupMetaData")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DeviceId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start offset of the ChunkGroup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("End offset of the ChunkGroup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of ChunkMetaData")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("List of ChunkMetaData")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("list")])])])]),t._v(" "),a("h6",{attrs:{id:"chunkmetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[t._v("#")]),t._v(" ChunkMetaData")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MeasurementId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start offset of ChunkHeader")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of data points")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("End time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("The statistics of this chunk")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TsDigest")])])])]),t._v(" "),a("h6",{attrs:{id:"tsdigest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[t._v("#")]),t._v(" TsDigest")]),t._v(" "),a("p",[t._v("Right now there are five statistics: "),a("code",[t._v("min_value, max_value, first_value, last_value, sum_value")]),t._v(".")]),t._v(" "),a("p",[t._v("In v0.8.x, the storage format of statistics is a name-value pair. That is, "),a("code",[t._v("Map<String, ByteBuffer> statistics")]),t._v(". The name is a string (remember the length is before the literal). But for the value, there is also an integer byteLength acting as the self description length of the following value because the value may be of various type. For example, if the "),a("code",[t._v("min_value")]),t._v(' is an integer 0, then it will be stored as [9 "min_value" 4 0] in the TsFile.')]),t._v(" "),a("p",[t._v("The figure below shows an example of "),a("code",[t._v("TsDigest.deserializeFrom(buffer)")]),t._v(". In v0.8.0, we will get")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Map<String, ByteBuffer> statistics = {\n    "min_value" -> ByteBuffer of int value 0, \n    "last" -> ByteBuffer of int value 19,\n    "sum" -> ByteBuffer of double value 1093347116,\n    "first" -> ByteBuffer of int value 0,\n    "max_value" -> ByteBuffer of int value 99\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/63765352-664a4280-c8fb-11e9-869e-859edf6d00bb.png"}}),t._v(" "),a("p",[t._v("In v0.9.x, the storage format is changed to an array for space and time efficiency. That is, "),a("code",[t._v("ByteBuffer[] statistics")]),t._v(". Each position of the array has a fixed association with a specific type of statistic, following the order defined in StatisticType:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("enum StatisticType {\n    min_value, max_value, first_value, last_value, sum_value\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Therefore, in the above example, we will get")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ByteBuffer[] statistics = [\n    ByteBuffer of int value 0, // associated with "min_value"\n    ByteBuffer of int value 99, // associated with "max_value"\n    ByteBuffer of int value 0, // associated with "first_value"\n    ByteBuffer of int value 19, // associated with "last_value"\n    ByteBuffer of double value 1093347116 // associated with "sum_value"\n]\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("As another example in v0.9.x, when deserializing a TsDigest from buffer [3, 0,4,0, 1,4,99, 3,4,19], we get")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ByteBuffer[] statistics = [\n    ByteBuffer of int value 0, // associated with "min_value"\n    ByteBuffer of int value 99, // associated with "max_value"\n    null, // associated with "first_value"\n    ByteBuffer of int value 19, // associated with "last_value"\n    null // associated with "sum_value"\n]\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h5",{attrs:{id:"_1-2-3-2-tsfilemetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-2-tsfilemetadata"}},[t._v("#")]),t._v(" 1.2.3.2 TsFileMetaData")]),t._v(" "),a("p",[a("code",[t._v("TsFileMetaData")]),t._v(" follows after "),a("code",[t._v("TsDeviceMetadatas")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of devices")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Pairs of device name and deviceMetadataIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, TsDeviceMetadataIndex pair")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number of measurements")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Pairs of measurement name and schema")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String, MeasurementSchema pair")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Author byte")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Author(if author byte is 0x01)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("totalChunkNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("invalidChunkNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter size")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter bit vector")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("byte[Bloom filter size]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter capacity")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter hash functions size")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),a("h6",{attrs:{id:"tsdevicemetadataindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadataindex"}},[t._v("#")]),t._v(" TsDeviceMetadataIndex")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DeviceId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start offset of TsDeviceMetaData")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Start time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("End time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("long")])])])]),t._v(" "),a("h6",{attrs:{id:"measurementschema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[t._v("#")]),t._v(" MeasurementSchema")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MeasurementId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Encoding")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Compressor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Size of props")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),a("p",[t._v("If size of props is greater than 0, there is an array of <String, String> pair as properties of this measurement.")]),t._v(" "),a("p",[t._v('Such as "max_point_number""2".')]),t._v(" "),a("h5",{attrs:{id:"_1-2-3-3-tsfilemetadatasize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-3-tsfilemetadatasize"}},[t._v("#")]),t._v(" 1.2.3.3 TsFileMetadataSize")]),t._v(" "),a("p",[t._v("After the TsFileMetaData, there is an int indicating the size of the TsFileMetaData.")]),t._v(" "),a("h4",{attrs:{id:"_1-2-4-magic-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-magic-string"}},[t._v("#")]),t._v(" 1.2.4 Magic String")]),t._v(" "),a("p",[t._v("A TsFile ends with a 6-byte magic string ("),a("code",[t._v("TsFile")]),t._v(").")]),t._v(" "),a("p",[t._v("Congratulations! You have finished the journey of discovering TsFile.")]),t._v(" "),a("h3",{attrs:{id:"_1-3-tool-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-tool-set"}},[t._v("#")]),t._v(" 1.3 Tool Set")]),t._v(" "),a("h4",{attrs:{id:"_1-3-1-tsfileresource-print-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-tsfileresource-print-tool"}},[t._v("#")]),t._v(" 1.3.1 TsFileResource Print Tool")]),t._v(" "),a("p",[t._v("After building the server, the startup script of this tool will appear under the "),a("code",[t._v("server\\target\\iotdb-server-0.9.1\\tools")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("p",[t._v("For Windows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\\print-tsfile-sketch.bat <path of your TsFileResource Directory>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("For Linux or MacOs:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./print-tsfile-sketch.sh <path of your TsFileResource Directory>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("An example on Windows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("D:\\incubator-iotdb\\server\\target\\iotdb-server-0.9.1\\tools>.\\print-tsfile-resource-files.bat D:\\data\\data\\sequence\\root.vehicle\n​````````````````````````\nStarting Printing the TsFileResources\n​````````````````````````\n12:31:59.861 [main] WARN org.apache.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-engine.properties, use default configuration\nanalyzing D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile ...\ndevice root.vehicle.d0, start time 3000 (1970-01-01T08:00:03+08:00[GMT+08:00]), end time 100999 (1970-01-01T08:01:40.999+08:00[GMT+08:00])\nanalyzing the resource file finished.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"_1-3-2-tsfile-sketch-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-tsfile-sketch-tool"}},[t._v("#")]),t._v(" 1.3.2 TsFile Sketch Tool")]),t._v(" "),a("p",[t._v("After building the server, the startup script of this tool will appear under the "),a("code",[t._v("server\\target\\iotdb-server-0.9.1\\tools")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("p",[t._v("For Windows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\\print-tsfile-sketch.bat <path of your TsFile> (<path of the file for saving the output result>) \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("Note that if "),a("code",[t._v("<path of the file for saving the output result>")]),t._v(' is not set, the default path "TsFile_sketch_view.txt" will be used.')])]),t._v(" "),a("p",[t._v("For Linux or MacOs:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./print-tsfile-sketch.sh <path of your TsFile> (<path of the file for saving the output result>) \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("Note that if "),a("code",[t._v("<path of the file for saving the output result>")]),t._v(' is not set, the default path "TsFile_sketch_view.txt" will be used.')])]),t._v(" "),a("p",[t._v("An example on Windows:")]),t._v(" "),a("div",{staticClass:"language-$xslt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("D:\\incubator-iotdb\\server\\target\\iotdb-server-0.9.1\\tools>.\\print-tsfile-sketch.bat D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\n​````````````````````````\nStarting Printing the TsFile Sketch\n​````````````````````````\nTsFile path:D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\nSketch save path:TsFile_sketch_view.txt\n-------------------------------- TsFile Sketch --------------------------------\nfile path: D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\nfile length: 187382\n\n            POSITION|   CONTENT\n            --------    -------\n                   0|   [magic head] TsFile\n                   6|   [version number] 000001\n|||||||||||||||||||||   [Chunk Group] of root.vehicle.d0 begins at pos 12, ends at pos 186469, version:102, num of Chunks:6\n                  12|   [Chunk] of s3, numOfPoints:10600, time range:[3000,13599], tsDataType:TEXT,\n                        TsDigest:[min_value:A,max_value:E,first_value:A,last_value:E,sum_value:0.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               55718|   [Chunk] of s4, numOfPoints:10600, time range:[3000,13599], tsDataType:BOOLEAN,\n                        TsDigest:[min_value:false,max_value:true,first_value:true,last_value:false,sum_value:0.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               68848|   [Chunk] of s5, numOfPoints:10600, time range:[3000,13599], tsDataType:DOUBLE,\n                        TsDigest:[min_value:3000.0,max_value:13599.0,first_value:3000.0,last_value:13599.0,sum_value:8.79747E7]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               98474|   [Chunk] of s0, numOfPoints:21900, time range:[3000,100999], tsDataType:INT32,\n                        TsDigest:[min_value:0,max_value:99,first_value:0,last_value:19,sum_value:889750.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              123369|   [Chunk] of s1, numOfPoints:21900, time range:[3000,100999], tsDataType:INT64,\n                        TsDigest:[min_value:0,max_value:39,first_value:8,last_value:19,sum_value:300386.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              144741|   [Chunk] of s2, numOfPoints:21900, time range:[3000,100999], tsDataType:FLOAT,\n                        TsDigest:[min_value:0.0,max_value:122.0,first_value:8.0,last_value:52.0,sum_value:778581.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              186437|   [Chunk Group Footer]\n                    |           [marker] 0\n                    |           [deviceID] root.vehicle.d0\n                    |           [dataSize] 186425\n                    |           [num of chunks] 6\n|||||||||||||||||||||   [Chunk Group] of root.vehicle.d0 ends\n              186469|   [marker] 2\n              186470|   [TsDeviceMetadata] of root.vehicle.d0, startTime:3000, endTime:100999\n                    |           [startTime] 3000tfi\n                    |           [endTime] 100999\n                    |           [num of ChunkGroupMetaData] 1\n                    |           1 ChunkGroupMetaData\n              187133|   [TsFileMetaData]\n                    |           [num of devices] 1\n                    |           1 key&TsDeviceMetadataIndex\n                    |           [num of measurements] 6\n                    |           6 key&measurementSchema\n                    |           [createBy isNotNull] false\n                    |           [totalChunkNum] 6\n                    |           [invalidChunkNum] 0\n                    |           [bloom filter bit vector byte array length] 31\n                    |           [bloom filter bit vector byte array]\n                    |           [bloom filter number of bits] 256\n                    |           [bloom filter number of hash functions] 5\n              187372|   [TsFileMetaDataSize] 239\n              187376|   [magic tail] TsFile\n              187382|   END of TsFile\n\n---------------------------------- TsFile Sketch End ----------------------------------\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br")])]),a("h4",{attrs:{id:"_1-3-3-tsfilesequenceread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-tsfilesequenceread"}},[t._v("#")]),t._v(" 1.3.3 TsFileSequenceRead")]),t._v(" "),a("p",[t._v("You can also use "),a("code",[t._v("example/tsfile/org/apache/iotdb/tsfile/TsFileSequenceRead")]),t._v(" to sequentially print a TsFile's content.")]),t._v(" "),a("h3",{attrs:{id:"_1-4-a-tsfile-visualization-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-a-tsfile-visualization-example"}},[t._v("#")]),t._v(" 1.4 A TsFile Visualization Example")]),t._v(" "),a("h4",{attrs:{id:"v0-8-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-x"}},[t._v("#")]),t._v(" v0.8.x")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/65209576-2bd36000-dacb-11e9-9e43-49e0dd01274e.png"}}),t._v(" "),a("h4",{attrs:{id:"v0-9-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-x"}},[t._v("#")]),t._v(" v0.9.x")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/68128717-35b60300-ff53-11e9-919e-48d80536df88.png"}})])}],!1,null,null,null);e.default=i.exports}}]);