import React from "react";
import BannerSlider from "./BannerSlider";

const Home = () => {
  return (
    <main>
      {/*------- Banner Slider section start -------*/}
      <section className="container mx-auto mt-8 ">
        <div className="lg:ml-[320px] ">
          <BannerSlider />
        </div>
      </section>
      {/*------- Banner Slider section start -------*/}
    </main>
  );
};

export default Home;
