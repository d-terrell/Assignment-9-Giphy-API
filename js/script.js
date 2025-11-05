console.log("script.js loaded");

let endpoint = ("https://api.giphy.com/v1/gifs/search?api_key=1TlONf8RYUKT0YLDiIncBEzmCpX7sKlG&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(endpoint);

const gifContainer = document.querySelector("#gif-container");

const button = document.querySelector("#fetch-gif-btn");

async function getDogImage() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);

    console.log(images);


for (let i = 0; i < images.length; i++) {
    gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
  }
}

button.addEventListener("click", getDogImage);