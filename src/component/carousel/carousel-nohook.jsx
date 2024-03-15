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
  }
  async componentDidMount() {
    await this.fetchMovies();
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
