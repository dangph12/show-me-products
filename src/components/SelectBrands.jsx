import React, { useContext, useEffect } from "react";
import { BrandsContext } from "../contexts/BrandsContext";

function SelectBrands() {
  const { brands, selectedBrands, handleSelectBrands } =
    useContext(BrandsContext);

  useEffect(() => {
    console.log("Brands: ",brands);
    console.log("Selected brands: ", selectedBrands);
  }, [brands, selectedBrands]);

  return (
    <div>
      <h4>Brands</h4>
      <div className="d-flex flex-wrap">
        {brands.map((brand) => (
          <div key={brand.id}>
            <input
              type="checkbox"
              id={brand.id}
              checked={!!selectedBrands[brand.id]}
              onChange={(e) => handleSelectBrands(e.target.id)}
            />
            <label htmlFor={brand.id}>{brand.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectBrands;
