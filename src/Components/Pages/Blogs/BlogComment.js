import React from "react";
import { useForm } from "react-hook-form";

const BlogComment = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <span className="font-bold">Comment *</span>
        <textarea className="textarea textarea-bordered w-full h-40" placeholder=""></textarea>
        <div className="flex gap-5 pt-4 pb-6">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
              {...register("name", {
                required: { value: true, message: "Name is require" },
                pattern: {
                  value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                  message: "Provide a valid name",
                },
              })}
            />
            {errors.name?.type === "pattern" && (
              <span className="label-text-alt text-red-500 text-xs">{errors.name?.message}</span>
            )}
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">{errors.name?.message}</span>
            )}
          </div>
          <div className="form-control w-full">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
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
              <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
            )}
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
            )}
          </div>
        </div>
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Website URL"
            className="input input-bordered w-full "
            {...register("website", {
              required: { value: true, message: "Website URL is Require" },
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                message: "Provide a valid Website URL",
              },
            })}
          />
          {errors.website?.type === "pattern" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.website?.message}</span>
          )}
          {errors.website?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.website?.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary px-10 text-neutral mt-6">
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogComment;
