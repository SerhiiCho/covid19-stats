(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"21bb":function(t,e,n){"use strict";var a=n("2dad"),r=n.n(a);r.a},"2dad":function(t,e,n){},5988:function(t,e,n){"use strict";var a=n("9738"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"680b":function(t,e,n){t.exports=n.p+"img/covid.f87509aa.png"},"8da0":function(t,e,n){"use strict";var a=n("f06b"),r=n.n(a);r.a},9738:function(t,e,n){},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"container section"},[n("transition",{attrs:{name:"fade-in-left"}},[n("router-view")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"indigo lighten-1"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav-wrapper"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v(" C"),a("img",{attrs:{src:n("680b"),alt:"covid logo",height:"30"}}),t._v("VID-19 ")])],1)])])},i=[],c={},u=c,l=(n("5988"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,"ec1dd016",null),f=d.exports,p=a["a"].extend({components:{Navbar:f}}),v=p,h=(n("5c0b"),Object(l["a"])(v,r,s,!1,null,null,null)),b=h.exports,m=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"covid-page":""}},[null===t.stats?n("div",[n("div",{staticClass:"spinner"})]):n("div",[n("h5",[n("span",[t._v("Search country")]),n("input",{staticClass:"browser-default",attrs:{type:"text",placeholder:"Country name"},on:{keyup:t.filterStats}})]),n("div",{staticClass:"section"},[n("CovidTable",{attrs:{stats:t.stats}})],1)])])},y=[],g=(n("4de4"),n("a434"),n("4d63"),n("ac1f"),n("25f0"),n("bc3a")),x=n.n(g),C={requestHost:"covid-193.p.rapidapi.com",requestURL:"https://covid-193.p.rapidapi.com/statistics",requestKey:"091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"},w=C,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"striped responsive-table"},[t._m(0),n("tbody",t._l(t.stats,(function(e){return n("tr",{key:e.country},[n("td",[t._v(t._s(e.country))]),n("td",[t._v(t._s(t.formatNumber(e.cases.total)))]),n("td",[t._v(" "+t._s(e.cases.new)+" ")]),n("td",{staticClass:"red-text text-darken-3"},[t._v(" "+t._s(t.formatNumber(e.deaths.total))+" ")]),n("td",{staticClass:"green-text text-darken-4"},[t._v(" "+t._s(t.formatNumber(e.cases.recovered))+" ")])])})),0)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Country")]),n("th",[t._v("Confirmed")]),n("th",[t._v("New cases")]),n("th",[t._v("Deceased")]),n("th",[t._v("Recovered")])])])}],j=a["a"].extend({props:{stats:{default:null}}}),k=j,N=(n("8da0"),Object(l["a"])(k,S,O,!1,null,"29a8e6b6",null)),P=N.exports,$=a["a"].extend({data:function(){return{stats:null,initialStats:null,total:null,search:""}},created:function(){this.getStats()},methods:{filterStats:function(t){if(null!==t.target&&null!==this.initialStats&&""!==t.target.value){var e=t.target.value;this.stats=this.initialStats.filter((function(t){return RegExp(e.toLowerCase()).test(t.country.toLowerCase())}))}else this.stats=this.initialStats},getStats:function(){var t=this,e={"x-rapidapi-host":w.requestHost,"x-rapidapi-key":w.requestKey};x.a.get(w.requestURL,{headers:e}).then((function(e){t.handleResponse(e.data.response)})).catch((function(t){return console.error(t)}))},handleResponse:function(t){t.sort((function(t,e){return t.cases.total<e.cases.total?1:t.cases.total>e.cases.total?-1:0})),this.total=t.splice(0,1)[0],this.stats=t,this.initialStats=t}},components:{CovidTable:P}}),q=$,E=(n("21bb"),Object(l["a"])(q,_,y,!1,null,null,null)),R=E.exports;a["a"].use(m["a"]);var T=[{path:"/",name:"Home",component:R}],L=new m["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:T}),M=L,H=(n("8266"),n("6885"),n("d3b7"),n("5319"),function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")});a["a"].config.productionTip=!1,a["a"].prototype.formatNumber=H,new a["a"]({router:M,render:function(t){return t(b)}}).$mount("#app")},f06b:function(t,e,n){}});
//# sourceMappingURL=app.d45922b0.js.map