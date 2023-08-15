import React, { useEffect, useState } from 'react';
import './Movie.css';
import { useParams, useNavigate } from 'react-router-dom';
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

  const handleWatchNowClick = () => {
    if (movieDetails.yt_trailer_code && movieDetails.yt_trailer_code !== "") {
      // Open the video in a new tab
      window.open(`https://www.youtube.com/watch?v=${movieDetails.yt_trailer_code}`);
    }
  };
  
  return (
    <div className="movie">
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Go Back
      </button>
      <div className="movie__info">
        <div className="movie__text">
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.year}</p>
          <p> {movieDetails.genres.join('/')}</p>
          <p className="movie_summary">{movieDetails.description_intro}</p>
        </div>
        <div>
          <img
            src={movieDetails.large_cover_image}
            width="300px"
            height="420px"
            className="card-img-top"
            alt="Card image cap"
          />
          <p>
            <SkillItem count_stars={movieDetails.rating} />
          </p>
          {movieDetails.yt_trailer_code && movieDetails.yt_trailer_code !== "" ? (
            <button className="btn btn-primary" onClick={handleWatchNowClick}>
              Watch Trailer
            </button>
          ) : (
            <p>The video does not exist.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;
