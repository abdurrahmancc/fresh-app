import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProductImage = ({ children }) => {
  const {
    handleUploadAImage,
    uploadAImage,
    handleImageUrl,
    imageUrl,
    handleMultipleImage,
    multipleImageUrl,
    register,
    errors,
    watch,
    reset,
  } = children;

  let imgName;
  if (watch("inputImage")) {
    imgName = watch("inputImage")[0]?.name;
  }
  //   console.log(imgName);
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="flex justify-between pb-4">
          <div>
            <h4 className=" text-xl font-bold capitalize pb-4">Product Images</h4>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label htmlFor="aImage" className="label cursor-pointer gap-1">
                <span className="label-text">Upload a Image</span>
                <input
                  id="aImage"
                  onClick={() => handleUploadAImage()}
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-primary"
                  checked={uploadAImage}
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="imageURL" className="label cursor-pointer gap-1">
                <span className="label-text">Image URL</span>
                <input
                  onClick={() => handleImageUrl()}
                  id="imageURL"
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-blue-500"
                  checked={imageUrl}
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="multipleImage" className="label cursor-pointer gap-1">
                <span className="label-text">Multiple Image URL</span>
                <input
                  onClick={() => handleMultipleImage()}
                  id="multipleImage"
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-blue-500"
                  checked={multipleImageUrl}
                />
              </label>
            </div>
          </div>
        </div>
        {/* upload a image */}
        {uploadAImage && (
          <div>
            <label htmlFor="inputImage">
              <div className="w-full h-60 flex justify-center  items-center  border-white border-dashed border-2 rounded-md">
                <div className="text-5xl text-center">
                  <p>
                    <input
                      id="inputImage"
                      className="hidden"
                      type="file"
                      {...register("inputImage", {
                        required: { value: true, message: "Image is Require" },
                      })}
                    />
                    <IoMdCloudUpload className="relative left-8" />
                  </p>
                  <p className="text-lg">upload photo</p>
                </div>
              </div>
            </label>
            {imgName && (
              <p className="text-lg pt-3 flex items-center justify-center">
                <span>{imgName}</span>
                <button className="ml-3" onClick={() => reset({ inputImage: "bill" })}>
                  <IoMdCloseCircleOutline />
                </button>
              </p>
            )}
            {errors.inputImage?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.inputImage?.message}
              </span>
            )}
          </div>
        )}
        {/*an image url */}
        {imageUrl && (
          <div className="">
            <div className="form-control pb-4">
              <label htmlFor="anImageURL" className="label">
                <span className="label-text text-xs">Image URL</span>
              </label>
              <input
                id="anImageURL"
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xl"
                {...register("anImageURL", {
                  required: { value: true, message: "an Image URL is require" },
                })}
              />
              {errors.anImageURL?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.anImageURL?.message}
                </span>
              )}
            </div>
          </div>
        )}
        {/* multiple image url*/}
        {multipleImageUrl && (
          <div className="grid sm:grid-cols-2 gap-x-10">
            <div className="form-control pb-4">
              <label htmlFor="firstImageURL" className="label">
                <span className="label-text text-xs">First Image URL</span>
              </label>
              <input
                id="firstImageURL"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("firstImageURL", {
                  required: { value: true, message: "First Image URL is Require" },
                })}
              />
              {errors.firstImageURL?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.firstImageURL?.message}
                </span>
              )}
            </div>
            {/* Meta Keywords */}
            <div className="form-control pb-4">
              <label htmlFor="secondImageURL" className="label">
                <span className="label-text text-xs">Second Image URL</span>
              </label>
              <input
                id="secondImageURL"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("secondImageURL", {
                  required: { value: true, message: "Second Image URL is Require" },
                })}
              />
              {errors.secondImageURL?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.secondImageURL?.message}
                </span>
              )}
            </div>
            <div className="form-control pb-4">
              <label htmlFor="thirdImageURL" className="label">
                <span className="label-text text-xs">Third Image URL</span>
              </label>
              <input
                id="thirdImageURL"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("thirdImageURL")}
              />
            </div>
            <div className="form-control pb-4">
              <label htmlFor="fourthImageURL" className="label">
                <span className="label-text text-xs">Fourth Image URL</span>
              </label>
              <input
                id="fourthImageURL"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("fourthImageURL")}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductImage;
