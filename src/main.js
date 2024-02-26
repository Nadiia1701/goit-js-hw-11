import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import { fetchData } from "./js/pixabay-api.js"
// import { renderMurcup } from "./js/render-functions.js"

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
const API_KEY = "42569915-bcd29008899db620988a57306";
const BASE_URL = "https://pixabay.com/api/";
const loader = document.querySelector(".loader");
let searchQuery = "";

function fetchData(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
    
  loader.style.display = "block";

  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK!");
      }
      return response.json();
    })
    .then((data) => {
      
      loader.style.display = "none";

      if (data.hits.length === 0) {
        iziToast.error({
          fontSize: "large",
          close: false,
          position: "topRight",
          messageColor: "white",
          timeout: 2000,
          backgroundColor: "red",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      }
      return data;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function renderMurcup(data) {
  const murcup = data.hits
    .map(
      (element) => `<div class="gallery-item">
      <a class="gallery-link" href="${element.largeImageURL}">
          <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}">
      </a>
      <div class="gallery-image-info">
          <p class="image-info-item"><span class="image-items-text">Likes: </span>${element.likes}</p>
          <p class="image-info-item"><span class="image-items-text">Views: </span>${element.views}</p>
          <p class="image-info-item"><span class="image-items-text">Comments: </span>${element.comments}</p>
          <p class="image-info-item"><span class="image-items-text">Downloads: </span>${element.downloads}</p>
      </div>
  </div>`
    )
    .join("");

  container.innerHTML = murcup;

  lightbox.refresh();
}

const lightbox = new SimpleLightbox(".gallery-link", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  container.innerHTML = "";
  searchQuery = form.elements.searchQuery.value.trim();
  fetchData(searchQuery).then((data) => renderMurcup(data));
}
