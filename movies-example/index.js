class Movies {
  constructor() {
    this.apiKey = "b89fc45c2067cbd33560270639722eae";
    this.base_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
  }

  async getMovies() {
    const data = await fetch(this.base_URL);
    const movies = await data.json();
    return movies.results;
  }

  async getTopMoviesId(n = 3) {
    const data = await this.getMovies();
    const topMovies = data.slice(0, n).map((movie) => movie.id);
    return topMovies;
  }

  async getMovieById(id) {
    const urlById = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
    const data = await fetch(urlById);
    const movie = await data.json();
    return movie;
  }
}

const movies = new Movies();

function renderMovies(movies) {
  const moviesContainer = document.querySelector(".movies-container");
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const newChild = document.createElement("div");
    newChild.innerHTML = `
  <div class="movie">
    <h3>${movie.title}</h3>
    <img
      src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
      alt="poster"
    />
    <div>${movie.release_date}</div>
  </div>`;
    moviesContainer.appendChild(newChild);
  });
}

document.getElementById("sequence").addEventListener("click", async () => {
  const topMoviesIds = await movies.getTopMoviesId();
  let arrayOfMovies = [];
  for (id of topMoviesIds) {
    const movie = await movies.getMovieById(id);
    arrayOfMovies.push(movie);
  }

  renderMovies(arrayOfMovies);
});

document.getElementById("at-the-time").addEventListener("click", async () => {
  const topMoviesIds = await movies.getTopMoviesId();
  const promisesOfMovies = topMoviesIds.map((id) => movies.getMovieById(id));
  const readyMovies = await Promise.all(promisesOfMovies);

  renderMovies(readyMovies);
});

document.getElementById("race").addEventListener("click", async () => {
  const topMoviesIds = await movies.getTopMoviesId();
  const promisesOfMovies = topMoviesIds.map((id) => movies.getMovieById(id));
  const firstMovie = await Promise.race(promisesOfMovies);

  renderMovies([firstMovie]);
});
