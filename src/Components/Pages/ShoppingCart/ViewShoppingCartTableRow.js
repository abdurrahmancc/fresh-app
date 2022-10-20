import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Td, Tr } from "react-super-responsive-table";

import {
  setQuantity,
  removeToCart,
  changeQuantity,
} from "../../../redux/features/shoppingCart/shoppingCartSlice";

const ViewShoppingCartTableRow = ({ item, index }) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("fresh-shopping-cart-list"));
    setValue(storageCart[item._id]);

    dispatch(setQuantity(storageCart[item._id]));
  }, [item, dispatch]);

  const handleOnChange = (data) => {
    const inputValue = data;
    setValue(inputValue);
  };

  // cart quantity decrease
  const handleDecrease = () => {
    if (value <= 1) {
      return;
    }
    const decreaseValue = Number(value) - 1;
    setValue(decreaseValue);
    dispatch(changeQuantity({ id: item._id, quantity: decreaseValue }));
  };

  // cart quantity increase
  const handleIncrease = () => {
    const increaseValue = Number(value) + 1;
    setValue(increaseValue);
    dispatch(changeQuantity({ id: item._id, quantity: increaseValue }));
  };

  // remove a cart
  const handleRemove = (id) => {
    dispatch(removeToCart(id));
  };

  return (
    <>
      <Tr className={"border-y"}>
        <Td className="my-5 sm:my-0 px-4">{index + 1}</Td>
        <Td className="py-5">
          <img height={50} width={50} src={item?.productImages[0]} alt="product-img" />
        </Td>
        <Td className={"my-5 sm:my-0"} title={item?.productName.length >= 25 && item?.productName}>
          {item?.productName.length >= 25
            ? [
                item?.productName.slice(0, 25),
                <br key={item?._id} />,
                item?.productName.slice(26, 50),
              ]
            : item?.productName}
        </Td>
        <Td className="text-lg">$ {item?.price}</Td>
        <Td className="text-lg my-5 sm:my-0">
          <div className=" w-32 relative border-gray-300 border">
            <div onClick={() => handleDecrease()} className="absolute top-4 left-2 cursor-pointer">
              <span>
                <BiMinus className="text-lg" />
              </span>
            </div>
            <div onClick={() => handleIncrease()} className="absolute top-4 right-2 cursor-pointer">
              <span>
                <AiOutlinePlus className="text-lg" />
              </span>
            </div>
            <input
              type="text"
              value={value}
              onChange={(e) => handleOnChange(e.target.value)}
              className="input focus:outline-primary-focus border-primary px-10 text-xl text-center h-12 rounded-sm bg-base-100 w-full"
            />
          </div>
        </Td>
        <Td className="text-lg">$ {item?.price * value}</Td>
        <Td className="text-lg my-5 sm:my-0">
          <FaTrashAlt
            onClick={() => handleRemove(item._id)}
            className={"cursor-pointer text-start sm:text-center sm:mx-auto "}
          />
        </Td>
      </Tr>
    </>
  );
};

export default ViewShoppingCartTableRow;
