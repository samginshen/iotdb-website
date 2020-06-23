(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{605:function(e,t,r){"use strict";r.r(t);var a=r(69),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"data-partition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-partition"}},[e._v("#")]),e._v(" Data partition")]),e._v(" "),r("p",[e._v("Time series data is partitioned on two levels of storage groups and time ranges.")]),e._v(" "),r("h2",{attrs:{id:"storage-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-group"}},[e._v("#")]),e._v(" Storage group")]),e._v(" "),r("p",[e._v('The storage group is specified by the user display. Use the statement "SET STORAGE GROUP TO" to specify the storage group. Each storage group has a corresponding StorageGroupProcessor.')]),e._v(" "),r("p",[e._v("The main fields it has are:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Read-write lock: insertLock")])]),e._v(" "),r("li",[r("p",[e._v("Unclosed sequential file processors for each time partition: workSequenceTsFileProcessors")])]),e._v(" "),r("li",[r("p",[e._v("Unclosed out-of-order file processor corresponding to each time partition: workUnsequenceTsFileProcessors")])]),e._v(" "),r("li",[r("p",[e._v("Full sequential file list for this storage group (sorted by time): sequenceFileTreeSet")])]),e._v(" "),r("li",[r("p",[e._v("List of all out-of-order files for this storage group (unordered): unSequenceFileList")])]),e._v(" "),r("li",[r("p",[e._v("A map that records the last write time of each device. When sequential data is flashed, the time recorded by this map is used: latestTimeForEachDevice")])]),e._v(" "),r("li",[r("p",[e._v("A map that records the last flash time of each device to distinguish between sequential and out-of-order data: latestFlushedTimeForEachDevice")])]),e._v(" "),r("li",[r("p",[e._v("A version generator map corresponding to each time partition, which is convenient for determining the priority of different chunks when querying: timePartitionIdVersionControllerMap")])])]),e._v(" "),r("h3",{attrs:{id:"related-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-code"}},[e._v("#")]),e._v(" Related code")]),e._v(" "),r("ul",[r("li",[e._v("src/main/java/org/apache/iotdb/db/engine/StorageEngine.java")])]),e._v(" "),r("h2",{attrs:{id:"time-range"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-range"}},[e._v("#")]),e._v(" Time range")]),e._v(" "),r("p",[e._v("The data in the same storage group is partitioned according to the time range specified by the user. The related parameter is partition_interval and the default is week. That is, data of different weeks will be placed in different partitions.")]),e._v(" "),r("h3",{attrs:{id:"implementation-logic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation-logic"}},[e._v("#")]),e._v(" Implementation logic")]),e._v(" "),r("p",[e._v("StorageGroupProcessor performs partition calculation on the inserted data to find the specified TsFileProcessor, and the TsFile corresponding to each TsFileProcessor will be placed in a different partition folder.")]),e._v(" "),r("h3",{attrs:{id:"file-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-structure"}},[e._v("#")]),e._v(" File structure")]),e._v(" "),r("p",[e._v("The file structure after partitioning is as follows:")]),e._v(" "),r("p",[e._v("data")]),e._v(" "),r("p",[e._v("-- sequence")]),e._v(" "),r("p",[e._v("---- [Storage group name1]")]),e._v(" "),r("p",[e._v("------ [Time division ID1]")]),e._v(" "),r("p",[e._v("-------- xxxx.tsfile")]),e._v(" "),r("p",[e._v("-------- xxxx.resource")]),e._v(" "),r("p",[e._v("------ [Time division ID2]")]),e._v(" "),r("p",[e._v("---- [Storage group name 2]")]),e._v(" "),r("p",[e._v("-- unsequence")]),e._v(" "),r("h3",{attrs:{id:"related-code-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-code-2"}},[e._v("#")]),e._v(" Related code")]),e._v(" "),r("ul",[r("li",[e._v("getOrCreateTsFileProcessorIntern  method in src/main/java/org/apache/iotdb/db/engine/storagegroup.StoragetGroupProcessor.java")])])])}),[],!1,null,null,null);t.default=i.exports}}]);