(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{344:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("p",[s._v("目前不是所有浏览器都支持Es6的，我们使用的时候需要先转化为Es5在现有环境执行。")]),s._v(" "),t("h2",{attrs:{id:"babel-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-环境搭建"}},[s._v("#")]),s._v(" Babel 环境搭建")]),s._v(" "),t("h4",{attrs:{id:"安装babel插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装babel插件"}},[s._v("#")]),s._v(" 安装babel插件")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])])]),t("h4",{attrs:{id:"安装babel转码规则插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装babel转码规则插件"}},[s._v("#")]),s._v(" 安装babel转码规则插件")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("preset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上述规则均可")]),s._v("\n")])])]),t("ul",[t("li",[s._v("在没有任何配置选项的情况下，"),t("code",[s._v("babel-preset-env")]),s._v(" 与 "),t("code",[s._v("babel-preset-latest")]),s._v("（或者"),t("code",[s._v("babel-preset-es2015")]),s._v("，"),t("code",[s._v("babel-preset-es2016")]),s._v("和"),t("code",[s._v("babel-preset-es2017")]),s._v("一起）的行为完全相同。")])]),s._v(" "),t("h4",{attrs:{id:"配置文件-babelrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-babelrc"}},[s._v("#")]),s._v(" 配置文件.babelrc")]),s._v(" "),t("p",[s._v("Babel的配置文件是.babelrc，其配置如下：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"presets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"targets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browsers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//支持每个浏览器最后两个版本")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"safari >= 7"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//safari大于等于7版本所需的polyfill和代码转换")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设定转码规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h4",{attrs:{id:"安装babel转码工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装babel转码工具"}},[s._v("#")]),s._v(" 安装babel转码工具")]),s._v(" "),t("p",[s._v("使用babel-cli工具进行命令行转码")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global babel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])])]),t("h4",{attrs:{id:"使用babel转码工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用babel转码工具"}},[s._v("#")]),s._v(" 使用babel转码工具")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//转一个文件")]),s._v("\nbabel test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o mtest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//转整个目录")]),s._v("\nbabel src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d dist\n")])])]),t("h4",{attrs:{id:"package-json中配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json中配置"}},[s._v("#")]),s._v(" package.json中配置")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel src -d dist"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h4",{attrs:{id:"npm执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm执行"}},[s._v("#")]),s._v(" npm执行")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm run build\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);