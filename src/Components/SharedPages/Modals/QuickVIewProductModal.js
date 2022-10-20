import React from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineTwitter } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import ProductsDetailsTitle from "../../Pages/Products/ProductsDetailsTitle";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";

const QuickVIewProductModal = ({ product }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

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

  const handleAddToCart = (item) => {
    toast.success("Add To cart", { autoClose: 1000 });
    dispatch(addToCart(item));
  };
  return (
    <>
      {/* product modal */}
      <input type="checkbox" id="quick-view-product" className="modal-toggle" />
      <label htmlFor="quick-view-product" className="modal cursor-pointer">
        <label className="modal-box rounded-sm h-[480px] w-[960px] max-w-5xl relative">
          <div className="grid grid-cols-2 gap-5 h-full">
            <div className="h-full">
              <figure>
                <img
                  src={product?.productImages && product?.productImages[0]}
                  className="h-full w-full"
                  alt="product images"
                />
              </figure>
            </div>
            <div className="h-full overflow-y-scroll">
              <div>
                <ProductsDetailsTitle data={product} />
                <hr className="mt-5 border-gray-300" />
                <div className="flex flex-wrap md:flex-nowrap py-10 gap-5 md:gap-10 lg:gap-5 xl:gap-10 justify-start">
                  <div className=" w-36 z-10 relative border-primary border">
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
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-animate btn-primary rounded-sm text-neutral"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
                <hr className="border-gray-300" />
                <div className="mt-5">
                  <div className="pb-[5px]">
                    <span className="font-semibold pr-2">SKU:</span>{" "}
                    <span className="hover:text-primary">{product?.SKU}</span>
                  </div>
                  <div className="pb-[5px]">
                    <span className="font-semibold pr-2">Tags:</span>{" "}
                    <span className="">{product?.metaData?.metaKeyword}</span>
                  </div>
                  <div className="flex items-center gap-5 pt-5">
                    <span className="font-semibold pr-2">Share:</span>
                    <ul className="flex items-center gap-2">
                      <li>
                        <a href="https://facebook.com/">
                          <FaFacebookF className="hover:text-primary opacity-70 hover:opacity-100" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <AiOutlineTwitter className="hover:text-primary opacity-70 hover:opacity-100" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/">
                          <FaLinkedinIn className="hover:text-primary opacity-70 hover:opacity-100" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <FaPinterestP className="hover:text-primary opacity-70 hover:opacity-100" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default QuickVIewProductModal;
