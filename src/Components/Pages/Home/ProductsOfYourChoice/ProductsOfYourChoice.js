import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import CashewNuts from "../../../../assets/products_img/CashewNuts.png";
import driedFishPacket from "../../../../assets/products_img/driedFishPacket.png";
import dryShrimp from "../../../../assets/products_img/dryShrimp.png";
import greenPeasPacket from "../../../../assets/products_img/greenPeasPacket.png";
import ProductsOfYourChoiceItem from "./ProductsOfYourChoiceItem";

const ProductsOfYourChoice = () => {
  const [active, setActive] = useState("allProducts");
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
      _id: "6",
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
      _id: "7",
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
      _id: "8",
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
      _id: "9",
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
      _id: "10",
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
        <h3 className="lg:text-2xl text-[2vw] capitalize font-bold">Products of your choice</h3>
        <div className="flex items-center xl:gap-20  sm:gap-10 gap-2">
          <ul className="flex items-center gap-5">
            <li
              onClick={() => setActive("allProducts")}
              className={`lg:text-lg px-3 text-[2vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "allProducts" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              all
            </li>
            <li
              onClick={() => setActive("Bakery&Pastry")}
              className={`lg:text-lg text-[1vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "Bakery&Pastry" &&
                "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              Bakery & Pastry
            </li>
            <li
              onClick={() => setActive("Meat&fish")}
              className={`lg:text-lg text-[1vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "Meat&fish" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              Meat & fish
            </li>
            <li
              onClick={() => setActive("vegetables")}
              className={`lg:text-lg text-[1vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "vegetables" && "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              vegetables
            </li>
            <li
              onClick={() => setActive("Fruits&juices")}
              className={`lg:text-lg text-[1vw] font-semibold capitalize cursor-pointer pb-3 ${
                active === "Fruits&juices" &&
                "text-primary border-primary  border-b-2 activeProducts"
              }`}
            >
              Fruits & juices
            </li>
          </ul>
          <Link
            to={"/shop"}
            className="flex items-center gap-2 lg:text-lg text-[1vw] text-primary pb-3 font-semibold capitalize"
          >
            view All <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10">
          {products &&
            products.map((product) => (
              <ProductsOfYourChoiceItem key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOfYourChoice;
