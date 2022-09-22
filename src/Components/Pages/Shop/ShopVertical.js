import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import { shopAllProducts } from "./Shop";
import ShopVerticalCard from "./ShopVerticalCard";

const ShopVertical = () => {
  const { pathname } = useLocation();
  const [pageCount, setPageCount] = useState(0);
  const [products, setReload, page, setPage, size] = useContext(shopAllProducts);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get("counter");
        const count = data.count;
        const pages = Math.ceil(count / size);
        setPageCount(pages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [size]);

  return (
    <>
      {products.length ? (
        <div
          className={`grid  ${
            pathname.includes("/shop/fullwidth")
              ? "xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 justify-items-center"
              : "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10"
          }`}
        >
          {products && products.map((item) => <ShopVerticalCard key={item?._id} item={item} />)}
        </div>
      ) : (
        <div>
          <h5 className="text-center">No Data Found</h5>
        </div>
      )}
      <ScrollBtn />
    </>
  );
};

export default ShopVertical;
