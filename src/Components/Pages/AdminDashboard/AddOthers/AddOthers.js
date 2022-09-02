import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { imgUpload } from "../../../api/api";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import OthersBasicInfo from "./OthersBasicInfo";
import ProductImage from "../AddProduct/ProductImage";
import ScrollBtn from "../../../SharedPages/ScrollBtn";

const AddOthers = () => {
  const [uploadAImage, setUploadAImage] = useState(true);
  const [fullDate] = useState(new Date());
  const timeDate = format(fullDate, "MMMM d, yyyy h:mm aa");
  const date = format(fullDate, "MMMM d, yyyy");
  const [imageUrl, setImageUrl] = useState(false);
  const [multipleImageUrl, setMultipleImageUrl] = useState(false);
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/add-product", name: "add-product" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const selectCategory = watch("category");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/logged_in", {
          withCredentials: true,
        });
        console.log(data);
      } catch (error) {
        console.log("check login error", error);
      }
    })();
  }, []);

  const onSubmit = async (data) => {
    let images;
    if (uploadAImage) {
      const inputImages = data.inputImage[0];
      const formData = new FormData();
      formData.append("image", inputImages);
      const image = await imgUpload(formData);
      images = { ImageURL1: image.data.url };
    } else if (imageUrl) {
      images = { ImageURL1: data.anImageURL };
    } else {
      images = {
        ImageURL1: data.firstImageURL,
        ImageURL2: data.secondImageURL,
        ImageURL3: data.thirdImageURL,
        ImageURL4: data.fourthImageURL,
      };
    }

    const metaInfo = {
      metaTitle: data.MetaTitle,
      metaKeywords: data.MetaKeywords,
      metaDescription: data.MetaDescription,
    };

    const info = {
      data,
      images,
      fullDate,
      timeDate,
      date,
      metaInfo,
    };

    if (images) {
      try {
        const { data: result } = await axiosPrivet.post("/addBlog", info);
        if (result.acknowledged) {
          toast.success("success", { id: "success-add" });
          reset();
        }
      } catch (error) {
        toast.error(error.message);
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

  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add Others </h4>

          <div>
            <div className="text-sm breadcrumbs">{/* <Breadcrumb crumbs={crumbs} /> */}</div>
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

              <OthersBasicInfo register={register} errors={errors} />
            </div>
            {/* Computer component */}
            <div className="pt-5">
              {/* {selectCategory === "computer" && <AddComputer register={register} errors={errors} />}
              {selectCategory === "laptop" && <AddLaptop register={register} errors={errors} />}
              {selectCategory === "phone" && <AddPhone register={register} errors={errors} />}
              {selectCategory === "watch" && <AddWatch register={register} errors={errors} />}
              {selectCategory === "speaker" && <AddSpeaker register={register} errors={errors} />}
              {selectCategory === "headphone" && <AddHeadPhone register={register} />}
              {selectCategory === "AC" && <AddAC register={register} errors={errors} />}
              {selectCategory === "refrigerator" && <AddRefrigerator register={register} />}
              {selectCategory === "monitor" && <AddMonitor register={register} />} */}
            </div>
            {/* Product Images */}
            <div className="py-5">
              <ProductImage>{info}</ProductImage>
            </div>
            {/* Meta Data */}
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold">Meta Data</h4>
                <span className="text-xs ">Fill all information below {date}</span>
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
