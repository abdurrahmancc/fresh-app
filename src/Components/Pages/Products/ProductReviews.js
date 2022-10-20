import React from "react";
import emptyUser from "../../../assets/logo/empty-user.png";
import user1 from "../../../assets/about-img/user-1.png";
import user2 from "../../../assets/about-img/user-2.png";
import user3 from "../../../assets/about-img/user-3.png";
import Rating from "../../SharedPages/Rating";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

const ProductReviews = () => {
  const reviews = [
    {
      userName: "Elizabeth",
      date: "jun 23, 2022",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus mollitia necessitatibus magni eligendi, amet quibusdam, consequatur neque quia iste aliquam blanditiis dolorem ipsam inventore.",
      img: user1,
      review: 5,
    },
    {
      userName: "Margaret",
      date: "jun 23, 2022",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus mollitia necessitatibus magni eligendi, amet quibusdam, consequatur neque quia iste aliquam blanditiis dolorem ipsam inventore.",
      img: user2,
      review: 5,
    },
    {
      userName: "Kimberly",
      date: "jun 23, 2022",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus mollitia necessitatibus magni eligendi, amet quibusdam, consequatur neque quia iste aliquam blanditiis dolorem ipsam inventore.",
      img: user3,
      review: 5,
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  const rating = {
    size: 28,
    edit: true,
    activeColor: "#ffb33e",
    isHalf: true,
    onChange: (newValue) => {
      console.log(`Example 1: new value is ${newValue}`);
    },
  };

  const demo = {
    size: 20,
    edit: false,
    activeColor: "#ffb33e",
    value: 5,
  };

  return (
    <div className="max-w-[1250px] w-full mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-y-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card pt-5 lg:pt-0 py-0 pr-0 lg:card-side bg-base-100 rounded-sm shadow-sm border p-8"
            >
              <figure>
                <img width={80} src={review?.img} alt="Album" />
              </figure>

              <div className="card-body">
                <div className="flex  items-center justify-between">
                  <div>
                    <h4 className="card-title pb-0">{review?.userName}</h4>
                    <time className="text-xs font-semibold text-primary pb-2">{review?.date}</time>
                  </div>
                  <ReactStars {...demo} />
                </div>
                <p>{review?.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-sm border p-10">
          <h4 className="font-semibold text-2xl pb-8">Add a review</h4>
          <div className="form-control w-full pb-6">
            <span className=" opacity-80">Your rating *</span>

            <ReactStars {...rating} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <span className="opacity-80">Your review *</span>
            <textarea
              className="textarea mt-2 rounded-sm textarea-bordered w-full h-40"
              placeholder=""
              {...register("comment", {
                required: { value: true, message: "Comment is Require" },
              })}
            ></textarea>
            {errors.comment?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">{errors.comment?.message}</span>
            )}
            <div className="flex lg:flex-col flex-col sm:flex-row gap-5 pt-4 pb-6">
              <div className="form-control w-full">
                <span className="pb-2 opacity-80">Name *</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="input rounded-sm input-bordered w-full "
                  {...register("name", {
                    required: { value: true, message: "Name is require" },
                    pattern: {
                      value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                      message: "Provide a valid name",
                    },
                  })}
                />
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.name?.message}
                  </span>
                )}
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <span className="pb-2 opacity-80">Email *</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="input rounded-sm input-bordered w-full "
                  {...register("email", {
                    required: { value: true, message: "Email is require" },
                    pattern: {
                      value:
                        /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>
            <button type="submit" className="btn  rounded-sm  btn-primary px-10 text-neutral mt-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
