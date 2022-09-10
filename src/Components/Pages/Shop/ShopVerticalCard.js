import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSuitHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Badges from "../../SharedPages/Badges";
import Rating from "../../SharedPages/Rating";

const ShopVerticalCard = ({ item, handleAddToCartProduct }) => {
  const navigate = useNavigate();
  const [hoveredCart, setHoveredCart] = useState("hidden");
  const [showModal, setShowModal] = useState("");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  const handleAddToCart = (item) => {
    handleAddToCartProduct(item);
    console.log("hello");
    toast.success("Add To Cart", { id: "addToCart" });
  };

  return (
    <>
      <div
        onMouseEnter={showCartHandler}
        onMouseLeave={hideCartHandler}
        className="card max-w-[290px] hover:z-10 w-full mx-auto  shadow border border-gray-300 "
      >
        <div className="relative">
          <div>
            <Link to={`/product-details/${item?._id}`} className="p-0">
              <figure className="m-3 max-w-[280px] border-b border-gray-200  max-h-[251px] overflow-hidden">
                <img
                  className={`rounded w-[280px] h-[252px] duration-300 transition-all ease-in-out  ${
                    hoveredCart === "block" && " scale-110 "
                  }`}
                  src={item?.productImages[0]}
                  alt={item?.productName}
                />
              </figure>
            </Link>
          </div>
          <Badges item={item} className={"rounded-br-2xl absolute top-0"} />
          <div className={`relative flex justify-center ${hoveredCart}`}>
            <div className={`flex absolute bottom-10 `}>
              <Link
                onClick={setShowModal}
                to={`/item-details/${item?._id}`}
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
        <div className="card-body pt-2 pb-5 items-center text-center">
          <div>
            <span className="capitalize opacity-75">By: {item?.productCode}</span>
          </div>
          <Link to={`/product-details/${item?._id}`}>
            <h2 title={item?.productName} className="card-title pb-2 capitalize">
              {item?.productName.length >= 35
                ? `${item?.productName.slice(0, 35)} ...`
                : item?.productName}
            </h2>
          </Link>
          <Rating />
          <span>Unit: {item?.weight && item?.weight[0]?.split(",")[0]}g</span>
          <div className="flex gap-2  items-center pt-">
            <span className="text-lg text-primary capitalize font-semibold">${item?.price}</span>
            {item?.regularPrice && (
              <span className="text-gray-400 line-through capitalize">${item?.regularPrice}</span>
            )}
          </div>
          <div className="card-actions  ">
            <button
              onClick={() => handleAddToCart(item)}
              className="py-2 px-6 rounded-full border-primary btn-animate hover:text-white capitalize border flex items-center gap-2"
            >
              <MdAddShoppingCart /> Add to cart
            </button>
          </div>
          <div>
            <span className="text-error capitalize">
              {item?.quantity ? "in stock" : "stock out"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopVerticalCard;
