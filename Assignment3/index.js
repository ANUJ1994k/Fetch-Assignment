document.getElementById('search-button').addEventListener('click', searchMovie);

async function searchMovie() {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=12f62b87&}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovie(data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

function displayMovie(movie) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear previous movie data

    if (movie.Response === "False") {
        movieContainer.innerHTML = '<p>Movie not found!</p>';
        return;
    }

    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    const poster = document.createElement('img');
    poster.src = movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg';
    poster.alt = movie.Title;

    const title = document.createElement('h3');
    title.textContent = `${movie.Title} (${movie.Year})`;

    const plot = document.createElement('p');
    plot.textContent = movie.Plot;

    movieCard.appendChild(poster);
    movieCard.appendChild(title);
    movieCard.appendChild(plot);

    movieContainer.appendChild(movieCard);
}
