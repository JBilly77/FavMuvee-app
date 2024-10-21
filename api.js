const apiKey = '58960de899ea7aecf0f7972b1e7334e3';
const apiUrl = `https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`;

export async function getMovie(id) {
    try{
        const fetchdata = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(fetchdata);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.error(error);
    }  
}

export async function searchMovies(query) {
    const searchData = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const response = await fetch(searchData);
    const data = await response.json();
    return data.results;
}

// List Management
export async function createList(name, description) {
    const listData = {
        name,
        description,
        language: 'en',
    };
    const response = await fetch(`${apiUrl}/list?api_key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listData),
    });
    const data = await response.json();
    return data;
}

export async function addMovieToList(listId, movieId) {
    const movieData = {
        media_id: movieId,
    };
    const response = await fetch(`${apiUrl}/list/${listId}/add_item?api_key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
    });
    const data = await response.json();
    return data;
}

export async function removeMovieFromList(listId, movieId) {
    const movieData = {
        media_id: movieId,
    };
    console.log(media_id) 
    const response = await fetch(`${apiUrl}/list/${listId}/remove_item?api_key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
    });
    const data = await response.json();
    return data;
   
}
