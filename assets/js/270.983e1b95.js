(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{841:function(e,t,n){"use strict";n.r(t);var i=n(71),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"encoding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),n("p",[e._v("In order to improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports four encoding methods for different types of data:")]),e._v(" "),n("ul",[n("li",[e._v("PLAIN")])]),e._v(" "),n("p",[e._v("PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.")]),e._v(" "),n("ul",[n("li",[e._v("TS_2DIFF")])]),e._v(" "),n("p",[e._v("Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.")]),e._v(" "),n("p",[e._v("Second-order differential encoding can also be used to encode floating-point numbers, but it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER, see "),n("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("this page")]),e._v(" for more information on how to specify) when creating time series. It is more suitable for storing sequence data where floating-point values appear continuously, monotonously increase or decrease, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.")],1),e._v(" "),n("ul",[n("li",[e._v("RLE")])]),e._v(" "),n("p",[e._v("Run-length encoding is more suitable for storing sequence with continuous integer values, and is not recommended for sequence data with most of the time different values.")]),e._v(" "),n("p",[e._v("Run-length encoding can also be used to encode floating-point numbers, but it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER, see "),n("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("this page")]),e._v(" for more information on how to specify) when creating time series. It is more suitable for storing sequence data where floating-point values appear continuously, monotonously increase or decrease, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.")],1),e._v(" "),n("ul",[n("li",[e._v("GORILLA")])]),e._v(" "),n("p",[e._v("GORILLA encoding is more suitable for floating-point sequence with similar values and is not recommended for sequence data with large fluctuations.")]),e._v(" "),n("ul",[n("li",[e._v("REGULAR")])]),e._v(" "),n("p",[e._v("Regular data encoding is more suitable for encoding regular sequence increasing data (e.g. the timeseries with the same time elapsed between each data point), in which case it's better than TS_2DIFF.")]),e._v(" "),n("p",[e._v("Regular data encoding method is not suitable for the data with fluctuations (irregular data), and TS_2DIFF is recommended to deal with it.")]),e._v(" "),n("ul",[n("li",[e._v("Correspondence between data type and encoding")])]),e._v(" "),n("p",[e._v("The four encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly. The correspondence between the data type and its supported encodings is summarized in Table 2-3.")]),e._v(" "),n("p",[n("strong",[e._v("Table 2-3 The correspondence between the data type and its supported encodings")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[e._v("Data Type")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Supported Encoding")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("BOOLEAN")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("INT32")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, REGULAR")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("INT64")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, REGULAR")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("FLOAT")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("DOUBLE")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("TEXT")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);