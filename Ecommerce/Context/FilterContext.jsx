import React, { children } from "react";
import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(""); // Seçilen kategoriyi tutmak için state
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Seçilen kategoriyi güncelle
  };
  return (
    <FilterContext.Provider value={{ selectedCategory, handleCategorySelect }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
