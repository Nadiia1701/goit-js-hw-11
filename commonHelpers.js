import{S as u,i as p}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const l=document.querySelector("#searchForm"),m=document.querySelector(".gallery"),f="42569915-bcd29008899db620988a57306",d="https://pixabay.com/api/",n=document.querySelector(".loader");let c="";function g(o){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.style.display="block",fetch(`${d}?${s}`).then(e=>{if(!e.ok)throw new Error("Network response was not OK!");return e.json()}).then(e=>(n.style.display="none",e.hits.length===0&&p.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),e)).catch(e=>console.error("Error fetching data:",e))}function h(o){const s=o.hits.map(e=>`<div class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="gallery-image-info">
          <p class="image-info-item"><span class="image-items-text">Likes: </span>${e.likes}</p>
          <p class="image-info-item"><span class="image-items-text">Views: </span>${e.views}</p>
          <p class="image-info-item"><span class="image-items-text">Comments: </span>${e.comments}</p>
          <p class="image-info-item"><span class="image-items-text">Downloads: </span>${e.downloads}</p>
      </div>
  </div>`).join("");m.innerHTML=s,y.refresh()}const y=new u(".gallery-link",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",L);function L(o){o.preventDefault(),m.innerHTML="",c=l.elements.searchQuery.value.trim(),g(c).then(s=>h(s))}
//# sourceMappingURL=commonHelpers.js.map
