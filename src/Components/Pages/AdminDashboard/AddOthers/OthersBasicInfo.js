import React from "react";

const OthersBasicInfo = ({ register, errors }) => {
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
          <div className="form-control pb-4 ">
            <label htmlFor="blogCategory" className="label">
              <span className="label-text text-xs">Category</span>
            </label>
            <select
              id="blogCategory"
              className="select select-bordered w-full"
              {...register("blogCategory", {
                required: { value: true, message: "Category is require" },
              })}
            >
              <option disabled selected hidden value="">
                --Select Category--
              </option>
              {/* <option disabled selected value="">
              --Select--
            </option> */}
              <option value={"monitor"}>Monitor</option>
              <option value={"laptop"}>Laptop</option>
              <option value={"computer"}>Computer</option>
              <option value={"phone"}>Phone</option>
              <option value={"tablet"}>Tablet</option>
              <option value={"watch"}>Watch</option>
              <option value={"speaker"}>Speaker</option>
              <option value={"headphone"}>Headphone</option>
              <option value={"AC"}>AC</option>
              <option value={"refrigerator"}>Refrigerator</option>
            </select>
            {errors?.blogCategory && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.blogCategory?.message}
              </span>
            )}
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
