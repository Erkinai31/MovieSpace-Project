import { useEffect, useState } from "react";
import { FilterMovies } from "../Movies/FilterMovies";
import "./MainSpace.css";
import MovieList from "../Movies/MovieList";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import {useDispatch} from 'react-redux'
import {removeUser} from 'store/slice/userSlice'

function MainSpace() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const navigate = useNavigate();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    let url = "https://yts.mx/api/v2/list_movies.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilms(data.data.movies));
  }, []);

  const [filterText, setFilterText] = useState("all");

  const filteredProductList = films.filter((product) => {
    if (filterText === "all") {
      return product;
    } else {
      return product.genres.includes(filterText);
    }
  });


  function onFilterValueSelected(filterValue) {
    setFilterText(filterValue);
  }

  return isAuth ? (
    <div className="movies">
      <div className="movies_content">
        <div className="movies__filtration">
          <FilterMovies filterValueSelected={onFilterValueSelected} />
          <button onClick={() => dispatch(removeUser())} class="btn btn-info">
            Log out from {email}
          </button>
        </div>
        <MovieList
          newProductList={filteredProductList}
        />
      </div>
    </div>
  ) : (
    navigate('/')
  )
}

export default MainSpace;
