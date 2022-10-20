import React, { useContext } from "react";
import { ShopAllProducts } from "./Shop";
import ShopHorizontalCard from "./ShopHorizontalCard";

const ShopHorizontal = () => {
  const [products] = useContext(ShopAllProducts);

  return (
    <>
      {products.length && (
        <div id="" className="grid md:grid-cols-1 grid-cols-1 gap-y-10 ">
          {products.map((item) => (
            <ShopHorizontalCard key={item?._id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShopHorizontal;
