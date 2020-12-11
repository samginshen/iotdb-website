(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{635:function(e,t,i){"use strict";i.r(t);var s=i(68),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"sdt"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sdt"}},[e._v("#")]),e._v(" SDT")]),e._v(" "),i("p",[e._v("The Swinging Door Trending (SDT) algorithm is a lossy compression algorithm.\nSDT has low computational complexity and uses a linear trend to represent a quantity of data.")]),e._v(" "),i("p",[e._v("IoTDB allows you to specify the properties of SDT when creating a time series, and supports three properties:")]),e._v(" "),i("ul",[i("li",[e._v("CompDev (Compression Deviation)")])]),e._v(" "),i("p",[e._v("CompDev is the most important parameter in SDT that represents the maximum difference between the current sample and the current linear trend.")]),e._v(" "),i("ul",[i("li",[e._v("CompMin (Compression Minimum)")])]),e._v(" "),i("p",[e._v("CompMin is used for noisy reduction. CompMin measures the time distance between two stored data points,\nif the current point's time to the last stored point's time distance is smaller than or equal to compMin,\ncurrent point will NOT be stored regardless of compression deviation.")]),e._v(" "),i("ul",[i("li",[e._v("CompMax (Compression Maximum)")])]),e._v(" "),i("p",[e._v("CompMax is used to periodically check the time distance between the last stored point to the current point.\nIt measures the time difference between stored points. If the current point time to the last\nstored point's time distance is greater than or equal to compMax, current point will be stored regardless of compression deviation.")]),e._v(" "),i("p",[e._v("The specified syntax for SDT is detailed in "),i("RouterLink",{attrs:{to:"/UserGuide/Master/Operation Manual/SQL Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);