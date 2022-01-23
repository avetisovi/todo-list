!function(){"use strict";var e,t={3014:function(e,t,n){var r=n(1370),i=n.n(r),a=new URL(n(8701),n.b);i()(a);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=document.querySelector(".projects"),d=c((function e(t){l(this,e),this.title=t,this.items=[]})),u=function(){function e(t){l(this,e),this.project=t}return c(e,[{key:"html",value:function(){var e=this,t=document.createElement("li");t.classList.add("projects__item");var n=document.createElement("span");n.classList.add("projects__text"),n.innerText=this.project.title,t.appendChild(n),t.innerHTML+='<button class="projects__item-delete">\n    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>\n    </button>';var r=document.createElement("span");r.classList.add("count"),t.appendChild(r),t.querySelector(".projects__item-delete").addEventListener("click",(function(){var t,n;t=e.project,n=document.querySelectorAll(".projects__text"),Array.from(n).find((function(e){return e.innerText==t.title})).parentElement.remove(),q.splice(q.indexOf(t),1),M=[v].concat(q),localStorage.setItem("projects",JSON.stringify(q))})),t.addEventListener("click",(function(){I(e.project),D(e.project)})),s.appendChild(t)}}]),e}(),m=document.querySelector(".filters__item-btn.inbox"),f=document.querySelector(".filters__item-btn.today"),p=document.querySelector(".filters__item-btn.upcoming"),v=(document.querySelector(".main"),new d("Inbox")),h=new d("Today"),y=new d("Upcoming");JSON.parse(localStorage.getItem("inbox"))&&(v=JSON.parse(localStorage.getItem("inbox"))),m.addEventListener("click",(function(){I(v),D(v)})),f.addEventListener("click",(function(){J(),D(h)})),p.addEventListener("click",(function(){H(),D(y)}));var _=n(1457),g=n(9916),b=n(3099);function S(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=document.querySelector(".sidebar__add"),x=document.querySelector(".sidebar__list"),E=document.querySelector(".main"),T=document.querySelector(".projects"),j=document.querySelector(".sidebar__popup"),O=document.querySelector(".sidebar__form-input"),k=(document.querySelector(".sidebar__form-cancel"),document.querySelector(".sidebar__form-add")),q=[];if(JSON.parse(localStorage.getItem("projects"))){q=JSON.parse(localStorage.getItem("projects"));for(var A=0;A<q;A++)for(var C=0;C<q[A].items.length;C++)q[A].items[C].date=new Date(q[A].items[C].date)}var M=[v].concat(q);function I(e){E.innerHTML="";var t=document.createElement("div");t.classList.add("main__inner");var n=document.createElement("h3");n.classList.add("main__title"),n.innerText=e.title;var r=document.createElement("ul");r.classList.add("main__list");for(var i=0;i<e.items.length;i++){var a=document.createElement("li");a.classList.add("main__list-item");var o=document.createElement("div");o.classList.add("main__item-heading"),o.innerHTML='<button class="main__item-checkbox">\n    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#bdc3c7"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>\n  </button>';var c=document.createElement("h5");c.classList.add("main__item-title"),c.innerText=e.items[i].title,o.appendChild(c),a.appendChild(o);var l=document.createElement("p");l.classList.add("main__item-description"),l.innerText=e.items[i].description,a.appendChild(l);var s=document.createElement("time");if(s.classList.add("main__item-date","no-after"),null===e.items[i].date?s.innerText="":(0,_.Z)(new Date(e.items[i].date),"MM/dd/yyyy")===(0,_.Z)(new Date,"MM/dd/yyyy")?s.innerText="Today":s.innerText=(0,g.Z)((0,b.Z)(),new Date(e.items[i].date)),a.appendChild(s),"Upcoming"===e.title){s.classList.remove("no-after");var d=document.createElement("span");d.classList.add("main__item-parent"),d.innerText=e.items[i].parent,a.appendChild(d)}if("Today"===e.title){s.classList.remove("no-after");var u=document.createElement("span");u.classList.add("main__item-parent"),u.innerText=e.items[i].parent,a.appendChild(u)}r.appendChild(a)}r.innerHTML+='<li class="main__list-item">\n  <button class="main__add" data-project="'.concat(e.title,'">\n    <span class="icon">\n      <svg width="13" height="13" fill="red"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"  fill-rule="evenodd"></path></svg>\n    </span>\n    Add task\n  </button>\n</li>'),t.appendChild(n),t.appendChild(r),E.appendChild(t),function(e){var t=document.querySelectorAll(".main__item-checkbox"),n=document.querySelectorAll(".main__list-item");if("Upcoming"===e.title)for(var r=function(r){t[r].addEventListener("click",(function(){var t=M.find((function(t){return t.title===e.items[r].parent}));n[r].remove(),t.items.splice(r,1),N(t),H()}))},i=0;i<t.length;i++)r(i);else if("Today"===e.title)for(var a=function(r){t[r].addEventListener("click",(function(){var t=M.find((function(t){return t.title===e.items[r].parent}));n[r].remove(),t.items.splice(r,1),N(t),H()}))},o=0;o<t.length;o++)a(o);else for(var c=function(r){t[r].addEventListener("click",(function(){n[r].remove(),e.items.splice(r,1),N(e)}))},l=0;l<t.length;l++)c(l);localStorage.setItem("inbox",JSON.stringify(v)),localStorage.setItem("projects",JSON.stringify(q))}(e),document.querySelector(".main__add").addEventListener("click",(function(t){!function(e,t){t.path[1].innerHTML='<form class="main__form-create">\n  <div>\n    <input type="text" class="main__form-title" placeholder="e.g., Family lunch on Sunday at 11am">\n    <textarea class="main__form-description" placeholder="Description"></textarea>\n    <input class="main__form-date" type="date" >\n  </div>\n  <button class="main__form-add" disabled>Add tast</button>\n  <button class="main__form-cancel">Cancel</button>\n</form>';var n=document.querySelector(".main__form-title"),r=document.querySelector(".main__form-description"),i=document.querySelector(".main__form-date"),a=document.querySelector(".main__form-add"),o=document.querySelector(".main__form-cancel");n.addEventListener("input",(function(){""===n.value?a.disabled=!0:a.disabled=!1}));var c=(new Date).toISOString().slice(0,10);i.setAttribute("min",c),a.addEventListener("click",(function(){"Upcoming"===e.title?(v.items.push({title:n.value,description:r.value,date:i.valueAsDate,parent:v.title}),N(v),H()):"Today"===e.title?(v.items.push({title:n.value,description:r.value,date:i.valueAsDate||new Date,parent:v.title}),N(v),J()):e.items.push({title:n.value,description:r.value,date:i.valueAsDate,parent:e.title}),I(e),N(e),localStorage.setItem("inbox",JSON.stringify(v)),localStorage.setItem("projects",JSON.stringify(q))})),o.addEventListener("click",(function(){I(e)}))}(e,t)}))}function D(e){var t=document.querySelectorAll(".filters__item, .projects__item");t.forEach((function(e){return e.classList.remove("active")})),Array.from(t).find((function(t){return t.innerText==e.title})).classList.add("active")}function N(e){var t=document.querySelectorAll(".projects__text"),n=Array.from(t).find((function(t){return t.innerText==e.title}));n?e.items.length>0?n.parentElement.lastChild.innerText=e.items.length:n.parentElement.lastChild.innerText="":"Inbox"===e.title&&(e.items.length>0?m.lastChild.innerText=e.items.length:m.lastChild.innerText="")}function H(){for(var e=[],t=0;t<M.length;t++)e.push.apply(e,S(M[t].items.filter((function(e){return null!==e.date}))));y.items=e.sort(),I(y)}function J(){for(var e=[],t=0;t<M.length;t++)e.push.apply(e,S(M[t].items.filter((function(e){return null!==e.date&&(0,_.Z)(e.date,"MM/dd/yyyy")===(0,_.Z)(new Date,"MM/dd/yyyy")}))));h.items=e.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),I(h)}x.addEventListener("click",(function(){if(x.classList.toggle("active"),x.classList.contains("active"))for(var e=0;e<q.length;e++){new u(q[e]).html()}else T.innerHTML=""})),L.addEventListener("click",(function(){j.style.display="block"})),O.addEventListener("input",(function(){""===O.value?k.disabled=!0:k.disabled=!1})),k.addEventListener("click",(function(){if(M.find((function(e){return e.title===O.value}))||"Today"===O.value||"Upcoming"===O.value)alert("Name already taken");else{k.disabled=!0,j.style.display="none";var e=new d(O.value);if(O.value="",q.push(e),M=[v].concat(q),localStorage.setItem("projects",JSON.stringify(q)),x.classList.contains("active"))new u(e).html()}})),I(v)},8701:function(e,t,n){e.exports=n.p+"b4eb570f406f92a0648d.svg"}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,i,a){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(c=!1,a<o&&(o=a));if(c){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){r.b=document.baseURI||self.location.href;var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],c=n[1],l=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(l)var d=l(r)}for(t&&t(n);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[485],(function(){return r(1202)}));var i=r.O(void 0,[485],(function(){return r(3014)}));i=r.O(i)}();