(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1164:function(e,a,t){"use strict";t.r(a);var s=t(49),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flush-memtable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush-memtable"}},[e._v("#")]),e._v(" Flush Memtable")]),e._v(" "),t("h2",{attrs:{id:"设计思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计思想"}},[e._v("#")]),e._v(" 设计思想")]),e._v(" "),t("p",[e._v("内存缓冲区 memtable 达到一定阈值后，会交给 FlushManager 进行异步的持久化，不阻塞正常写入。持久化的过程采用流水线的方式。")]),e._v(" "),t("h2",{attrs:{id:"相关代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关代码"}},[e._v("#")]),e._v(" 相关代码")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("org.apache.iotdb.db.engine.flush.FlushManager")]),e._v(" "),t("p",[e._v("Memtable 的 Flush 任务管理器。")])]),e._v(" "),t("li",[t("p",[e._v("org.apache.iotdb.db.engine.flush.MemtableFlushTask")]),e._v(" "),t("p",[e._v("负责持久化一个 Memtable。")])])]),e._v(" "),t("h2",{attrs:{id:"flushmanager-持久化管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flushmanager-持久化管理器"}},[e._v("#")]),e._v(" FlushManager: 持久化管理器")]),e._v(" "),t("p",[e._v("FlushManager 可以接受 memtable 的持久化任务，提交者有两个，第一个是 TsFileProcessor，第二个是持久化子线程 FlushThread。")]),e._v(" "),t("p",[e._v("每个 TsFileProcessor 同一时刻只会有一个 flush 任务执行，一个 TsFileProcessor 可能对应多个需要持久化的 memtable")]),e._v(" "),t("h2",{attrs:{id:"memtableflushtask-持久化任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memtableflushtask-持久化任务"}},[e._v("#")]),e._v(" MemTableFlushTask: 持久化任务")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625254-03fe2680-467f-11ea-8197-115f3a749cbd.png"}}),e._v(" "),t("p",[e._v("背景：每个 memtable 可包含多个 device，每个 device 可包含多个 measurement。")]),e._v(" "),t("h3",{attrs:{id:"三个线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个线程"}},[e._v("#")]),e._v(" 三个线程")]),e._v(" "),t("p",[e._v("一个 memtable 的持久化的过程有三个线程，只有当所有任务都完成后，主线程工作才结束。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("MemTableFlushTask 所在线程")]),e._v(" "),t("p",[e._v("持久化主线程兼排序线程，负责给每个 measurement 对应的 chunk 排序。")])]),e._v(" "),t("li",[t("p",[e._v("encodingTask 线程")]),e._v(" "),t("p",[e._v("编码线程，负责给每个 Chunk 进行编码，编码成字节数组。")])]),e._v(" "),t("li",[t("p",[e._v("ioTask 线程")]),e._v(" "),t("p",[e._v("IO线程，负责将编码好的 Chunk 持久化到磁盘的 TsFile 文件上。")])])]),e._v(" "),t("h3",{attrs:{id:"两个任务队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两个任务队列"}},[e._v("#")]),e._v(" 两个任务队列")]),e._v(" "),t("p",[e._v("三个线程之间通过两个任务队列交互")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("encodingTaskQueue: 排序线程->编码线程，包括三种任务")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("StartFlushGroupIOTask：开始持久化一个 device (ChunkGroup)， encoding 不处理这个命令，直接发给 IO 线程。")])]),e._v(" "),t("li",[t("p",[e._v("Pair<TVList, MeasurementSchema>：编码一个 Chunk")])]),e._v(" "),t("li",[t("p",[e._v("EndChunkGroupIoTask：结束一个 device (ChunkGroup) 的持久化，encoding 不处理这个命令，直接发给 IO 线程。")])])])]),e._v(" "),t("li",[t("p",[e._v("ioTaskQueue: 编码线程->IO线程，包括三种任务")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("StartFlushGroupIOTask：开始持久化一个 device (ChunkGroup)。")])]),e._v(" "),t("li",[t("p",[e._v("IChunkWriter：持久化一个 Chunk 到磁盘上")])]),e._v(" "),t("li",[t("p",[e._v("EndChunkGroupIoTask：结束一个 device (ChunkGroup) 的持久化。")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);