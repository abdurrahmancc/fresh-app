import React from "react";
import solution from "../../../assets/about-img/solution.png";

const OurPerformance = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-[1320px] lg:mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
          <img src={solution} className="rounded-lg mx-auto shadow-lg" alt="banner" />
          <div className="mx-10 sm:mx-0">
            <span className="text-2xl lg:text-start text-center block  text-gray-500 lg:inline">
              Our performance
            </span>
            <h2 className="lg:text-4xl pt-3 text-3xl font-bold text-center lg:text-start capitalize pb-8">
              Your Partner for e-commerce grocery solution
            </h2>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus tempore
              mollitia! Suscipit, aliquid id possimus dolores odit maiores inventore quam corrupti
              qui itaque perferendis reiciendis soluta est tempora officia laudantium, porro rem,
              facere saepe eligendi dolor voluptatem molestias.
            </p>
            <p className="pb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem pariatur optio
              voluptatem exercitationem, error laborum eaque dolorum velit deleniti in ad voluptates
              praesentium quae debitis accusantium voluptate voluptatum fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPerformance;
