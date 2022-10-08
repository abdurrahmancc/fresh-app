import React from "react";
import about9 from "../../../assets/about-img/about-9.png";
import about10 from "../../../assets/about-img/about-10.png";
import about11 from "../../../assets/about-img/about-11.png";

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-[#f4f1ed]">
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-10">
            <h2 className="lg:text-4xl text-3xl font-bold text-center capitalize pb-3">
              Why Choose Us
            </h2>
            <p className="text-center text-[16px] px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, neque ut!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-10">
            <div className="max-w-[26.3rem]">
              <figure className="w-full">
                <img
                  src={about10}
                  className="rounded-lg hover:top-[-4px] relative top-0 ease-in-out duration-500"
                  alt="user_photo"
                />
              </figure>
              <div className="card-body  pt-5 p-0 w-full items-center text-center">
                <h2 className="card-title capitalize">Who We Are</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas ab eaque
                  hic, aperiam animi rem laudantium placeat dolores!
                </p>
              </div>
            </div>
            <div className="max-w-[26.3rem] ">
              <figure className="w-full">
                <img
                  src={about9}
                  className="rounded-lg hover:top-[-4px] relative top-0 ease-in-out duration-500"
                  alt="user_photo"
                />
              </figure>
              <div className="card-body pt-5 p-0 w-full items-center text-center">
                <h2 className="card-title capitalize">How We Work</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas ab eaque
                  hic, aperiam animi rem laudantium placeat dolores!
                </p>
              </div>
            </div>
            <div className="max-w-[26.3rem] ">
              <figure className="w-full">
                <img
                  src={about11}
                  className=" rounded-lg hover:top-[-4px] relative top-0 ease-in-out duration-500"
                  alt="user_photo"
                />
              </figure>

              <div className="card-body pt-5 p-0 w-full items-center text-center">
                <h2 className="card-title capitalize">Our Products</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas ab eaque
                  hic, aperiam animi rem laudantium placeat dolores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
