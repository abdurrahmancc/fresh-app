import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import Rating from "../../SharedPages/Rating";

const ShopHorizontalCard = ({ item }) => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  const searchOfferBadges = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const offerBadges = searchOfferBadges.find((n) => item?.productBadges.includes(n));
  return (
    <div
      onMouseEnter={showCartHandler}
      onMouseLeave={hideCartHandler}
      key={item?._id}
      className="card max-w-[290px] md:max-w-full  md:card-side hover:z-10 w-full mx-auto shadow border border-gray-300"
    >
      <div className="flex items-center">
        <div className="w-full">
          <figure
            className={`m-3  md:max-w-[300px] md:border-none border-b border-gray-300 md:w-[300px] md:max-h-[320px] overflow-hidden duration-700 transition-all ease-in-out ${
              hoveredCart === "block" && "rounded-lg"
            }`}
          >
            <Link to={`product-details/${item?._id}`}>
              <img
                className={`md:h-[320px] w-[264px] mx-auto md:w-[300px] rounded-lg h-auto duration-300 transition-all ease-in-out ${
                  hoveredCart === "block" && " scale-110 "
                }`}
                src={item?.productImages[0]}
                alt={item?.productName}
              />
            </Link>
          </figure>
          <div>
            {item?.productBadges.toLowerCase().includes("new") && (
              <span className="absolute px-4 uppercase py-1 top-0 bg-primary rounded-br-2xl inline-block text-neutral">
                {item?.productBadges}
              </span>
            )}
            {item?.productBadges.toLowerCase().includes("hot") && (
              <span className="absolute px-4 uppercase py-1 top-0 bg-error rounded-br-2xl inline-block text-neutral">
                {item?.productBadges}
              </span>
            )}
            {item?.productBadges.toLowerCase().includes("sale") && (
              <span className="absolute px-4 uppercase py-1 top-0 bg-primary rounded-br-2xl inline-block text-neutral">
                {item?.productBadges}
              </span>
            )}
            {item?.productBadges.toLowerCase() === "best" && (
              <span className="absolute px-4 uppercase py-1 top-0 bg-primary rounded-br-2xl inline-block text-neutral">
                {item?.productBadges}
              </span>
            )}
            {offerBadges && (
              <span className="absolute px-4 uppercase py-1 top-0 bg-warning rounded-br-2xl inline-block text-neutral">
                {item?.productBadges}
              </span>
            )}
          </div>
          <div className={`relative flex justify-center ${hoveredCart}`}>
            <div className={`flex absolute bottom-10 `}>
              <Link
                onClick={setShowModal}
                to={`/product-details/${item?._id}`}
                className={
                  "p-2 text-lg text-primary bg-white border hover:bg-primary hover:text-neutral"
                }
              >
                <IoEyeOutline />
              </Link>
              <Link
                to={"/"}
                className={
                  "p-2 text-lg text-primary bg-white border hover:bg-primary hover:text-neutral"
                }
              >
                <TbArrowsRightLeft />
              </Link>
              <Link
                to={"/"}
                className={
                  "p-2 text-lg text-primary bg-white border hover:bg-primary hover:text-neutral"
                }
              >
                <BsSuitHeart className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body md:pl-7 md:pt-3 pt-2 pb-5 items-center md:items-start text-center md:text-start">
        <div>
          <span className="capitalize opacity-75">By: {item?.by}</span>
        </div>
        <h2 className="card-title pb-2 capitalize">
          <Link to={`/product-details/${item?._id}`}>
            {item?.productName.length >= 35
              ? `${item?.productName.slice(0, 35)} ...`
              : item?.productName}
          </Link>
        </h2>
        <div>
          <p className="hidden md:block pb-2">
            {item?.productDescription.length >= 180
              ? `${item?.productDescription.slice(0, 180)} ...`
              : item?.productDescription}
          </p>
        </div>
        <Rating />
        <span>Unit: {item?.weight && item?.weight[0]?.split(",")[0]}g</span>
        <div className="flex gap-2  items-center">
          <span className="text-lg text-primary capitalize font-semibold">${item?.price}</span>
          {item?.regularPrice && (
            <span className="text-gray-400 line-through capitalize">${item?.regularPrice}</span>
          )}
        </div>
        <div className="card-actions  ">
          <button className="py-2 px-6 rounded-full border-primary btn-animate hover:text-white capitalize border flex items-center gap-2">
            <MdAddShoppingCart /> Add to cart
          </button>
        </div>
        <div>
          <span className="text-error capitalize">{item?.quantity ? "in stock" : "stock out"}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHorizontalCard;
