import React, { useEffect, useState, useRef } from "react";
import { options } from "../../options/fetchOptions.js";
import { Spinner } from "react-bootstrap";

function Carousel(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);
  const testRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(props.type, options);
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [props.type]);

  useEffect(() => {
    if (!isLoading) {
      addEventListeners();
    }
  }, [isLoading]);

  const addEventListeners = () => {
    let activeIndex = 0;
    const sliders = sliderRef.current;
    const divSliders = testRef.current;
    const indexLength = divSliders.querySelectorAll(".movie").length;

    // Scroll Left button
    const btnLeft = divSliders.querySelector(".moveLeft");
    btnLeft.addEventListener("click", function (e) {
      let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
      let scrollDistance = movieWidth * 1;
      // if we're on the last page
      if (activeIndex === 0) {
      } else {
        divSliders.querySelector(".slider").scrollBy({
          top: 0,
          left: -scrollDistance,
          behavior: "smooth",
        });
        activeIndex = activeIndex - 1;
        console.log(activeIndex);
      }
    });
    // Scroll Right button
    const btnRight = divSliders.querySelector(".moveRight");
    btnRight.addEventListener("click", function (e) {
      let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
      let scrollDistance = movieWidth * 1;
      // if we're on the last page
      if (activeIndex === indexLength - 6) {
      } else {
        divSliders.querySelector(".slider").scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        activeIndex = activeIndex + 1;
        console.log(activeIndex);
      }
    });
  };

  return (
    <>
      <div className="container-fluid carosello">
        <h3 className="text-white mt-2">{props.title}</h3>
        {isLoading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <div className="test" ref={testRef}>
            <button type="button" className="btn-nav moveLeft">
              ᐊ
            </button>
            <button type="button" className="btn-nav moveRight">
              ᐅ
            </button>
            <div className="slider" id="mySlider" ref={sliderRef}>
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
        )}
      </div>
    </>
  );
}

export default Carousel;
