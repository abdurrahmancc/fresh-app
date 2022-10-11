import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { Td, Tr } from "react-super-responsive-table";
import { useDispatch } from "react-redux";
import { removeToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";

const WishlistTableRow = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    try {
      dispatch(removeToWishlist(id));
      toast.success("Deleted", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Add To Cart", { autoClose: 1000 });
  };

  return (
    <>
      <Tr className={"border-y"}>
        <Td className="my-5 sm:my-0 px-4">{index + 1}</Td>
        <Td className="py-5">
          <Link to={`/product-details/${item?._id}`} className="p-0">
            <img height={80} width={80} src={item?.productImages[0]} alt="" />
          </Link>
        </Td>
        <Td className={"my-5 sm:my-0"} title={item?.productName.length >= 25 && item?.productName}>
          <h5 className="text-lg font-semibold hover:text-primary cursor-pointer">
            <Link to={`/product-details/${item?._id}`} className="p-0">
              {item?.productName.length >= 25
                ? [
                    item?.productName.slice(0, 25),
                    <br key={item?._id} />,
                    item?.productName.slice(26, 50),
                  ]
                : item?.productName}
            </Link>
          </h5>
          <div className=" sm:text-[1.2vw] lg:text-lg xl:text-xl font-semibold pt-1 flex gap-2 justify-start">
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
            <span className="text-xs">(432)</span>
          </div>
        </Td>
        <Td className="text-xl font-semibold">${item?.price}</Td>
        <Td className="text-lg my-5 sm:my-0">
          <div className=" text-center sm:text-[1.2vw] lg:text-lg font-semibold py-5">
            <span
              className={`rounded-sm capitalize sm:text-[1.2vw] lg:text-lg   py-1 ${
                item?.stockStatus.includes("in stock")
                  ? "text-[#3BB788] bg-[#DEF9EC] px-5"
                  : "bg-[#FDE0E9] text-[#F74B88] px-3"
              }`}
            >
              {" "}
              {item?.stockStatus.includes("in stock") ? item?.stockStatus : "out stock"}
            </span>
          </div>
        </Td>
        <Td className="text-lg">
          <div className="py-5">
            <button
              onClick={() => handleAddToCart(item)}
              className="py-2 mx-auto px-6 lg:py-2 lg:px-6 sm:px-3 sm:py-1  sm:text-[1.5vw] lg:text-sm rounded-full border-primary btn-animate hover:text-white capitalize border flex items-center gap-2"
            >
              <MdAddShoppingCart />
              <span className="sm:hidden lg:block">Add to cart</span>
            </button>
          </div>
        </Td>
        <Td className="text-lg my-5 sm:my-0">
          <FaTrashAlt
            onClick={() => handleRemove(item?._id)}
            className={"cursor-pointer text-start sm:text-center sm:mx-auto "}
          />
        </Td>
      </Tr>
    </>
  );
};

export default WishlistTableRow;
