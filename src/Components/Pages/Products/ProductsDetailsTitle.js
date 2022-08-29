import React from "react";

const ProductsDetailsTitle = ({ data }) => {
  return (
    <>
      <div>
        <h4 className="text-[1.3vw]">{data?.data?.productName}</h4>
        {!data?.data?.regularPrice && (
          <div className="flex mt-5 gap-10">
            <p className="font-bold text-[1vw] bg-base-100 px-6 py-2 rounded-full">
              Price:
              <span className="  text-[#FF6000] "> ${data?.data?.price}</span>
            </p>
            <p className="text-[1vw] font-bold bg-base-100 px-6 py-2 rounded-full">
              {data?.data?.quantity ? "In Stock" : "Stock Out"}
            </p>
            <p className="text-[1vw] font-bold bg-base-100 px-6 py-2 rounded-full">
              Product Code: {data?.data?.productCode}
            </p>
          </div>
        )}
        {data?.data?.regularPrice && (
          <div className="flex gap-10 mt-5">
            <p className="bg-base-100 px-6 py-2 rounded-full">
              <span className="text-[1vw]">Price: </span>
              <span className="text-[1vw] text-[#FF6000] font-bold">${data?.data?.price}</span>
            </p>
            <p className="bg-base-100 px-6 py-2 rounded-full">
              <span className="text-[1vw]">Regular Price: </span>
              <span className="text-[1vw] text-[#FF6000]  font-bold">
                ${data?.data?.regularPrice}
              </span>
            </p>
            <p className="text-[1vw] font-bold bg-base-100 px-6 py-2 rounded-full">
              {data?.data?.quantity ? "In Stock" : "Stock Out"}
            </p>
            <p className="flex items-center">
              Code:
              <span className="text-[1vw] font-bold bg-base-100  py-2 rounded-full">
                {data?.data?.productCode}
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsDetailsTitle;
