import "./App.css";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import { urls } from "./options/fetchOptions.js";
import CarouselClass from "./component/carousel/carousel-nohook";
import CoverClass from "./component/cover/cover-nohook";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <CoverClass></CoverClass>
        <CarouselClass title={"Trending Now"} type={urls.fetchTrending}></CarouselClass>
        <CarouselClass title={"Top Rated"} type={urls.fetchTopRated}></CarouselClass>
        <CarouselClass title={"Popular"} type={urls.fetchPopular}></CarouselClass>
        <CarouselClass title={"TV Shows"} type={urls.fetchTVShows}></CarouselClass>
        <CarouselClass title={"Comedy"} type={urls.fetchComedy}></CarouselClass>
        <CarouselClass title={"Action"} type={urls.fetchAction}></CarouselClass>
        <CarouselClass title={"Documentaries"} type={urls.fetchDocumentaries}></CarouselClass>
        <CarouselClass title={"Horror"} type={urls.fetchHorror}></CarouselClass>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
