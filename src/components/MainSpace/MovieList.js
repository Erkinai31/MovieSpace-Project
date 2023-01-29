/* eslint-disable jsx-a11y/img-redundant-alt */
function MovieList({ newProductList}) {
  return (
    <div style={{ color: "black" }} className='body-content'>
      <div className="films_info">
        {newProductList.map((elem) => (
          <div className="card" key={elem.id}>
            <img
              src={elem.large_cover_image}
              width="250"
              height="250"
              className="card-img-top"
              alt="Card image cap"
            />
            <h4 class="card-title">{elem.title}</h4>
            <div className="card-text">
              <p>{elem.genres.join('/')}</p>
              <p>{elem.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
