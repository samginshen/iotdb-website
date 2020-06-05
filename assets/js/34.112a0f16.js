(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{604:function(e,t,a){"use strict";a.r(t);var s=a(71),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"group-by-fill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-by-fill"}},[e._v("#")]),e._v(" Group by fill")]),e._v(" "),a("p",[e._v("The main logic of GroupByFill query is in "),a("code",[e._v("GroupByFillDataSet")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("org.apache.iotdb.db.query.dataset.groupby.GroupByFillDataSet")])])]),e._v(" "),a("p",[e._v("GroupByFill is used to fill the null value of the group by result.")]),e._v(" "),a("p",[e._v("Note that:")]),e._v(" "),a("ul",[a("li",[e._v("In group by fill, sliding step is not supported in group by clause")]),e._v(" "),a("li",[e._v("Now, only last_value aggregation function is supported in group by fill.")]),e._v(" "),a("li",[e._v("Linear fill is not supported in group by fill.")])]),e._v(" "),a("h2",{attrs:{id:"difference-between-previousuntillast-fill-and-previous-fill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-previousuntillast-fill-and-previous-fill"}},[e._v("#")]),e._v(" Difference between PREVIOUSUNTILLAST fill and PREVIOUS fill")]),e._v(" "),a("p",[e._v("PREVIOUS will fill every interval generated from group by if possible, However, PREVIOUSUNTILLAST will just fill until the last time of the specified time series and the interval after the last time won't be filled and will be null.")]),e._v(" "),a("p",[e._v("Here is an example:")]),e._v(" "),a("p",[e._v("Timestamp of point A is 1, point B is 5, point C is 20, point D is 30, point N is 8 and point M is 38.")]),e._v(" "),a("p",[e._v("Raw Data is like:\n"),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/16079446/78784824-9f41ae00-79d8-11ea-9920-0825e081cae0.png"}})]),e._v(" "),a("p",[a("code",[e._v("select temperature FROM root.ln.wf01.wt01 where time >= 1 and time <= 38")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Time")]),e._v(" "),a("th",[e._v("root.ln.wf01.wt01.temperature")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("21")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("23")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("25")])]),e._v(" "),a("tr",[a("td",[e._v("20")]),e._v(" "),a("td",[e._v("26")])]),e._v(" "),a("tr",[a("td",[e._v("27")]),e._v(" "),a("td",[e._v("29")])]),e._v(" "),a("tr",[a("td",[e._v("28")]),e._v(" "),a("td",[e._v("30")])]),e._v(" "),a("tr",[a("td",[e._v("30")]),e._v(" "),a("td",[e._v("40")])])])]),e._v(" "),a("p",[e._v("When we use Previous fill, even though the data between D and M is from the future, we should also use value of point D to fill them.")]),e._v(" "),a("p",[a("code",[e._v("SELECT last_value(temperature) as last_temperature FROM root.ln.wf01.wt01 GROUP BY([8, 39), 5m) FILL (int32[previous])")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Time")]),e._v(" "),a("th",[e._v("last_temperature")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("8")]),e._v(" "),a("td",[e._v("25")])]),e._v(" "),a("tr",[a("td",[e._v("13")]),e._v(" "),a("td",[e._v("25")])]),e._v(" "),a("tr",[a("td",[e._v("18")]),e._v(" "),a("td",[e._v("26")])]),e._v(" "),a("tr",[a("td",[e._v("23")]),e._v(" "),a("td",[e._v("29")])]),e._v(" "),a("tr",[a("td",[e._v("28")]),e._v(" "),a("td",[e._v("40")])]),e._v(" "),a("tr",[a("td",[e._v("33")]),e._v(" "),a("td",[e._v("40")])]),e._v(" "),a("tr",[a("td",[e._v("38")]),e._v(" "),a("td",[e._v("40")])])])]),e._v(" "),a("p",[e._v("However, When we use NONLASTPREVIOUS fill, because data between D and M is from the future, we won't fill them and still return null.")]),e._v(" "),a("p",[a("code",[e._v("SELECT last_value(temperature) as last_temperature FROM root.ln.wf01.wt01 GROUP BY([8, 39), 5m) FILL (int32[PREVIOUSUNTILLAST])")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Time")]),e._v(" "),a("th",[e._v("last_temperature")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("8")]),e._v(" "),a("td",[e._v("25")])]),e._v(" "),a("tr",[a("td",[e._v("13")]),e._v(" "),a("td",[e._v("25")])]),e._v(" "),a("tr",[a("td",[e._v("18")]),e._v(" "),a("td",[e._v("26")])]),e._v(" "),a("tr",[a("td",[e._v("23")]),e._v(" "),a("td",[e._v("29")])]),e._v(" "),a("tr",[a("td",[e._v("28")]),e._v(" "),a("td",[e._v("40")])]),e._v(" "),a("tr",[a("td",[e._v("33")]),e._v(" "),a("td",[e._v("null")])]),e._v(" "),a("tr",[a("td",[e._v("38")]),e._v(" "),a("td",[e._v("null")])])])]),e._v(" "),a("h2",{attrs:{id:"core-query-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-query-logic"}},[e._v("#")]),e._v(" Core query logic")]),e._v(" "),a("p",[e._v("We maintain two primary variable in "),a("code",[e._v("GroupByFillDataSet")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// the first value for each time series\nprivate Object[] previousValue;\n// last timestamp for each time series\nprivate long[] lastTimeArray;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"previousvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previousvalue"}},[e._v("#")]),e._v(" "),a("code",[e._v("previousValue")])]),e._v(" "),a("p",[a("code",[e._v("previousValue")]),e._v(" maintain the previous value before current time interval for each time series and we initialize it by calling the "),a("code",[e._v("initPreviousParis")]),e._v(" method in the constructor of "),a("code",[e._v("GroupByFillDataSet")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  private void initPreviousParis(QueryContext context, GroupByFillPlan groupByFillPlan)\n          throws StorageEngineException, IOException, QueryProcessException {\n    previousValue = new Object[paths.size()];\n    for (int i = 0; i < paths.size(); i++) {\n      Path path = paths.get(i);\n      TSDataType dataType = dataTypes.get(i);\n      IFill fill = new PreviousFill(dataType, groupByEngineDataSet.getStartTime(), -1L);\n      fill.constructReaders(path, groupByFillPlan.getAllMeasurementsInDevice(path.getDevice()), context);\n\n      TimeValuePair timeValuePair = fill.getFillResult();\n      if (timeValuePair == null || timeValuePair.getValue() == null) {\n        previousValue[i] = null;\n      } else {\n        previousValue[i] = timeValuePair.getValue().getValue();\n      }\n    }\n  }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("p",[a("code",[e._v("initPreviousParis")]),e._v(" construct a Single point supplementary null query for each time series and the parameter "),a("code",[e._v("queryTime")]),e._v(" is set to the start time of group by query and the parameter "),a("code",[e._v("beforeRange")]),e._v(" is set to -1.")]),e._v(" "),a("h3",{attrs:{id:"lasttimearray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lasttimearray"}},[e._v("#")]),e._v(" "),a("code",[e._v("lastTimeArray")])]),e._v(" "),a("p",[a("code",[e._v("lastTimeArray")]),e._v(" maintain the last timestamp for each time series and is used in PREVIOUSUNTILLAST fill way. initialize it by calling the "),a("code",[e._v("initLastTimeArray")]),e._v(" method in the constructor of "),a("code",[e._v("GroupByFillDataSet")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  private void initLastTimeArray(QueryContext context)\n      throws IOException, StorageEngineException, QueryProcessException {\n    lastTimeArray = new long[paths.size()];\n    Arrays.fill(lastTimeArray, Long.MAX_VALUE);\n    for (int i = 0; i < paths.size(); i++) {\n      TimeValuePair lastTimeValuePair =\n          LastQueryExecutor.calculateLastPairForOneSeries(paths.get(i), dataTypes.get(i), context);\n      if (lastTimeValuePair.getValue() != null) {\n        lastTimeArray[i] = lastTimeValuePair.getTimestamp();\n      }\n    }\n  }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[a("code",[e._v("initPreviousParis")]),e._v(" construct a last query for each time series.")]),e._v(" "),a("h3",{attrs:{id:"the-process-of-filling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-process-of-filling"}},[e._v("#")]),e._v(" The process of filling")]),e._v(" "),a("p",[e._v("The logic of filling is in the "),a("code",[e._v("nextWithoutConstraint")]),e._v(" method:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("protected RowRecord nextWithoutConstraint() throws IOException {\n\n    // get group by result without filling through groupByEngineDataSet\n    RowRecord rowRecord = groupByEngineDataSet.nextWithoutConstraint();\n\n    // judge whether each time series is needed to be filled\n    for (int i = 0; i < paths.size(); i++) {\n      Field field = rowRecord.getFields().get(i);\n      // current group by result is null\n      if (field.getDataType() == null) {\n        // the previous value is not null and (fill type is not previous until last or now time is before last time)\n        if (previousValue[i] != null\n            && (!((PreviousFill) fillTypes.get(dataTypes.get(i))).isUntilLast()\n            || rowRecord.getTimestamp() <= lastTimeArray[i])) {\n          rowRecord.getFields().set(i, Field.getField(previousValue[i], dataTypes.get(i)));\n        }\n      } else {\n        // current group by result is not null，no need to fill\n        // use now value update previous value\n        previousValue[i] = field.getObjectValue(field.getDataType());\n      }\n    }\n    return rowRecord;\n  }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);