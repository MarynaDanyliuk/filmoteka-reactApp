// export const getAllMovies = store => store.movies;
export const getAllMovies = ({ movies }) => movies.items;

export const getFilteredMovies = ({ movies, filter }) => {
  if (!filter) {
    return movies.items;
  }
  const filterNormalize = filter.toLowerCase();

  const filterList = movies.items.filter(movie => {
    return movie.title.toLowerCase().includes(filterNormalize);
  });
  return filterList;
};
