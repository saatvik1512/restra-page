(()=>{"use strict";function e(){const e=document.createElement("div");return e.setAttribute("class","mainDiv"),e.classList.add("active"),e.innerHTML="<h1>This is page 1</h1>",e}const t=document.querySelector("#content"),n=document.querySelectorAll("ul li a"),i=[e(),function(){const e=document.createElement("div");return e.setAttribute("class","mainDiv"),e.innerHTML="<h1>THis is page 2</h1>",e}(),function(){const e=document.createElement("div");return e.setAttribute("class","mainDiv"),e.innerHTML="<h1>THis is page 3</h1>",e}()];t.appendChild(e()),n.forEach((e=>e.addEventListener("click",(()=>{t.removeChild(document.querySelector(".mainDiv")),t.appendChild(i[e.dataset.number]),i[e.dataset.number].classList.add("active")}))))})();