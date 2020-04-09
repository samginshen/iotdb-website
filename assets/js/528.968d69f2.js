(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{848:function(e,t,s){"use strict";s.r(t);var o=s(1),i=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[this._m(0),this._v(" "),t("p",[this._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),this._v(" "),t("p",[this._v("IoTDB allows you to specify the compression method of the column when creating a time series. IoTDB now supports two kinds of compression: UNCOMPRESSED (no compression) and SNAPPY compression. The specified syntax for compression is detailed in "),t("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[this._v("Create Timeseries Statement")]),this._v(".")],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[this._v("#")]),this._v(" Compression")])}],!1,null,null,null);t.default=i.exports}}]);