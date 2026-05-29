fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log("Full API Response:", data);  // Log the full API response for debugging
    const movieContainer = document.getElementById('movie-container');
    
    // Extract movies from all genre arrays
    const genres = ['genre1', 'genre2', 'genre3'];
    let allMovies = [];

    genres.forEach(genre => {
      console.log(`${genre} data:`, data[genre]);  // Log each genre data
      if (data[genre] && data[genre].edges) {
        allMovies = allMovies.concat(data[genre].edges);
      }
    });

    if (allMovies.length > 0) {
      allMovies.forEach(item => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = item.node.title;

        const movieImage = document.createElement('img');
        if (item.node.image && item.node.image.url) {
          movieImage.src = item.node.image.url;
        } else {
          movieImage.alt = 'No poster available';
        }

        movieItem.appendChild(movieImage);
        movieItem.appendChild(movieTitle);
        movieContainer.appendChild(movieItem);
      });
    } else {
      movieContainer.textContent = 'No movies found.';
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
