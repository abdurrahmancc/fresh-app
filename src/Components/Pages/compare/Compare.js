import React from "react";
import { Table, Tbody, Td, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./compare.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import Loading from "../../SharedPages/Loading";
import {
  fetchCompareList,
  removeToCompare,
} from "../../../redux/features/compare/compareListSlice";
import { useEffect } from "react";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";

const Compare = () => {
  const { compareList, isLoading } = useSelector((state) => state.compareList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompareList());
  }, [dispatch]);

  if (compareList.length > 4) {
    compareList.length = 4;
  }

  const handleRemove = (id) => {
    dispatch(removeToCompare(id));
    toast.success("Deleted", { autoClose: 1000 });
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Add To cart", { autoClose: 1000 });
  };

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
          {compareList?.length >= 1 ? (
            <div id="compareTable" className="w-full">
              {/* =========== compare table start ========== */}
              <Table>
                <Tbody>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Image
                    </Td>
                    {compareList &&
                      compareList.map((product) => (
                        <Td key={product?._id} className={"border"}>
                          <div className={"border-t sm:border-none border-gray-300"}>
                            <figure>
                              <img
                                className="mx-auto"
                                src={product?.productImages[0]}
                                alt="compare_image"
                              />
                            </figure>
                          </div>
                        </Td>
                      ))}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Name
                    </Td>
                    {compareList &&
                      compareList.map((product) => (
                        <Td key={product?._id} className={"border"}>
                          <div className={"border-t sm:border-none border-gray-300"}>
                            <h5 className="text-center sm:text-[1.2vw] lg:text-lg xl:text-xl font-semibold py-5">
                              {product?.productName}
                            </h5>
                          </div>
                        </Td>
                      ))}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Price
                    </Td>
                    {compareList &&
                      compareList.map((product) => (
                        <Td key={product?._id} className={"border"}>
                          <div className={"border-t sm:border-none border-gray-300"}>
                            <h5 className="text-center  lg:text-lg xl:text-xl font-semibold py-5 flex items-baseline gap-1 justify-center">
                              <span className="sm:text-[1.2vw]">${product?.price}</span>
                              <span className="text-lg line-through opacity-70">
                                ${product?.regularPrice}
                              </span>
                            </h5>
                          </div>
                        </Td>
                      ))}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Rating
                    </Td>
                    {compareList &&
                      compareList.map((product) => (
                        <Td key={product?._id} className={"border"}>
                          <div className={"border-t sm:border-none border-gray-300"}>
                            <div className="text-center sm:text-[1.2vw] lg:text-lg xl:text-xl font-semibold py-5 flex gap-2 justify-center">
                              <div className="rating lg:rating-xs ">
                                <span className="text-orange-400">
                                  <BsStarFill className="sm:text-[10px] lg:text-sm" />
                                </span>
                                <span className="text-orange-400">
                                  <BsStarFill className="sm:text-[10px] lg:text-sm" />
                                </span>
                                <span className="text-orange-400">
                                  <BsStarFill className="sm:text-[10px] lg:text-sm" />
                                </span>
                                <span className="text-orange-400">
                                  <BsStarFill className="sm:text-[10px] lg:text-sm " />
                                </span>
                                <span className="text-orange-400">
                                  <BsStarHalf className="sm:text-[10px] lg:text-sm" />
                                </span>
                              </div>{" "}
                              <span className="text-sm">(432)</span>
                            </div>
                          </div>
                        </Td>
                      ))}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Stock status
                    </Td>
                    {compareList &&
                      compareList.map((product) => (
                        <Td key={product?._id} className={"border"}>
                          <div className={"border-t sm:border-none border-gray-300"}>
                            <div className="text-center sm:text-[1.2vw] lg:text-lg font-semibold py-5">
                              <span
                                className={`rounded-sm capitalize sm:text-[1.2vw] lg:text-lg  px-3 py-1 ${
                                  product.stockStatus && product?.stockStatus.includes("in stock")
                                    ? "text-[#3BB788] bg-[#DEF9EC]"
                                    : "bg-[#FDE0E9] text-[#F74B88]"
                                }`}
                              >
                                {product.stockStatus && product?.stockStatus.includes("in stock")
                                  ? product?.stockStatus
                                  : "out stock"}
                              </span>
                            </div>
                          </div>
                        </Td>
                      ))}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Weight
                    </Td>
                    {compareList &&
                      compareList.map((product) => {
                        const weight = product?.weight[0] ? product?.weight[0].split(",") : null;
                        let isLast;
                        if (weight?.length) isLast = weight[weight?.length - 1];

                        return (
                          <Td key={product?._id} className={"border"}>
                            <div className={"border-t sm:border-none border-gray-300"}>
                              <div className="text-center sm:text-[1.2vw] lg:text-sm  py-5 flex gap-x-2 justify-center">
                                {weight?.length > 0 &&
                                  weight.map((w, i) => (
                                    <span
                                      key={i}
                                      className={`${isLast === w ? "" : "after:content-[',']"}`}
                                    >
                                      {w}g
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </Td>
                        );
                      })}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Dimensions
                    </Td>
                    {compareList &&
                      compareList.map((product) => {
                        return (
                          <Td key={product?._id} className={"border"}>
                            <div className={"border-t sm:border-none border-gray-300"}>
                              <div className="text-center sm:text-[1.2vw] lg:text-sm font-semibold py-5 flex gap-x-2 justify-center">
                                <span>{product?.dimensions}</span>
                              </div>
                            </div>
                          </Td>
                        );
                      })}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Description
                    </Td>
                    {compareList &&
                      compareList.map((product) => {
                        return (
                          <Td key={product?._id} className={"border"}>
                            <div className={"border-t sm:border-none border-gray-300"}>
                              <div className="text-center  text-sm py-5 flex gap-x-2 justify-center px-2">
                                <span className="opacity-80">
                                  {product?.productDescription.slice(0, 200)}...
                                </span>
                              </div>
                            </div>
                          </Td>
                        );
                      })}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Add to cart
                    </Td>
                    {compareList &&
                      compareList.map((product) => {
                        return (
                          <Td key={product?._id} className={"border"}>
                            <div className={"border-t sm:border-none border-gray-300"}>
                              <div className="py-5">
                                <button
                                  onClick={() => handleAddToCart(product)}
                                  className="py-2 mx-auto px-6 lg:py-2 lg:px-6 sm:px-3 sm:py-1  sm:text-[1.5vw] lg:text-sm rounded-full border-primary btn-animate hover:text-white capitalize border flex items-center gap-2"
                                >
                                  <MdAddShoppingCart />{" "}
                                  <span className="sm:hidden lg:block">Add to cart</span>
                                </button>
                              </div>
                            </div>
                          </Td>
                        );
                      })}
                  </Tr>
                  <Tr className={"border"}>
                    <Td
                      className={
                        "lg:min-w-[150px] card-border sm:min-w-[100px] py-2 font-semibold capitalize text-center"
                      }
                    >
                      Action
                    </Td>
                    {compareList &&
                      compareList.map((product) => {
                        return (
                          <Td key={product?._id} className={"border"}>
                            <div className={"border-t sm:border-none border-gray-300"}>
                              <div
                                onClick={() => handleRemove(product?._id)}
                                className="py-5 text-center cursor-pointer flex items-center gap-2 justify-center"
                              >
                                <MdDelete className="text-gray-500" />
                                <span>Remove</span>
                              </div>
                            </div>
                          </Td>
                        );
                      })}
                  </Tr>
                </Tbody>
              </Table>
              {/* =========== compare table end ========== */}
            </div>
          ) : (
            <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
              <h4 className="md:text-4xl text-xl font-bold">
                There are 0 products in your compare
              </h4>
              <button
                onClick={() => window.history.back()}
                className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 btn-animate hover:bg-[#60880f] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-8"
              >
                Return to back page
              </button>
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

export default Compare;
