import React, { useContext } from "react";
import { SingleFilterContext } from "../contexts/SingleFilterContext";
import { CategoriesContext } from "../contexts/CategoriesContext";

function SingleFilter() {
  const { categories } = useContext(CategoriesContext);
  const { singleFilter, setSingleFilter } = useContext(SingleFilterContext);

  return (
    <>
      <div key="All" className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          id="All"
          value="All"
          checked={singleFilter === "All"}
          onChange={(e) => setSingleFilter(e.target.value)}
        />
        <label className="form-check-label" htmlFor="All">
          All
        </label>
      </div>
      {categories.map((category) => (
        <div key={category} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id={category}
            value={category}
            checked={singleFilter === category}
            onChange={(e) => setSingleFilter(e.target.value)}
          />
          <label className="form-check-label" htmlFor={category}>
            {category}
          </label>
        </div>
      ))}
    </>
  );
}

export default SingleFilter;
