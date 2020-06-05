(window.webpackJsonp=window.webpackJsonp||[]).push([[1482],{2054:function(s,a,e){"use strict";e.r(a);var n=e(71),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),e("p",[s._v("IoTDB为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：")]),s._v(" "),e("p",[s._v("第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。")]),s._v(" "),e("p",[s._v("第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。")]),s._v(" "),e("h2",{attrs:{id:"安装环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装环境要求"}},[s._v("#")]),s._v(" 安装环境要求")]),s._v(" "),e("p",[s._v("安装前请保证您的电脑上配有JDK>=1.8的运行环境，并配置好JAVA_HOME环境变量。")]),s._v(" "),e("p",[s._v("如果您需要从源码进行编译，还需要安装：")]),s._v(" "),e("ol",[e("li",[s._v("Maven>=3.1的运行环境，具体安装方法可以参考以下链接："),e("a",{attrs:{href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://maven.apache.org/install.html"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("blockquote",[e("p",[s._v("注： 也可以选择不安装，使用我们提供的'mvnw.sh' 或 'mvnw.cmd' 工具。使用时请用'mvnw.sh' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")])]),s._v(" "),e("h2",{attrs:{id:"从官网下载二进制可执行文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从官网下载二进制可执行文件"}},[s._v("#")]),s._v(" 从官网下载二进制可执行文件")]),s._v(" "),e("p",[s._v("您可以从"),e("RouterLink",{attrs:{to:"/Download/"}},[s._v("http://iotdb.apache.org/Download/")]),s._v("上下载已经编译好的可执行程序iotdb-xxx.tar.gz或者iotdb-xxx.zip，该压缩包包含了IoTDB系统运行所需的所有必要组件。")],1),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("NOTE:\niotdb-<version>.tar.gz # For Linux or MacOS\niotdb-<version>.zip # For Windows\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("下载后，您可使用以下操作对IoTDB的压缩包进行解压:")]),s._v(" "),e("p",[s._v("如果您使用的操作系统是Windows，则使用解压缩工具解压或使用如下解压命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Shell > uzip iotdb-<version>.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果您使用的操作系统是Linux或MacOS，则使用如下解压命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Shell > tar -zxf iotdb-<version>.tar.gz # For Linux or MacOS\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压后文件夹内容见图：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server/     <-- root path\n|\n+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n|\n+- LICENSE    <-- LICENSE\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"使用源码编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用源码编译"}},[s._v("#")]),s._v(" 使用源码编译")]),s._v(" "),e("p",[s._v("您可以获取已发布的源码https://iotdb.apache.org/Download/，或者从git仓库获取https://github.com/apache/incubator-iotdb/tree/master")]),s._v(" "),e("p",[s._v("源码克隆后，进入到源码文件夹目录下，使用以下命令进行编译：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> mvn clean package -pl server -am -Dmaven.test.skip=true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("成功后，可以在终端看到如下信息:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[INFO] ------------------------------------------------------------------------\n[INFO] Reactor Summary:\n[INFO]\n[INFO] Apache IoTDB (incubating) Project Parent POM ....... SUCCESS [  6.405 s]\n[INFO] TsFile ............................................. SUCCESS [ 10.435 s]\n[INFO] Service-rpc ........................................ SUCCESS [  4.170 s]\n[INFO] IoTDB Jdbc ......................................... SUCCESS [  3.252 s]\n[INFO] IoTDB Server ....................................... SUCCESS [  8.072 s]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("否则，你需要检查错误语句，并修复问题。")]),s._v(" "),e("p",[s._v("编译后，IoTDB项目会在名为iotdb的子文件夹下，该文件夹会包含以下内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$IOTDB_HOME/\n|\n+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"通过docker安装-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装-dockerfile"}},[s._v("#")]),s._v(" 通过Docker安装 (Dockerfile)")]),s._v(" "),e("p",[s._v("你可以通过"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.9.x/3-Server/5-Docker Image.html"}},[s._v("这份指南")]),s._v("编译并运行一个IoTDB docker image。")],1)])}),[],!1,null,null,null);a.default=t.exports}}]);