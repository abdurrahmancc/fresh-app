import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imgUpload } from "../../../api/api";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import OthersBasicInfo from "./OthersBasicInfo";
import ProductImage from "../AddProduct/ProductImage";
import ScrollBtn from "../../../SharedPages/ScrollBtn";
import Breadcrumb from "../../../SharedPages/Breadcrumb";
import Loading from "../../../SharedPages/Loading";

const AddOthers = () => {
  const [uploadAImage, setUploadAImage] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [imageUrl, setImageUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [multipleImageUrl, setMultipleImageUrl] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    let image;
    if (uploadAImage) {
      const inputImages = data.uploadImage[0];
      const formData = new FormData();
      formData.append("image", inputImages);
      const uploadImage = await imgUpload(formData);
      image = uploadImage.data.url;
    } else if (imageUrl) {
      image = data.img1;
    }

    const info = {
      image,
      metaTitle: data.metaTitle,
      metaKeywords: data.metaKeywords,
      metaDescription: data.metaDescription,
      description1: data.description1,
      description2: data.description2,
      role: data.role,
      category: selectedCategory.value,
      title: data.title,
      blockquote: data.blockquote,
    };
    if (image && selectedCategory.value) {
      try {
        const { data: result } = await axiosPrivet.post("blog", info);
        if (result.acknowledged) {
          toast.success("success", { id: "success-add" });
          reset();
        }
        setIsLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.errors?.common?.msg, { id: "add-blog-error" });
        setIsLoading(false);
      }
    }
  };

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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add Others </h4>
          <div>
            <div className="text-sm breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </div>
        {/* basic information */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-base-100 p-5 rounded-md">
              <div className="flex justify-between">
                <div className="pb-6">
                  <h4 className="capitalize text-xl font-bold ">basic information</h4>
                  <span className="text-xs ">Fill all information below</span>
                </div>

                {/* Category */}
                <div className="form-control pb-4 ">
                  <select
                    id="Category"
                    className="select select-bordered max-w-xs"
                    {...register("category", {
                      required: { value: true, message: "Category is require" },
                    })}
                  >
                    <option disabled selected hidden value="">
                      --Select--
                    </option>
                    <option value={"blog"}>Blog</option>
                  </select>
                  {errors?.category && (
                    <span className="label-text-alt text-red-500 text-xs">
                      {errors.category?.message}
                    </span>
                  )}
                </div>
              </div>

              <OthersBasicInfo
                register={register}
                errors={errors}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            {/* Computer component */}
            <div className="pt-5"></div>
            {/* Product Images */}
            <div className="py-5">
              <ProductImage>{info}</ProductImage>
            </div>
            {/* Meta Data */}
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold">Meta Data</h4>
                <span className="text-xs ">Fill all information below </span>
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
                      {...register("metaTitle")}
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
                      {...register("metaKeywords")}
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
                      {...register("metaDescription")}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Add Product */}
              <div className="flex gap-5 justify-end">
                <button className="btn btn-primary capitalize">cancel</button>
                <button type="submit" className="btn btn-primary">
                  Add Item
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

export default AddOthers;
