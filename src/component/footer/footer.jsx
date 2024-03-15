import routes from "../../routes";

function Footer() {
  return (
    <>
      <div className="container-md mt-5 py-5">
        <div>
          <span className="fs-5 footer-color">
            <i className="fab fa-facebook-square icons-btn px-1 fs-2"></i>
            <i className="fab fa-twitter-square icons-btn px-1 fs-2"></i>
            <i className="fab fa-instagram-square icons-btn px-1 fs-2"></i>
            <i className="fab fa-youtube-square icons-btn px-1 fs-2"></i>
          </span>
        </div>
        <div className="row footer-color mb-5">
          <div className="col-3">
            <p>Audio and subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div className="col-3">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className="col-3">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="col-3">
            <p>Gift Cards</p>
            <p>Term of use</p>
            <p>Corporate information</p>
          </div>
          <div>
            <a className="footerbtn">Service Code</a>
          </div>
          <div className="my-5">
            <p>&COPY 1997-2024 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
