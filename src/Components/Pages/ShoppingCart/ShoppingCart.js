import React, { useEffect } from "react";
import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useSelector } from "react-redux";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import TotalPrice from "./TotalPrice";
import ViewShoppingCartTable from "./ViewShoppingCartTable";

const ShoppingCart = () => {
  const { carts, isLoading } = useSelector((state) => state?.cartList);
  const [prices, setPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(1);

  useEffect(() => {
    try {
      const storageCart = JSON.parse(localStorage.getItem("fresh-shopping-cart-list"));
      const cartPrices =
        carts &&
        carts.map((product) => {
          const quantity = storageCart[product._id];
          return product?.price * quantity;
        });
      setPrices(cartPrices);

      const initialValue = 0;
      if (cartPrices?.length >= 1) {
        const sumReduce = cartPrices.reduce(
          (previous, current) => previous + current,
          initialValue
        );
        setTotalPrice(sumReduce);
      }
    } catch (error) {
      console.log(error?.message);
    }
  }, [carts]);

  if (isLoading) {
    return <Loading />;
  }
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
        <section className="container mx-auto mt-20">
          {carts?.length >= 1 ? (
            <div className="grid xl:grid-cols-3 lg:grid-cols-1 lg:gap-10 gap-y-20">
              <div className="xl:col-span-2">
                <ViewShoppingCartTable></ViewShoppingCartTable>
                <div className="flex justify-between pt-8 border-t border-gray-300 mt-5">
                  <div className="relative max-w-xs w-full">
                    <input
                      type="text"
                      placeholder="Enter Your Coupon"
                      className="  placeholder:italic w-full  placeholder:text-slate-400 border border-primary block  py-3  shadow-sm focus:outline-none input rounded-sm focus:ring-0 sm:text-sm pr-16"
                    />
                    <button className="btn capitalize rounded-sm outline-none btn-animate btn-primary py-3 text-white absolute top-0 border-none right-0 ">
                      Apply
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-animate rounded-sm capitalize btn-primary border-none py-3 text-white">
                      <FiRefreshCw className="mr-2 text-lg " /> Update Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-1">
                <TotalPrice totalPrice={totalPrice} prices={prices} />
              </div>
            </div>
          ) : (
            <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
              <h4 className="md:text-4xl text-xl font-bold">There are 0 products in your cart</h4>
              <h4>
                <button
                  onClick={() => window.history.back()}
                  className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 btn-animate hover:bg-[#60880f] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-8"
                >
                  Return to back page
                </button>
              </h4>
            </div>
          )}
        </section>
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

export default ShoppingCart;
