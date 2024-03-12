const apiKey = '7a7240cf6dd5bcd8e720ad026793d848'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const movieContainer = document.getElementById("moviecontainer")
const titleElement = document.getElementById('title');
const detailsElement = document.getElementById('details');
const productionElement = document.getElementById('production');
let movieData = []

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.results)
    movieData = data.results
    
    for (let i = 0; i < movieData.length; i++) {
      const movieId = movieData[i].id;
      movieContainer.innerHTML += `<div data-movie-id="${movieId}">
        <img src="https://image.tmdb.org/t/p/w500${movieData[i].poster_path}" alt="">
      </div>`;

      // Set title, rating, country, and production details for each movie
      titleElement.textContent = movieData[i].title;

      detailsElement.innerHTML = `<img src="icon.png" alt="Rating Icon" class="icon"/> Rating: ${movieData[i].vote_average}`;
      
      // Check if production_countries property exists before using map
      if (movieData[i].production_countries && movieData[i].production_countries.length > 0) {
        detailsElement.innerHTML += `<br/>Country: ${movieData[i].production_countries.map(country => country.name).join(', ')}`;
      }

      // Check if production_companies property exists before using map
      if (movieData[i].production_companies && movieData[i].production_companies.length > 0) {
        productionElement.textContent = `Production: ${movieData[i].production_companies.map(company => company.name).join(', ')}`;
      }
    }                                                       

    console.log(movieContainer);
  })
  .catch((error) => {
    console.log(error)
  });

movieContainer.addEventListener("click", (event) => {
  const movieId = event.target.closest('div').dataset.movieId;
  location.href = `moviesid.html?id=${movieId}`;
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// const movieData = data.results;
// const movieContainer = document.getElementById('movie-container');

// for (let i = 0; i < movieData.length; i++) {
//   const movieItem = document.createElement('div');
//   movieItem.classList.add('col-md-4'); // Adjust the column size based on your design
//   movieItem.innerHTML = `
//     <img src="https://image.tmdb.org/t/p/w500${movieData[i].poster_path}" alt="" class="img-fluid">
//   `;
//   movieContainer.appendChild(movieItem);
// }

