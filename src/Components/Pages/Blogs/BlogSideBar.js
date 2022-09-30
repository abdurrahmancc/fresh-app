import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Rating from "../../SharedPages/Rating";
import { useForm } from "react-hook-form";
import product1 from "../../../assets/products_img/CashewNuts.png";
import product2 from "../../../assets/products_img/driedFishPacket.png";
import product3 from "../../../assets/products_img/dryShrimp.png";
import product4 from "../../../assets/products_img/greenPeasPacket.png";
import Loading from "../../SharedPages/Loading";
import sideBanner from "../../../assets/banner_img/side-banner-6.png";

const BlogSideBar = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");
  const onSubmit = (data) => {};

  const products = [
    {
      _id: "1",
      title: "Cashew Nuts",
      img: product1,
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
      img: product2,
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
      img: product3,
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
      img: product4,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "hot",
    },
  ];
  let isLast = products[products.length - 1];
  return (
    <>
      <div className="flex flex-col gap-y-[51px] justify-center">
        {/*---------- search start --------*/}
        <div className=" w-full">
          <h4 className="text-xl font-bold border-b-2 border-primary inline-block ml-5 pb-5">
            Search
          </h4>
          <div className=" border-t border-gray-200">
            <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <div className="relative">
                  <input
                    placeholder="Search..."
                    type="text"
                    name="search"
                    {...register("search")}
                    className="placeholder:italic w-full placeholder:text-slate-400 block py-7 pl-12  pr-9 shadow-sm focus:outline-none input rounded-lg border border-gray-300 focus:ring-0 sm:text-sm"
                  />
                  <button className=" absolute right-[7px] p-3 rounded top-[7px] bg-primary">
                    <BiSearchAlt className="text-xl bg-primary text-white" />
                  </button>
                  <button
                    onClick={() => resetField("search")}
                    className={`absolute left-[5px] p-[10px] rounded top-2 ${
                      inputSearch ? "block" : "hidden"
                    }`}
                  >
                    <IoIosClose className="text-2xl text-gray-400" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {error && <p className="ml-4 mt-2">{error}</p>}
        </div>
        {/*---------- search end --------*/}
        {/*---------- category start --------*/}
        <div className="shadow rounded-2xl border border-gray-100">
          <h4 className="text-xl font-bold border-b-2 border-primary inline-block ml-5 py-5">
            Categories
          </h4>
          <div className="px-5 border-t border-gray-200">
            <ul className="flex flex-col text-lg">
              <li className=" transition duration-300 ease-linear hover:text-primary border-b hover:border-primary capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  organic fruits <VscTriangleRight />
                </Link>
              </li>
              <li className="transition duration-300 ease-linear hover:text-primary border-b hover:border-primary capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  frozen food <VscTriangleRight />
                </Link>
              </li>
              <li className="transition duration-300 ease-linear hover:text-primary border-b hover:border-primary capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  meat & fish <VscTriangleRight />
                </Link>
              </li>
              <li className="transition duration-300 ease-linear hover:text-primary border-b hover:border-primary capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  custard powder <VscTriangleRight />
                </Link>
              </li>
              <li className="transition duration-300 ease-linear hover:text-primary border-b hover:border-primary capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  fruit juices <VscTriangleRight />
                </Link>
              </li>
              <li className="transition duration-300 ease-linear hover:text-primary  capitalize">
                <Link to={"/blogs"} className="flex py-4 items-center justify-between gap-4">
                  Snacks item <VscTriangleRight />
                </Link>
              </li>
              {/*  */}
            </ul>
          </div>
        </div>
        {/*---------- category end --------*/}
        {/*---------- new product start--------*/}
        <div className="shadow rounded-2xl border border-gray-100">
          <h4 className="text-xl font-bold border-b-2 border-primary inline-block ml-5 py-5 ">
            New products
          </h4>
          <div className="px-5 pt-5 border-t border-gray-200">
            <div className="grid grid-rows-4">
              {products.map((product) => {
                const bordered = isLast?._id === product?._id ? "" : "border-b ";
                return (
                  <div key={product?._id} className={`${bordered}`}>
                    <div
                      className={`card relative hover:top-[-4px] top-0 ease-linear duration-300 card-side items-center rounded-none`}
                    >
                      <figure className="w-20">
                        <Link to="/" className="p-0">
                          <img src={product?.img} alt="Album" className="w-20" />
                        </Link>
                      </figure>
                      <div className="card-body p-3">
                        <h2 className=" leading-5 font-semibold ">
                          <Link to={"/"}>{product?.title}</Link>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*---------- new product end--------*/}
        {/*---------- popular tag start--------*/}
        <div className="shadow rounded-2xl border border-gray-100">
          <h4 className="text-xl font-bold border-b-2 border-primary inline-block ml-5 py-5 ">
            popular Tags
          </h4>
          <div className="p-5 border-t border-gray-200">
            <div className=" pt-4 pb-2 flex flex-wrap gap-y-5 gap-x-3 ">
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                vegetable
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                fruits
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                potato
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                Honeycomb
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                snacks
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                cabbage
              </Link>
              <Link
                to={"/blogs"}
                href="shop"
                className="px-4 hover:top-[-4px] relative top-0 ease-in-out duration-700 flex justify-center shadow items-center gap-2 capitalize border hover:text-primary rounded-full border-gray-200 py-2"
              >
                <AiOutlineCheck />
                broccoli
              </Link>
            </div>
          </div>
        </div>
        {/*---------- popular tag end--------*/}
        {/* ------- banner image start ------- */}
        <div className="hidden lg:block">
          <img
            src={sideBanner}
            className={" best-selling-banner-img rounded-2xl w-full"}
            alt="best selling banner"
          />
        </div>
        {/* ------- banner image end ------- */}
      </div>
    </>
  );
};

export default BlogSideBar;
