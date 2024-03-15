import React, { Component } from "react";
// import routes from "../../routes";
import { options } from "../../options/fetchOptions.js";
import { Spinner } from "react-bootstrap";

class CarouselClass extends Component {
  constructor(props) {
    super(props);
    const { title, type } = props;

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.divSliders = null; // Dichiaro la variabile di istanza divSliders
    this.activeIndex = 0; // Dichiaro la variabile di istanza activeIndex
  }
  async componentDidMount() {
    await this.fetchMovies();
    this.addEventListeners();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.movies !== this.state.movies) {
      this.addEventListeners();
    }
  }

  // FETCH MOVIE
  async fetchMovies() {
    try {
      const response = await fetch(this.props.type, options);
      const data = await response.json();
      this.setState({ movies: data.results, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  }

  updateIndicators(index) {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    let newActiveIndicator = indicators[index];
    newActiveIndicator.classList.add("active");
  }

  handleMoveLeft = (e) => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6;
    this.divSliders.querySelector(".slider").scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    this.activeIndex = (this.activeIndex - 1) % 3;
    console.log(this.activeIndex);
    this.updateIndicators(this.activeIndex);
  };

  handleMoveRight = (e) => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6;
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);
    console.log(this.divSliders.querySelector(".slider"));
    // se si è nell'ultima pagina
    if (this.activeIndex == 2) {
      this.divSliders.querySelector(".slider").scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      this.activeIndex = 0;
      this.updateIndicators(this.activeIndex);
    } else {
      this.divSliders.querySelector(".slider").scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      this.activeIndex = (this.activeIndex + 1) % 3;
      console.log(this.activeIndex);
      this.updateIndicators(this.activeIndex);
    }
  };

  addEventListeners() {
    this.divSliders = document.querySelector(".test");
    const btnLeft = this.divSliders.querySelector(".moveLeft");
    btnLeft.addEventListener("click", this.handleMoveLeft);

    const btnRight = this.divSliders.querySelector(".moveRight");
    btnRight.addEventListener("click", this.handleMoveRight);
  }

  render() {
    return (
      <>
        <div className="container-fluid carosello">
          <div className="container-indicators">
            <div className="indicator active" data-index="0"></div>
            <div className="indicator" data-index="1"></div>
            <div className="indicator" data-index="2"></div>
          </div>

          <h3 className="text-white mt-2">{this.props.title}</h3>
          {this.state.isLoading ? (
            <Spinner animation="border" variant="danger" />
          ) : (
            <div className="test">
              <button type="button" className="btn-nav moveLeft">
                ᐊ
              </button>
              <button type="button" className="btn-nav moveRight">
                ᐅ
              </button>
              <div className="slider" id="mySlider">
                {this.state.movies.map((movie, i) => (
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
}

export default CarouselClass;
