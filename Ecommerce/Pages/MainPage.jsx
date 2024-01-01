import React from "react";
import PopulerProdutcs from "../Components/PopulerProducts/PopulerProdutcs";
import Slider from "../Components/Slider/Slider";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Slider />
      <PopulerProdutcs />
      <Footer />
      <NewsLetter />
    </div>
  );
};

export default MainPage;
