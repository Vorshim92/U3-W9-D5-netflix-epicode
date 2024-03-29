import React, { useEffect, useState } from "react";
import "./cover.css";
import { urls, options, apiKey } from "../../options/fetchOptions.js";
import { useLocation, useParams } from "react-router-dom";

function Cover() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        let movieUrl = "";

        if (location.pathname === "/") {
          movieUrl = `${urls.fetchTrending}`;
        } else {
          movieUrl = `https://api.themoviedb.org/3/movie/${movieId}${apiKey}`;
        }

        const response = await fetch(movieUrl, options);
        const data = await response.json();

        if (location.pathname === "/") {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          setMovie(data.results[randomIndex]);
        } else {
          setMovie(data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [location, movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ zIndex: 1, position: "relative" }}>
      <div
        className="cover-main"
        style={
          movie && movie.backdrop_path
            ? {
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="cover-contents">
          <h1 className="movie-title">{movie.title || movie.name || movie.original_name}</h1>
          <h3 className="movie-overview">{movie.overview?.length > 200 ? movie.overview.substring(0, 200) + "..." : movie.overview}</h3>

          <div style={{ paddingTop: 8 }}>
            <button className="btn-play">
              <i className="fa fa-play"></i> Play
            </button>

            <button className="btn-more">
              <i className="fa fa-info-circle"></i> More Info
            </button>
          </div>
        </div>
      </div>
      {/* for faded cover effect */}
      <div className="faded-bottom"></div>
    </div>
  );
}

export default Cover;
