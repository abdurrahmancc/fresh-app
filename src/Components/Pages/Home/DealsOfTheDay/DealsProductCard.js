import React, { useState } from "react";
import Rating from "../../../SharedPages/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import Badges from "../../../SharedPages/Badges";
import useAddCartProduct from "../../../Hooks/useAddCartProduct";
import useAddCompareProduct from "../../../Hooks/useAddCompareProduct";
import useAddWishlistProduct from "../../../Hooks/useAddWishlistProduct";
import QuickVIewProductModal from "../../../SharedPages/Modals/QuickVIewProductModal";

const DealsProducts = ({ product }) => {
  const [hoveredCart, setHoveredCart] = useState("hidden");
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
        className="card hover:border ease-in-out transition duration-500 product-card-shadow hover:border-primary md:max-w-[14.25rem] max-w-[16.9rem] bg-base-100 shadow border"
      >
        <div>
          <Link to={`/product-details/${product?._id}`} className="p-0">
            <figure className="m-3 md:max-w-[12.75rem] max-w-[280px] max-h-[251px] border-b border-gray-200 md:max-h-[12.75rem] overflow-hidden">
              <img
                className={`rounded duration-[1s] transition-all ease-linear w-full ${
                  hoveredCart === "block" && " scale-110 "
                }`}
                src={product?.productImages && product?.productImages[0]}
                alt={product?.productName}
              />
            </figure>
          </Link>
        </div>
        {product?.productBadges && (
          <Badges item={product} className={"rounded-br-2xl rounded-tl-2xl absolute top-0"} />
        )}
        <div
          className={`relative duration-300 transition-all ease-in-out flex justify-center  ${
            hoveredCart === "block" ? "scale-110" : "scale-0"
          }`}
        >
          <div className={`flex gap-1 absolute bottom-10 `}>
            {/* quick view product */}

            <button
              className={
                "duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
              }
            >
              {/* <!-- The button to open modal --> */}
              <label htmlFor="quick-view-product" className="p-2 block">
                <IoEyeOutline />
              </label>
            </button>

            <Link
              onClick={() => handleAddToCompareList(product)}
              to="/shop-compare"
              className={
                "p-2 duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
              }
            >
              <TbArrowsRightLeft />
            </Link>
            <button
              onClick={() => handleAddToWishlist(product)}
              className={
                "p-2 duration-300 transition-all ease-linear text-lg text-primary bg-[#F2F2F2] hover:bg-primary hover:text-neutral"
              }
            >
              <BsSuitHeart />
            </button>
          </div>
        </div>
        <div className="card-body px-5 pb-5 pt-0 items-center text-center">
          <div className="mb-[-3px]">
            <span className="capitalize text-xs">By: {product?.brand}</span>
          </div>
          <Link to={`/product-details/${product?._id}`}>
            <h2 className="card-title text-[16px] leading-5 capitalize">{product?.productName}</h2>
          </Link>
          <div className="flex items-center gap-1">
            <Rating />
            <span className="text-sm">(5.0)</span>
          </div>
          <div className="flex gap-1  items-center">
            <span className="text-lg text-primary capitalize font-semibold">${product?.price}</span>
            <span className="text-gray-400 block mt-1 text-sm line-through capitalize">
              ${product?.regularPrice}
            </span>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(product)}
              className="py-2 px-6 rounded-full border-primary text-sm btn-animate font-semibold hover:text-white capitalize border flex items-center gap-1"
            >
              <MdAddShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
      <QuickVIewProductModal product={product} />
    </>
  );
};

export default DealsProducts;
