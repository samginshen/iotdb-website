(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{491:function(e,t,i){"use strict";i.r(t);var r=i(49),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"tsfile-write-process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-write-process"}},[e._v("#")]),e._v(" TsFile Write Process")]),e._v(" "),i("ul",[i("li",[e._v("org.apache.iotdb.tsfile.write.*")])]),e._v(" "),i("p",[e._v("The writing process of TsFile is shown in the following figure:")]),e._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625238-efba2980-467e-11ea-927e-a7021f8153af.png"}}),e._v(" "),i("p",[e._v("Among them, each device corresponds to a ChunkGroupWriter, and each sensor corresponds to a ChunkWriter.")]),e._v(" "),i("p",[e._v("File writing is mainly divided into three operations, marked with 1, 2, 3 on the figure")]),e._v(" "),i("ul",[i("li",[e._v("1、Write memory swap area")]),e._v(" "),i("li",[e._v("2、Persistent ChunkGroup")]),e._v(" "),i("li",[e._v("3、Close file")])]),e._v(" "),i("h2",{attrs:{id:"_1、write-memory-buffer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1、write-memory-buffer"}},[e._v("#")]),e._v(" 1、Write memory buffer")]),e._v(" "),i("p",[e._v("TsFile file layer has two write interfaces")]),e._v(" "),i("ul",[i("li",[e._v("TsFileWriter.write(TSRecord record)")])]),e._v(" "),i("p",[e._v("Write a device with a timestamp and multiple measurement points.")]),e._v(" "),i("ul",[i("li",[e._v("TsFileWriter.write(Tablet tablet)")])]),e._v(" "),i("p",[e._v("Write multiple timestamps and multiple measurement points on one device.")]),e._v(" "),i("p",[e._v("When the write interface is called, the data of this device will be delivered to the corresponding ChunkGroupWriter, and each measurement point will be delivered to the corresponding ChunkWriter for writing.  ChunkWriter completes coding and packaging (generating a page).")]),e._v(" "),i("h2",{attrs:{id:"_2、persistent-chunkgroup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2、persistent-chunkgroup"}},[e._v("#")]),e._v(" 2、Persistent ChunkGroup")]),e._v(" "),i("ul",[i("li",[e._v("TsFileWriter.flushAllChunkGroups()")])]),e._v(" "),i("p",[e._v("When the data in the memory reaches a certain threshold, the persistence operation is triggered.  Each persistence will persist all the data of all devices in the current memory to the TsFile file of the disk.  Each device corresponds to a ChunkGroup and each measurement point corresponds to a Chunk.")]),e._v(" "),i("p",[e._v("After the persistence is complete, the corresponding metadata information is cached in memory for querying and generating the metadata at the end of the file.")]),e._v(" "),i("h2",{attrs:{id:"_3、file-close"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3、file-close"}},[e._v("#")]),e._v(" 3、File Close")]),e._v(" "),i("ul",[i("li",[e._v("TsFileWriter.close()")])]),e._v(" "),i("p",[e._v("Based on the metadata cached in memory, TsFileMetadata is generated and appended to the end of the file, and the file is finally closed.")])])}),[],!1,null,null,null);t.default=a.exports}}]);