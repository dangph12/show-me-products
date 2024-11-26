import React, { createContext, useState } from "react";

export const MultiFiltersContext = createContext();

function MultiFiltersProvider({ children }) {
  const [multiFilters, setMultiFilters] = useState([]);
  return (
    <MultiFiltersContext.Provider value={{ multiFilters, setMultiFilters }}>
      {children}
    </MultiFiltersContext.Provider>
  );
}

export default MultiFiltersProvider;
