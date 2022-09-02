import React from "react";

const BasicInformation = ({ register, errors }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div>
          {/* Product Name */}
          <div className="form-control pb-4">
            <label htmlFor="productName" className="label">
              <span className="label-text text-xs">Product Name</span>
            </label>
            <input
              id="productName"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("productName", {
                required: { value: true, message: "product Name is require" },
              })}
            />
            {errors.productName?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.productName?.message}
              </span>
            )}
          </div>
          {/* Manufacturer Name */}
          <div className="form-control pb-4">
            <label htmlFor="ManufacturerName" className="label">
              <span className="label-text text-xs">Manufacturer Name</span>
            </label>
            <input
              id="ManufacturerName"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("manufacturerName", {
                required: { value: true, message: "Manufacturer Name is require" },
              })}
            />
            {errors.manufacturerName?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.manufacturerName?.message}
              </span>
            )}
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Price */}
            <div className="form-control pb-4 w-full">
              <label htmlFor="Price" className="label">
                <span className="label-text text-xs">Price</span>
              </label>
              <input
                id="Price"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("price", {
                  required: { value: true, message: "Price is require" },
                })}
              />
              {errors.Price?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.Price?.message}</span>
              )}
            </div>
            <div className="form-control pb-4 w-full">
              <label htmlFor="regularPrice" className="label">
                <span className="label-text text-xs">Regular Price </span>
              </label>
              <input
                id="regularPrice"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("regularPrice")}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Quantity */}
            <div className="form-control pb-4 w-full">
              <label htmlFor="Quantity" className="label">
                <span className="label-text text-xs">Quantity</span>
              </label>
              <input
                id="Quantity"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("quantity", {
                  required: { value: true, message: "Quantity is require" },
                })}
              />
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.quantity?.message}
                </span>
              )}
            </div>
            {/* Product Code */}
            <div className="form-control pb-4 w-full">
              <label htmlFor="productCode" className="label">
                <span className="label-text text-xs">Product Code </span>
              </label>
              <input
                id="productCode "
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("productCode", {
                  required: { value: true, message: "Product Code is require" },
                })}
              />
              {errors.productCode?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.productCode?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div>
          {/* Category */}
          <div className="form-control pb-4 ">
            <label htmlFor="Category" className="label">
              <span className="label-text text-xs">Category</span>
            </label>
            <select
              id="Category"
              className="select select-bordered w-full"
              {...register("category", {
                required: { value: true, message: "Category is require" },
              })}
            >
              <option disabled selected hidden value="">
                --Select--
              </option>
              {/* <option disabled selected value="">
                --Select--
              </option> */}
              <option value={"monitor"}>Monitor</option>
              <option value={"laptop"}>Laptop</option>
              <option value={"computer"}>Computer</option>
              <option value={"phone"}>Phone</option>
              <option value={"watch"}>Watch</option>
              <option value={"speaker"}>Speaker</option>
              <option value={"headphone"}>Headphone</option>
              <option value={"AC"}>AC</option>
              <option value={"refrigerator"}>Refrigerator</option>
            </select>
            {errors?.Category && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.Category?.message}
              </span>
            )}
          </div>
          {/* Manufacturer Brand */}
          <div className="form-control pb-4">
            <label htmlFor="ManufacturerBrand" className="label">
              <span className="label-text text-xs">Manufacturer Brand</span>
            </label>
            <input
              id="ManufacturerBrand"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("manufacturerBrand", {
                required: { value: true, message: "Manufacturer Brand is require" },
              })}
            />
            {errors.manufacturerBrand?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.manufacturerBrand?.message}
              </span>
            )}
          </div>
          {/* Product Description */}
          <div className="form-control pb-4">
            <label htmlFor="ProductDescription" className="label">
              <span className="label-text text-xs">Product Description</span>
            </label>
            <textarea
              id="ProductDescription"
              className="textarea textarea-bordered h-[150px]"
              placeholder=""
              {...register("productDescription", {
                required: { value: true, message: "Product Description is require" },
              })}
            ></textarea>
            {errors.productDescription?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.productDescription?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
