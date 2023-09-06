!function(){"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function t(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}const o=setTimeout((()=>t(".modal",o)),3e5);!function(e,t,o,n){let s=document.querySelectorAll(e),a=document.querySelectorAll(".tabcontent"),r=document.querySelector(".tabheader__items");function c(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(n)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),s[e].classList.add(n)}c(),i(),r.addEventListener("click",(function(t){const o=t.target;o&&o.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{o==e&&(c(),i(t))}))}))}(".tabheader__item",0,0,"tabheader__item_active"),function(e,t){function o(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const n=document.querySelector(e),s=n.querySelector("#days"),a=n.querySelector("#hours"),r=n.querySelector("#minutes"),c=n.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date),o=Math.floor(t/864e5),n=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60);return{total:t,days:o,hours:Math.floor(t/36e5%24),minutes:s,seconds:n}}(t);s.innerHTML=o(e.days),a.innerHTML=o(e.hours),r.innerHTML=o(e.minutes),c.innerHTML=o(e.seconds),e.total<=0&&clearInterval(i)}l()}(".timer","2023-09-30")}(),function(o,n,s){const a=document.querySelectorAll(o),r=document.querySelector(n);a.forEach((e=>{e.addEventListener("click",(()=>t(n,s)))})),r.addEventListener("click",(t=>{t.target!==r&&""!=t.target.getAttribute("data-close")||e(n)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&r.classList.contains("show")&&e(n)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(n,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",o),function(){class e{constructor(e,t,o,n,s,a){this.src=e,this.alt=t,this.title=o,this.descr=n,this.price=s;for(var r=arguments.length,c=new Array(r>6?r-6:0),i=6;i<r;i++)c[i-6]=arguments[i];this.classes=c,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Ошибка! Мы не сможем обработать ваш запрос ${e}, ошибка ${t.status}.`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:o,altimg:n,title:s,descr:a,price:r}=t;new e(o,n,s,a,r,".menu .container").render()}))}))}(),function(e){let{container:t,slide:o,nextArrow:n,prevArrow:s,totalCounter:a,currentCounter:r,wrapper:c,field:i}={container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"};const l=document.querySelector(s),d=document.querySelectorAll(o),u=document.querySelector(n),m=document.querySelector(t),h=document.querySelector(a),g=document.querySelector(r),f=document.querySelector(c),v=window.getComputedStyle(f).width,_=document.querySelector(i);let y=1,p=0;function L(){h.textContent=d.length<10?`0${d.length}`:d.length,g.textContent=d.length<10?`0${y}`:y}d.forEach((e=>{e.style.width=v})),_.style.width=100*d.length+"%",_.style.display="flex",_.style.transition="0.5s all",f.style.overflow="hidden",L(),u.addEventListener("click",(()=>{p==+v.replace(/[^\d.]/g,"")*(d.length-1)?p=0:p+=+v.replace(/[^\d.]/g,""),_.style.transform=`translateX(-${p}px)`,y==d.length?y=1:y++,L(),E()})),l.addEventListener("click",(()=>{0==p?p=+v.replace(/[^\d.]/g,"")*(d.length-1):p-=+v.replace(/[^\d.]/g,""),_.style.transform=`translateX(-${p}px)`,1==y?y=d.length:y--,L(),E()})),m.style.position="relative";const w=document.createElement("ol"),S=[];w.classList.add("carousel-indicators"),m.append(w);for(let e=0;e<d.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),t.style.opacity=0===e?1:.5,w.append(t),S.push(t)}function E(){S.forEach((e=>e.style.opacity=.5)),S[y-1].style.opacity=1}S.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");y=t,p=+v.replace(/[^\d.]/g,"")*(t-1),_.style.transform=`translateX(-${p}px)`,L(),E()}))}))}(),function(o,n){const s=document.querySelectorAll("form");function a(o){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",n);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${o}</div>\n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),s.classList.add("show"),s.classList.remove("hide"),e(".modal")}),4e3)}s.forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let o=document.createElement("img");o.src="img/spinner.svg",o.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",o);const n=new FormData(t);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),a("Спасибо! Скоро мы с вами свяжемся"),o.remove()})).catch((()=>a("Что-то пошло не так..."))).finally((()=>t.reset()))}))}))}(0,o),function(){const e=document.querySelector(".calculating__result span");let t,o,n,s,a;function r(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(){e.textContent=t&&o&&n&&s&&a?"female"===t?Math.round((447.6+9.2*n+3.1*o-4.3*s)*a):Math.round((88.36+13.4*n+4.8*o-5.7*s)*a):"____"}function i(e,o){const n=document.querySelectorAll(e);n.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),n.forEach((e=>{e.classList.remove(o)})),e.target.classList.add(o),c()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":s=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?t=localStorage.getItem("ratio"):localStorage.setItem("ratio",1.375),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}();
//# sourceMappingURL=bundle.js.map