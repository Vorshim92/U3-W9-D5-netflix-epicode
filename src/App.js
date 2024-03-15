import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Carousel from "./component/carousel/carousel";
import Cover from "./component/cover";
import { urls } from "./options/fetchOptions.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Cover></Cover>
        <Carousel title={"Trending Now"} type={urls.fetchTrending}></Carousel>
        <Carousel title={"Top Rated"} type={urls.fetchTopRated}></Carousel>
        <Carousel title={"Popular"} type={urls.fetchPopular}></Carousel>
        <Carousel title={"TV Shows"} type={urls.fetchTVShows}></Carousel>
        <Carousel title={"Comedy"} type={urls.fetchComedy}></Carousel>
        <Carousel title={"Action"} type={urls.fetchAction}></Carousel>
        <Carousel title={"Documentaries"} type={urls.fetchDocumentaries}></Carousel>
        <Carousel title={"Horror"} type={urls.fetchHorror}></Carousel>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
