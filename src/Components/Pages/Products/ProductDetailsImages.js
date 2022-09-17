import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ProductsImagesModal from "./ProductsImagesModal";
import "./ProductDetails.css";
import { useEffect } from "react";

const ProductDetailsImages = ({ data }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (data?.productImages) {
      setImg(data?.productImages[0]);
    }
  }, [data?.productImages]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active-image");
    for (var j = 0; j < data?.productImages.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active-image");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        {data?.productImages && data?.productImages[0] && (
          <figure className="shadow">
            <img width="540px" className=" h-auto" src={img} alt="" />
          </figure>
        )}
      </div>
      <div className="mt-10 flex justify-center max-w-[540px] mx-auto gap-x-4">
        {data?.productImages &&
          data?.productImages.map((image, i) => (
            <div
              className={
                i === 0
                  ? "w-[127px] h-auto cursor-pointer border active-image"
                  : "w-[127px] h-auto cursor-pointer border border-gray-300"
              }
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <figure className="">
                <label htmlFor={`image${i}`} className="">
                  <img width="127px" className=" h-auto" src={image} alt="" />
                </label>
              </figure>
              <ProductsImagesModal modal={`image${i}`} img={image} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductDetailsImages;
