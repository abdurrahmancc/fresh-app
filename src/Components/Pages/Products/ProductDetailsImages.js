import React from "react";
import ProductsImagesModal from "./ProductsImagesModal";

const ProductDetailsImages = ({ data }) => {
  return (
    <>
      <div className="flex justify-center">
        {data?.images?.ImageURL1 && (
          <figure className="">
            <img width="540px" className=" h-auto" src={data?.images?.ImageURL1} alt="" />
          </figure>
        )}
      </div>
      <div className="mt-10 flex justify-center max-w-[540px] mx-auto gap-x-4">
        {data?.images?.ImageURL1 && (
          <div>
            <figure className="border-2 border-primary">
              <label htmlFor="ItemImageURL1" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL1} alt="" />
              </label>
            </figure>
            <ProductsImagesModal modal={"ItemImageURL1"} img={data?.images?.ImageURL1} />
          </div>
        )}
        {data?.images?.ImageURL2 && (
          <div>
            <figure className="border-2 border-primary">
              <label htmlFor="ItemImageURL2" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL2} alt="" />
              </label>
            </figure>
            <ProductsImagesModal modal={"ItemImageURL2"} img={data?.images?.ImageURL2} />
          </div>
        )}
        {data?.images?.ImageURL3 && (
          <div>
            <figure className="border-2 border-primary">
              <label htmlFor="ItemImageURL3" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL3} alt="" />
              </label>
            </figure>
            <ProductsImagesModal modal={"ItemImageURL3"} img={data?.images?.ImageURL3} />
          </div>
        )}
        {data?.images?.ImageURL4 && (
          <div>
            <figure className="border-2 border-primary">
              <label htmlFor="ItemImageURL4" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL4} alt="" />
              </label>
            </figure>
            <ProductsImagesModal modal={"ItemImageURL4"} img={data?.images?.ImageURL4} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsImages;
