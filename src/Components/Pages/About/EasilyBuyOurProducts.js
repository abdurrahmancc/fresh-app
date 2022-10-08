import React from "react";
import product from "../../../assets/about-img/product-img.png";
import happy from "../../../assets/about-img/happy-img.png";
import location from "../../../assets/about-img/location-img.png";

const EasilyBuyOurProducts = () => {
  return (
    <div className="py-20 bg-[#f4f1ed]">
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto">
          <div className="pb-10">
            <h2 className="lg:text-4xl text-3xl font-bold text-center capitalize pb-3">
              Easily Buy Our Products
            </h2>
            <p className="text-center text-[16px] px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, neque ut!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-20">
            <div className="card max-w-[26.3rem] rounded-lg ">
              <figure>
                <img src={location} className="w-20 mx-auto" alt="address-icon" />
              </figure>
              <h3 className="text-xl font-bold  py-3 capitalize text-center">Address Details</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid id
                excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
              </p>
            </div>
            <div className="card max-w-[26.3rem] rounded-lg ">
              <figure>
                <img src={product} className="w-20 mx-auto " alt="products-icon" />
              </figure>
              <h3 className="text-xl font-bold  capitalize text-center py-3">Choose product</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid id
                excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
              </p>
            </div>
            <div className="card max-w-[26.3rem] rounded-lg ">
              <figure>
                <img src={happy} className="w-20 mx-auto" alt="enjoy-icon" />
              </figure>
              <h3 className="text-xl font-bold  capitalize text-center py-3">enjoy products</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid id
                excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasilyBuyOurProducts;
