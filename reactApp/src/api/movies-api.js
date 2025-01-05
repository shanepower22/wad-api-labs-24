export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5c2007ed7b9e534f6a8774597e923478&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };