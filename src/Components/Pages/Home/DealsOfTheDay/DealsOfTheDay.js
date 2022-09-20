import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CashewNuts from "../../../../assets/products_img/CashewNuts.png";
import driedFishPacket from "../../../../assets/products_img/driedFishPacket.png";
import dryShrimp from "../../../../assets/products_img/dryShrimp.png";
import greenPeasPacket from "../../../../assets/products_img/greenPeasPacket.png";
import naturalNuts from "../../../../assets/products_img/naturalNuts.png";
import sideBanner from "../../../../assets/banner_img/side-banner-1.png";
import DealsProducts from "./DealsProductCard";
import "./dealsOfTheDay.css";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../../SharedPages/Loading";

const DealsOfTheDay = () => {
  const [category, setCategory] = useState("grocery&Frozen");
  const { data, isLoading, refetch } = useQuery(
    ["deals-Products", category],
    async () => await axiosPrivet.get(`product/home/products/${category}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  let products = data?.data?.result ? data?.data?.result : "";
  if (products) {
    products.length = 5;
  }

  const handleGetProducts = (data) => {
    setCategory(data);
    refetch();
  };

  return (
    <div className="">
      <div className="flex justify-between  border-b">
        <h3 className="md:text-2xl text-lg  capitalize font-bold ">Deals Of The Day</h3>
        <div className="flex items-center md:gap-20 sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => handleGetProducts("grocery&Frozen")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "grocery&Frozen" &&
                "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              top products
            </li>
            <li
              onClick={() => handleGetProducts("oil&Vinegars")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "oil&Vinegars" &&
                "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              incredible price
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
          <div className="lg:col-span-1 hidden lg:block">
            <div className="lg:flex xl:flex-none lg:flex-col gap-y-10">
              <img
                src={sideBanner}
                className={
                  "lg:h-[24.18rem] overflow-hidden xl:h-[25.31rem] rounded-xl w-full deals-of-the-day-banner"
                }
                alt="deals of the days banner"
              />
              <img
                src={sideBanner}
                className={
                  "lg:h-[24.18rem] xl:hidden overflow-hidden xl:h-[25.31rem] rounded-xl w-full deals-of-the-day-banner"
                }
                alt="best selling banner"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid xl:grid-cols-5  md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10">
              {products &&
                products.map((product) => <DealsProducts key={product?._id} product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
