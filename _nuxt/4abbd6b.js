(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{214:function(t,n,e){var content=e(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("4cb5f8c0",content,!0,{sourceMap:!1})},215:function(t,n,e){"use strict";e(214)},216:function(t,n,e){var o=e(53)(!1);o.push([t.i,"a[data-v-3bd992e7]{width:100%;height:100%;text-decoration:none}.button-user-name[data-v-3bd992e7]{font-size:60px;color:#a4d6ff}.button-box[data-v-3bd992e7]{width:300px;height:100px;background-color:rgba(238,247,255,.2);margin:20px auto 20p}",""]),t.exports=o},217:function(t,n,e){"use strict";e.r(n);var o={name:"UserButton",props:["name","link"]},r=(e(215),e(27)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",[e("div",{staticClass:"button-box",on:{click:function(n){return t.$router.push(t.link)}}},[e("nuxt-link",{attrs:{to:t.link}},[e("p",{staticClass:"button-user-name"},[t._v(t._s(t.name))])])],1)])}),[],!1,null,"3bd992e7",null);n.default=component.exports},218:function(t,n,e){var content=e(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("7694757b",content,!0,{sourceMap:!1})},220:function(t,n,e){"use strict";e(218)},221:function(t,n,e){var o=e(53)(!1);o.push([t.i,".container[data-v-242ef66a]{width:100vw;text-align:center;background-image:url(/images/HomeBack.jpg);background-size:cover;background-attachment:fixed;padding-bottom:100px}#index-icon[data-v-242ef66a]{width:100px;padding-top:15vh;padding-bottom:30vh}p[data-v-242ef66a]{font-size:3em;padding-top:5vh;padding-bottom:5vh}h1[data-v-242ef66a],p[data-v-242ef66a]{color:#ecf1ff}h1[data-v-242ef66a]{font-size:6em;padding-top:15vh}",""]),t.exports=o},226:function(t,n,e){"use strict";e.r(n);var o={components:{UserButton:e(217).default},data:function(){return{names:[{name:"UNo",url:"/user/uno"},{name:"Kokoa",url:"/user/kokoa"}]}}},r=(e(220),e(27)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("p",[t._v("八田に考えてもらう文章")]),t._v(" "),t._l(t.names,(function(t,n){return e("user-button",{key:n,attrs:{name:t.name,link:t.url}})}))],2)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("img",{attrs:{id:"index-icon",src:"https://cdn.discordapp.com/attachments/606109479003750442/811564657265475584/discord_.png"}})])}],!1,null,"242ef66a",null);n.default=component.exports;installComponents(component,{UserButton:e(217).default})}}]);