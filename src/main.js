import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api.js"
import { renderMurcup } from "./js/render-functions.js"

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");

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
