import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import { shopAllProducts } from "./Shop";
import ShopVerticalCard from "./ShopVerticalCard";

const ShopVertical = () => {
  const { pathname } = useLocation();
  const [products] = useContext(shopAllProducts);

  return (
    <>
      {products.length && (
        <div
          className={`grid  ${
            pathname.includes("/shop/fullwidth")
              ? "xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 justify-items-center"
              : "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-10"
          }`}
        >
          {products && products.map((item) => <ShopVerticalCard key={item?._id} item={item} />)}
        </div>
      )}
      <ScrollBtn />
    </>
  );
};

export default ShopVertical;
