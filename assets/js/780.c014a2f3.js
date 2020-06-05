(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1349:function(e,a,s){"use strict";s.r(a);var t=s(71),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"聚合查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询"}},[e._v("#")]),e._v(" 聚合查询")]),e._v(" "),s("p",[e._v("聚合查询的主要逻辑在 AggregateExecutor")]),e._v(" "),s("ul",[s("li",[e._v("org.apache.iotdb.db.query.executor.AggregationExecutor")])]),e._v(" "),s("h2",{attrs:{id:"不带值过滤条件的聚合查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不带值过滤条件的聚合查询"}},[e._v("#")]),e._v(" 不带值过滤条件的聚合查询")]),e._v(" "),s("p",[e._v("对于不带值过滤条件的聚合查询，通过 "),s("code",[e._v("executeWithoutValueFilter()")]),e._v(" 方法获得结果并构建 dataSet。首先使用 "),s("code",[e._v("mergeSameSeries()")]),e._v(" 方法将对于相同时间序列的聚合查询合并，例如：如果需要计算count(s1), sum(s2), count(s3), sum(s1)，即需要计算s1的两个聚合值，那么将会得到pathToAggrIndexesMap结果为：s1 -> 0, 3; s2 -> 1; s3 -> 2。")]),e._v(" "),s("p",[e._v("那么将会得到 "),s("code",[e._v("pathToAggrIndexesMap")]),e._v("，其中每一个 entry 都是一个 series 的聚合查询，因此可以通过调用 "),s("code",[e._v("groupAggregationsBySeries()")]),e._v(" 方法计算出其聚合值 "),s("code",[e._v("aggregateResults")]),e._v("。在最后创建结果集之前，需要将其顺序还原为用户查询的顺序。最后使用 "),s("code",[e._v("constructDataSet()")]),e._v(" 方法创建结果集并返回。")]),e._v(" "),s("p",[e._v("下面详细讲解 "),s("code",[e._v("groupAggregationsBySeries()")]),e._v(" 方法。首先创建一个 "),s("code",[e._v("IAggregateReader")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IAggregateReader seriesReader = new SeriesAggregateReader(\n        pathToAggrIndexes.getKey(), tsDataType, context, QueryResourceManager.getInstance()\n        .getQueryDataSource(seriesPath, context, timeFilter), timeFilter, null);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("对于每一个 entry（即series），首先为其每一种聚合查询创建一个聚合结果 "),s("code",[e._v("AggregateResult")]),e._v("，同时维护一个布尔值列表 "),s("code",[e._v("isCalculatedList")]),e._v("，对应每一个 "),s("code",[e._v("AggregateResult")]),e._v("是否已经计算完成，并记录需要剩余计算的聚合函数数目 "),s("code",[e._v("remainingToCalculate")]),e._v("。布尔值列表和这个计数值将会使得某些聚合函数（如 "),s("code",[e._v("FIRST_VALUE")]),e._v("）在获得结果后，不需要再继续进行整个循环过程。")]),e._v(" "),s("p",[e._v("接下来，按照5.2节所介绍的 "),s("code",[e._v("aggregateReader")]),e._v(" 使用方法，更新 "),s("code",[e._v("AggregateResult")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("while (aggregateReader.hasNextChunk()) {\n  if (aggregateReader.canUseCurrentChunkStatistics()) {\n    Statistics chunkStatistics = aggregateReader.currentChunkStatistics();\n    \n    // do some aggregate calculation using chunk statistics\n    ...\n    \n    aggregateReader.skipCurrentChunk();\n    continue;\n  }\n\t  \n  while (aggregateReader.hasNextPage()) {\n\t if (aggregateReader.canUseCurrentPageStatistics()) {\n\t   Statistics pageStatistic = aggregateReader.currentPageStatistics();\n\t   \n\t   // do some aggregate calculation using page statistics\n      ...\n\t   \n\t   aggregateReader.skipCurrentPage();\n\t   continue;\n\t } else {\n\t \tBatchData batchData = aggregateReader.nextPage();\n\t \t// do some aggregate calculation using batch data\n      ...\n\t }\t \n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br")])]),s("p",[e._v("需要注意的是，在对于每一个result进行更新之前，需要首先判断其是否已经被计算完（利用 "),s("code",[e._v("isCalculatedList")]),e._v(" 列表）；每一次更新后，调用 "),s("code",[e._v("isCalculatedAggregationResult()")]),e._v(" 方法同时更新列表中的布尔值。如果列表中所有值均为true，即 "),s("code",[e._v("remainingToCalculate")]),e._v(" 值为0，证明所有聚合函数结果均已计算完，可以返回。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("if (Boolean.FALSE.equals(isCalculatedList.get(i))) {\n  AggregateResult aggregateResult = aggregateResultList.get(i);\n  ... // 更新\n  if (aggregateResult.isCalculatedAggregationResult()) {\n    isCalculatedList.set(i, true);\n    remainingToCalculate--;\n    if (remainingToCalculate == 0) {\n      return aggregateResultList;\n    }\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("在使用 "),s("code",[e._v("overlapedPageData")]),e._v(" 进行更新时，由于获得每一个聚合函数结果都会遍历这个 batchData，因此需要调用 "),s("code",[e._v("resetBatchData()")]),e._v(" 方法将指针指向其开始位置，使得下一个函数可以遍历。")]),e._v(" "),s("h2",{attrs:{id:"带值过滤条件的聚合查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带值过滤条件的聚合查询"}},[e._v("#")]),e._v(" 带值过滤条件的聚合查询")]),e._v(" "),s("p",[e._v("对于带值过滤条件的聚合查询，通过 "),s("code",[e._v("executeWithoutValueFilter()")]),e._v(" 方法获得结果并构建 dataSet。首先根据表达式创建 "),s("code",[e._v("timestampGenerator")]),e._v("，然后为每一个时间序列创建一个 "),s("code",[e._v("SeriesReaderByTimestamp")]),e._v("，放到 "),s("code",[e._v("readersOfSelectedSeries")]),e._v("列表中；为每一个查询创建一个创建一个聚合结果 "),s("code",[e._v("AggregateResult")]),e._v("，放到 "),s("code",[e._v("aggregateResults")]),e._v("列表中。")]),e._v(" "),s("p",[e._v("初始化完成后，调用 "),s("code",[e._v("aggregateWithValueFilter()")]),e._v(" 方法更新结果：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("while (timestampGenerator.hasNext()) {\n  // 生成timestamps\n  long[] timeArray = new long[aggregateFetchSize];\n  int timeArrayLength = 0;\n  for (int cnt = 0; cnt < aggregateFetchSize; cnt++) {\n    if (!timestampGenerator.hasNext()) {\n      break;\n    }\n    timeArray[timeArrayLength++] = timestampGenerator.next();\n  }\n\n  // 利用timestamps计算聚合结果\n  for (int i = 0; i < readersOfSelectedSeries.size(); i++) {\n    aggregateResults.get(i).updateResultUsingTimestamps(timeArray, timeArrayLength,\n      readersOfSelectedSeries.get(i));\n    }\n  }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);