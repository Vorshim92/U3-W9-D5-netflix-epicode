import "./App.css";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import { urls } from "./options/fetchOptions.js";
import Carousel from "./component/carousel/carousel";
import Cover from "./component/cover/cover";
import EditProfile from "./component/profiles/editProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route
              path="/edit-profile"
              element={
                <>
                  <EditProfile></EditProfile>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Cover></Cover>
                  <Carousel title={"Trending Now"} type={urls.fetchTrending}></Carousel>
                  <Carousel title={"Top Rated"} type={urls.fetchTopRated}></Carousel>
                  <Carousel title={"Popular"} type={urls.fetchPopular}></Carousel>
                  <Carousel title={"TV Shows"} type={urls.fetchTVShows}></Carousel>
                  <Carousel title={"Comedy"} type={urls.fetchComedy}></Carousel>
                  <Carousel title={"Action"} type={urls.fetchAction}></Carousel>
                  <Carousel title={"Documentaries"} type={urls.fetchDocumentaries}></Carousel>
                  <Carousel title={"Horror"} type={urls.fetchHorror}></Carousel>
                </>
              }
            />
            <Route
              path="/tv-shows"
              element={
                <>
                  <Carousel title={"TV Shows"} type={urls.fetchTVShows}></Carousel>
                </>
              }
            />
            <Route path="/movie/:movieId" element={<Cover></Cover>} />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
