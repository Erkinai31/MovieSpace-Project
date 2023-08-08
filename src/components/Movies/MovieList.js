import SkillItem from "./SkillItem";
import {Link} from 'react-router-dom';

/* eslint-disable jsx-a11y/img-redundant-alt */
function MovieList({ newProductList}) {
  return (
    <div style={{ color: "black" }} className='movies'>
      <div className="movies_info">
        {newProductList.map((elem) => (
         
            <div className="movies__card" key={elem.id}>
            <img
              src={elem.large_cover_image}
              width="200"
              height="300"
              className="card-img-top"
              alt="Card image cap"
            />
            <div className="card__text">
                {elem.genres && elem.genres.length > 0 && (
                  <p>Genre: {elem.genres.join('/')}</p>
                )}
              <p>Year: {elem.year}</p> 
              <p>Rating: {elem.rating}</p>
              <Link to={`/movie/${elem.id}`}>
              <button class='btn btn-success'>Details</button> 
              </Link>
            </div>
            <h4 class="card__title">{elem.title}</h4>
          </div>
         
          
        ))}
      </div>
    </div>
  );
}

export default MovieList;
