import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CashewNuts from "../../../../assets/products_img/CashewNuts.png";
import driedFishPacket from "../../../../assets/products_img/driedFishPacket.png";
import dryShrimp from "../../../../assets/products_img/dryShrimp.png";
import greenPeasPacket from "../../../../assets/products_img/greenPeasPacket.png";
import naturalNuts from "../../../../assets/products_img/naturalNuts.png";
import DealsProducts from "./DealsProducts";

const DealsOfTheDay = () => {
  const [active, setActive] = useState("topProducts");
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
    {
      _id: "5",
      title: "natural Nuts",
      img: naturalNuts,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "best",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between  border-b">
        <h3 className="md:text-2xl text-[3vw]  capitalize font-bold ">Deals Of The Day</h3>
        <div className="flex items-center md:gap-20 sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => setActive("topProducts")}
              className={`md:text-lg text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "topProducts" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              top products
            </li>
            <li
              onClick={() => setActive("incrediblePrice")}
              className={`md:text-lg text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "incrediblePrice" &&
                "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              incredible price
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
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-3">
          {products &&
            products.map((product) => <DealsProducts key={product?._id} product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
