(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#headerContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n#secondaryTemp {\n    display: flex;\n    gap: 1rem;\n}\n\n#secondContainer {\n    width: 100%;\n}\n\n#infoContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],u=o[l]||0,s="".concat(l," ").concat(u);o[l]=u+1;var p=n(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,r);r.byIndex=c,t.splice(c,0,{identifier:s,updater:f,references:1})}a.push(s)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var d=r(e,i),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),c=n(565),d=n.n(c),l=n(216),u=n.n(l),s=n(589),p=n.n(s),m=n(426),f={};function v(){let e=formInput.value;return console.log(e),e}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,function(){let e=document.createElement("div");e.id="headerContainer";let t=document.createElement("div"),n=document.createElement("div");n.id="cityName",n.innerText="City";let r=document.createElement("div"),i=document.createElement("div");i.id="day",i.innerText="";let o=document.createElement("div");o.id="time",o.innerText="",r.appendChild(i),r.appendChild(o);let a=document.createElement("button");a.innerText="F/C",t.appendChild(n),t.appendChild(r),e.appendChild(function(){let e=document.createElement("div");e.id="formArea";let t=document.createElement("input");t.setAttribute("type","text"),t.placeholder="Enter city",t.id="formInput";let n=document.createElement("button");return n.innerText="Search",n.setAttribute("type","submit"),n.onclick=function(e){e.preventDefault(),async function(e){let t=await fetch("https://api.weatherapi.com/v1/current.json?key=3a42f2ba01104ec98ac20757231610&q="+e,{mode:"cors"}),n=await t.json(),r=n.location.name;document.getElementById("cityName").innerText=r;let i=n.location.localtime,o=i.substr(0,10);const a=new Date(o).toLocaleDateString("en-US",{weekday:"long"});document.getElementById("day").innerText=a;let c=i.substr(11,16);document.getElementById("time").innerText=c;let d=n.current.condition.text;document.getElementById("tempInfo").innerText=d;let l=n.current.temp_c;document.getElementById("mainTemp").innerText=l+"°";let u=n.current.feelslike_c;document.getElementById("feelsLike").innerText=u+"°";let s=n.current.wind_kph;document.getElementById("wind").innerText=s+" kph";let p=n.current.humidity;document.getElementById("humidity").innerText=p;let m=n.current.pressure_mb;document.getElementById("pressure").innerText=m;let f=n.current.uv;document.getElementById("uv").innerText=f}(v())},e.append(t),e.append(n),e}()),e.appendChild(t),e.appendChild(a),document.getElementById("content").appendChild(e)}(),function(){let e=document.createElement("div");e.id="mainContainer";let t=document.createElement("div");t.innerText="🌞";let n=document.createElement("div");n.id="tempInfo";let r=document.createElement("div");r.id="mainTemp",r.innerText="";let i=document.createElement("div");i.id="secondaryTemp";let o=document.createElement("div");o.id="minTemp",o.innerText="Lowest: 4°";let a=document.createElement("div");a.id="maxTemp",a.innerText="Highest: 6°",i.appendChild(o),i.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),document.getElementById("content").appendChild(e)}(),function(){let e=document.createElement("div");e.id="secondContainer";let t=document.createElement("div");t.id="infoContainer";const n=["feelsLike","wind","humidity","pressure","uv"];for(let e=0;e<5;e++){const r=document.createElement("div");r.id=n[e],r.classList.add("grid-item"),t.appendChild(r)}e.appendChild(t),document.getElementById("content").appendChild(e)}()})()})();