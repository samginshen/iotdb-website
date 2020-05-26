(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{511:function(e,t,a){"use strict";a.r(t);var s=a(49),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"downsampling-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downsampling-query"}},[e._v("#")]),e._v(" Downsampling query")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.db.query.dataset.groupby.GroupByEngineDataSet")])]),e._v(" "),a("p",[e._v("The result set of the downsampling query will inherit "),a("code",[e._v("GroupByEngineDataSet")]),e._v(", this class contains the following fields:")]),e._v(" "),a("ul",[a("li",[e._v("protected long queryId")]),e._v(" "),a("li",[e._v("private long interval")]),e._v(" "),a("li",[e._v("private long slidingStep")])]),e._v(" "),a("p",[e._v("The following two fields are for the entire query, and the time period is left closed and right open, which is "),a("code",[e._v("[startTime, endTime)")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("private long startTime")]),e._v(" "),a("li",[e._v("private long endTime")])]),e._v(" "),a("p",[e._v("The following fields are for the current segment, and the time period is left closed and right open, which is "),a("code",[e._v("[startTime, endTime)")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("protected long curStartTime;")]),e._v(" "),a("li",[e._v("protected long curEndTime;")]),e._v(" "),a("li",[e._v("private int usedIndex;")]),e._v(" "),a("li",[e._v("protected boolean hasCachedTimeInterval;")])]),e._v(" "),a("p",[e._v("The core method of "),a("code",[e._v("GroupByEngineDataSet")]),e._v(" is very easy. First, determine if there is a next segment based on whether there is a cached time period, and return "),a("code",[e._v("true")]),e._v("; if not, calculate the segmentation start time and increase "),a("code",[e._v("usedIndex")]),e._v(" by 1.  If the segment start time has exceeded the query end time, return "),a("code",[e._v("false")]),e._v("; otherwise, calculate the query end time, set "),a("code",[e._v("hasCachedTimeInterval")]),e._v(" to "),a("code",[e._v("true")]),e._v(", and return"),a("code",[e._v("true")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("protected boolean hasNextWithoutConstraint() {\n  if (hasCachedTimeInterval) {\n    return true;\n  }\n\n  curStartTime = usedIndex * slidingStep + startTime;\n  usedIndex++;\n  if (curStartTime < endTime) {\n    hasCachedTimeInterval = true;\n    curEndTime = Math.min(curStartTime + interval, endTime);\n    return true;\n  } else {\n    return false;\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h2",{attrs:{id:"downsampling-query-without-value-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downsampling-query-without-value-filter"}},[e._v("#")]),e._v(" Downsampling query without value filter")]),e._v(" "),a("p",[e._v("The downsampling query logic without value filter is mainly in the "),a("code",[e._v("GroupByWithoutValueFilterDataSet")]),e._v(" class, which inherits"),a("code",[e._v("GroupByEngineDataSet")]),e._v(".")]),e._v(" "),a("p",[e._v("This class has the following key fields:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("private Map <Path, GroupByExecutor> pathExecutors classifies aggregate functions for the same "),a("code",[e._v("Path")]),e._v(" and encapsulates them as"),a("code",[e._v("GroupByExecutor")]),e._v(",\n"),a("code",[e._v("GroupByExecutor")]),e._v(" encapsulates the data calculation logic and method of each Path, which will be described later")])]),e._v(" "),a("li",[a("p",[e._v("private TimeRange timeRange encapsulates the time interval of each calculation into an object, which is used to determine whether Statistics can directly participate in the calculation")])]),e._v(" "),a("li",[a("p",[e._v("private Filter timeFilter Generates a user-defined query interval as a Filter object, which is used to filter the available files, chunks, and pages.")])])]),e._v(" "),a("p",[e._v("First, in the initialization "),a("code",[e._v("initGroupBy()")]),e._v(" method, the "),a("code",[e._v("timeFilter")]),e._v(" is calculated based on the expression, and "),a("code",[e._v("GroupByExecutor")]),e._v(" is generated for each "),a("code",[e._v("path")]),e._v(".")]),e._v(" "),a("p",[e._v("First, in the initialization "),a("code",[e._v("initGroupBy()")]),e._v(" method, the "),a("code",[e._v("timeFilter")]),e._v(" is calculated based on the expression, and "),a("code",[e._v("GroupByExecutor")]),e._v(" is generated for each "),a("code",[e._v("path")]),e._v(".\nThe following method is used to convert the result list into a RowRecord. Note that when there are no results in the list, add "),a("code",[e._v("null")]),e._v(" to the RowRecord:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for (AggregateResult res : fields) {\n  if (res == null) {\n    record.addField(null);\n    continue;\n  }\n  record.addField(res.getResult(), res.getResultDataType());\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"groupbyexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#groupbyexecutor"}},[e._v("#")]),e._v(" GroupByExecutor")]),e._v(" "),a("p",[e._v("Encapsulating the calculation method of all aggregate functions under the same path, this class has the following key fields:")]),e._v(" "),a("ul",[a("li",[e._v("private IAggregateReader reader  the "),a("code",[e._v("SeriesAggregateReader")]),e._v(" used to read the current "),a("code",[e._v("Path")]),e._v(" data")]),e._v(" "),a("li",[e._v("private BatchData preCachedData Every time the data read from "),a("code",[e._v("Reader")]),e._v(" is a batch, and it is likely to exceed the current time period. This "),a("code",[e._v("BatchData")]),e._v(" will be cached for next use")]),e._v(" "),a("li",[e._v("private List<Pair<AggregateResult, Integer>> results stores all aggregation methods in the current "),a("code",[e._v("Path")]),e._v(", for example: "),a("code",[e._v("select count(a), sum(a), avg(b)")]),e._v(", "),a("code",[e._v("count")]),e._v(" and "),a("code",[e._v("sum")]),e._v(" can be stored together.\nThe "),a("code",[e._v("Integer")]),e._v(" on the right is used to convert the result set to the order of the user query before converting it to RowRecord.")])]),e._v(" "),a("h4",{attrs:{id:"main-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-method"}},[e._v("#")]),e._v(" Main method")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//Read data from the reader and calculate the main method of this class.\nprivate List<Pair<AggregateResult, Integer>> calcResult() throws IOException, QueryProcessException;\n\n//Add aggregation operation for current path\nprivate void addAggregateResult(AggregateResult aggrResult, int index);\n\n//Determine whether the current path has completed all aggregation calculations\nprivate boolean isEndCalc();\n\n//Calculate results from BatchData that did not run out of cache last calculation\nprivate boolean calcFromCacheData() throws IOException;\n\n//Calculation using BatchData\nprivate void calcFromBatch(BatchData batchData) throws IOException;\n\n//Calculate results directly using Page or Chunk's Statistics\nprivate void calcFromStatistics(Statistics statistics) throws QueryProcessException;\n\n//Clear all calculation results\nprivate void resetAggregateResults();\n\n//Iterate through and calculate the data in the page\nprivate boolean readAndCalcFromPage() throws IOException, QueryProcessException;\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])]),a("p",[e._v("In "),a("code",[e._v("GroupByExecutor")]),e._v(", because different aggregate functions of the same path use the same data, the entry method "),a("code",[e._v("calcResult")]),e._v(" is responsible for reading all the data of the "),a("code",[e._v("Path")]),e._v(".\nThe retrieved data then calls the "),a("code",[e._v("calcFromBatch")]),e._v(" method to complete the calculation of "),a("code",[e._v("BatchData")]),e._v(" through all the aggregate functions.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("calcResult")]),e._v(" method returns all AggregateResult under the current Path and the position of the current aggregated value in the user query order. Its main logic is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//Calculate the data left over from the last time, and end the calculation if you can get the results directly\nif (calcFromCacheData()) {\n    return results;\n}\n\n//Because a chunk contains multiple pages, the page of the current chunk must be used up before the next chunk is opened.\nif (readAndCalcFromPage()) {\n    return results;\n}\n\n//If the remaining data is calculated, open a new chunk to continue the calculation.\nwhile (reader.hasNextChunk()) {\n    Statistics chunkStatistics = reader.currentChunkStatistics();\n      // Determine if Statistics is available and perform calculations\n       ....\n      // Skip current chunk\n      reader.skipCurrentChunk();\n      // End calculation if all results have been obtained\n      if (isEndCalc()) {\n        return true;\n      }\n      continue;\n    }\n    //If you cannot use chunkStatistics, you need to use page data to calculate\n    if (readAndCalcFromPage()) {\n      return results;\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("readAndCalcFromPage")]),e._v(" method is to obtain the page data from the currently opened chunk and calculate the aggregate result.  Returns true when all calculations are completed, otherwise returns false.  The main logic:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (reader.hasNextPage()) {\n    Statistics pageStatistics = reader.currentPageStatistics();\n    //PageStatistics can only be used if the page does not intersect with other pages\n    if (pageStatistics != null) {\n        // Determine if Statistics is available and perform calculations\n        ....\n        // Skip current page\n        reader.skipCurrentPage();\n        // End calculation if all results have been obtained\n        if (isEndCalc()) {\n          return true;\n        }\n        continue;\n      }\n    }\n    // When Statistics is not available, you can only fetch all data for calculation\n    BatchData batchData = reader.nextPage();\n    if (batchData == null || !batchData.hasCurrent()) {\n      continue;\n    }\n    // If the page just opened exceeds the time range, the data retrieved is cached and the calculation is directly ended.\n    if (batchData.currentTime() >= curEndTime) {\n      preCachedData = batchData;\n      return true;\n    }\n    //Perform calculations\n    calcFromBatch(batchData);\n    ...\n}\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("calcFromBatch")]),e._v(" method is to traverse all the aggregate functions to calculate the retrieved BatchData. The main logic is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for (Pair<AggregateResult, Integer> result : results) {\n    //If a function has already been calculated, it will not be calculated, such as the minimum calculation.\n    if (result.left.isCalculatedAggregationResult()) {\n      continue;\n    }\n    // Perform calculations\n    ....\n}\n//Determine if the data in the current batchdata can still be used next time, if it can be added to the cache\nif (batchData.getMaxTimestamp() >= curEndTime) {\n    preCachedData = batchData;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h2",{attrs:{id:"aggregated-query-with-value-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregated-query-with-value-filter"}},[e._v("#")]),e._v(" Aggregated query with value filter")]),e._v(" "),a("p",[e._v("The downsampling query logic with value filtering conditions is mainly in the "),a("code",[e._v("GroupByWithValueFilterDataSet")]),e._v(" class, which inherits "),a("code",[e._v("GroupByEngineDataSet")]),e._v(".")]),e._v(" "),a("p",[e._v("This class has the following key fields:")]),e._v(" "),a("ul",[a("li",[e._v("private List<IReaderByTimestamp> allDataReaderList")]),e._v(" "),a("li",[e._v("private GroupByPlan groupByPlan")]),e._v(" "),a("li",[e._v("private TimeGenerator timestampGenerator")]),e._v(" "),a("li",[e._v("private long timestamp is used to cache timestamp for the next group by partition")]),e._v(" "),a("li",[e._v("private boolean hasCachedTimestamp used to determine whether there is a timestamp cache for the next group by partition")]),e._v(" "),a("li",[e._v("private int timeStampFetchSize is the size of the group by calculating the batch")])]),e._v(" "),a("p",[e._v("First, in the initialization "),a("code",[e._v("initGroupBy ()")]),e._v("method, create a "),a("code",[e._v("timestampGenerator")]),e._v(" based on the expression; then create a "),a("code",[e._v("SeriesReaderByTimestamp")]),e._v(" for each time series and place it in the "),a("code",[e._v("allDataReaderList")]),e._v(" list. After initialization is complete, call the "),a("code",[e._v("nextWithoutConstraint ()")]),e._v("method to update the result.  If timestamp is cached for the next group by partition and the time meets the requirements, add it to "),a("code",[e._v("timestampArray")]),e._v(", otherwise return the "),a("code",[e._v("aggregateResultList")]),e._v(" result directly; if timestamp is not cached for the next group by partition, use "),a("code",[e._v("timestampGenerator")]),e._v(" to traverse:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (timestampGenerator.hasNext()) {\n  // Call constructTimeArrayForOneCal () method to get a list of timestamp\n  timeArrayLength = constructTimeArrayForOneCal(timestampArray, timeArrayLength);\n\n  // Call the updateResultUsingTimestamps () method to calculate the aggregate result using the timestamp list\n  for (int i = 0; i < paths.size(); i++) {\n    aggregateResultList.get(i).updateResultUsingTimestamps(\n        timestampArray, timeArrayLength, allDataReaderList.get(i));\n  }\n\n  timeArrayLength = 0;\n  // Determine if it is over\n  if (timestamp >= curEndTime) {\n    hasCachedTimestamp = true;\n    break;\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("constructTimeArrayForOneCal ()")]),e._v("method traverses timestampGenerator to build a list of timestamps:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for (int cnt = 1; cnt < timeStampFetchSize && timestampGenerator.hasNext(); cnt++) {\n  timestamp = timestampGenerator.next();\n  if (timestamp < curEndTime) {\n    timestampArray[timeArrayLength++] = timestamp;\n  } else {\n    hasCachedTimestamp = true;\n    break;\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);