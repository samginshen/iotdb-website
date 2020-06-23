(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{603:function(e,t,s){"use strict";s.r(t);var r=s(69),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"query-result-set-construction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-result-set-construction"}},[e._v("#")]),e._v(" Query Result Set Construction")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("This text mainly introduces the construction principle of query result set, including three parts: header construction, generating non repeated result set and restoring complete result set.")]),e._v(" "),s("h2",{attrs:{id:"header-construction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-construction"}},[e._v("#")]),e._v(" Header construction")]),e._v(" "),s("p",[e._v("Next Introduce the first part: including the result set header construction way of RawDataQuery, AlignByDeviceQuery and LastQuery. e.g. DownsamplingQuery and FillQuery etc. will be introduced as subquery in these three queries.")]),e._v(" "),s("h3",{attrs:{id:"raw-data-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raw-data-query"}},[e._v("#")]),e._v(" Raw data query")]),e._v(" "),s("p",[e._v("The header construction logic of raw data query is in the "),s("code",[e._v("getWideQueryHeaders()")]),e._v(" method.")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.service.TSServiceImpl.getWideQueryHeaders")])]),e._v(" "),s("p",[e._v("For the construction of each header, you need to provide the column name and the corresponding data type of the column.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Ordinary raw data query (including FillQuery) only needs to obtain timeseries paths "),s("strong",[e._v("not de duplicated")]),e._v(" from the physical query plan, which are the column names, and use these paths to obtain the corresponding data type to generate the result set header.")])]),e._v(" "),s("li",[s("p",[e._v("If the raw data query contains aggregate functions (including AggregateQuery and DownsamplingQuery), the time column will be ignored and "),s("strong",[e._v("aggregate function and timeseries path will be combined to form the column name")]),e._v(", and when obtaining the data type, the type of aggregate function will prevail. For example, "),s("code",[e._v("root.sg.d1.s1")]),e._v(" is of FLOAT type, while "),s("code",[e._v("count(root.sg.d1.s1)")]),e._v(" shoule be of LONG type.")])])]),e._v(" "),s("p",[e._v("Next, we will give examples：")]),e._v(" "),s("p",[e._v("Assuming that all timeseries in the query below exist, the result set headers generated by the following two queries are respectively:")]),e._v(" "),s("p",[e._v("SQL1："),s("code",[e._v("SELECT s1, s2 FROM root.sg.d1;")]),e._v("  ->")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("root.sg.d1.s1")]),e._v(" "),s("th",[e._v("root.sg.d1.s2")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("p",[e._v("SQL2："),s("code",[e._v("SELECT count(s1), max_time(s1) FROM root.sg.d1;")]),e._v(" ->")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("count(root.sg.d1.s1)")]),e._v(" "),s("th",[e._v("max_time(root.sg.d1.s2)")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td")])])]),e._v(" "),s("h3",{attrs:{id:"align-by-device-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-by-device-query"}},[e._v("#")]),e._v(" Align by device query")]),e._v(" "),s("p",[e._v("The header construction logic of align by device query is in the "),s("code",[e._v("getAlignByDeviceQueryHeaders()")]),e._v(" method.")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.service.TSServiceImpl.getAlignByDeviceQueryHeaders")])]),e._v(" "),s("p",[e._v("The result set construction of the AlignByDeviceQuery depends on the list of "),s("strong",[e._v("measurements not deduplicated")]),e._v(" generated in the physical query plan. For a brief introduction, the measurements list is a list generated by the suffix path (including wildcards) in the SELECT clause, including three types, namely constant, exist and nonexist. For details, please refer to "),s("RouterLink",{attrs:{to:"/SystemDesign/DataQuery/AlignByDeviceQuery.html"}},[e._v("Align by device query")])],1),e._v(" "),s("p",[e._v("Since the structure of relation table is used for AlignByDeviceQuery, the device column is added to the header first, and its corresponding data type is text type.")]),e._v(" "),s("p",[e._v("Then get the list of measurements, take each measurement as the column name, and get the corresponding data type depending on the measurements' type. If it is a Constant or NonExist type, the data type is directly set as Text type. If it's an Exist type, then get the corresponding type from the "),s("code",[e._v("measurementdatatypemap")]),e._v(", which is stored in the physical query plan.")]),e._v(" "),s("p",[e._v("Note that in the case of an AggregationQuery, the measuremnts in the list here will contain aggregate functions, so they can be processed together.")]),e._v(" "),s("p",[e._v("Next, we will give an example：")]),e._v(" "),s("p",[e._v("Assuming there are two timeseries now: "),s("code",[e._v("root.sg.d1.s1")]),e._v(", "),s("code",[e._v("root.sg.d1.s2")]),e._v("， then the result set header generated by the query below is:")]),e._v(" "),s("p",[e._v("SQL："),s("code",[e._v("SELECT '111', s1, s2, *, s5 FROM root.sg.d1 ALIGN BY DEVICE;")])]),e._v(" "),s("p",[e._v("-> measurements list: ['111', s1, s2, s1, s2, s5]")]),e._v(" "),s("p",[e._v("-> header")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("Device")]),e._v(" "),s("th",[e._v("111")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s5")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("h3",{attrs:{id:"lastquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lastquery"}},[e._v("#")]),e._v(" LastQuery")]),e._v(" "),s("p",[e._v("The header construction logic of last query is in the static method "),s("code",[e._v("LAST_RESP")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.service.StaticResps.LAST_RESP")])]),e._v(" "),s("p",[e._v("The latest data query calculates the result with the largest timestamp of the timeseries to be queried and displays it in three columns: time, timeseries and the corresponding value.")]),e._v(" "),s("p",[e._v("Next, we will give an example：")]),e._v(" "),s("p",[e._v("Assuming there are two timeseries now: "),s("code",[e._v("root.sg.d1.s1")]),e._v(", "),s("code",[e._v("root.sg.d1.s2")]),e._v("， then the result set header generated by the query below is:")]),e._v(" "),s("p",[e._v("SQL："),s("code",[e._v("SELECT last s1, s2 FROM root.sg.d1;")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("timeseries")]),e._v(" "),s("th",[e._v("value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("...")]),e._v(" "),s("td",[e._v("root.sg.d1.s1")]),e._v(" "),s("td",[e._v("...")])]),e._v(" "),s("tr",[s("td",[e._v("...")]),e._v(" "),s("td",[e._v("root.sg.d1.s2")]),e._v(" "),s("td",[e._v("...")])])])]),e._v(" "),s("h2",{attrs:{id:"generate-non-repeated-result-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-non-repeated-result-set"}},[e._v("#")]),e._v(" Generate non repeated result set")]),e._v(" "),s("p",[e._v("Unlike the header construction, we do not need to query duplicate data when executing the physical query plan. For example, for the query "),s("code",[e._v("select s1, s1 from root.sg.d1")]),e._v(", we only need to query the value of the timeseries "),s("code",[e._v("root.sg.d1.s1")]),e._v(" once. Therefore, after the header is constructed, we need to generate a non repeated result set on the server side.")]),e._v(" "),s("p",[e._v("In addition to AlignByDeviceQuery, the deduplication logic of "),s("strong",[e._v("RawDataQuery, AggregateQuery, LastQuery")]),e._v(" etc. is in the "),s("code",[e._v("duplicate()")]),e._v(" method.")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.qp.strategy.PhysicalGenerator.deduplicate()")])]),e._v(" "),s("p",[e._v("The deduplication logic is relatively simple: first, get the path not deduplicated from the query plan, and then create a "),s("code",[e._v("Set")]),e._v(" structure to deduplicate during traversal.")]),e._v(" "),s("p",[e._v("It is worth noting that the timeseries paths of the query are sorted by device before the RawDataQuery and AggregateQuery are deduplicated, in order to reduce I/O and deserialization operations and speed up the query.\nHere an additional data structure "),s("code",[e._v("pathToIndex")]),e._v(" is calculated to record the position of each path in the query.")]),e._v(" "),s("p",[e._v("Because only one set of data needs to be calculated for the LastQuery, there is no need to sort the paths. Its "),s("code",[e._v("pathToIndex")]),e._v(" will be null.")]),e._v(" "),s("p",[e._v("The deduplication logic of "),s("strong",[e._v("AlignByDeviceQuery")]),e._v(" is in the  "),s("code",[e._v("hasNextWithoutConstraint()")]),e._v(" method of its result set.")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.query.dataset.AlignByDeviceDataSet.hasNextWithoutConstraint()")])]),e._v(" "),s("p",[e._v("Because AlignByDeviceQuery need to organize their query plans by device, each device query may not have the same path, and it is allowed to contain constant columns and nonexistent timeseries, so it cannot simply be deduplicated with other queries. Deduplication requires "),s("strong",[e._v("removing not only the repeated timeseries path, but also the constant columns appearing in the query and the timeseries that do not exist in the current device")]),e._v(".\nThe implementation logic can be referred to "),s("RouterLink",{attrs:{to:"/SystemDesign/DataQuery/AlignByDeviceQuery.html"}},[e._v("Align by device query")]),e._v(".")],1),e._v(" "),s("p",[e._v("After the deduplication paths in the query plan are completed, the query executor of IoTDB can be called to execute the query and obtain the deduplication result set.")]),e._v(" "),s("h2",{attrs:{id:"restore-the-complete-result-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restore-the-complete-result-set"}},[e._v("#")]),e._v(" Restore the complete result set")]),e._v(" "),s("p",[e._v("The construction of headers and the generation of non-repeating result set above are done on the server side and then returned to the client side. After the client restores the non-repeating result set based on the original header, the complete result set is presented to the user. To distinguish two result sets, they are called "),s("strong",[e._v("query result set")]),e._v(" and "),s("strong",[e._v("final result set")]),e._v(" respectively.")]),e._v(" "),s("p",[e._v("To explain simply, an example is given first：")]),e._v(" "),s("p",[e._v("SQL: "),s("code",[e._v("SELECT s2, s1, s2 FROM root.sg.d1;")])]),e._v(" "),s("p",[e._v("The list of column names "),s("code",[e._v("columnNameList")]),e._v(" in the header which has been calculated using the steps above is (Timestamp will be contained later if need be)：")]),e._v(" "),s("p",[s("code",[e._v("[root.sg.d1.s2, root.sg.d1.s1, root.sg.d1.s2].")])]),e._v(" "),s("p",[e._v("The position of the timeseries path in the query "),s("code",[e._v("pathToIndex")]),e._v(" is(sorted by device)：")]),e._v(" "),s("p",[s("code",[e._v("root.sg.d1.s1 -> 0, root.sg.d1.s2 -> 1;")])]),e._v(" "),s("p",[e._v("Then query result set is：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("root.sg.d1.s1")]),e._v(" "),s("th",[e._v("root.sg.d1.s2")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("p",[e._v("To restore the final result set, we need to construct a mapping set "),s("code",[e._v("columnOrdinalMap")]),e._v(" with the column name to its position in the query result set, which is aimed at fetching the corresponding result of a column from the query result set. This part of logic is completed in the constructor of the new result set "),s("code",[e._v("IoTDBQueryResultSet")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.jdbc.AbstractIoTDBResultSet.AbstractIoTDBResultSet()")])]),e._v(" "),s("p",[e._v("In order to construct metadata information in final result set, a complete column name list is needed. The "),s("code",[e._v("columnnamelist")]),e._v(" given above does not contain a timestamp. Therefore, it's necessary to determine whether a timestamp needs to be printed. If so, add the "),s("code",[e._v("Time")]),e._v(" column to the header to form a complete header.")]),e._v(" "),s("p",[e._v("The complete header in example is：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("root.sg.d1.s2")]),e._v(" "),s("th",[e._v("root.sg.d1.s1")]),e._v(" "),s("th",[e._v("root.sg.d1.s2")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("p",[e._v("Then calculating "),s("code",[e._v("columnordinalmap")]),e._v(", judge whether to print a timestamp first. If so, record the timestamp as the first column.")]),e._v(" "),s("p",[e._v("Then traverse the column name list in the header and then check whether "),s("code",[e._v("columnnameindex")]),e._v(" is initialized. This field comes from "),s("code",[e._v("pathtoindex")]),e._v(" calculated during deduplication, which records the location of each timeseries path in the query. If it is initialized, record the position + 2 as its position in the result set. If not, record the positions in traversal order, which is consistent with the query order in server side.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("columnOrdinalMap")]),e._v(" in example is：")]),e._v(" "),s("p",[s("code",[e._v("Time -> 1, root.sg.d1.s2 -> 3, root.sg.d1.s1 -> 2")])]),e._v(" "),s("p",[e._v("Next, traverse the column names in the header, and then fill in the complete result set according to the mapping set. Its logic is in the "),s("code",[e._v("cacheResult()")]),e._v(" method.")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.cli.AbstractCli.cacheResult()")])]),e._v(" "),s("p",[e._v("For example, the second column in the final result set is "),s("code",[e._v("root.sg.d1.s2")]),e._v(", therefore the result of the third column will be taken as its value from the result set. Repeat the process to fill the results of each row until there is no next result in the query result set or the maximum number of output rows is reached.")])])}),[],!1,null,null,null);t.default=o.exports}}]);