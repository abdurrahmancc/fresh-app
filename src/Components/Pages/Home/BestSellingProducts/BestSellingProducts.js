import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import sideBanner from "../../../../assets/banner_img/side-banner-6.png";
import "./BestSellingProducts.css";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../../SharedPages/Loading";
import BestSellingProduct from "./BestSellingProductCard";

const BestSellingProducts = () => {
  const [category, setCategory] = useState("grocery&Frozen");

  const { data, isLoading, refetch } = useQuery(
    ["best-selling-products", category],
    async () => await axiosPrivet.get(`product/home/products/${category}?limit=5`)
  );

  if (isLoading) {
    return <Loading />;
  }

  let products = data?.data?.result ? data?.data?.result : "";

  const handleGetProducts = (data) => {
    setCategory(data);
    refetch();
  };

  return (
    <div>
      <div className="flex justify-between  border-b">
        <h3 className="md:text-2xl text-lg capitalize font-bold">Best selling products</h3>
        <div className="flex items-center md:gap-20 sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => handleGetProducts("snacksItem")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "snacksItem"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              recent
            </li>
            <li
              onClick={() => handleGetProducts("grocery&Frozen")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "grocery&Frozen"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              popular
            </li>
            <li
              onClick={() => handleGetProducts("milkCream")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "milkCream"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              featured
            </li>
          </ul>
          <Link
            to={"/shop"}
            className="flex items-center gap-2 text-lg text-primary pb-3 font-semibold capitalize"
          >
            view All <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="lg:grid lg:grid-cols-5 best-Selling-products gap-10 ">
          <div className="lg:col-span-4">
            <div className="grid xl:grid-cols-5  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10">
              {products &&
                products.map((product) => (
                  <BestSellingProduct key={product?._id} product={product} />
                ))}
            </div>
          </div>
          <div className="lg:col-span-1 hidden lg:block">
            <div className="lg:flex xl:flex-none lg:flex-col gap-y-10">
              <img
                src={sideBanner}
                className={
                  "lg:h-[24.18rem] overflow-hidden xl:h-[25.31rem] rounded-xl w-full deals-of-the-day-banner"
                }
                alt="best selling banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
