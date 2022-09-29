import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const FeaturesItems = ({ feature }) => {
  const [hoveredCart, setHoveredCart] = useState(false);

  const showCartHandler = () => {
    setHoveredCart(true);
  };

  const hideCartHandler = () => {
    setHoveredCart(false);
  };
  return (
    <>
      <div
        onMouseEnter={showCartHandler}
        onMouseLeave={hideCartHandler}
        className="card mb-1 bg-base-100 shadow border border-gray-200 hover:border-primary transition duration-300 ease-linear"
      >
        <figure className="px-10 pt-7">
          <img src={feature?.img} alt={feature?.name} className="rounded-xl" />
        </figure>
        <div className="card-body pt-3 pb-5 items-center text-center">
          <h2
            className={`card-title transition duration-300 ease-linear text-lg lg:text-xl md:text-[15px] capitalize ${
              hoveredCart && "text-primary"
            }`}
          >
            {feature?.name}
          </h2>
          <p className="lg:text-[15px] text-[12px] ">{feature?.quantity} items</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesItems;
