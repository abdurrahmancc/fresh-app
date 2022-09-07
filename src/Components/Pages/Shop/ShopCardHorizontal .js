import React, { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Rating from "../../SharedPages/Rating";
import { shopAllProducts } from "./Shop";
import ShopHorizontalCard from "./ShopHorizontalCard";

const ShopCardHorizontal = () => {
  const [products, , , page, setPage, size] = useContext(shopAllProducts);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("product/counter");
      console.log(data);
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size]);

  return (
    <>
      {products.length ? (
        <div id="" className="grid md:grid-cols-1 grid-cols-1 gap-y-10 ">
          {products.map((item) => (
            <ShopHorizontalCard key={item?._id} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <h5 className="text-center">No Data Found</h5>
        </div>
      )}
      <div className="flex justify-center mt-10">
        {[...Array(pageCount).keys()].map((number, index) => (
          <button
            key={index}
            className={`btn border border-primary rounded-none ${page === number && "bg-primary"}`}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCardHorizontal;
