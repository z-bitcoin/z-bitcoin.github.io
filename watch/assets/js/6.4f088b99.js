(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10,11],{307:function(t,e,a){"use strict";a(10),a(163),a(91),a(62);e.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})},promisify:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return new Promise((function(e,n){t.apply(void 0,a.concat([function(t,a){t?n(t):e(a)}]))}))},getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,a,n){e[a]=void 0!==n?n:""})),t?e[t]?e[t]:null:e}}}},309:function(t,e,a){},313:function(t,e,a){"use strict";a(309)},324:function(t,e,a){"use strict";a.r(e);var n={name:"Footer"},r=a(44),i=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=i.exports},325:function(t,e,a){"use strict";a.r(e);var n={name:"Header"},r=a(44),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",variant:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[a("b-img",{attrs:{src:t.$withBase("/token.png"),height:"24"}}),t._v("\n    WatchToken\n  ")],1),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:t.$withBase("/create")}},[t._v("Create ERC20 Widget")]),t._v(" "),a("b-nav-item",{attrs:{href:t.$withBase("/create?network=bsc_mainnet")}},[t._v("Create BEP20 Widget")]),t._v(" "),a("b-nav-item",{attrs:{href:t.$withBase("/page?hash=0x7b2261646472657373223a22307842356336346337643662333734614437333865333134654161376243433037414563313934423762222c226c6f676f223a2268747470733a2f2f766974746f6d696e61636f72692e6769746875622e696f2f77617463682d746f6b656e2f6173736574732f696d616765732f626173652d746f6b656e2e706e67227d")}},[a("small",[t._v("Example")])])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{target:"_blank",href:"/erc20-generator/"}},[a("b-badge",{staticClass:"p-2",attrs:{variant:"info"}},[t._v("Create ERC20 Token")])],1),t._v(" "),a("b-nav-item",{attrs:{target:"_blank",href:"/bep20-generator"}},[a("b-badge",{staticClass:"p-2",attrs:{variant:"warning"}},[t._v("Create BEP20 Token")])],1),t._v(" "),a("b-nav-item",{attrs:{target:"_blank",href:"/how-to-add-token-to-metamask-fba11854f6cd"}},[a("small",[t._v("About")])])],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports},357:function(t,e,a){"use strict";a.r(e);var n=a(307),r=a(325),i=a(324),o={mixins:[n.a],components:{SiteHeader:r.default,SiteFooter:i.default},data:function(){return{loaded:!1}},mounted:function(){this.loaded=!0},computed:{page:function(){return this.$page.frontmatter.component||null},loadLayout:function(){return this.loaded&&!this.embedded},bodyClass:function(){return this.loadLayout?"aqua-gradient":""}}},s=(a(313),a(44)),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper main-container",class:t.bodyClass},[t.loadLayout?a("site-header"):t._e(),t._v(" "),a("b-container",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.page?a(t.page,{key:t.page,tag:"component"}):t._e()],1)],1),t._v(" "),t.loadLayout?a("site-footer"):t._e()],1)}),[],!1,null,null,null);e.default=l.exports}}]);
