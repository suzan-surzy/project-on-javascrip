const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get('id')

const apiKey = '7a7240cf6dd5bcd8e720ad026793d848';

const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

const trailers = document.getElementById("datacontainer") 
console.log('movieid',movieId)
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    
          trailers.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
        <h2>${data.title}</h2>
        <p>Release Date: ${data.release_date}</p>
        <p>Genres: ${data.genres.length > 0 ? data.genres[0].name : 'N/A'}</p>
        <p>${data.overview}</p>
        <p>crew: ${data.popularity}</p>
        <p>Rating: ${data.vote_average}</p>`

  })
  .catch(error => {
    console.error('Error fetching data:', error);
    trailers.innerHTML = '<p>Error fetching movie details</p>';
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }
  
  // /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // }


// // fetch(url)

// // .then((response)=>{
// //   return response.json()
// // })
// // .then((data) => {
// //    console.log('Movie Details:', data)

// //    const trailer = data.video.results.filter(data=>video.type==="trailer")
// //   //  for(i = 0, i >)
// // })
// // .catch(error => {
// //     // Handle errors
// //     console.error('Error:', error);
// //   });


