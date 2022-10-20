import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ProductsOfYourChoiceCard from "./ProductsOfYourChoiceCard";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../../SharedPages/Loading";

const ProductsOfYourChoice = () => {
  const [category, setCategory] = useState("all");
  const { data, isLoading, refetch } = useQuery(
    ["deals-Products", category],
    async () => await axiosPrivet.get(`product/home/products/${category}?limit=12`)
  );

  if (isLoading) {
    return <Loading />;
  }

  let products = data?.data?.result ? data?.data?.result : "";

  if (products && products.length > 12) {
    products.length = 12;
  }

  const handleGetProducts = (data) => {
    setCategory(data);
    refetch();
  };
  return (
    <div>
      <div className="flex justify-between  border-b">
        <h3 className="md:text-2xl text-lg capitalize font-bold">Products of your choice</h3>
        <div className="flex items-center xl:gap-20  sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => handleGetProducts("all")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden px-3 font-semibold capitalize cursor-pointer pb-3 ${
                category === "all" ? "text-primary border-primary  border-b-2 activeProducts" : ""
              }`}
            >
              all
            </li>
            <li
              onClick={() => handleGetProducts("bread&Bakery")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "bread&Bakery"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              Bakery & Pastry
            </li>
            <li
              onClick={() => handleGetProducts("freshMeat")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "freshMeat"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              Meat & fish
            </li>
            <li
              onClick={() => handleGetProducts("freshVegetable")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "freshVegetable"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              vegetables
            </li>
            <li
              onClick={() => handleGetProducts("freshFruits")}
              className={`text-lg hover:text-primary duration-200 transition-all ease-linear lg:block hidden font-semibold capitalize cursor-pointer pb-3 ${
                category === "freshFruits"
                  ? "text-primary border-primary  border-b-2 activeProducts"
                  : ""
              }`}
            >
              Fruits & juices
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
      <div className="mt-5 w-full mx-auto">
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10">
          {products &&
            products.map((product) => (
              <ProductsOfYourChoiceCard key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOfYourChoice;
