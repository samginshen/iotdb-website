(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{1062:function(a,t,s){"use strict";s.r(t);var r=s(71),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[a._v("#")]),a._v(" Grafana")]),a._v(" "),s("h2",{attrs:{id:"outline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[a._v("#")]),a._v(" Outline")]),a._v(" "),s("ul",[s("li",[a._v("IoTDB-Grafana\n"),s("ul",[s("li",[a._v("Grafana installation\n"),s("ul",[s("li",[a._v("Install Grafana")]),a._v(" "),s("li",[a._v("Install data source plugin")]),a._v(" "),s("li",[a._v("Start Grafana")])])]),a._v(" "),s("li",[a._v("IoTDB installation")]),a._v(" "),s("li",[a._v("IoTDB-Grafana installation\n"),s("ul",[s("li",[a._v("Start IoTDB-Grafana")])])]),a._v(" "),s("li",[a._v("Explore in Grafana\n"),s("ul",[s("li",[a._v("Add data source")]),a._v(" "),s("li",[a._v("Design in dashboard")])])])])])]),a._v(" "),s("h1",{attrs:{id:"iotdb-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana"}},[a._v("#")]),a._v(" IoTDB-Grafana")]),a._v(" "),s("p",[a._v("This project provides a connector which reads data from IoTDB and sends to Grafana(https://grafana.com/). Before you use this tool, make sure Grafana and IoTDB are correctly installed and started.")]),a._v(" "),s("h2",{attrs:{id:"grafana-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana-installation"}},[a._v("#")]),a._v(" Grafana installation")]),a._v(" "),s("h3",{attrs:{id:"install-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana"}},[a._v("#")]),a._v(" Install Grafana")]),a._v(" "),s("ul",[s("li",[a._v("Download url: https://grafana.com/grafana/download")]),a._v(" "),s("li",[a._v("version >= 4.4.1")])]),a._v(" "),s("h3",{attrs:{id:"install-data-source-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-data-source-plugin"}},[a._v("#")]),a._v(" Install data source plugin")]),a._v(" "),s("ul",[s("li",[a._v("plugin name: simple-json-datasource")]),a._v(" "),s("li",[a._v("Download url: https://github.com/grafana/simple-json-datasource")])]),a._v(" "),s("p",[a._v("After downloading this plugin, you can use the grafana-cli tool to install SimpleJson from the commandline:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("grafana-cli plugins install grafana-simple-json-datasource\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Alternatively, you can manually download the .zip file and unpack it into your grafana plugins directory.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("{grafana-install-directory}\\data\\plugin\\")]),a._v(" (Windows)")]),a._v(" "),s("li",[s("code",[a._v("/var/lib/grafana/plugins")]),a._v(" (Linux)")]),a._v(" "),s("li",[s("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("(Mac)")])]),a._v(" "),s("h3",{attrs:{id:"start-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-grafana"}},[a._v("#")]),a._v(" Start Grafana")]),a._v(" "),s("p",[a._v("If you use Unix, Grafana will auto start after installing, or you can run "),s("code",[a._v("sudo service grafana-server start")]),a._v(" command. See more information "),s("a",{attrs:{href:"http://docs.grafana.org/installation/debian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("If you use Mac and "),s("code",[a._v("homebrew")]),a._v(" to install Grafana, you can use "),s("code",[a._v("homebrew")]),a._v(" to start Grafana.\nFirst make sure homebrew/services is installed by running "),s("code",[a._v("brew tap homebrew/services")]),a._v(", then start Grafana using: "),s("code",[a._v("brew services start grafana")]),a._v(".\nSee more information "),s("a",{attrs:{href:"http://docs.grafana.org/installation/mac/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("If you use Windows, start Grafana by executing grafana-server.exe, located in the bin directory, preferably from the command line. See more information "),s("a",{attrs:{href:"http://docs.grafana.org/installation/windows/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"iotdb-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-installation"}},[a._v("#")]),a._v(" IoTDB installation")]),a._v(" "),s("p",[a._v("See https://github.com/apache/incubator-iotdb")]),a._v(" "),s("h2",{attrs:{id:"iotdb-grafana-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana-installation"}},[a._v("#")]),a._v(" IoTDB-Grafana installation")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-iotdb.git\nmvn clean package -pl grafana -am -Dmaven.test.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("Copy "),s("code",[a._v("application.properties")]),a._v(" from "),s("code",[a._v("conf/")]),a._v(" directory to "),s("code",[a._v("target")]),a._v(" directory. (Or just make sure that "),s("code",[a._v("application.properties")]),a._v(" and "),s("code",[a._v("iotdb-grafana-{version}.war")]),a._v(" are in the same directory.)")]),a._v(" "),s("p",[a._v("Edit "),s("code",[a._v("application.properties")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# ip and port of IoTDB \nspring.datasource.url = jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username = root\nspring.datasource.password = root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port = 8888\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"start-iotdb-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-iotdb-grafana"}},[a._v("#")]),a._v(" Start IoTDB-Grafana")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target/\njava -jar iotdb-grafana-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("If you see the following output, iotdb-grafana connector is successfully activated.")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ java -jar iotdb-grafana-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"explore-in-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explore-in-grafana"}},[a._v("#")]),a._v(" Explore in Grafana")]),a._v(" "),s("p",[a._v("The default port of Grafana is 3000, see http://localhost:3000")]),a._v(" "),s("p",[a._v('Username and password are both "admin" by default.')]),a._v(" "),s("h3",{attrs:{id:"add-data-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-data-source"}},[a._v("#")]),a._v(" Add data source")]),a._v(" "),s("p",[a._v("Select "),s("code",[a._v("Data Sources")]),a._v(" and  then "),s("code",[a._v("Add data source")]),a._v(", select "),s("code",[a._v("SimpleJson")]),a._v(" in "),s("code",[a._v("Type")]),a._v(" and "),s("code",[a._v("URL")]),a._v(" is http://localhost:8888\n"),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})]),a._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}}),a._v(" "),s("h3",{attrs:{id:"design-in-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-in-dashboard"}},[a._v("#")]),a._v(" Design in dashboard")]),a._v(" "),s("p",[a._v("Add diagrams in dashboard and customize your query. See http://docs.grafana.org/guides/getting_started/")]),a._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}})])}),[],!1,null,null,null);t.default=n.exports}}]);