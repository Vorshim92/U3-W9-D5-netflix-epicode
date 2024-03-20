const apiKey = "?api_key=9c6c0ebcbe914a2e6d930de1e29d1e9f";
const url = "https://api.themoviedb.org/3";
const urls = {
  movieQuery: `${url}/movie/`,
  search: `${url}/search/movie?query=`,
  fetchTrending: `${url}/trending/all/week${apiKey}`,
  fetchTopRated: `${url}/movie/top_rated${apiKey}`,
  fetchPopular: `${url}/movie/popular${apiKey}`,
  fetchTVShows: `${url}/tv/popular${apiKey}`,

  fetchComedy: `${url}/discover/movie${apiKey}&with_genres=35`,
  fetchAction: `${url}/discover/movie${apiKey}&with_genres=28`,
  fetchDocumentaries: `${url}/discover/movie${apiKey}&with_genres=99`,
  fetchHorror: `${url}/discover/movie${apiKey}&with_genres=27`,
};
const options = {
  method: "GET",
};
export { urls, options, apiKey };
