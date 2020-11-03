(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{533:function(t,e,i){},564:function(t,e,i){"use strict";i(533)},571:function(t,e,i){"use strict";i.r(e);var a={name:"IoTDBZH",data:function(){return{msg:"Welcome to Home Page",imgBlock:[{src:"/img/home-Slide1.png",des:"高端设备",detail:"在高端制造业中，有很多设备配备有传感器来收集工作状态数据，例如气象站，风力涡轮机是常见的高端设备。这些设备如果支持Java或Go（正在开发中），则可以运行TsFile在本地存储数据。通过这种方式，TsFile可以提供具有高吞吐、高压缩率和毫秒级查询延迟的数据管理功能。结合TsFile-Sync工具，可以将TsFiles同步到数据中心。"},{src:"/img/home-Slide2.png",des:"本地控制器",detail:"在工厂现场，LAN网络下有数十台设备。 IoTDB可以安装在工厂的本地控制器服务器上，以从这些设备接收数据。 安装有IoTDB的本地服务器（普通PC或工作站）可以使用类SQL存储和查询数据。 此外，使用TsFile-Sync工具，可以将本地控制器上的TsFile文件传输到云上安装有IoTDB实例的数据中心。"},{src:"/img/home-Slide3.png",des:"云数据管理",detail:"在高速网络（车联网等）的场景中，安装有传感器的汽车可以以一定频率收集自身的监视信息（行驶状态等）。 通常，这些汽车设备的硬件配置有限，并且难以进行复杂的应用。 轻量级的IoTDB（IoTDB客户端）应运而生。 借助JDBC API（或MQTT），它可以使用窄带IoT或4G/5G发送数据，从而将设备和云连接在一起。"}],isHover:!1}},methods:{addRoutes1:function(){this.$router.push("/zh/Download/")},addRoutes2:function(){this.$router.push("/zh/UserGuide/V0.10.x/Get%20Started/QuickStart.html")}}},n=(i(564),i(69)),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{background:"linear-gradient(top,#A2A2A2,#fff)"}},[i("div",{staticStyle:{width:"100%",margin:"0 auto",position:"relative",height:"480px","text-align":"center"}},[i("h2",{staticClass:"h2"},[t._v("Apache IoTDB")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px","line-height":"23px",margin:"10px 0 20px 0","font-family":"'Arimo', sans-serif","text-transform":"uppercase","font-weight":"700","letter-spacing":"0.03em",color:"#777","text-align":"center"}},[t._v("物联网数据库")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px",margin:"50px 0 10px 0","text-align":"justify!important"}},[t._v("\nApache IoTDB（物联网数据库）是一体化收集、存储、管理与分析物联网时序数据的软件系统。\nApache IoTDB 采用轻量式架构，具有高性能和丰富的功能，并与Apache Hadoop、Spark和Flink等进行了深度集成，可以满足工业物联网领域的海量数据存储、高速数据读取和复杂数据分析需求。\n      ")]),t._v(" "),i("el-row",{staticStyle:{"margin-top":"40px","text-align":"center"}},[i("el-button",{staticStyle:{width:"220px","font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"warning",round:""},on:{click:t.addRoutes1}},[t._v("下载")]),t._v(" "),i("el-button",{staticStyle:{width:"220px","font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"info",round:""},on:{click:t.addRoutes2}},[t._v("快速开始")])],1)],1),t._v(" "),i("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("应用场景")]),t._v(" "),i("div",{staticClass:"block"},[i("el-carousel",{attrs:{trigger:"click",height:"700px"}},t._l(t.imgBlock,(function(e,a){return i("el-carousel-item",{key:a,staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:e.src,height:"500px"}}),t._v(" "),i("h3",{staticStyle:{"font-size":"30px",color:"#fcac45","text-align":"center","line-height":"0px"}},[t._v(t._s(e.des))]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",padding:"10px","line-height":"22px","text-align":"justify!important","font-weight":"bold"}},[t._v(t._s(e.detail))])])})),1)],1),t._v(" "),i("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("主要特点")]),t._v(" "),i("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"高吞吐量读写",width:"350",trigger:"hover",content:"Apache IoTDB中可以支持数百万个低功耗和智能联网设备的高速写访问。 它还提供数据快速读取访问以查询。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon1.png"}}),t._v(" "),i("p",[t._v("高吞吐量读写")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"高效的目录结构",width:"350",trigger:"hover",content:"Apache IoTDB可以对拥有复杂组织关系的物联网设备进行树形结构管理，并使用通配符对这些元数据进行模糊匹配。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon2.png"}}),t._v(" "),i("p",[t._v(" 高效的树形元数据结构")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"丰富的查询语义",width:"400",trigger:"hover",content:"Apache IoTDB可以支持跨设备和传感器的时间对齐查询，在时间维度上的聚合（降采样）等。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon3.png"}}),t._v(" "),i("p",[t._v("丰富的查询语义")])])],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"100px",height:"300px"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"硬件成本低",width:"400",trigger:"hover",content:"Apache IoTDB可以实现磁盘存储的高压缩率。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon4.png"}}),t._v(" "),i("p",[t._v("硬件成本低")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"灵活的部署",width:"400",trigger:"hover",content:"Apache IoTDB可以为用户提供云上的一键式安装、终端访问工具以及边-云之间的协同（数据同步工具）。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon5.png"}}),t._v(" "),i("p",[t._v("灵活的部署")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"与开源生态系统的紧密集成",width:"400",trigger:"hover",content:"Apache IoTDB支持许多大数据软件生态系统，例如Hadoop、Spark、Flink和Grafana（可视化工具）。"}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon6.png"}}),t._v(" "),i("p",[t._v("与开源生态系统的紧密集成")])])],1)],1)],1)],1)}),[],!1,null,"1752b1dc",null);e.default=r.exports}}]);