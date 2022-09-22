import React from "react";
import Select from "react-select";
import { categoryOptions } from "../AddProduct/dashboardSelectorOptions";
import { selectCategoryStyle } from "../AddProduct/selectorStyle";

const OthersBasicInfo = ({ register, errors, selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div>
          {/* Product Name */}
          <div className="form-control pb-4">
            <label htmlFor="title" className="label">
              <span className="label-text text-xs">Title</span>
            </label>
            <input
              id="title"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("title", {
                required: { value: true, message: "Title is require" },
              })}
            />
            {errors.title?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">{errors.title?.message}</span>
            )}
          </div>
          {/* Manufacturer Name */}
          <div className="form-control pb-4">
            <label htmlFor="role" className="label">
              <span className="label-text text-xs">Role</span>
            </label>
            <input
              id="role"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("role", {
                required: { value: true, message: "role is require" },
              })}
            />
            {errors?.role?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">{errors?.role?.message}</span>
            )}
          </div>
          {/*  Description 1*/}
          <div className="form-control pb-4">
            <label htmlFor="description1" className="label">
              <span className="label-text text-xs">Description1</span>
            </label>
            <textarea
              id="description1"
              className="textarea textarea-bordered h-[150px]"
              placeholder=""
              {...register("description1", {
                required: { value: true, message: " Description is require" },
              })}
            ></textarea>
            {errors.description1?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.description1?.message}
              </span>
            )}
          </div>
        </div>
        <div>
          {/* Category */}
          <div className="form-control pb-4">
            <label htmlFor="brand" className="label">
              <span className="label-text text-xs">Category</span>
            </label>
            <Select
              closeMenuOnSelect={true}
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
          {/* Manufacturer Brand */}
          <div className="form-control pb-4">
            <label htmlFor="blockquote" className="label">
              <span className="label-text text-xs">Blockquote</span>
            </label>
            <input
              id="blockquote"
              type="text"
              placeholder=""
              className="input input-bordered"
              {...register("blockquote", {
                required: { value: true, message: "Blockquote is require" },
              })}
            />
            {errors?.blockquote?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors?.blockquote?.message}
              </span>
            )}
          </div>
          {/*  Description 1*/}
          <div className="form-control pb-4">
            <label htmlFor="description2" className="label">
              <span className="label-text text-xs">Description2</span>
            </label>
            <textarea
              id="description2"
              className="textarea textarea-bordered h-[150px]"
              placeholder=""
              {...register("description2", {
                required: { value: true, message: " Description2 is require" },
              })}
            ></textarea>
            {errors.description2?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.description2?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersBasicInfo;
