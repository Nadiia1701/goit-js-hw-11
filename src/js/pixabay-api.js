export function fetchData(searchQuery) {
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