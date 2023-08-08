import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useParams, useNavigate} from 'react-router-dom';
import SkillItem from 'components/Movies/SkillItem';

function Movie() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((data) => setMovieDetails(data.data.movie))
        .catch((error) => console.error(error));
    }, [id]);
  
    if (!movieDetails) {
        return <div>Loading...</div>;
    }
  
    return (
        <div class="movie">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div class="movie__info">
        <img 
            src={movieDetails.large_cover_image}
             width='400px'
             height='500px'
              className="card-img-top"
              alt="Card image cap"/>
              <div class="movie__text">
                <h1>{movieDetails.title}</h1>
        <p>Genre: {movieDetails.genres.join('/')}</p>
        <p>Year: {movieDetails.year}</p>
        <p>Rating: {movieDetails.rating}</p>
        <SkillItem count_stars = {movieDetails.rating}/>
              </div>
        
      </div> 
        </div>
     
    );
  }
  
  export default Movie;
  
