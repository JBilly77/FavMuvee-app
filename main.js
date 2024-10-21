import { getMovie, searchMovies, createList, addMovieToList, removeMovieFromList } from './api.js';
import { createMovieCard } from './movie.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieGallery = document.getElementById('movie-gallery');
const createListButton = document.getElementById('create-list-button');
const listManagement = document.getElementById('list-management');

let query = '';
let listId = '';


searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (query) {
        const movies = await searchMovies(query);
        movieGallery.innerHTML = '';
        movies.forEach((movie) => {
            const movieCard = createMovieCard(movie);
            movieGallery.appendChild(movieCard);
        });
    }
});

createListButton.addEventListener('click', async () => {
    const listName = prompt('Enter the name of your list:');
    const listDescription = prompt('Enter the description of your list:');
    const listData = await createList(listName, listDescription);
    listId = listData.id;
    listManagement.innerHTML = `List ID: ${listId}`;
});

movieGallery.addEventListener('click', async (e) => {
    if (e.target.classList.contains('movie-card')) {
        const movieId = e.target.dataset.movieId;
        if (listId) {
            const action = confirm(`Add/remove movie ${movieId} from list ${listId}?`);
            if (action) {
                await addMovieToList(listId, movieId);
                alert(`Movie ${movieId} added to list ${listId}`);
            } else {
                await removeMovieFromList(listId, movieId);
                alert(`Movie ${movieId} removed from list ${listId}`);
            }
        }
    }
});

async function displayMovies() {
    const movies = await searchMovies(query, currentPage);
    movieGallery.innerHTML = '';
    movies.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        movieCard.dataset.movieId = movie.id;
        movieGallery.appendChild(movieCard);
    });
}

//Get a movie by ID (default )
getMovie(11).then((movie) => {
    const movieCard = createMovieCard(movie);
    movieCard.dataset.movieId = movie.id;
    movieGallery.appendChild(movieCard);
});