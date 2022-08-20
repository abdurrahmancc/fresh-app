import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CashewNuts from "../../../../assets/products_img/CashewNuts.png";
import driedFishPacket from "../../../../assets/products_img/driedFishPacket.png";
import dryShrimp from "../../../../assets/products_img/dryShrimp.png";
import greenPeasPacket from "../../../../assets/products_img/greenPeasPacket.png";
import sideBanner from "../../../../assets/banner_img/side-banner-1.png";
import DealsProducts from "../DealsOfTheDay/DealsProducts";

const BestSellingProducts = () => {
  const [active, setActive] = useState("recent");
  const products = [
    {
      _id: "1",
      title: "Cashew Nuts",
      img: CashewNuts,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "new",
    },
    {
      _id: "2",
      title: "dried Fish Packet",
      img: driedFishPacket,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "new",
    },
    {
      _id: "3",
      title: "Dry Shrimp",
      img: dryShrimp,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: 20,
    },
    {
      _id: "4",
      title: "green Peas Packet",
      img: greenPeasPacket,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "hot",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between  border-b">
        <h3 className="md:text-2xl text-[3vw] capitalize font-bold">Best selling products</h3>
        <div className="flex items-center md:gap-20 sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => setActive("recent")}
              className={`md:text-lg text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "recent" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              recent
            </li>
            <li
              onClick={() => setActive("popular")}
              className={`md:text-lg text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "popular" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              popular
            </li>
            <li
              onClick={() => setActive("featured")}
              className={`md:text-lg text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "featured" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              featured
            </li>
          </ul>
          <Link
            to={"/shop"}
            className="flex items-center gap-2 md:text-lg text-[2vw] text-primary pb-3 font-semibold capitalize"
          >
            view All <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="lg:grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 hidden lg:block">
            <div className="lg:flex  xl:flex-none lg:flex-col gap-3">
              <img
                src={sideBanner}
                className={"xl:h-[510px] best-selling-banner-img lg:h-[485px] rounded-xl w-full"}
                alt="best selling banner"
              />
              <img
                src={sideBanner}
                className={" rounded-xl h-[485px] w-full xl:hidden"}
                alt="best selling banner"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-items-center gap-5">
              {products &&
                products.map((product) => <DealsProducts key={product?._id} product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
