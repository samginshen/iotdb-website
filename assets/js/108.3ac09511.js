(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{681:function(t,e,l){"use strict";l.r(e);var a=l(71),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"status-codes"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#status-codes"}},[t._v("#")]),t._v(" Status Codes")]),t._v(" "),l("p",[l("strong",[t._v("Status Code")]),t._v(" is introduced in the latest version. For example, as IoTDB requires registering the time series first before writing data, a kind of solution is:")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('try {\n    writeData();\n} catch (SQLException e) {\n  // the most case is that the time series does not exist\n  if (e.getMessage().contains("exist")) {\n      //However, using the content of the error message is not so efficient\n      registerTimeSeries();\n      //write data once again\n      writeData();\n  }\n}\n\n')])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br"),l("span",{staticClass:"line-number"},[t._v("4")]),l("br"),l("span",{staticClass:"line-number"},[t._v("5")]),l("br"),l("span",{staticClass:"line-number"},[t._v("6")]),l("br"),l("span",{staticClass:"line-number"},[t._v("7")]),l("br"),l("span",{staticClass:"line-number"},[t._v("8")]),l("br"),l("span",{staticClass:"line-number"},[t._v("9")]),l("br"),l("span",{staticClass:"line-number"},[t._v("10")]),l("br"),l("span",{staticClass:"line-number"},[t._v("11")]),l("br"),l("span",{staticClass:"line-number"},[t._v("12")]),l("br")])]),l("p",[t._v("With Status Code, instead of writing codes like "),l("code",[t._v('if (e.getErrorMessage().contains("exist"))')]),t._v(", we can simply use "),l("code",[t._v("e.getErrorCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()")]),t._v(".")]),t._v(" "),l("p",[t._v("Here is a list of Status Code and related message:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Status Code")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Status Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Meanings")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SUCCESS_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("201")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STILL_EXECUTING_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("202")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INVALID_HANDLE_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("203")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INCOMPATIBLE_VERSION")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Incompatible version")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("298")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NODE_DELETE_FAILED_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Failed while deleting node")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("299")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ALIAS_ALREADY_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Alias already exists")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ALREADY_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path already exists")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("301")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_NOT_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path does not exist")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("302")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNSUPPORTED_FETCH_METADATA_OPERATION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Unsupported fetch metadata operation")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("303")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("METADATA_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error when dealing with metadata")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("305")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("OUT_OF_TTL_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Insertion time is less than TTL time bound")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("306")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CONFIG_ADJUSTER")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB system load is too large")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("307")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MERGE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while merging")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("308")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYSTEM_CHECK_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while system checking")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("309")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYNC_DEVICE_OWNER_CONFLICT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sync device owners conflict")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("310")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYNC_CONNECTION_EXCEPTION")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while sync connecting")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("311")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_GROUP_PROCESSOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Storage group processor related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("312")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_GROUP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Storage group related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("313")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_ENGINE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Storage engine related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("314")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TSFILE_PROCESSOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TsFile processor related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("315")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ILLEGAL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Illegal path")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("316")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOAD_FILE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while loading file")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("EXECUTE_STATEMENT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Execute statement error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("401")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SQL_PARSE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while parsing SQL")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("402")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GENERATE_TIME_ZONE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while generating time zone")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("403")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SET_TIME_ZONE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while setting time zone")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("404")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NOT_STORAGE_GROUP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Operating object is not a storage group")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("405")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QUERY_NOT_ALLOWED")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Query statements are not allowed error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("406")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AST_FORMAT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AST format related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("407")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOGICAL_OPERATOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Logical operator related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("408")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOGICAL_OPTIMIZE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Logical optimize related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("409")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNSUPPORTED_FILL_TYPE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Unsupported fill type related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("410")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Path related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("411")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QUERY_PROCESS_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Query process related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("412")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WRITE_PROCESS_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data related error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("500")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INTERNAL_SERVER_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Internal server error")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("501")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CLOSE_OPERATION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error in close operation")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("502")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("READ_ONLY_SYSTEM_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Operating system is read only")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("503")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DISK_SPACE_INSUFFICIENT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Disk space is insufficient")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("504")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("START_UP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Meet error while starting up")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("600")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WRONG_LOGIN_PASSWORD_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Username or password is wrong")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("601")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NOT_LOGIN_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Has not logged in")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("602")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO_PERMISSION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("No permissions for this operation")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("603")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNINITIALIZED_AUTH_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Uninitialized authorizer")])])])]),t._v(" "),l("blockquote",[l("p",[t._v('All exceptions are refactored in latest version by extracting uniform message into exception classes. Different error codes are added to all exceptions. When an exception is caught and a higher-level exception is thrown, the error code will keep and pass so that users will know the detailed error reason.\nA base exception class "ProcessException" is also added to be extended by all exceptions.')])])])}),[],!1,null,null,null);e.default=i.exports}}]);