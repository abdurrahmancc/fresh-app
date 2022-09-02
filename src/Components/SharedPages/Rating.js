import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = () => {
  return (
    <div className="rating rating-xs ">
      <span className="text-orange-400">
        <BsStarFill />
      </span>
      <span className="text-orange-400">
        <BsStarFill />
      </span>
      <span className="text-orange-400">
        <BsStarFill />
      </span>
      <span className="text-orange-400">
        <BsStarFill />
      </span>
      <span className="text-orange-400">
        <BsStarHalf />
      </span>
    </div>
  );
};

export default Rating;
