import React from "react";
import { Table, Tbody, Td, Tr } from "react-super-responsive-table";
import useProducts from "../../Hooks/useProducts";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./compare.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import { removeFromDb } from "../../Hooks/useFakeDB";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";

const Compare = () => {
  const [cartProducts, setCartProducts] = useProducts();

  if (cartProducts.length > 4) {
    cartProducts.length = 4;
  }

  const handleRemove = (id) => {
    const rest = cartProducts.filter((item) => item._id !== id);
    setCartProducts(rest);
    removeFromDb(id);
  };

  console.log(cartProducts);
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
          <div id="compareTable" className="w-full">
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
                  {cartProducts &&
                    cartProducts.map((product) => (
                      <Td className={"border"}>
                        <div
                          key={product?._id}
                          className={"border-t sm:border-none border-gray-300"}
                        >
                          <figure>
                            <img className="mx-auto" src={product?.productImages[0]} alt="" />
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
                  {cartProducts &&
                    cartProducts.map((product) => (
                      <Td className={"border"}>
                        <div
                          key={product?._id}
                          className={"border-t sm:border-none border-gray-300"}
                        >
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
                    Rating
                  </Td>
                  {cartProducts &&
                    cartProducts.map((product) => (
                      <Td className={"border"}>
                        <div
                          key={product?._id}
                          className={"border-t sm:border-none border-gray-300"}
                        >
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
                  {cartProducts &&
                    cartProducts.map((product) => (
                      <Td className={"border"}>
                        <div
                          key={product?._id}
                          className={"border-t sm:border-none border-gray-300"}
                        >
                          <div className="text-center sm:text-[1.2vw] lg:text-lg font-semibold py-5">
                            <span
                              className={`rounded-sm sm:text-[1.2vw] lg:text-lg  px-3 py-1 ${
                                product?.stockStatus.includes("in stock")
                                  ? "text-[#3BB788] bg-[#DEF9EC]"
                                  : "bg-[#FDE0E9] text-[#F74B88]"
                              }`}
                            >
                              {" "}
                              {product?.stockStatus}
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
                  {cartProducts &&
                    cartProducts.map((product) => {
                      const weight = product?.weight[0] ? product?.weight[0].split(",") : null;
                      const isLast = weight[weight.length - 1];
                      return (
                        <Td className={"border"}>
                          <div
                            key={product?._id}
                            className={"border-t sm:border-none border-gray-300"}
                          >
                            <div className="text-center sm:text-[1.2vw] lg:text-sm  py-5 flex gap-x-2 justify-center">
                              {weight.map((w) => (
                                <span className={`${isLast === w ? "" : "after:content-[',']"}`}>
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
                  {cartProducts &&
                    cartProducts.map((product) => {
                      return (
                        <Td className={"border"}>
                          <div
                            key={product?._id}
                            className={"border-t sm:border-none border-gray-300"}
                          >
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
                  {cartProducts &&
                    cartProducts.map((product) => {
                      return (
                        <Td className={"border"}>
                          <div
                            key={product?._id}
                            className={"border-t sm:border-none border-gray-300"}
                          >
                            <div className="text-center sm:text-[1.2vw] lg:text-sm py-5 flex gap-x-2 justify-center px-2">
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
                  {cartProducts &&
                    cartProducts.map((product) => {
                      return (
                        <Td className={"border"}>
                          <div
                            key={product?._id}
                            className={"border-t sm:border-none border-gray-300"}
                          >
                            <div className="py-5">
                              <button className="py-2 mx-auto px-6 lg:py-2 lg:px-6 sm:px-3 sm:py-1  sm:text-[1.5vw] lg:text-sm rounded-full border-primary btn-animate hover:text-white capitalize border flex items-center gap-2">
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
                  {cartProducts &&
                    cartProducts.map((product) => {
                      return (
                        <Td className={"border"}>
                          <div
                            key={product?._id}
                            className={"border-t sm:border-none border-gray-300"}
                          >
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
          </div>
        </section>
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
