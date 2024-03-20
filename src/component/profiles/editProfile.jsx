import React from "react";

function EditProfile() {
  return (
    <main>
      <div className="container-xs text-white mx-auto my-5" style={{ width: "50%" }}>
        <div className="border-bottom solid border-secondary">
          <h1>Edit Profile</h1>
        </div>
        <div className="row py-4">
          <div className="col-2">
            <div className="position-relative">
              <img src="./assets/imgs/avatar.png" alt="" width="100%" className="position-relative" />
              <i className="fas fa-pencil-alt rounded-circle bg-dark border border-white shadow p-1 position-absolute bottom-0 start-0"></i>
            </div>
          </div>
          <div className="col-10">
            <div className="row pb-4 border-bottom solid border-secondary">
              <div className="col-12 bg-secondary py-2 mb-3">Strive Student</div>
              <div className="col-12 text-secondary">
                <h4>Language:</h4>
              </div>
              <div className="col-12">
                <button className="border border-gray bg-black text-white px-3">
                  <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {" "}
                      English{" "}
                    </a>
                    <ul className="dropdown-menu mycolormenudrop bg-dark">
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Spanish
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Polish
                        </a>
                      </li>
                    </ul>
                  </li>
                </button>
              </div>
            </div>
            <div className="row mb-4 border-bottom solid pt-4 pb-5 border-secondary">
              <div className="col-12 text-secondary">
                <h4>Maturity Settings:</h4>
              </div>
              <div className="col-6 bg-secondary mb-2">ALL MATURITY RATINGS</div>
              <div className="col-6"></div>
              <div className="col-12">
                <p className="pb-2">Show titles of all maturity ratings for this profile</p>
              </div>
              <div className="col-12">
                <a href="">
                  <button className="btnEditProfile">EDIT</button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="col-12 mycustomtext1">
                  <h4>Autoplay controls</h4>
                </div>
                <div className="form-check">
                  <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {" "}
                    Autoplay next episode in a series on all devices{" "}
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {" "}
                    Autoplay previews whilte browsing on all devices{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center border-top solid pt-4 pb-5 border-secondary">
          <div className="col-4">
            <a href="./index.html">
              <button className="btnEditProfile">SAVE</button>
            </a>
          </div>
          <div className="col-4">
            <a href="./index.html">
              <button className="btnEditProfile">CANCEL</button>
            </a>
          </div>
          <div className="col-4">
            <a href="./index.html">
              <button className="btnEditProfile">DELETE PROFILE</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditProfile;
