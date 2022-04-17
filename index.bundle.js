(()=>{"use strict";var n={425:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,".container {\n  display: none;\n  grid-template-columns: auto auto auto;\n\n  /* flex-direction: column; */\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 10%;\n  left: 20%;\n  transform: translate(-20%, 10%);\n  background-color: rgba(241, 238, 238, 0.9);\n  height: 60%;\n  width: 90%;\n\n  /* overflow-y: scroll; */\n  z-index: 2;\n  border: transparent;\n  border-radius: 10px;\n  margin-top: 40px;\n  gap: 26px;\n  box-shadow: 5px 10px rgba(190, 189, 183, 0.9);\n}\n\n.popup-btn {\n  padding: 10px;\n  width: 10%;\n  border: transparent;\n  border-radius: 5px;\n  background-color: rgb(11, 129, 37);\n  box-shadow: 4px 5px rgb(202, 214, 207);\n  text-align: center;\n  font-size: 18px;\n  color: white;\n}\n\n.head-comments {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  gap: 48px;\n\n  /* padding-top: 20px; */\n}\n\n.card-img {\n  width: 400px;\n  border-radius: 5px;\n}\n\n.fa {\n  font-size: 36px;\n  align-self: flex-start;\n  margin: 30px;\n}\n\n.data {\n  display: -ms-grid;\n  display: grid;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n}\n\n.add-comments {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  gap: 32px;\n}\n\n.form {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-bottom: 50px;\n}\n\ninput {\n  width: 200px;\n  padding: 8px;\n  border: 2px solid black;\n  border-radius: 4px;\n}\n\ntextarea {\n  width: 300px;\n  height: 150px;\n  padding: 8px;\n  border: 2px solid black;\n  border-radius: 4px;\n}\n\ntextarea::placeholder {\n  font-weight: bold;\n}\n\n.form-btn {\n  padding: 10px;\n  width: 30%;\n  border-radius: 5px;\n  background-color: rgb(11, 129, 37);\n  border: transparent;\n  cursor: pointer;\n  align-self: flex-start;\n  color: white;\n  font-size: 18px;\n}\n\n.input::placeholder {\n  font-weight: bold;\n}\n",""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,'/* \nMediterranean Blue – #027EBC\nCaribbean Sea – #7BCEF6\nCool Water – #D4EEFB\nOrange Bolt – #FE2601\nSun Glow – #FED032 \n*/\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --dark: #027EBC;\n  --midd: #7BCEF6;\n  --light: #D4EEFB;\n  --red: #FE2601;\n  --yell: #FED032;\n\n  overflow-x: hidden;\n}\n\n/* ******** HEADER ******** */\na {\n  text-decoration: none;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n  background: var(--dark);\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 5%;\n}\n\n.logo {\n  display: flex;\n  gap: 0.5rem;\n  align-content: center;\n  font-weight: 900;\n  font-size: 3rem;\n  color: var(--light);\n}\n\n.logo span {\n  color: var(--yell);\n}\n\n.nav-menu {\n  position: static;\n  left: 0;\n  top: 0;\n  gap: 3rem;\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  text-align: center;\n}\n\n.nav-item {\n  display: -ms-grid;\n  display: grid;\n  align-content: center;\n}\n\n.nav-item a {\n  color: var(--light);\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 20px;\n}\n\n/* ******** MAIN ******** */\nmain {\n  margin-top: 7.4rem;\n}\n\n/* Float four columns side by side */\n.column {\n  float: left;\n  box-sizing: border-box;\n  width: 33%;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */\n  margin: 5%;\n  border-radius: 8px;\n  text-align: center;\n  background-color: var(--yell);\n}\n\n.column img {\n  width: 100%;\n}\n\n/* Remove extra left and right margins, due to padding in columns */\n.row {\n  padding: 10px;\n  margin: 0 5%;\n  margin-bottom: 11rem;\n}\n\n/* Clear floats after the columns */\n.row::after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n.reservationBtn,\n.comments {\n  user-select: none;\n  cursor: pointer;\n  width: 100px;\n  height: 25px;\n  border-radius: 30px;\n}\n\n.fa-heart {\n  color: var(--red)\n}\n\n/* Responsive columns - one column layout (vertical) on small screens */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n.containerCard {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n/* footer */\nfooter {\n  display: block;\n  padding: 3rem 2rem;\n  background-color: var(--light);\n}\n\nfooter .wrapper.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n\nfooter .branding {\n  color: var(--yell);\n  font-family: var(--sans-font);\n  font-weight: 800;\n  font-size: 1.25rem;\n  line-height: 1em;\n  flex-shrink: 0;\n  flex-basis: 7rem;\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=a.base?c[0]+a.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};async function h(n){return(await fetch(n)).json()}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=t(425),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),e()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const x="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/likes";!async function(n,e,t){let a="";const r=await h("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/likes"),o=await async function(n){let e=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");return e=await e.json(),e.meals}(),i=o.length;document.querySelector(".nav-item").children[0].innerHTML+=`(${i})`,o.forEach((n=>{let e=r.find((e=>e.item_id===n.idMeal));e=e?e.likes:0,a+=`\n    <div class="column" id="${n.idMeal}">\n      <img src="${n.strMealThumb}" class="meal-image" alt="Avatar"">\n      <div class="containerCard">\n        <h4 class="meal-title">${n.strMeal}</h4>\n        <div class="likeContainer">\n          <span id="${n.idMeal}"><i class="fas fa-heart"></i></span>\n          <p class="like">${e||0} Likes</p>\n        </div>\n      </div>\n      <button class="comments" type="button">Comment</button>\n    </div>\n  `})),n.innerHTML=a}(document.querySelector(".row")),function(n){document.addEventListener("click",(e=>{if(e.target.classList.contains("fa-heart")){const{id:t}=e.target.parentElement;!async function(n,e){await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/likes",{method:"POST",body:JSON.stringify({item_id:e}),headers:{"Content-type":"application/json; charset=UTF-8",Accept:"application/json"}})}(0,t),setTimeout((()=>{h(n).then((n=>{let a=n.find((n=>n.item_id===t));a=a?a.likes:0,e.target.parentElement.parentElement.children[1].innerHTML=`${a} Likes`,e.target.classList.add("fa-2x")}))}),1e3)}}))}(x),document.addEventListener("click",(n=>{if(n.target&&n.target.classList.contains("comments")){const e=n.target.parentElement,t=e.querySelector(".meal-title").innerText,a=e.querySelector(".meal-image").src,{id:r}=n.target.parentElement;((n,e,t="")=>{const a=document.createElement("div");a.setAttribute("id","popup"),a.setAttribute("class","container-popup");const r=document.createElement("div");r.classList.add("head-comments");const o=document.createElement("i");o.className="fa fa-times",o.id="closeBtn";const i=document.createElement("div");i.classList.add("data"),i.id="newData";const s=document.createElement("div");s.classList.add("add-comments");const c=document.createElement("h2");c.textContent="Add comment";const l=document.createElement("form");l.setAttribute("class","form");const d=document.createElement("input");d.setAttribute("type","text"),d.classList.add("input"),d.setAttribute("placeholder","Your name");const p=document.createElement("textarea");p.setAttribute("placeholder","Your comment ..."),p.classList.add("text-area");const u=document.createElement("button");u.setAttribute("type","button"),u.classList.add("form-btn"),u.textContent="Comment",l.append(d,p,u),s.append(c,l);const m=document.createElement("ul");m.classList.add("new-update"),u.addEventListener("click",(()=>{(()=>{const n=document.createElement("li"),e=new Date,t=e.getDay(),a=e.getMonth(),r=e.getFullYear();n.innerHTML+=`\n      <li class="userInput">\n      ${r} ${-a} ${-t} </br> ${d.value} : ${p.value}\n      </li>\n      `,m.append(n)})(),d.value="",p.value=""})),a.append(r,s,m,o),a.style.display="flex",document.querySelector(".popup-section").append(a),document.querySelector(".row").style.display="none",document.getElementById("closeBtn").addEventListener("click",(()=>{a.remove(),window.location.reload()})),r.innerHTML+=`<div class='imgText'>\n  <h2>${n}</h2>\n  <img class='card-img' src=${e}>\n  <p>${t}</p>\n  </div>`})(t,a),async function(n){const e=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/comments?item_id=${n}`,t=await fetch(e);return await t.json()}(r).then((n=>{n.length&&n.forEach((n=>{document.getElementById("newData").innerHTML=`<p>${n.creation_date}</p>\n            <p>${n.comment}</p>\n            <p>${n.username}</p>`}))})),document.querySelector(".data").innerHTML="",document.addEventListener("click",(n=>{if(n.target.classList.contains("form-btn")){const n=document.querySelector(".input"),e=document.querySelector(".text-area");!async function(n,e,t){await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t9up9m5T6uECqwieuC71/comments",{method:"POST",body:JSON.stringify({item_id:n,username:e,comment:t}),headers:{"Content-type":"application/json; charset=UTF-8",Accept:"application/json"}})}(r,n.value,e.value)}}))}}))})()})();