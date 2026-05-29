async function fetchMovieDetails() {
    const movieTitle = document.getElementById('movieTitle').value;

    if (!movieTitle) {
        alert('Please enter a movie name!');
        return;
    }

    const apiKey = '569ec41766msh8eb7b3ad0a35c71p1922c3jsne2ba62ff6646'; // Replace with your API key

    const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
    const targetUrl = `https://omdb-api4.p.rapidapi.com/?t=${encodeURIComponent(movieTitle)}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
        },
        mode: 'no-cors', // Set no-cors here
    };

    try {
        const response = await fetch(proxyUrl + targetUrl, options);
        const data = await response.json(); // This may not work with no-cors mode
        if (data.Response === 'True') {
            document.getElementById('movieName').innerText = `${data.Title} (${data.Year})`;
            document.getElementById('movieYear').innerText = `Year: ${data.Year}`;
            document.getElementById('moviePoster').src = data.Poster;
        } else {
            alert('Movie not found!');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching movie details.');
    }
}
