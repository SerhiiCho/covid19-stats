(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"03f3":function(t,e,a){"use strict";var s=a("4077"),n=a.n(s);n.a},"0bd1":function(t,e,a){"use strict";var s=a("774a"),n=a.n(s);n.a},"0e1c":function(t,e,a){},"21bb":function(t,e,a){"use strict";var s=a("2dad"),n=a.n(s);n.a},"2dad":function(t,e,a){},3966:function(t,e,a){t.exports=a.p+"img/prevent.cdaa505f.png"},4077:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"680b":function(t,e,a){t.exports=a.p+"img/covid.f87509aa.png"},"6a49":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQFCDoVxTjO7AAAALFJREFUWMPtmEEKwkAQBKtX3yCS/4X8wA/szSf4P42fSNqDCQii5xmYgr3sqRl6mt0WgO0zcAUGYvIALpKesn3aLg7EZgEG2b4HnuzXpGV7BZREsBswk4d59/AdOKbwcLaUwHYaP2TSWhS/kG0khTb1p74mCdvdb7Uhz0aXhGyPwC2JI0bZXoCWRPDasi1dA6ZEeqd9+7rj01PGWlGkJ9sDPt0XqYqUKlKqSKki5X9KvACxg0cbqV56oAAAAABJRU5ErkJggg=="},"774a":function(t,e,a){},"7f3f":function(t,e,a){t.exports=a.p+"img/covid19.adc2191e.jpg"},9347:function(t,e,a){"use strict";var s=a("0e1c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},"9f3b":function(t,e,a){},af90:function(t,e,a){t.exports=a.p+"img/what-to-do.ebaf97c2.png"},bc2e:function(t,e,a){"use strict";var s=a("e085"),n=a.n(s);n.a},bd11:function(t,e,a){"use strict";var s=a("dd19"),n=a.n(s);n.a},bd6c:function(t,e,a){"use strict";var s=a("9f3b"),n=a.n(s);n.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container"},[a("transition",{attrs:{name:"animate",mode:"out-in"}},[a("router-view")],1)],1),a("Footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"blue-grey darken-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"hide-on-large-only"},[s("a",{staticClass:"sidenav-trigger",attrs:{href:"javascript:"},on:{click:t.toggleSidenav}},[s("img",{attrs:{src:a("6a49"),alt:"menu",width:"25"}})])]),s("div",{staticClass:"nav-wrapper"},[s("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v(" C"),s("img",{attrs:{src:a("680b"),alt:"covid logo",height:"30"}}),t._v("VID-19 ")]),s("div",{staticClass:"hide-on-med-and-down right"},[s("NavLinks")],1)],1)])]),t.showSidebar?s("div",[s("div",{staticClass:"sidenav-overlay",on:{click:t.toggleSidenav}})]):t._e(),t.showSidebar?s("div",[s("ul",{staticClass:"sidenav"},[t._m(0),s("NavLinks")],1)]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"user-view"},[s("div",{staticClass:"background"},[s("img",{attrs:{src:a("7f3f")}})]),s("a",[s("span",{staticClass:"white-text name"},[t._v("COVID-19")])]),s("a",[s("span",{staticClass:"white-text email"},[t._v("Coronavirus")])])])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("router-link",{attrs:{tag:"li",to:"/",exact:""}},[a("a",[t._v("Dashboard")])]),a("router-link",{attrs:{tag:"li",to:"/what-to-do",exact:""}},[a("a",[t._v("What to do?")])])],1)},l=[],u=s["a"].extend({}),d=u,h=(a("9347"),a("2877")),v=Object(h["a"])(d,c,l,!1,null,"1ff004e6",null),f=v.exports,p=s["a"].extend({data:function(){return{showSidebar:!1}},created:function(){var t=this;Event.$on("new-view",(function(){return t.showSidebar=!1}))},methods:{toggleSidenav:function(){this.showSidebar=!this.showSidebar}},components:{NavLinks:f}}),m=p,b=(a("bd11"),Object(h["a"])(m,o,i,!1,null,"29c9bd2e",null)),g=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"indigo lighten-5"},[s("a",{attrs:{href:"https://serhii.tk","footer-link":"",target:"_blank"}},[s("img",{attrs:{src:a("cf05"),alt:"serhii cho logo",height:"35"}})])])}],y=s["a"].extend({}),C=y,A=(a("0bd1"),Object(h["a"])(C,w,_,!1,null,"22276aa2",null)),k=A.exports,x=s["a"].extend({components:{Navbar:g,Footer:k}}),S=x,O=(a("5c0b"),Object(h["a"])(S,n,r,!1,null,null,null)),E=O.exports,T=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section",attrs:{"home-page":""}},[null===t.stats?a("div",[a("div",{staticClass:"spinner"})]):a("div",[a("TotalCards",{attrs:{data:t.total}}),a("div",[a("label",{attrs:{"search-label":"",for:"search-country"}},[t._v("Search country")]),a("input",{staticClass:"browser-default",attrs:{type:"text",placeholder:"Country name",id:"search-country"},on:{keyup:t.filterStats}})]),a("div",{staticClass:"section"},[a("CovidTable",{attrs:{stats:t.stats}})],1)],1)])},N=[],R=(a("4de4"),a("7db0"),a("d81d"),a("4d63"),a("ac1f"),a("25f0"),a("bc3a")),$=a.n(R),P={requestHost:"covid-193.p.rapidapi.com",requestURL:"https://covid-193.p.rapidapi.com/statistics",requestKey:"091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"},W=P,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"striped responsive-table"},[t._m(0),a("tbody",t._l(t.stats,(function(e){return a("tr",{key:e.country},[a("td",[t._v(t._s(e.country))]),a("td",[t._v(t._s(t.formatNumber(e.cases)))]),a("td",[t._v(" "+t._s(0===e.newCases?0:"+"+t.formatNumber(e.newCases))+" ")]),a("td",{staticClass:"red-text text-darken-3"},[t._v(" "+t._s(t.formatNumber(e.deaths))+" ")]),a("td",{staticClass:"green-text text-darken-4"},[t._v(" "+t._s(t.formatNumber(e.recovered))+" ")])])})),0)])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"blue-grey darken-4"},[a("th",[t._v("Country")]),a("th",[t._v("Confirmed")]),a("th",[t._v("New cases")]),a("th",[t._v("Deceased")]),a("th",[t._v("Recovered")])])])}],B=s["a"].extend({props:{stats:{default:null}}}),U=B,H=(a("03f3"),Object(h["a"])(U,q,L,!1,null,"f24eec4c",null)),I=H.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null===t.data?a("div"):a("div",{staticClass:"row"},[a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"#a1bdf3"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Confirmed")]),a("p",[t._v(t._s(t.formatNumber(t.data.cases)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"rgb(235, 94, 94)"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Deaths")]),a("p",[t._v(t._s(t.formatNumber(t.data.deaths)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"rgb(235, 94, 94)"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("New cases")]),a("p",[t._v(t._s(0===t.data.newCases?0:"+"+t.formatNumber(t.data.newCases)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"#00be89"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Recovered")]),a("p",[t._v(t._s(t.formatNumber(t.data.recovered)))])])])])])])},D=[],J=s["a"].extend({props:{data:{default:null}}}),X=J,z=(a("bd6c"),Object(h["a"])(X,K,D,!1,null,"6f1b97ea",null)),G=z.exports,Y=s["a"].extend({data:function(){return{stats:null,initialStats:null,total:null,search:""}},created:function(){this.getStats()},methods:{filterStats:function(t){if(null!==t.target&&null!==this.initialStats&&""!==t.target.value){var e=t.target.value;this.stats=this.initialStats.filter((function(t){return RegExp(e.toLowerCase()).test(t.country.toLowerCase())}))}else this.stats=this.initialStats},getStats:function(){var t=this,e={"x-rapidapi-host":W.requestHost,"x-rapidapi-key":W.requestKey};$.a.get(W.requestURL,{headers:e}).then((function(e){t.handleResponse(e.data.response)})).catch((function(t){return console.error(t)}))},remapResponseToStatsItem:function(t){return t.map((function(t){var e=0;if(null!==t.cases.new){var a=t.cases.new.length;e=parseInt(t.cases.new.substring(1,a))}return{cases:t.cases.total,recovered:t.cases.recovered,newCases:e,country:t.country,deaths:t.deaths.total,time:t.time}}))},handleResponse:function(t){var e=this.remapResponseToStatsItem(t);this.sortBy("cases",e),this.total=e.find((function(t){return"All"===t.country||"World"===t.country}))||null,this.stats=e.filter((function(t){return"All"!==t.country&&"World"!==t.country})),this.initialStats=this.stats},sortBy:function(t,e){e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0}))}},components:{CovidTable:I,TotalCards:G}}),F=Y,M=(a("21bb"),Object(h["a"])(F,j,N,!1,null,null,null)),V=M.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"what-to-do-page":""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col l8"},[s("section",[s("h2",[t._v("How do I protect myself?")]),s("p",[t._v(" The best thing is "),s("a",{attrs:{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",target:"_blank"}},[t._v("regular and thorough hand washing,")]),t._v(" preferably with soap and water. ")]),s("p",[t._v("Coronavirus spreads when an infected person coughs small droplets - packed with the virus - into the air. These can be breathed in, or cause an infection if you touch a surface they have landed on, then your eyes, nose or mouth.")]),s("p",[t._v("So, coughing and sneezing into tissues, not touching your face with unwashed hands, and avoiding close contact with infected people are important for limiting the spread.")]),s("p",[s("a",{attrs:{href:"https://www.bbc.co.uk/news/health-51205344",target:"_blank"}},[t._v("Face masks do not provide effective protection,")]),t._v(" according to medical experts. ")]),s("p",[t._v(" However, the World Health Organization (WHO) is currently looking at "),s("a",{attrs:{href:"https://www.bbc.co.uk/news/science-environment-52126735",target:"_blank"}},[t._v("whether the public might benefit from using face masks.")])]),s("p",[t._v("This follows a study suggesting that the virus can travel further in coughs and sneezes than previously thought.")]),s("section",[s("img",{attrs:{src:a("af90"),alt:"what to do"}})])]),s("section",{staticClass:"section"},[s("h2",[t._v("What are the coronavirus symptoms?")]),s("p",[t._v("Coronavirus infects the lungs. The two main, key symptoms are a fever and a dry cough, which can in some cases lead to breathing problems.")]),s("p",[t._v("The cough to look out for is a new, continuous cough. This means coughing a lot for more than an hour, or having three or more coughing episodes in 24 hours (and if you usually have a cough, it may be worse than usual).")]),s("p",[t._v("You have a fever if your temperature is above 37.8C. This can make you feel warm, cold or shivery.")]),s("p",[t._v(" It takes "),s("a",{attrs:{href:"https://www.bbc.co.uk/news/health-51800707",target:"_blank"}},[t._v("five days on average to start showing the symptoms,")]),t._v(" scientists have said, but some people will get symptoms much later than this. In fact the World Health Organization (WHO) says the incubation period lasts up to 14 days. ")]),s("p",[t._v(" A sore throat, headache and diarrhoea have also been reported in some cases and "),s("a",{attrs:{href:"https://www.bbc.co.uk/news/health-52111606",target:"_blank"}},[t._v("a loss of smell and taste may also be a symptom.")]),t._v(" But these symptoms aren't specific to this coronavirus. ")]),s("p",[s("a",{attrs:{href:"https://www.bbc.co.uk/news/health-52006988",target:"_blank"}},[t._v("There is a lot we still don't know about the full range of symptoms")]),t._v(". ")]),s("section",{staticClass:"section"},[s("img",{attrs:{src:a("cf1e"),alt:"symptoms"}})])]),s("section",[s("span",[t._v(" Original source: "),s("a",{attrs:{href:"https://www.bbc.com/news/health-51048366",target:"_blank"}},[t._v("https://www.bbc.com/news/health-51048366")])])])]),s("div",{staticClass:"col l4"},[s("section",[s("img",{attrs:{src:a("3966"),alt:"prevent virus"}})])])])])}],tt=s["a"].extend({}),et=tt,at=(a("bc2e"),Object(h["a"])(et,Q,Z,!1,null,"f205428c",null)),st=at.exports;s["a"].use(T["a"]);var nt=[{path:"/",component:V},{path:"/what-to-do",component:st}],rt=new T["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:nt});rt.afterEach((function(t,e){return Event.$emit("new-view")}));var ot=rt,it=(a("8266"),a("6885"),a("d3b7"),a("5319"),function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")});s["a"].config.productionTip=!1,s["a"].prototype.formatNumber=it,window.Event=new s["a"],new s["a"]({router:ot,render:function(t){return t(E)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.89da1762.png"},cf1e:function(t,e,a){t.exports=a.p+"img/symptoms.4431ad1c.png"},dd19:function(t,e,a){},e085:function(t,e,a){}});
//# sourceMappingURL=app.805faf30.js.map