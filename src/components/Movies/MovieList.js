
import {Link} from 'react-router-dom';

/* eslint-disable jsx-a11y/img-redundant-alt */
function MovieList({ newProductList}) {
  return (
    <div style={{ color: "black" }} className='movies__list'>
      <div className="movies_info">
        {newProductList.map((elem) => (
            <div className="movies__card" key={elem.id}>
            <img
              src={elem.large_cover_image}
              width="250"
              height="330"
              className="card-img-top"
              alt="Card image cap"
            />
            <div className="card__text">
                
              <p>{elem.year}</p> 
              <p>Rating: {elem.rating}</p>
              <p class="genres">
                
              {elem.genres && elem.genres.length > 0 && (
                  <p>{elem.genres.join('/').slice(0,25)}</p>
                )}
              </p>
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
