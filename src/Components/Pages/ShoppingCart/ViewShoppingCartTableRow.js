import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { addToDb, decreaseToCart, removeFromDb } from "../../Hooks/useFakeDB";

const ViewShoppingCartTableRow = ({ item, index, setCartProducts, children }) => {
  const [value, setValue] = useState();
  const [cartProducts] = children;

  useEffect(() => {
    setValue(item?.quantity);
  }, []);

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
    decreaseToCart(item._id);
  };

  const handleIncrease = () => {
    const increaseValue = parseInt(value) + 1;
    setValue(increaseValue);
    addToDb(item._id);
  };

  const handleRemove = (id) => {
    const rest = cartProducts.filter((item) => item._id !== id);
    setCartProducts(rest);
    removeFromDb(id);
    // window.location.reload();
  };

  return (
    <>
      <tr key={item?._id} className={"border hover"}>
        <th>{index + 1}</th>
        <td className="py-6">
          <img height={50} width={50} src={item?.images?.ImageURL1} alt="" />
        </td>
        <td title={item?.productName.length >= 25 && item?.productName}>
          {item?.productName.length >= 25
            ? [item?.productName.slice(0, 25), <br />, item?.productName.slice(26, 50)]
            : item?.productName}
        </td>
        <td className="text-lg">$ {item?.price}</td>
        <td className="text-lg">
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
        </td>
        <td className="text-lg">$ {item?.price * value}</td>
        <td className="text-lg">
          <FaTrashAlt
            onClick={() => handleRemove(item._id)}
            className={"cursor-pointer text-center mx-auto"}
          />
        </td>
      </tr>
    </>
  );
};

export default ViewShoppingCartTableRow;
