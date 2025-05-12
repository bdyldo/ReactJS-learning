import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    // Allows for dynamically updating a component
    const [searchQuery, setSearchQuery] = useState("")

  const movies = [
    { id: 1, title: "The Matrix", release_date: "2020" },
    { id: 1, title: "The Matrix", release_date: "2020" },
    { id: 1, title: "The Matrix", release_date: "2020" },
  ];

  const handleSearch = () => {
    
  };

  return (
    <div classname="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}

          // when the input box is changed, we use setSearchQuery function to update the searchquery value defined to this input box and set it to the typed value
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
