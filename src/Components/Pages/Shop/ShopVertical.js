import React, { useContext, useEffect, useState } from "react";
import axiosPrivet from "../../Hooks/axiosPrivet";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import { shopAllProducts } from "./Shop";
import ShopVerticalCard from "./ShopVerticalCard";

const ShopVertical = () => {
  const [pageCount, setPageCount] = useState(0);
  // const [handleAddToCartProduct] = useAddProduct();
  const [handleAddToCartProduct] = useState();
  const [products, , setReload, page, setPage, size] = useContext(shopAllProducts);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("counter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size]);
  return (
    <>
      {products.length ? (
        <div className="grid xl:grid-cols-4  md:grid-cols-3 grid-cols-1  gap-x-5 gap-y-10">
          {products.map((item) => (
            <ShopVerticalCard
              key={item?._id}
              item={item}
              handleAddToCartProduct={handleAddToCartProduct}
            />
          ))}
        </div>
      ) : (
        <div>
          <h5 className="text-center">No Data Found</h5>
        </div>
      )}

      <div className={`flex justify-center mt-10 `}>
        {[...Array(pageCount).keys()].map((number, index) => (
          <button
            key={index}
            className={`btn border rounded-none border-primary ${page === number && "bg-primary"}`}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <ScrollBtn />
    </>
  );
};

export default ShopVertical;
