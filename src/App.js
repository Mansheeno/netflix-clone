import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import { endpoints } from "./api/tmdb";

function App() {
  return (
    <div className="App">
      <Navbar />               {/* Your navbar */}
      <Banner />               {/* Top banner */}
      
      {/* Rows */}
      <Row title="Trending" path={endpoints.trending} />
      <Row title="Top Rated" path={endpoints.topRated} />
      <Row title="Action" path={endpoints.action} />
      <Row title="Comedy" path={endpoints.comedy} />
      <Row title="Horror" path={endpoints.horror} />
      <Row title="Romance" path={endpoints.romance} />
      <Row title="Documentaries" path={endpoints.documentaries} />
    </div>
  );
}

export default App;
