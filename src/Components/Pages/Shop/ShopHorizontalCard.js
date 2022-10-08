import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import Badges from "../../SharedPages/Badges";
import Rating from "../../SharedPages/Rating";
import useAddCartProduct from "../../Hooks/useAddCartProduct";
import useAddCompareProduct from "../../Hooks/useAddCompareProduct";
import useAddWishlistProduct from "../../Hooks/useAddWishlistProduct";
import QuickVIewProductModal from "../../SharedPages/Modals/QuickVIewProductModal";

const ShopHorizontalCard = ({ item }) => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [handleAddToCartProduct] = useAddCartProduct();
  const [handleAddToWishlistProduct] = useAddWishlistProduct();
  const [handleAddToCompareProduct] = useAddCompareProduct();

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
        key={item?._id}
        className="card max-w-[290px] md:max-w-full  md:card-side hover:z-10 w-full hover:border-primary ease-in-out transition duration-500 mx-auto shadow border border-gray-300"
      >
        <div className="flex items-center">
          <div className="w-full">
            <figure
              className={`m-3  md:max-w-[300px] md:border-none border-b border-gray-300 md:w-[300px] md:max-h-[320px] overflow-hidden duration-700 transition-all ease-in-out ${
                hoveredCart === "block" ? "rounded-lg" : ""
              }`}
            >
              <Link to={`product-details/${item?._id}`}>
                <img
                  className={`md:h-[320px] w-[264px] mx-auto md:w-[300px] rounded-lg h-auto duration-300 transition-all ease-linear ${
                    hoveredCart === "block" ? "scale-110" : ""
                  }`}
                  src={item?.productImages[0]}
                  alt={item?.productName}
                />
              </Link>
            </figure>
            {item?.productBadges && (
              <Badges item={item} className={"rounded-br-2xl rounded-tl-2xl absolute top-0"} />
            )}
            <div
              className={`relative w-full  duration-300 transition-all ease-in-out flex justify-center ${
                hoveredCart === "block" ? "scale-110" : "scale-0"
              }`}
            >
              <div className={`flex absolute gap-1 bottom-10 `}>
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
                  <BsSuitHeart className="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body md:pl-7 md:pt-3 pt-2 pb-5 items-center md:items-start justify-center text-center md:text-start">
          <div>
            <span className="capitalize opacity-75">By: {item?.by}</span>
          </div>
          <h2 className="card-title capitalize">
            <Link to={`/product-details/${item?._id}`}>
              {item?.productName.length >= 35
                ? `${item?.productName.slice(0, 35)} ...`
                : item?.productName}
            </Link>
          </h2>
          <div>
            <p className="hidden md:block pb-1">
              {item?.productDescription.length >= 180
                ? `${item?.productDescription.slice(0, 180)} ...`
                : item?.productDescription}
            </p>
          </div>
          <div className="pb-1">
            <Rating />
          </div>
          <span>
            Unit:{" "}
            <span className="text-primary">{item?.weight && item?.weight[0]?.split(",")[0]}g</span>
          </span>
          <div className="flex gap-2  items-center">
            <span className="text-lg text-primary capitalize font-semibold">${item?.price}</span>
            {item?.regularPrice && (
              <span className="text-gray-400 line-through capitalize">${item?.regularPrice}</span>
            )}
          </div>
          <div className="card-actions pt-1 ">
            <button
              onClick={() => handleAddToCart(item)}
              className="py-2 px-6 rounded-full border-primary btn-animate font-semibold hover:text-white capitalize border flex items-center gap-2"
            >
              <MdAddShoppingCart /> Add to cart
            </button>
          </div>
          {/* <div>
          <span className="text-error capitalize">
            {item?.stockStatus && item?.stockStatus.includes("in stock")
              ? item?.stockStatus
              : "out stock"}
          </span>
        </div> */}
        </div>
      </div>
      <QuickVIewProductModal product={item} />
    </>
  );
};

export default ShopHorizontalCard;
