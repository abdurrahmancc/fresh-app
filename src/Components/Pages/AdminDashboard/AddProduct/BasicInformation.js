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
          <div className="grid lg:grid-cols-2 lg:gap-2">
            <div className="form-control pb-4">
              <label htmlFor="manufacturerName" className="label">
                <span className="label-text text-xs">Manufacturer Name</span>
              </label>
              <input
                id="manufacturerName"
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
            {/* SKU */}
            <div className="form-control pb-4">
              <label htmlFor="SKU" className="label">
                <span className="label-text text-xs">SKU</span>
              </label>
              <input
                id="SKU"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("SKU", {
                  required: { value: true, message: "Manufacturer Name is require" },
                })}
              />
              {errors.SKU?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.SKU?.message}</span>
              )}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Price */}
            <div className="form-control pb-4 w-full">
              <label htmlFor="price" className="label">
                <span className="label-text text-xs">Price</span>
              </label>
              <input
                id="price"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("price", {
                  required: { value: true, message: "Price is require" },
                })}
              />
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.price?.message}</span>
              )}
            </div>
            {/* regular Price */}
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
              <label htmlFor="quantity" className="label">
                <span className="label-text text-xs">Quantity</span>
              </label>
              <input
                id="quantity"
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
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Category */}
            <div className="form-control pb-4 ">
              <label htmlFor="category" className="label">
                <span className="label-text text-xs">Category</span>
              </label>
              <select
                id="category"
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
              {errors?.category && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.category?.message}
                </span>
              )}
            </div>
            {/* stock Status */}
            <div className="form-control pb-4 ">
              <label htmlFor="stockStatus" className="label">
                <span className="label-text text-xs">Stock Status</span>
              </label>
              <select
                id="stockStatus"
                className="select select-bordered w-full"
                {...register("stockStatus", {
                  required: { value: true, message: "Category is require" },
                })}
              >
                <option disabled selected hidden value="">
                  --Select--
                </option>
                {/* <option disabled selected value="">
                --Select--
              </option> */}
                <option value={"in stock"}>in stock</option>
                <option value={"out of stock"}>out of stock</option>
              </select>
              {errors?.stockStatus && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.stockStatus?.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Manufacturer Brand */}
            <div className="form-control pb-4">
              <label htmlFor="brand" className="label">
                <span className="label-text text-xs"> Brand</span>
              </label>
              <input
                id="brand"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("brand", {
                  required: { value: true, message: " Brand name is require" },
                })}
              />
              {errors.brand?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.brand?.message}</span>
              )}
            </div>
            {/* dimensions */}
            <div className="form-control pb-4 ">
              <label htmlFor="dimensions" className="label">
                <span className="label-text text-xs">dimensions</span>
              </label>
              <select
                id="dimensions"
                className="select select-bordered w-full"
                {...register("dimensions", {
                  required: { value: true, message: "Category is require" },
                })}
              >
                <option disabled selected hidden value="">
                  --Select--
                </option>
                {/* <option disabled selected value="">
                --Select--
              </option> */}
                <option value={"N/A"}>N/A</option>
                <option value={"Yes"}>Yes</option>
              </select>
              {errors?.dimensions && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.dimensions?.message}
                </span>
              )}
            </div>
          </div>
          {/* Product Description */}
          <div className="form-control pb-4">
            <label htmlFor="productDescription" className="label">
              <span className="label-text text-xs">Product Description</span>
            </label>
            <textarea
              id="productDescription"
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
