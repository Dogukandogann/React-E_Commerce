import React from "react";
import "./Sort.css";
const Sort = () => {
  return (
    <div class="custom-select">
      <select>
        <option value="">Sırala</option>
        <option value="priceAsc">Fiyata Göre (Artan)</option>
        <option value="priceDesc">Fiyata Göre (Azalan)</option>
        <option value="nameAsc">İsme Göre (A'dan Z'ye)</option>
        <option value="nameDesc">İsme Göre (Z'den A'ya)</option>
      </select>
    </div>
  );
};

export default Sort;
