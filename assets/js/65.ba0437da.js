(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{623:function(e,t,o){"use strict";o.r(t);var s=o(69),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"compression"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),o("p",[e._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),e._v(" "),o("p",[e._v("IoTDB allows you to specify the compression method of the column when creating a time series, and now supports two compression methods:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("UNCOMPRESSED")])]),e._v(" "),o("li",[o("p",[e._v("SNAPPY")])])]),e._v(" "),o("p",[e._v("The specified syntax for compression is detailed in "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Operation Manual/SQL Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);