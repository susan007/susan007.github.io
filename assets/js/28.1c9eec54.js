(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{245:function(t,s,_){t.exports=_.p+"assets/img/https.5995cfaa.png"},319:function(t,s,_){"use strict";_.r(s);var v=[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"content"},[v("p",[t._v("https通讯过程整理")]),t._v(" "),v("ul",[v("li",[t._v("服务器采用非对称加密方式生成公钥GY0和私钥SY0")]),t._v(" "),v("li",[t._v("服务器将自己的公钥GY0发送给第三方认证机构")]),t._v(" "),v("li",[t._v("认证机构将该公钥做成一张数字证书颁发给服务器，该证书包含服务器公钥和协议版本号、加密方法以及机构制作的数字签名。")]),t._v(" "),v("li",[t._v("数字证书生成过程：认证机构采用非对称加密，生成公钥GY1和私钥SY1，用私钥SY1对数字证书进行加密生成数字签名，而公钥由浏览器厂商预先存在浏览器中。")]),t._v(" "),v("li",[t._v("浏览器发起请求，服务器首先发过来自己的数字证书，浏览器进行验证。")]),t._v(" "),v("li",[t._v("浏览器生成一个随机串。并用服务器的公钥进行加密发给服务器。")]),t._v(" "),v("li",[t._v("服务器用私钥SY0解密收到随机串。")]),t._v(" "),v("li",[t._v("浏览器和服务器同时用这个随机串和相同算法生成通信公钥GY2，用该公钥GY2加密内容并进行普通http通信。")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(245),alt:""}})]),t._v(" "),v("h6",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("p",[v("a",{attrs:{href:"#"}},[t._v("图解Http")])])])}],a=_(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),v,!1,null,null,null);s.default=e.exports}}]);