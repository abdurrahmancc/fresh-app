import React from "react";

const ProductsImagesModal = ({ img, modal }) => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={modal} className="modal-toggle" />
      <label htmlFor={modal} className="modal cursor-pointer">
        <label className="relative lg:left-52" htmlFor="">
          <figure className="">
            <img className="w-full md:min-w-[540px]  h-auto" src={img} alt="" />
          </figure>
        </label>
      </label>
    </div>
  );
};

export default ProductsImagesModal;
