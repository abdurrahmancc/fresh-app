import React from "react";

const ProductDescription = ({ data }) => {
  return (
    <div>
      <h4 className="text-[1.3vw]">{data?.productName}</h4>
      <p className="mt-5 text-[1vw]">{data?.productDescription}</p>
    </div>
  );
};

export default ProductDescription;
