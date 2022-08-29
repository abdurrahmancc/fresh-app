import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import DealsOfTheDay from "../Home/DealsOfTheDay/DealsOfTheDay";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import ProductDetailsImages from "./ProductDetailsImages";
import ProductsDetailsTitle from "./ProductsDetailsTitle";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  // const [handleAddToCartProduct] = useAddProduct();

  const crumbs = [
    { path: "home", name: "home" },
    { path: "shop", name: "shop" },
    { path: `item-details/${id}`, name: "details" },
  ];

  const { data, isLoading } = useQuery("itemsDetails", () =>
    axiosPrivet.get(`product-details/${id}`)
  );
  // console.log(data);

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

  // handle Description
  const handleDescription = () => {
    setShowDescription(true);
    setShowReviews(false);
  };
  const handleReviews = () => {
    setShowDescription(false);
    setShowReviews(true);
  };

  const handleAddToCart = () => {
    //   handleAddToCartProduct(data?.data);
    toast.success("Add To Cart", { id: "addToCart" });
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
        <section className="container mx-auto min-h-screen py-10">
          <div className="grid lg:grid-cols-5  gap-10">
            <div className="lg:col-span-2 mt-10">
              <ProductDetailsImages data={data?.data} />
            </div>
            <div className="lg:col-span-3">
              <div>
                <ProductsDetailsTitle data={data} />
                <div>
                  <h4 className="text-xl mt-10">Key Features</h4>
                  {/* <div>
                  {data?.data?.category.toLowerCase() === "laptop" && (
                    <LaptopFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "phone" && (
                    <PhoneFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "watch" && (
                    <WatchFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "computer" && (
                    <ComputerFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "speaker" && (
                    <SpeakerFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "ac" && <ACFeatures data={data?.data} />}
                  {data?.data?.category.toLowerCase() === "headphone" && (
                    <HeadphoneFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "refrigerator" && (
                    <RefrigeratorFeatures data={data?.data} />
                  )}
                  {data?.data?.category.toLowerCase() === "monitor" && (
                    <MonitorFeatures data={data?.data} />
                  )}
                </div> */}
                </div>
                <hr className="mt-5 border-gray-700" />
                <div className="flex py-10 gap-10">
                  <div className=" w-36 relative border-gray-300 border">
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
                      className="btn btn-primary px-10 rounded-sm text-neutral"
                    >
                      proceed To checkOut
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-primary px-10 rounded-sm text-neutral"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
                <hr className="border-gray-700" />
              </div>
            </div>
          </div>
          {/* detail  */}
          <div className="mt-20">
            <div className="flex justify-between border-b pt-10  border-gray-200">
              <div className="flex flex-row gap-2 ">
                <h4
                  onClick={handleDescription}
                  className="text-[2vw] cursor-pointer md:text-lg bg-primary py-2 text-neutral px-4 rounded-t"
                >
                  Description
                </h4>
                <h4
                  onClick={handleReviews}
                  className="text-[2vw] md:text-lg cursor-pointer  hover:bg-primary relative  md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 ease-in-out duration-300 text-gray-500 bg-gray-300 hover:text-neutral px-4 rounded-t"
                >
                  Reviews
                </h4>
              </div>
            </div>
            <div className="my-10">
              {showDescription && (
                <div>
                  <h4 className="text-[1.3vw]">{data?.data?.productName}</h4>
                  <p className="mt-5 text-[1vw]">{data?.data?.productDescription}</p>
                </div>
              )}
              {showReviews && <div className="text-[1.3vw]">reviews</div>}
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
