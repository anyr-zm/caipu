(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0a9a":function(t,e,n){"use strict";n.r(e);var a=n("1821"),c=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=c.a},1821:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){n.e("components/share/share").then(function(){return resolve(n("9bb7"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{detail:""}},components:{shareView:a},onLoad:function(t){this.getData(t.id)},methods:{getData:function(e){var n=this;t.request({url:n.$serverUrl+"/detail",data:{appkey:n.$appkey,id:e},success:function(t){if(200===t.statusCode){var e=t.data.result;n.detail=e}else console.log("请求失败",t)}})}},onShareAppMessage:function(t){return t.from,{title:this.detail.name,desc:this.detail.content,imageUrl:this.detail.pic,success:function(t){},fail:function(t){}}}};e.default=c}).call(this,n("f266")["default"])},3031:function(t,e,n){},"8f17":function(t,e,n){"use strict";(function(t){n("cde8"),n("921b");a(n("66fd"));var e=a(n("c2b9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("f266")["createPage"])},"94cf":function(t,e,n){"use strict";var a=n("3031"),c=n.n(a);c.a},bc45:function(t,e,n){"use strict";var a,c=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},c2b9:function(t,e,n){"use strict";n.r(e);var a=n("bc45"),c=n("0a9a");for(var u in c)"default"!==u&&function(t){n.d(e,t,(function(){return c[t]}))}(u);n("94cf");var i,r=n("f0c5"),o=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"47ad8a21",null,!1,a["a"],i);e["default"]=o.exports}},[["8f17","common/runtime","common/vendor"]]]);