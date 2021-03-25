(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{387:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("记一次Android studio构建失败的教训")]),t._v(" "),a("h3",{attrs:{id:"现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),a("p",[t._v("假期过后android Studio突然无法构建项目了，包括新建的项目和原来的项目。")]),t._v(" "),a("p",[t._v('查看报错，都是"Connection refused: connect" 具体就是连不上google的服务器，显示403。')]),t._v(" "),a("h3",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("p",[t._v("难道是我党最近在召开某会的原因，所以代理统统挂了？我疲了")]),t._v(" "),a("h3",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("h4",{attrs:{id:"第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),a("p",[t._v("使用国内阿里云maven仓库镜像去构建工程，build.gradle(app)中配置repositories。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmaven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/jcenter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmaven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://maven.aliyun.com/nexus/content/groups/public/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("google")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意：repositories顺序按照 maven本地 > maven镜像 > google() > jcenter()，构建会按照顺序去搜索依赖的仓库。最后两个需要FQ才可。")]),t._v(" "),a("h4",{attrs:{id:"第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),a("p",[t._v("注释掉 ~./gradle/gradle.properties文件中的代理，形如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# systemProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n# systemProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n# systemProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\n# systemProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("h4",{attrs:{id:"第三步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[t._v("#")]),t._v(" 第三步")]),t._v(" "),a("p",[t._v("重新sync，建议多试几次。")])])}],!1,null,null,null);s.default=r.exports}}]);