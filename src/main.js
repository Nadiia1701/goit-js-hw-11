import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api"
import { renderMurcup } from "./js/render-functions"

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const API_KEY = "42569915-bcd29008899db620988a57306";
const BASE_URL = "https://pixabay.com/api/";
let searchQuery = "";

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
