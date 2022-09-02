import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ScrollBtn from "../../../SharedPages/ScrollBtn";
import ProductImage from "./ProductImage";
import BasicInformation from "./BasicInformation";
import DetailsInformation from "./DetailsInformation";

const AddProduct = () => {
  const [uploadAImage, setUploadAImage] = useState(true);
  const [imageUrl, setImageUrl] = useState(false);
  const [multipleImageUrl, setMultipleImageUrl] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const selectCategory = watch("category");

  const onSubmit = async (data) => {};

  const handleUploadAImage = () => {
    setUploadAImage(true);
    setImageUrl(false);
    setMultipleImageUrl(false);
  };
  const handleImageUrl = () => {
    setUploadAImage(false);
    setImageUrl(true);
    setMultipleImageUrl(false);
  };
  const handleMultipleImage = () => {
    setUploadAImage(false);
    setImageUrl(false);
    setMultipleImageUrl(true);
  };

  const info = {
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
  };
  console.log(selectCategory);

  return (
    <>
      <div className="p-10 w-full ">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add product</h4>
          <div>
            <div className="text-sm breadcrumbs">{/* <Breadcrumb crumbs={crumbs} /> */}</div>
          </div>
        </div>
        {/* basic information */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold ">basic information</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <BasicInformation register={register} errors={errors} />
            </div>
            {/* Computer component */}
            <div className="pt-5">
              <DetailsInformation register={register} errors={errors} />
            </div>
            {/* Product Images */}
            <div className="py-5">
              <ProductImage>{info}</ProductImage>
            </div>
            {/* Meta Data */}
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold">Meta Data</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  {/* Meta Title */}
                  <div className="form-control pb-4">
                    <label htmlFor="MetaTitle" className="label">
                      <span className="label-text text-xs">Meta Title</span>
                    </label>
                    <input
                      id="MetaTitle"
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register("MetaTitle")}
                    />
                  </div>
                  {/* Meta Keywords */}
                  <div className="form-control pb-4">
                    <label htmlFor="MetaKeywords" className="label">
                      <span className="label-text text-xs">Meta Keywords</span>
                    </label>
                    <input
                      id="MetaKeywords"
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register("MetaKeywords")}
                    />
                  </div>
                </div>
                <div>
                  {/* Meta Description */}
                  <div className="form-control pb-4">
                    <label htmlFor="MetaDescription" className="label">
                      <span className="label-text text-xs">Meta Description</span>
                    </label>
                    <textarea
                      id="MetaDescription"
                      className="textarea textarea-bordered h-[150px]"
                      placeholder=""
                      {...register("MetaDescription")}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Add Product */}
              <div className="flex gap-5 justify-end">
                <button className="btn btn-primary capitalize">cancel</button>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
        <ScrollBtn />
      </div>
    </>
  );
};

export default AddProduct;
