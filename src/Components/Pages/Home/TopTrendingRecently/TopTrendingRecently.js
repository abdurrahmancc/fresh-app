import React from "react";
import { Link } from "react-router-dom";
import CashewNuts from "../../../../assets/products_img/CashewNuts-1.png";
import driedFishPacket from "../../../../assets/products_img/driedFishPacket-1.png";
import dryShrimp from "../../../../assets/products_img/dryShrimp-1.png";
import Rating from "../../../SharedPages/Rating";

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
];
const TopTrendingRecently = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7">
      <div className="">
        <div className="border-b-2 mb-7 ">
          <h3 className="lg:text-2xl  text-xl capitalize font-bold">Top Selling</h3>
          <div className=" w-32 border-b-2 opacity-75 pb-3 border-primary"></div>
        </div>
        <div className="grid  grid-rows-3 gap-y-5">
          {products.map((product) => (
            <div
              key={product?._id}
              className="card relative hover:top-[-4px] top-0 ease-linear duration-200 card-side items-center rounded-none"
            >
              <figure className="max-h-[110px] rounded bg-[#f2f2f2] max-w-[110px] h-full w-full">
                <Link to="/" className="p-0">
                  <img src={product?.img} alt="Album" className="w-full h-full" />
                </Link>
              </figure>

              <div className="card-body p-3">
                <h2 className="card-title leading-5 text-[16px]">
                  <Link to={"/"}>Nestle Original Coffee-Mate Coffee Creamer</Link>
                </h2>

                <Rating />

                <div className="flex gap-2  items-center">
                  <span className="text-lg text-primary capitalize font-semibold">
                    ${product?.price}
                  </span>
                  <span className="text-gray-400 line-through capitalize">
                    ${product?.regularPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="border-b-2 mb-7 ">
          <h3 className="lg:text-2xl  text-xl capitalize font-bold">Trending Products</h3>
          <div className=" w-32 border-b-2 opacity-75 pb-3 border-primary"></div>
        </div>
        <div className="grid  grid-rows-3 gap-y-5">
          {products.map((product) => (
            <div
              key={product?._id}
              className="card relative hover:top-[-4px] top-0 ease-linear duration-200 card-side items-center rounded-none"
            >
              <figure className="max-h-[110px] rounded bg-[#f2f2f2] max-w-[110px] h-full w-full">
                <Link to={"/"}>
                  <img src={product?.img} alt="Album" className="w-full h-full" />
                </Link>
              </figure>
              <div className="card-body p-3">
                <h2 className="card-title leading-5 text-[16px]">
                  <Link to={"/"}>Nestle Original Coffee-Mate Coffee Creamer</Link>
                </h2>

                <Rating />

                <div className="flex gap-2  items-center">
                  <span className="text-lg text-primary capitalize font-semibold">
                    ${product?.price}
                  </span>
                  <span className="text-gray-400 line-through capitalize">
                    ${product?.regularPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="border-b-2 mb-7 ">
          <h3 className="lg:text-2xl  text-xl capitalize font-bold">Top Selling</h3>
          <div className=" w-32 border-b-2 opacity-75 pb-3 border-primary"></div>
        </div>
        <div className="grid  grid-rows-3 gap-y-5">
          {products.map((product) => (
            <div
              key={product?._id}
              className="card relative hover:top-[-4px] top-0 ease-linear duration-200 card-side items-center rounded-none"
            >
              <figure className="max-h-[110px] rounded bg-[#f2f2f2] max-w-[110px] h-full w-full">
                <Link to={"/"}>
                  <img src={product?.img} alt="Album" className="w-full h-full" />
                </Link>
              </figure>
              <div className="card-body p-3">
                <h2 className="card-title leading-5 text-[16px]">
                  <Link to={"/"}>Nestle Original Coffee-Mate Coffee Creamer</Link>
                </h2>

                <Rating />

                <div className="flex gap-2  items-center">
                  <span className="text-lg text-primary capitalize font-semibold">
                    ${product?.price}
                  </span>
                  <span className="text-gray-400 line-through capitalize">
                    ${product?.regularPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="border-b-2 mb-7 ">
          <h3 className="lg:text-2xl  text-xl capitalize font-bold">Top Rated</h3>
          <div className=" w-32 border-b-2 opacity-75 pb-3 border-primary"></div>
        </div>
        <div className="grid  grid-rows-3 gap-y-5">
          {products.map((product) => (
            <div
              key={product?._id}
              className="card relative hover:top-[-4px] top-0 ease-linear duration-200 card-side items-center rounded-none"
            >
              <figure className="max-h-[110px] rounded bg-[#f2f2f2] max-w-[110px] h-full w-full">
                <Link to={"/"}>
                  <img src={product?.img} alt="Album" className="w-full h-full" />
                </Link>
              </figure>
              <div className="card-body p-3">
                <h2 className="card-title text-[16px] leading-5">
                  <Link to={"/"}>Nestle Original Coffee-Mate Coffee Creamer</Link>
                </h2>

                <Rating />

                <div className="flex gap-2  items-center">
                  <span className="text-lg text-primary capitalize font-semibold">
                    ${product?.price}
                  </span>
                  <span className="text-gray-400 line-through capitalize">
                    ${product?.regularPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTrendingRecently;
