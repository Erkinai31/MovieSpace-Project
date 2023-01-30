import SkillItem from "./SkillItem";

/* eslint-disable jsx-a11y/img-redundant-alt */
function MovieList({ newProductList}) {
  return (
    <div style={{ color: "black" }} className='movies'>
      <div className="movies_info">
        {newProductList.map((elem) => (
          <div className="movies__card" key={elem.id}>
            <img
              src={elem.large_cover_image}
              width="250"
              height="250"
              className="card-img-top"
              alt="Card image cap"
            />
            <h4 class="card__title">{elem.title}</h4>
            <SkillItem count_stars = {elem.rating}/>
            <div className="card__text">
              <p>{elem.genres.join('/')}</p>
              <p>{elem.year}</p>
              <p>{elem.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
