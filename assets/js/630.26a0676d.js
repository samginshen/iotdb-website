(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1203:function(e,t,a){"use strict";a.r(t);var s=a(71),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-maintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-maintenance"}},[e._v("#")]),e._v(" Data Maintenance")]),e._v(" "),a("h2",{attrs:{id:"data-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-update"}},[e._v("#")]),e._v(" Data Update")]),e._v(" "),a("p",[e._v("Users can use "),a("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("UPDATE statements")]),e._v(" to update data over a period of time in a specified timeseries. When updating data, users can select a timeseries to be updated (version 0.8.2 does not support multiple timeseries updates) and specify a time point or period to be updated (version 0.8.0 must have time filtering conditions).")],1),e._v(" "),a("p",[e._v("In a JAVA programming environment, you can use the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/6-JDBC API/1-JDBC API.html"}},[e._v("Java JDBC")]),e._v(" to execute single or batch UPDATE statements.")],1),e._v(" "),a("h3",{attrs:{id:"update-single-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-single-timeseries"}},[e._v("#")]),e._v(" Update Single Timeseries")]),e._v(" "),a("p",[e._v("Taking the power supply status of ln group wf02 plant wt02 device as an example, there exists such a usage scenario:")]),e._v(" "),a("p",[e._v("After data access and analysis, it is found that the power supply status from 2017-11-01 15:54:00 to 2017-11-01 16:00:00 is true, but the actual power supply status is abnormal. You need to update the status to false during this period. The SQL statement for this operation is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("update root.ln.wf02 SET wt02.status = false where time <=2017-11-01T16:00:00 and time >= 2017-11-01T15:54:00\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It should be noted that when the updated data type does not match the actual data type, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> update root.ln.wf02 set wt02.status = 1205 where time < now()\nerror: The BOOLEAN data type should be true/TRUE or false/FALSE\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("When the updated path does not exist, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> update root.ln.wf02 set wt02.sta = false where time < now()\nMsg: do not select any existing series\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"data-deletion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-deletion"}},[e._v("#")]),e._v(" Data Deletion")]),e._v(" "),a("p",[e._v("Users can delete data that meet the deletion condition in the specified timeseries by using the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("DELETE statement")]),e._v(". When deleting data, users can select one or more timeseries paths, prefix paths, or paths with star  to delete data before a certain time (version 0.8.2 does not support the deletion of data within a closed time interval).")],1),e._v(" "),a("p",[e._v("In a JAVA programming environment, you can use the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/6-JDBC API/1-JDBC API.html"}},[e._v("Java JDBC")]),e._v(" to execute single or batch UPDATE statements.")],1),e._v(" "),a("h3",{attrs:{id:"delete-single-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-single-timeseries"}},[e._v("#")]),e._v(" Delete Single Timeseries")]),e._v(" "),a("p",[e._v("Taking ln Group as an example, there exists such a usage scenario:")]),e._v(" "),a("p",[e._v("The wf02 plant's wt02 device has many segments of errors in its power supply status before 2017-11-01 16:26:00, and the data cannot be analyzed correctly. The erroneous data affected the correlation analysis with other devices. At this point, the data before this time point needs to be deleted. The SQL statement for this operation is")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("delete from root.ln.wf02.wt02.status where time<=2017-11-01T16:26:00;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"delete-multiple-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-multiple-timeseries"}},[e._v("#")]),e._v(" Delete Multiple Timeseries")]),e._v(" "),a("p",[e._v("When both the power supply status and hardware version of the ln group wf02 plant wt02 device before 2017-11-01 16:26:00 need to be deleted, "),a("RouterLink",{attrs:{to:"/UserGuide/Master/V0.8.x/2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[e._v("the prefix path with broader meaning or the path with star")]),e._v(" can be used to delete the data. The SQL statement for this operation is:")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("delete from root.ln.wf02.wt02 where time <= 2017-11-01T16:26:00;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("delete from root.ln.wf02.wt02.* where time <= 2017-11-01T16:26:00;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It should be noted that when the deleted path does not exist, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> delete from root.ln.wf03.wt02.status where time < now()\nMsg: TimeSeries does not exist and its data cannot be deleted\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);