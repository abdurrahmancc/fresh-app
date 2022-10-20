import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const Rating = () => {
  const rating = {
    size: 20,
    edit: false,
    activeColor: "#ffb33e",
    value: 5,
  };
  return (
    <div className="my-[-8px]">
      <ReactStars {...rating} />
    </div>
  );
};

export default Rating;
