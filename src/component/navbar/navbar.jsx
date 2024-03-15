import React, { useEffect, useState } from "react";
import * as icons from "react-bootstrap-icons";
// import { useNavigate } from "react-router-dom";
import routes from "../../routes";

function Navbar({ selectedProfile }) {
  //   const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //   const navigateToProfile = () => {
  //     navigate(routes.profile);
  //   };

  return (
    <>
      <header className={`${offset > 30 && `after-scroll`}`}>
        <nav className="navbar navbar-dark navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./assets/imgs/netflix_logo.png" alt="" width="100px" />
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" aria-current="page">
                    Home <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 collapse collapse-horizontal" type="search" placeholder="Search" aria-label="Search" id="collapseWidthExample" />
                <button
                  className="btn btn-outline-secondary border border-dark"
                  type="submit"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  <icons.Search />
                </button>
              </form>
            </div>

            <div className="row align-items-center">
              <div className="col-6 position-relative">
                <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <icons.Search className="p-3" />
                </a>
                <span className="position-absolute top-0 p-1 bg-warning border border-light rounded-circle" style={{ right: "20px" }}></span>
                <div className="dropdown-menu dropdown-menu-end">
                  <p className="dropdown-item">Non hai nuove notifiche</p>
                </div>
              </div>
              <div className="col-6 position-relative">
                <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <img className="avatar rounded-5" src="./assets/imgs/avatar.png" alt="" />
                </a>
                <span className="position-absolute bottom-0 p-2 bg-danger border border-light rounded-circle" style={{ right: "10px" }}></span>
                <div className="dropdown-menu dropdown-menu-end bg-dark">
                  <a className="dropdown-item text-white" href="./profile.html">
                    Profile Settings
                  </a>
                  <a className="dropdown-item text-white" href="#tab3Id">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-white" href="#tab4Id">
                    Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
