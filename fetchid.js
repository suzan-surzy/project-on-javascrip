
const idItem = new URLSearchParams(location.search)
const blogId = idItem.get("id")
fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
  .then((response) =>{
  return response.json()
})
.then((data) => {
  console.log(data);
  const post = document.getElementById('post');
  post.innerHTML = `<h3>${data.title}</h3>
  <p>${data.body}</p>`;
})
.catch((error) => {
  console.error('Error fetching data:', error);
});
    //  console.log(lotion)


     // fetch('https://jsonplaceholder.typicode.com/posts/55')
//   .then((response) =>{
//   return response.json()
// })
// .then((post) =>{
//      console.log(post)
//      })
// .catch((error) => {
//     console.log(error)
// })  

 
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


  
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'Put',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'delete',
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// Assuming you have the following variables populated with data
// const title = movieData.title;
// const releaseDate = movieData.release_date;
// const synopsis = movieData.overview;
// const cast = movieData.credits.cast.map(actor => actor.name).join(', ');
// const imdbRating = movieData.vote_average;
// const posterPath = imagesData.posters[0].file_path;

// // Create an article element
// const article = document.createElement('article');

// // Create an image element
// const posterImage = document.createElement('img');

// // Set the image source to the poster path
// posterImage.src = `https://image.tmdb.org/t/p/w500${posterPath}`; // Assuming TMDB image path

// // Append the image to the article
// article.appendChild(posterImage);

// // Create HTML content for the article using movie details
// article.innerHTML += `
//   <h2>${title}</h2>
//   <p><strong>Release Date:</strong> ${releaseDate}</p>
//   <p><strong>Synopsis:</strong> ${synopsis}</p>
//   <p><strong>Cast:</strong> ${cast}</p>
//   <p><strong>IMDb Rating:</strong> ${imdbRating}</p>
// `;

// // Append the article to the container1 div
// const container1 = document.getElementById('container1');
// container1.appendChild(article);

// const apiKey = '7a7240cf6dd5bcd8e720ad026793d848';

// const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

// Make a GET request to the API
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(movieData => {
//     // Extract relevant information from the API response
//     const title = movieData.title;
//     const releaseDate = movieData.release_date;
//     const synopsis = movieData.overview;
//     const cast = movieData.credits.cast.map(actor => actor.name).join(', ');
//     const imdbRating = movieData.vote_average;

//     // Create an article template
//     const article = `
//       # Movie Review: ${title}

//       Released on: ${releaseDate}

//       ## Synopsis
//       ${synopsis}

//       ## Cast
//       ${cast}

//       ## Ratings
//       - IMDb: ${imdbRating}
//     `;

//     // Now you can use the 'article' variable wherever you want in your application
//     console.log(article);
//   })
//   .catch(error => console.error('Error fetching movie data:', error));





  // popular movie

//   const apiKey = 'your_api_key';
// const movieId = 123; // Replace with the desired movie ID

// // Fetch movie details
// const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
// const imagesUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;

// // Make a GET request to the API for movie details
// fetch(movieDetailsUrl)
//   .then(response => response.json())
//   .then(movieData => {
//     const title = movieData.title;
//     const releaseDate = movieData.release_date;
//     const synopsis = movieData.overview;
//     const cast = movieData.credits.cast.map(actor => actor.name).join(', ');
//     const imdbRating = movieData.vote_average;

//     // Make a GET request to the API for movie images
//     fetch(imagesUrl)
//       .then(response => response.json())
//       .then(imagesData => {
//         // Extract poster path for the main movie image
//         const posterPath = imagesData.posters[0].file_path;

//         // Create an article template with the movie image
//         const article = `
//           # Movie Review: ${title}

//           Released on: ${releaseDate}

//           ![${title} Poster](https://image.tmdb.org/t/p/w500/${posterPath})

//           ## Synopsis
//           ${synopsis}

//           ## Cast
//           ${cast}

//           ## Ratings
//           - IMDb: ${imdbRating}
//         `;

//         // Now you can use the 'article' variable wherever you want in your application
//         console.log(article);
//       })
//       .catch(error => console.error('Error fetching movie images:', error));
//   })
//   .catch(error => console.error('Error fetching movie details:', error));





//   // another code

//   // ...

// // Create an article template with the movie image
// const article = `
// # Movie Review: ${title}

// Released on: ${releaseDate}

// [![${title} Poster](https://image.tmdb.org/t/p/w500/${posterPath})](movieDetails.html)

// ## Synopsis
// ${synopsis}

// ## Cast
// ${cast}

// ## Ratings
// - IMDb: ${imdbRating}
// `;

// // ...




// // live domo
// // script.js

// const apiKey = 'your_api_key';
// const movieId = 550; // Example Movie ID (Inception)

// const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
// const imagesUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;

// // Fetch movie details
// fetch(movieDetailsUrl)
//   .then(response => response.json())
//   .then(movieData => {
//     const title = movieData.title;
//     const releaseDate = movieData.release_date;
//     const synopsis = movieData.overview;
//     const cast = movieData.credits.cast.map(actor => actor.name).join(', ');
//     const imdbRating = movieData.vote_average;

//     // Fetch movie images
//     fetch(imagesUrl)
//       .then(response => response.json())
//       .then(imagesData => {
//         const posterPath = imagesData.posters[0].file_path;

//         // Create an article template with the movie image
//         const article = `
//           <h1>${title}</h1>
//           <p>Released on: ${releaseDate}</p>
//           <img src="https://image.tmdb.org/t/p/w500/${posterPath}" alt="${title} Poster">
//           <h2>Synopsis</h2>
//           <p>${synopsis}</p>
//           <h2>Cast</h2>
//           <p>${cast}</p>
//           <h2>Ratings</h2>
//           <p>IMDb: ${imdbRating}</p>
//           <p><a href="movieDetails.html">View More Details</a></p>
//         `;

//         // Add the article to the HTML
//         document.getElementById('container1').innerHTML = article;
//       })
//       .catch(error => console.error('Error fetching movie images:', error));
//   })
//   .catch(error => console.error('Error fetching movie details:', error));
