import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import Card from "./Card";
//  467a3784
const UrlApi = "http://www.omdbapi.com?apikey=467a3784";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const search = async (title) => {
    const response = await fetch(`${UrlApi}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  //useEffect(() => {
  //  search("Superman");
  //}, []);

  return (
    <div className="app">
      <h1>MovieHome</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              search(title);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            search(title);
          }}
        />
      </div>
      {movies !== undefined ? (
        <div className="container">
          {movies.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">Movies Not Found</div>
      )}
    </div>
  );
};

export default App;
