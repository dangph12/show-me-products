import React, { useContext, useEffect } from "react";
import { MultiFiltersContext } from "../contexts/MultiFiltersContext";
import { CategoriesContext } from "../contexts/CategoriesContext";

function MultiFilters() {
  const { categories } = useContext(CategoriesContext);
  const { multiFilters, setMultiFilters } = useContext(MultiFiltersContext);

  useEffect(() => {
    if (multiFilters.length === 0) {
      setMultiFilters(categories);
    }
  }, [categories, multiFilters, setMultiFilters]);

  const handleMultiFilters = (category) => {
    if (multiFilters.includes(category)) {
      setMultiFilters(multiFilters.filter((filter) => filter !== category));
    } else {
      setMultiFilters([...multiFilters, category]);
    }
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="category"
            id={category}
            value={category}
            checked={multiFilters.includes(category)}
            onChange={(e) => handleMultiFilters(e.target.value)}
          />
          <label className="form-check-label" htmlFor={category}>
            {category}
          </label>
        </div>
      ))}
    </>
  );
}

export default MultiFilters;
