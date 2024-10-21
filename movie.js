export function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieCard.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = movie.title;
    movieCard.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = movie.overview;
    movieCard.appendChild(p);

    return movieCard;
}