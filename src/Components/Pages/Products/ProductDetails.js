import React, { useState } from "react";

import { AiOutlinePlus, AiOutlineTwitter } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegHeart } from "react-icons/fa";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import DealsOfTheDay from "../Home/DealsOfTheDay/DealsOfTheDay";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import ProductDescription from "./ProductDescription";
import ProductDetailsImages from "./ProductDetailsImages";
import ProductInformation from "./ProductInformation";
import ProductReviews from "./ProductReviews";
import ProductsDetailsTitle from "./ProductsDetailsTitle";

const ProductDetails = () => {
  const [activeInfo, setActiveInfo] = useState("description");
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery("itemsDetails", () =>
    axiosPrivet.get(`product/product-details/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleOnChange = (data) => {
    const inputValue = data;
    setValue(inputValue);
  };

  const handleDecrease = () => {
    if (value <= 1) {
      return;
    }
    const decreaseValue = value - 1;
    setValue(decreaseValue);
  };

  const handleIncrease = () => {
    const increaseValue = parseInt(value) + 1;
    setValue(increaseValue);
  };

  // handle active info
  const handleActiveInfo = (value) => {
    setActiveInfo(value);
  };

  const handleAddToCart = () => {
    toast.success("Add To Cart", { autoClose: 1000 });
  };

  return (
    <>
      <main>
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        <section className="container mx-auto min-h-screen py-10 px-5 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <ProductDetailsImages data={data?.data} />
            </div>
            <div>
              <ProductsDetailsTitle data={data?.data} />
              <hr className="mt-5 border-gray-300" />
              <div className="flex flex-wrap md:flex-nowrap py-10 gap-5 md:gap-10 lg:gap-5 xl:gap-10 justify-center">
                <div className=" w-36 z-10 relative border-primary border">
                  <div onClick={handleDecrease} className="absolute top-4 left-2 cursor-pointer">
                    <span>
                      <BiMinus className="text-lg" />
                    </span>
                  </div>
                  <div onClick={handleIncrease} className="absolute top-4 right-2 cursor-pointer">
                    <span>
                      <AiOutlinePlus className="text-lg" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleOnChange(e.target.value)}
                    className="focus:outline-none px-10 text-xl text-center h-12 rounded-sm bg-base-100 w-full"
                  />
                </div>
                <div>
                  <button
                    onClick={() => navigate(`/checkout/${id}/?info=${value}`)}
                    className="btn btn-primary rounded-sm text-neutral"
                  >
                    proceed To checkOut
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-primary rounded-sm text-neutral"
                  >
                    add to cart
                  </button>
                </div>
                <div>
                  <button title="Compare" className="btn btn-primary rounded-sm text-neutral">
                    <BsShuffle className="text-xl" />
                  </button>
                </div>
                <div>
                  <button
                    title="Add to wishlist"
                    className="btn btn-primary  rounded-sm text-neutral"
                  >
                    <FaRegHeart className="text-xl" />
                  </button>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="mt-5">
                <div className="pb-[5px]">
                  <span className="font-semibold pr-2">SKU:</span>{" "}
                  <span className="hover:text-primary">{data?.data?.SKU}</span>
                </div>
                <div className="pb-[5px]">
                  <span className="font-semibold pr-2">Tags:</span>{" "}
                  <span>{data?.data?.metaData?.metaKeyword}</span>
                </div>
                <div className="flex items-center gap-5 pt-5">
                  <span className="font-semibold pr-2">Share:</span>
                  <ul className="flex items-center gap-2">
                    <li>
                      <a href="https://facebook.com/">
                        <FaFacebookF className="hover:text-primary opacity-70 hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <AiOutlineTwitter className="hover:text-primary opacity-70 hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedinIn className="hover:text-primary opacity-70 hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <FaPinterestP className="hover:text-primary opacity-70 hover:opacity-100" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* detail  */}
          <div className="mt-20">
            <div className="flex justify-between border-b pt-10  border-gray-200">
              <div className="flex flex-row gap-2 ">
                <h4
                  onClick={() => handleActiveInfo("description")}
                  className={` ${
                    activeInfo === "description"
                      ? "text-[2vw] transition-all ease-linear duration-500 cursor-pointer md:text-lg bg-primary py-2 text-neutral px-4 rounded-t"
                      : " text-[2vw] md:text-lg cursor-pointer hover:bg-primary relative  md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 transition-all ease-in-out duration-500 bg-gray-200 hover:text-neutral px-4 rounded-t"
                  }`}
                >
                  Description
                </h4>
                <h4
                  onClick={() => handleActiveInfo("information")}
                  className={`${
                    activeInfo === "information"
                      ? "text-[2vw] transition-all ease-linear duration-500 cursor-pointer md:text-lg bg-primary py-2 text-neutral px-4 rounded-t"
                      : "text-[2vw] md:text-lg cursor-pointer  hover:bg-primary relative md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 transition-all ease-in-out duration-500  bg-gray-200 hover:text-neutral px-4 rounded-t"
                  }`}
                >
                  Additional information
                </h4>
                <h4
                  onClick={() => handleActiveInfo("reviews")}
                  className={`${
                    activeInfo === "reviews"
                      ? "text-[2vw] cursor-pointer md:text-lg bg-primary py-2 text-neutral px-4 rounded-t transition-all ease-linear duration-500"
                      : "text-[2vw] md:text-lg cursor-pointer  hover:bg-primary relative  md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 transition-all ease-in-out duration-500  bg-gray-200 hover:text-neutral px-4 rounded-t"
                  }`}
                >
                  Reviews
                </h4>
              </div>
            </div>
            <div className="my-10">
              {activeInfo === "description" && <ProductDescription data={data?.data} />}
              {activeInfo === "information" && <ProductInformation data={data?.data} />}
              {activeInfo === "reviews" && <ProductReviews data={data?.data} />}
            </div>
          </div>
        </section>
        {/*------ Deals Of The Day start ------*/}
        <section className="container mx-auto mt-20">
          <div className="lg:mx-0 mx-5">
            <DealsOfTheDay></DealsOfTheDay>
          </div>
        </section>
        {/*------ Deals Of The Day end --------*/}
        {/*------- icons  free online money start----- */}
        <section className="container mx-auto mt-20">
          <div className="lg:mx-0 mx-5">
            <FreeOnlineMoney></FreeOnlineMoney>
          </div>
        </section>
        {/*------- icons  free online money end ------*/}
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default ProductDetails;
