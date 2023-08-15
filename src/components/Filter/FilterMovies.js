import React from "react";

export const FilterMovies = (props) => {
  return (
    <div className="filter_area">
      <select
        name="isAvailable"
        onChange={(event) => props.filterValueSelected(event.target.value)}
        className="form-control"
        id="exampleFormControlSelect1"
      >
        <option value="All">All</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
      </select>
    </div>
  );
};
