import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api.js";
import { renderMurcup } from "./js/render-functions.js";

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery-link", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  container.innerHTML = "";
  const searchQuery = form.elements.searchQuery.value.trim();
  console.log("Submitting form with query:", searchQuery);
  fetchData(searchQuery, loader)
    .then((data) => {
      console.log("Data fetched successfully:", data);
      renderMurcup(data, lightbox); // Передача lightbox
    })
    .catch((error) => console.error("Error fetching data:", error));
}
