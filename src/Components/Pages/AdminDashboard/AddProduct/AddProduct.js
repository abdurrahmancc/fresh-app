import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ScrollBtn from "../../../SharedPages/ScrollBtn";
import ProductImage from "./ProductImage";
import BasicInformation from "./BasicInformation";
import DetailsInformation from "./DetailsInformation";
import { imgUpload } from "../../../api/api";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Breadcrumb from "../../../SharedPages/Breadcrumb";

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

  const selectCategory = watch("uploadImage");

  console.log(selectCategory);

  const onSubmit = async (data) => {
    let images = [];
    if (uploadAImage) {
      try {
        const inputImages = data.uploadImage[0];
        const formData = new FormData();
        formData.append("image", inputImages);
        const image = await imgUpload(formData);
        images = [image.data.url];
      } catch (error) {
        toast.error("not uploaded image", { id: "upload_image_error" });
      }
    } else if (imageUrl) {
      images = [data.img1];
    } else {
      images = [data.img1, data.img2, data.img3, data.img4];
    }
    const inputInfo = {
      productName: data.productName,
      by: data.by,
      price: data.price,
      regularPrice: data.regularPrice,
      quantity: data.quantity,
      productCode: data.productCode,
      SKU: data.SKU,
      category: data.category,
      brand: data.brand,
      productDescription: data.productDescription,
      reviewQuantity: data.reviewQuantity,
      colors: [data.colors],
      weight: [data.weight],
      metaData: {
        metaKeyword: data.metaKeywords,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
      },
      stockStatus: data.stockStatus,
      dimensions: data.dimensions,
      productImages: images,
      productBadges: data.productBadges,
    };
    console.log(images);
    if (images[0]) {
      try {
        const { data: result } = await axiosPrivet.post("product/add-product", inputInfo);
        toast.success(result.message, { id: "success-add-product" });
        // console.log(result);
        reset();
      } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.errors?.common?.msg, { id: "add-product-error" });
      }
    }
  };

  const handleUploadAImage = () => {
    setUploadAImage(true);
    setImageUrl(false);
    setMultipleImageUrl(false);
  };
  const handleImageUrl = () => {
    setImageUrl(true);
    setUploadAImage(false);
    setMultipleImageUrl(false);
  };
  const handleMultipleImage = () => {
    setMultipleImageUrl(true);
    setUploadAImage(false);
    setImageUrl(false);
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
  // console.log(selectCategory);
  // console.log(uploadAImage, imageUrl, multipleImageUrl);
  return (
    <>
      <div className="p-10 w-full ">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add product</h4>
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
                    <label htmlFor="metaTitle" className="label">
                      <span className="label-text text-xs">Meta Title</span>
                    </label>
                    <input
                      id="metaTitle"
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register("metaTitle")}
                    />
                  </div>
                  {/* Meta Keywords */}
                  <div className="form-control pb-4">
                    <label htmlFor="metaKeywords" className="label">
                      <span className="label-text text-xs">Meta Keywords</span>
                    </label>
                    <input
                      id="metaKeywords"
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
                    <label htmlFor="metaDescription" className="label">
                      <span className="label-text text-xs">Meta Description</span>
                    </label>
                    <textarea
                      id="metaDescription"
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
