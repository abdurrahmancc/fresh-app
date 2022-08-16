import React from "react";
import BannerSlider from "./BannerSlider";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto mt-8 ">
        <div className="ml-[320px] ">
          <BannerSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
