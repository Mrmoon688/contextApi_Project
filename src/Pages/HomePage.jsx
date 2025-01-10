import React from "react";
import MainNavBarsection from "../Components/MainNavBarsection";
import HomeSlider from "../Components/HomeSlider";

const HomePage = () => {
  return (
    <MainNavBarsection>
      <div className="container mt-5 w-full h-screen">
        <div className="w-full h-[350px]">
          <HomeSlider />
        </div>
      </div>
    </MainNavBarsection>
  );
};

export default HomePage;
