!function(){"use strict";var e,t={8327:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{db:function(){return ae}});var o=document.querySelector(".projects"),c=i((function e(t){a(this,e),this.title=t,this.items=[]})),s=function(){function e(t){a(this,e),this.project=t}return i(e,[{key:"html",value:function(){var e=this,t=document.createElement("li");t.classList.add("projects__item");var n=document.createElement("span");n.classList.add("projects__text"),n.innerText=this.project.title,t.appendChild(n),t.innerHTML+='<button class="projects__item-delete">\n    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>\n    </button>';var r=document.createElement("span");r.classList.add("count"),t.appendChild(r),t.querySelector(".projects__item-delete").addEventListener("click",(function(t){t.stopPropagation(),function(e){G.apply(this,arguments)}(e.project)})),t.addEventListener("click",(function(){B(e.project),F(e.project)})),o.appendChild(t)}}]),e}(),u=n(1457),l=n(9916),d=n(3099),m=n(6084),p=n(1465);function f(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){f(a,r,i,o,c,"next",e)}function c(e){f(a,r,i,o,c,"throw",e)}o(void 0)}))}}var h=document.querySelector(".user-picture"),y=document.querySelector(".user-name"),b=document.querySelector(".sign-out"),g=document.querySelector(".sign-in"),_=[];function x(){return(x=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new m.hJ,e.next=3,(0,m.rh)((0,m.v0)(),t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(0,m.v0)().currentUser.photoURL}function w(){return(0,m.v0)().currentUser.displayName}function k(e){return-1!==e.indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e}function L(e){return E.apply(this,arguments)}function E(){return(E=v(regeneratorRuntime.mark((function e(t){var n,r,i,a,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=25;break}return e.next=3,(0,p.QT)((0,p.JU)(ae,"users",t.uid));case 3:if((n=e.sent).exists()){e.next=9;break}return e.next=7,(0,p.pl)((0,p.JU)(ae,"users",t.uid),{inbox:te.items,projects:_});case 7:e.next=15;break;case 9:r=n.data(),i=r.inbox,a=r.projects,te.items=i,_=a,B(te),Q(te),F(te);case 15:o=S(),c=w(),h.style.backgroundImage="url("+k(o)+")",y.textContent=c,h.removeAttribute("hidden"),y.removeAttribute("hidden"),b.removeAttribute("hidden"),g.setAttribute("hidden","true"),e.next=34;break;case 25:localStorage.getItem("inbox")&&(te.items=JSON.parse(localStorage.getItem("inbox"))),localStorage.getItem("projects")&&(_=JSON.parse(localStorage.getItem("projects"))),B(te),Q(te),F(te),h.setAttribute("hidden","true"),y.setAttribute("hidden","true"),b.setAttribute("hidden","true"),g.removeAttribute("hidden");case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return!!(0,m.v0)().currentUser}function O(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){A(a,r,i,o,c,"next",e)}function c(e){A(a,r,i,o,c,"throw",e)}o(void 0)}))}}g.addEventListener("click",(function(){return x.apply(this,arguments)})),b.addEventListener("click",(function(){(0,m.w7)((0,m.v0)())}));var I=document.querySelector(".body"),C=document.querySelector(".sidebar__add"),M=document.querySelector(".sidebar__list"),U=document.querySelector(".main"),J=document.querySelector(".projects"),D=document.querySelector(".sidebar__popup"),R=document.querySelector(".sidebar__form-input"),H=document.querySelector(".sidebar__form-cancel"),N=document.querySelector(".sidebar__form-add"),P=document.querySelector(".menu__btn"),Z=[te].concat(_);function z(e){return V.apply(this,arguments)}function V(){return(V=q(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Inbox"!==t.title){e.next=9;break}if(!j()){e.next=6;break}return e.next=4,(0,p.r7)((0,p.JU)(ae,"users",(0,m.v0)().currentUser.uid),{inbox:te.items});case 4:e.next=7;break;case 6:localStorage.setItem("inbox",JSON.stringify(te.items));case 7:e.next=16;break;case 9:if(!j()){e.next=15;break}return n=_.map((function(e){return Object.assign({},e)})),e.next=13,(0,p.r7)((0,p.JU)(ae,"users",(0,m.v0)().currentUser.uid),{projects:n});case 13:e.next=16;break;case 15:localStorage.setItem("projects",JSON.stringify(_));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){U.innerHTML="";var t=document.createElement("div");t.classList.add("main__inner");var n=document.createElement("h3");n.classList.add("main__title"),n.innerText=e.title;var r=document.createElement("ul");r.classList.add("main__list");for(var i=0;i<e.items.length;i++){var a=document.createElement("li");a.classList.add("main__list-item");var o=document.createElement("div");o.classList.add("main__item-heading"),o.innerHTML='<button class="main__item-checkbox">\n    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#bdc3c7"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>\n  </button>';var c=document.createElement("h5");c.classList.add("main__item-title"),c.innerText=e.items[i].title,o.appendChild(c),a.appendChild(o);var s=document.createElement("p");s.classList.add("main__item-description"),s.innerText=e.items[i].description,a.appendChild(s);var m=document.createElement("time");if(m.classList.add("main__item-date","no-after"),null===e.items[i].date?m.innerText="":(0,u.Z)(new Date(e.items[i].date),"MM/dd/yyyy")===(0,u.Z)(new Date,"MM/dd/yyyy")?m.innerText="Today":m.innerText=(0,l.Z)((0,d.Z)(),new Date(e.items[i].date)),a.appendChild(m),"Upcoming"===e.title){m.classList.remove("no-after");var p=document.createElement("span");p.classList.add("main__item-parent"),p.innerText=e.items[i].parent,a.appendChild(p)}if("Today"===e.title){m.classList.remove("no-after");var f=document.createElement("span");f.classList.add("main__item-parent"),f.innerText=e.items[i].parent,a.appendChild(f)}r.appendChild(a)}r.innerHTML+='<li class="main__list-item">\n  <button class="main__add" data-project="'.concat(e.title,'">\n    <span class="icon">\n      <svg width="13" height="13" fill="red"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"  fill-rule="evenodd"></path></svg>\n    </span>\n    Add task\n  </button>\n</li>'),t.appendChild(n),t.appendChild(r),U.appendChild(t),function(e){$.apply(this,arguments)}(e),document.querySelector(".main__add").addEventListener("click",(function(t){!function(e,t){t.preventDefault(),t.path[1].innerHTML='<form class="main__form-create">\n  <div>\n    <input type="text" class="main__form-title" placeholder="e.g., Family lunch on Sunday at 11am">\n    <textarea class="main__form-description" placeholder="Description"></textarea>\n    <input class="main__form-date" type="date" >\n  </div>\n  <button class="main__form-add" disabled>Add tast</button>\n  <button class="main__form-cancel">Cancel</button>\n</form>';var n=document.querySelector(".main__form-title"),r=document.querySelector(".main__form-description"),i=document.querySelector(".main__form-date"),a=document.querySelector(".main__form-add"),o=document.querySelector(".main__form-cancel");n.addEventListener("input",(function(){""===n.value?a.disabled=!0:a.disabled=!1}));var c=(new Date).toISOString().slice(0,10);i.setAttribute("min",c),a.addEventListener("click",(function(){var t=null;i.valueAsDate&&(t=i.valueAsDate.toISOString()),"Upcoming"===e.title?(te.items.push({title:n.value,description:r.value,date:t,parent:te.title}),Q(te),K()):"Today"===e.title?(te.items.push({title:n.value,description:r.value,date:t||(new Date).toISOString(),parent:te.title}),Q(te),Y()):e.items.push({title:n.value,description:r.value,date:t,parent:e.title}),B(e),Q(e),z(e)})),o.addEventListener("click",(function(){B(e)}))}(e,t)}))}function $(){return($=q(regeneratorRuntime.mark((function e(t){var n,r,i,a,o,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelectorAll(".main__item-checkbox"),r=document.querySelectorAll(".main__list-item"),"Upcoming"===t.title)for(i=function(e){n[e].addEventListener("click",(function(){var n=Z.find((function(n){return n.title===t.items[e].parent}));r[e].remove(),n.items.splice(e,1),Q(n),K(),z(t)}))},a=0;a<n.length;a++)i(a);else if("Today"===t.title)for(o=function(e){n[e].addEventListener("click",(function(){var n=Z.find((function(n){return n.title===t.items[e].parent}));r[e].remove(),n.items.splice(e,1),localStorage.setItem("inbox",JSON.stringify(te.items)),Q(n),K(),z(t)}))},c=0;c<n.length;c++)o(c);else for(s=function(e){n[e].addEventListener("click",(function(){r[e].remove(),t.items.splice(e,1),Q(t),z(t)}))},u=0;u<n.length;u++)s(u);j()||(localStorage.setItem("inbox",JSON.stringify(te.items)),localStorage.setItem("projects",JSON.stringify(_)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t=document.querySelectorAll(".filters__item, .projects__item");t.forEach((function(e){return e.classList.remove("active")}));var n=Array.from(t).find((function(t){return t.innerText==e.title}));n||e!==te||(n=document.querySelector(".filters__item.inbox")),n.classList.add("active")}function Q(e){var t=document.querySelectorAll(".projects__text"),n=Array.from(t).find((function(t){return t.innerText==e.title}));n?e.items.length>0?n.parentElement.lastChild.innerText=e.items.length:n.parentElement.lastChild.innerText="":"Inbox"===e.title&&(e.items.length>0?W.lastChild.innerText=e.items.length:W.lastChild.innerText="")}function G(){return(G=q(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelectorAll(".projects__text"),Array.from(n).find((function(e){return e.innerText==t.title})).parentElement.remove(),_.splice(_.indexOf(t),1),!j()){e.next=10;break}return r=_.map((function(e){return Object.assign({},e)})),e.next=8,(0,p.r7)((0,p.JU)(ae,"users",(0,m.v0)().currentUser.uid),{projects:r});case 8:e.next=11;break;case 10:localStorage.setItem("projects",JSON.stringify(_));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){Z=[te].concat(_);for(var e=[],t=0;t<Z.length;t++)e.push.apply(e,O(Z[t].items.filter((function(e){return null!==e.date}))));re.items=e.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),B(re)}function Y(){Z=[te].concat(_);for(var e=[],t=0;t<Z.length;t++)e.push.apply(e,O(Z[t].items.filter((function(e){return null!==e.date&&(0,u.Z)(new Date(e.date),"MM/dd/yyyy")===(0,u.Z)(new Date,"MM/dd/yyyy")}))));ne.items=e,B(ne)}P.addEventListener("click",(function(){I.classList.toggle("menuActive")})),M.addEventListener("click",(function(){if(M.classList.toggle("active"),M.classList.contains("active")){for(var e=0;e<_.length;e++){new s(_[e]).html()}_.forEach((function(e){return Q(e)}))}else J.innerHTML=""})),C.addEventListener("click",(function(){D.style.display="block"})),R.addEventListener("input",(function(){""===R.value?N.disabled=!0:N.disabled=!1})),N.addEventListener("click",q(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Z=[te].concat(_)).find((function(e){return e.title===R.value}))&&"Today"!==R.value&&"Upcoming"!==R.value){e.next=5;break}alert("Name already taken"),e.next=18;break;case 5:if(N.disabled=!0,D.style.display="none",t=new c(R.value),R.value="",_.push(t),!j()){e.next=16;break}return n=_.map((function(e){return Object.assign({},e)})),e.next=14,(0,p.r7)((0,p.JU)(ae,"users",(0,m.v0)().currentUser.uid),{projects:n});case 14:e.next=17;break;case 16:localStorage.setItem("projects",JSON.stringify(_));case 17:M.classList.contains("active")&&new s(t).html();case 18:case"end":return e.stop()}}),e)})))),H.addEventListener("click",(function(){D.style.display="none"}));var W=document.querySelector(".filters__item-btn.inbox"),X=document.querySelector(".filters__item-btn.today"),ee=document.querySelector(".filters__item-btn.upcoming"),te=new c("Inbox"),ne=new c("Today"),re=new c("Upcoming");W.addEventListener("click",(function(){B(te),F(te)})),X.addEventListener("click",(function(){Y(),F(ne)})),ee.addEventListener("click",(function(){K(),F(re)}));var ie=(0,n(2671).ZF)({apiKey:"AIzaSyA4xCJinMh_YQVnS22Ihls3LyZBlnGi3Hs",authDomain:"todo-list-2a7c3.firebaseapp.com",projectId:"todo-list-2a7c3",storageBucket:"todo-list-2a7c3.appspot.com",messagingSenderId:"497695372579",appId:"1:497695372579:web:b9348b48bbf2d0deb04896"}),ae=(n(8852),n(8701),(0,p.ad)(ie));(0,m.Aj)((0,m.v0)(),L)},8852:function(e,t,n){e.exports=n.p+"5e3924f7d92665298280.svg"},8701:function(e,t,n){e.exports=n.p+"b4eb570f406f92a0648d.svg"}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,i,a){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],a=e[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(c=!1,a<o&&(o=a));if(c){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,i,a]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],c=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(s)var l=s(r)}for(t&&t(n);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[640],(function(){return r(1202)}));var i=r.O(void 0,[640],(function(){return r(8327)}));i=r.O(i)}();