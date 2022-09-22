import React, { useContext, useEffect, useState } from "react";
import axiosPrivet from "../../Hooks/axiosPrivet";
import { shopAllProducts } from "./Shop";
import ShopHorizontalCard from "./ShopHorizontalCard";

const ShopCardHorizontal = () => {
  const [products] = useContext(shopAllProducts);

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
    </>
  );
};

export default ShopCardHorizontal;
