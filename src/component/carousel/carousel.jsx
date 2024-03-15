import React, { useEffect, useState } from "react";
// import routes from "../../routes";
import { options } from "../../options/fetchOptions.js";

function Carousel({ title, type }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(type, options);
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovie();
  }, []);

  return (
    <>
      <div className="container-fluid carosello">
        <div className="container-indicators d-none">
          <div className="indicator active" data-index="0"></div>
          <div className="indicator" data-index="1"></div>
          <div className="indicator" data-index="2"></div>
        </div>

        <h3 className="text-white mt-2">{title}</h3>
        <div className="test">
          <button type="button" className="btn-nav moveLeft">
            ᐊ
          </button>
          <button type="button" className="btn-nav moveRight">
            ᐅ
          </button>
          <div className="slider" id="mySlider">
            {movies.map((movie, i) => (
              <div className="movie" id="trending" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <div className="description">
                  <div className="description__buttons-container">
                    <div className="description__button">
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="description__button">
                      <i className="fas fa-plus"></i>
                    </div>
                    <div className="description__button">
                      <i className="fas fa-thumbs-up"></i>
                    </div>
                    <div className="description__button">
                      <i className="fas fa-thumbs-down"></i>
                    </div>
                    <div className="description__button">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="description__text-container">
                    <span className="description__match">97% Match</span>
                    <span className="description__rating">TV-14</span>
                    <span className="description__length">2h 11m</span>
                    <br />
                    <br />
                    <span>Explosive</span>
                    <span>&middot;</span>
                    <span>Exciting</span>
                    <span>&middot;</span>
                    <span>Family</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
