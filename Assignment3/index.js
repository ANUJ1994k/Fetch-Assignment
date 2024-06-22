document.getElementById('search-button').addEventListener('click', function() {
    const movieTitle = document.getElementById('movie-title').value;
    fetchMovieData(movieTitle);
});

function fetchMovieData(title) {
    const apiKey = '12f62b87'; //  API key
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&S=${encodeURIComponent(title)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMovieData(data))
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovieData(data) {
    const movieDetails = document.getElementById('movie-details');
    if (data.Response === "True" && data.Search && data.Search.length > 0) {
        const movie = data.Search[0]; // Get the first movie in the search results
        movieDetails.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster}" alt="Movie Poster">
            <p><strong>Type:</strong> ${movie.Type}</p>
        `;
    } else {
        movieDetails.innerHTML = `<p>Movie not found!</p>`;
    }
}
