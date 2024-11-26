import React, { createContext, useState } from "react";

export const SingleFilterContext = createContext();

function SingleFilterProvider({ children }) {
  const [singleFilter, setSingleFilter] = useState("");
  return (
    <SingleFilterContext.Provider value={{ singleFilter, setSingleFilter }}>
      {children}
    </SingleFilterContext.Provider>
  );
}

export default SingleFilterProvider;
