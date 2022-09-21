import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Td, Tr } from "react-super-responsive-table";
import { addToDb, decreaseToCart, removeFromDb } from "../../Hooks/useFakeDB";
import { setCartList } from "../../Redux/features/shoppingCartCounterSlice";

const ViewShoppingCartTableRow = ({ item, index, setCartProducts, children }) => {
  const [value, setValue] = useState();
  const [cartProducts] = children;
  const dispatch = useDispatch();

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
    dispatch(setCartList(rest));
  };

  return (
    <>
      <Tr key={item?._id} className={"border-y"}>
        <Td className="my-5 sm:my-0 px-4">{index + 1}</Td>
        <Td className="py-5">
          <img height={50} width={50} src={item?.productImages[0]} alt="" />
        </Td>
        <Td className={"my-5 sm:my-0"} title={item?.productName.length >= 25 && item?.productName}>
          {item?.productName.length >= 25
            ? [item?.productName.slice(0, 25), <br />, item?.productName.slice(26, 50)]
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
