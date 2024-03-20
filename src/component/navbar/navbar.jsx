import React, { useEffect, useState } from "react";
import * as icons from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";

function Navbar() {
  const location = useLocation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${location.pathname === "/" && offset > 30 ? "header-class after-scroll" : location.pathname === "/" ? "header-class" : "after-scroll"}`}>
        <nav className="navbar navbar-dark navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./assets/imgs/netflix_logo.png" alt="" width="100px" />
            </a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tv-shows">
                    TV Shows
                  </Link>
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
              <div className="searchbar div_box_research">
                <input id="searchBar" type="text" className="box_research" placeholder={location.pathname === "/tv-shows" ? "Cerca una serie TV..." : "Cerca un film..."} />
                <icons.Search className="search-icon" />
              </div>
            </div>

            <Row className="align-items-center">
              <Col xs={6} className="position-relative">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <icons.BellFill className="search-icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Item>Non hai nuove notifiche</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <span className="position-absolute top-0 p-1 bg-warning border border-light rounded-circle" style={{ right: "20px" }}></span>
              </Col>

              <Col xs={6} className="position-relative">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <img className="avatar rounded-5" src="./assets/imgs/avatar.png" alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end">
                    <Dropdown.Item>
                      <Link className="nav-link" to="/edit-profile">
                        Profile Settings
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#tab3Id">Another action</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#tab4Id">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <span className="position-absolute bottom-0 p-2 bg-danger border border-light rounded-circle" style={{ right: "25px" }}></span>
              </Col>
            </Row>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
