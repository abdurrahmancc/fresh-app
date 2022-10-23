import React from "react";
import { useState } from "react";
import Select from "react-select";
import { categoryOptions, dimensionsOptions, stockStatusOptions } from "./dashboardSelectorOptions";
import { selectCategoryStyle, selectStockStatusStyle } from "./selectorStyle";

const BasicInformation = ({
  register,
  errors,
  selectedCategory,
  setSelectedCategory,
  setSelectedDimensions,
}) => {
  const [data, setData] = useState(null);

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
          {/* Manufacturer  */}
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* by */}
            <div className="form-control pb-4">
              <label htmlFor="by" className="label">
                <span className="label-text text-xs">By</span>
              </label>
              <input
                id="by"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("by", {
                  required: { value: true, message: "by Name is require" },
                })}
              />
              {errors.by?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.by?.message}</span>
              )}
            </div>
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
          <div className="grid lg:grid-cols-2 lg:gap-2">
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
            {/* Product Badges */}
            <div className="form-control pb-4 w-full">
              <label htmlFor="productBadges" className="label">
                <span className="label-text text-xs ">Product Badges</span>
              </label>
              <input
                id="productBadges"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("productBadges")}
              />
            </div>
          </div>
        </div>
        <div>
          {/*---------------- category ------------- */}
          <div className="form-control pb-4">
            <label htmlFor="brand" className="label">
              <span className="label-text text-xs">Category</span>
            </label>
            <Select
              closeMenuOnSelect={false}
              // defaultValue={[options[0], options[1]]}
              isMulti
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categoryOptions}
              styles={selectCategoryStyle}
              // placeholder={"Select Categories"} or
              placeholder={<div className="text-sm">--Select category--</div>}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#556EE6" /* options hover background color */,
                  neutral50: "none" /* placeholder text color */,
                  neutral80: "none" /* input & selected text color */,
                  neutral0: "#2A3041" /* menu background color */,
                  neutral20: "#8F9BBB" /* remove & dropdownIndicator color */,
                  // primary75: "black",
                  danger: "gray" /* hover remove color */,
                  // neutral5: "red",
                  // primary: "red",
                  // neutral30: "red",
                  neutral60: "none" /* focus remove & dropdownIndicator color */,
                  // neutral90: "red",
                  primary50: "none" /* option active background color */,
                  dangerLight: "none" /* remove color */,
                  neutral10: "none" /* selected background color */,
                  neutral40: "gray" /* hover remove & dropdownIndicator color */,
                  neutral70: "red",
                },
              })}
            />
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            <div className="form-control pb-4">
              <label htmlFor="stockStatus" className="label">
                <span className="label-text text-xs">Stock Status</span>
              </label>
              <Select
                closeMenuOnSelect={true}
                defaultValue={stockStatusOptions[0]}
                onChange={setData}
                options={stockStatusOptions}
                styles={selectStockStatusStyle}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#556EE6" /* options hover background color */,
                    neutral50: "none" /* placeholder text color */,
                    neutral80: "none" /* input & selected text color */,
                    neutral0: "#2A3041" /* menu background color */,
                    neutral20: "#8F9BBB" /* remove & dropdownIndicator color */,
                    primary: "white" /* selected background color */,
                    primary50: "none" /* option active background color */,
                    neutral40: "gray" /* hover remove & dropdownIndicator color */,
                  },
                })}
              />
            </div>
            {/* dimensions */}
            <div className="form-control pb-4">
              <label htmlFor="stockStatus" className="label">
                <span className="label-text text-xs">Dimensions</span>
              </label>
              <Select
                closeMenuOnSelect={true}
                defaultValue={dimensionsOptions[0]}
                onChange={setSelectedDimensions}
                options={dimensionsOptions}
                styles={selectStockStatusStyle}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#556EE6" /* options hover background color */,
                    neutral50: "none" /* placeholder text color */,
                    neutral80: "none" /* input & selected text color */,
                    neutral0: "#2A3041" /* menu background color */,
                    neutral20: "#8F9BBB" /* remove & dropdownIndicator color */,
                    primary: "white" /* selected background color */,
                    primary50: "none" /* option active background color */,
                    neutral40: "gray" /* hover remove & dropdownIndicator color */,
                  },
                })}
              />
            </div>
          </div>
          {/* Product Description */}
          <div className="form-control pb-4">
            <label htmlFor="productDescription" className="label">
              <span className="label-text text-xs">Product Description</span>
            </label>
            <textarea
              id="productDescription"
              className="textarea textarea-bordered h-[240px]"
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
