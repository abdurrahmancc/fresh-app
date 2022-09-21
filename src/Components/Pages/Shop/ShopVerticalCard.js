import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import Badges from "../../SharedPages/Badges";
import QuickVIewProductModal from "../../SharedPages/Modals/QuickVIewProductModal";
import Rating from "../../SharedPages/Rating";

const ShopVerticalCard = ({
  item,
  handleAddToCartProduct,
  handleAddToWishlistProduct,
  handleAddToCompareProduct,
}) => {
  const [hoveredCart, setHoveredCart] = useState("hidden");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  const handleAddToCart = (item) => {
    handleAddToCartProduct(item);
  };

  const handleAddToWishlist = (item) => {
    handleAddToWishlistProduct(item);
  };

  const handleAddToCompareList = (item) => {
    handleAddToCompareProduct(item);
  };

  return (
    <>
      <div
        onMouseEnter={showCartHandler}
        onMouseLeave={hideCartHandler}
        className="card hover:border ease-in-out transition duration-500 product-card-shadow hover:border-primary md:max-w-[14.25rem] max-w-[16.9rem] bg-base-100 shadow border"
      >
        <div className="relative">
          <div>
            <Link to={`/product-details/${item?._id}`} className="p-0">
              <figure className="m-3 md:max-w-[12.75rem] max-w-[280px] max-h-[251px] border-b border-gray-200 md:max-h-[12.75rem] overflow-hidden">
                <img
                  className={`rounded duration-[1s] transition-all ease-linear w-full ${
                    hoveredCart === "block" && " scale-110 "
                  }`}
                  src={item?.productImages && item?.productImages[0]}
                  alt={item?.productName}
                />
              </figure>
            </Link>
          </div>
          {item?.productBadges && (
            <Badges item={item} className={"rounded-br-2xl rounded-tl-2xl absolute top-0"} />
          )}
          {/*----------- compare wishlist quick view ------------*/}
          <div
            className={`relative duration-300 transition-all ease-in-out flex justify-center  ${
              hoveredCart === "block" ? "scale-110" : "scale-0"
            }`}
          >
            <div className={`flex gap-1 absolute bottom-10`}>
              <button
                className={
                  "duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
                }
              >
                <label htmlFor="quick-view-product" className="p-2 block">
                  <IoEyeOutline />
                </label>
              </button>
              <Link
                onClick={() => handleAddToCompareList(item)}
                to="/shop-compare"
                className={
                  "p-2 duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
                }
              >
                <TbArrowsRightLeft />
              </Link>
              <button
                onClick={() => handleAddToWishlist(item)}
                className={
                  "p-2 duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
                }
              >
                <BsSuitHeart />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body px-5 pb-5 pt-0 items-center text-center">
          <div className="mb-[-3px]">
            <span className="capitalize text-xs">By: {item?.brand}</span>
          </div>
          <Link to={`/product-details/${item?._id}`}>
            <h2 title={item?.productName} className="card-title text-[16px] leading-5 capitalize">
              {item?.productName.length >= 35
                ? `${item?.productName.slice(0, 35)} ...`
                : item?.productName}
            </h2>
          </Link>
          <div className="flex items-center gap-1">
            <Rating />
            <span className="text-sm">(5.0)</span>
          </div>
          <div className="flex gap-1  items-center">
            <span className="text-lg text-primary capitalize font-semibold">${item?.price}</span>
            <span className="text-gray-400 block mt-1 text-sm line-through capitalize">
              ${item?.regularPrice}
            </span>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="py-2 px-6 rounded-full border-primary text-sm btn-animate font-semibold hover:text-white capitalize border flex items-center gap-1"
            >
              <MdAddShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
      <QuickVIewProductModal product={item} />
    </>
  );
};

export default ShopVerticalCard;
