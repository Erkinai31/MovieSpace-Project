import Header from 'components/Header/Header';
import MovieList from 'components/Movies/MovieList';
import React, { useEffect, useState } from 'react';
import { FilterMovies } from '../Filter/FilterMovies'; // Make sure to provide the correct import path
import "./MainSpace.css";

const MainSpace = () => {
  const [films, setFilms] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All"); // Default to "All" genres

  useEffect(() => {
    let url = "https://yts.mx/api/v2/list_movies.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilms(data.data.movies));
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredProductList = films.filter((product) => {
    if (selectedGenre === "All") {
      return true; // Show all movies when "All" is selected
    } else {
      return product.genres.includes(selectedGenre);
    }
  });

  return (
    <div className="movies">
      <div className="movies_content">
        <Header />
        <FilterMovies filterValueSelected={handleGenreChange} />
        <MovieList newProductList={filteredProductList} />
      </div>
    </div>
  );
};

export default MainSpace;
