"use strict";(()=>{window.Webflow=window.Webflow||[];window.Webflow.push(async()=>{let t=document.querySelectorAll('a[href="#book-demo"]'),e=document.querySelector('[verified-demo-element="modal"]');if(!t.length||!e)return;let n=e.querySelectorAll('[verified-demo-element="close-button"]');if(!n.length)return;t.forEach(o=>{o.setAttribute("href","#"),o.addEventListener("click",()=>{l()})});function l(){n.forEach(o=>{o.addEventListener("click",()=>{c()})}),e.classList.add("is-active")}function c(){e.classList.remove("is-active")}});})();
