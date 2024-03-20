import React, { useEffect, useState } from "react";
import "./cover.css";
import { urls, options, apiKey } from "../../options/fetchOptions.js";

function Cover() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(urls.fetchTrending, options);
        const data = await response.json();
        console.log(data);
        console.log(data.results[Math.floor(Math.random() * data.results.length)]);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovie();
  }, []);

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
