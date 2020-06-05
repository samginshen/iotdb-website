(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{647:function(t,e,v){"use strict";v.r(e);var a=v(71),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"version-1-version-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#version-1-version-2"}},[t._v("#")]),t._v(" version-1 -> version-2")]),t._v(" "),v("p",[t._v("Last Updated on 2019-11-28 by Jialin Qiao.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("PR#")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Author")]),t._v(" "),v("th",[t._v("Changes")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("553")]),t._v(" "),v("td",[t._v("[IOTDB-279] Merge TsDigest into Statistics")]),t._v(" "),v("td",[t._v("jack870131")]),t._v(" "),v("td",[t._v("Merge the function of TsDigest into Statistics class, which TsDisgest is the ByteBuffer format of Statistics")])]),t._v(" "),v("tr",[v("td",[t._v("587")]),t._v(" "),v("td",[t._v("[IOTDB-325] Refactor Statistics")]),t._v(" "),v("td",[t._v("qiaojialin")]),t._v(" "),v("td",[t._v("Move start time, end time, count in PageHeader and ChunkMetadata into Statistics; Remove maxTombstoneTime in ChunkHeader")])]),t._v(" "),v("tr",[v("td",[t._v("855")]),t._v(" "),v("td",[t._v("[IOTDB-587] New TsFile version 2")]),t._v(" "),v("td",[t._v("HTHou")]),t._v(" "),v("td",[t._v("Remove ChunkGroupMetadata, store ChunkMetadata list by series, Add TimeseriesMetadata for each series")])]),t._v(" "),v("tr",[v("td",[t._v("1024")]),t._v(" "),v("td",[t._v("[IOTDB-585] Fix recover version bug")]),t._v(" "),v("td",[t._v("qiaojialin")]),t._v(" "),v("td",[t._v("Add MetaMarker.VERSION and version behind each flushing memtable (flushAllChunkGroups)")])]),t._v(" "),v("tr",[v("td",[t._v("1047")]),t._v(" "),v("td",[t._v("[IOTDB-593] Add metaOffset in TsFileMetadata")]),t._v(" "),v("td",[t._v("qiaojialin")]),t._v(" "),v("td",[t._v("Add metaOffset in TsFileMetadata")])]),t._v(" "),v("tr",[v("td",[t._v("1100")]),t._v(" "),v("td",[t._v("[IOTDB-605] Add more levels of index in TsFileMetadata")]),t._v(" "),v("td",[t._v("sunzesong")]),t._v(" "),v("td",[t._v("Update the structure of deviceMetadata to a tree-level indexed TsFileMetadata")])])])]),t._v(" "),v("h1",{attrs:{id:"_0-8-0-version-0-version-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-0-version-0-version-1"}},[t._v("#")]),t._v(" 0.8.0 (version-0) -> version-1")]),t._v(" "),v("p",[t._v("Last Updated on 2019-10-27 by Lei Rui.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("PR#")]),t._v(" "),v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Author")]),t._v(" "),v("th",[t._v("Changes")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("258")]),t._v(" "),v("td",[t._v("[IOTDB-143]Development of merge")]),t._v(" "),v("td",[t._v("jt2594838")]),t._v(" "),v("td",[t._v("Add totalChunkNum and invalidChunkNum to TsFileMetaData.")])]),t._v(" "),v("tr",[v("td",[t._v("409")]),t._v(" "),v("td",[t._v("[IOTDB-165][TsFile] Delete a current version and add a number version and an exception.")]),t._v(" "),v("td",[t._v("Genius_pig")]),t._v(" "),v("td",[t._v("(1) Delete a current version in TsFileMetaData; "),v("br"),t._v('(2) Change the TsFile magic number from 12 bytes to: 6 bytes magic string ("TsFile") + 6 bytes version number ({"000001", "000002", ""000003"}) ("v0.8.0" is the first version (we treat it as "000000"));'),v("br"),t._v('(3) The tail of a TsFile only has "TsFile" magic string, without the version number.')])]),t._v(" "),v("tr",[v("td",[t._v("466")]),t._v(" "),v("td",[t._v("[IOTDB-208] Bloom filter")]),t._v(" "),v("td",[t._v("SilverNarcissus")]),t._v(" "),v("td",[t._v("Add four fields for the bloom filter to TsFileMetaData: 1) bit vector byte array length, 2) bit vector byte array, 3) the number of bits, 4) the number of hash functions.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);