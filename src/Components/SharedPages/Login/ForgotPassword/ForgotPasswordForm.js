import React, { useEffect, useState } from "react";
import { useAuthState, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Hooks/useAuthState";
import { useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { toast } from "react-toastify";

const ForgotPasswordForm = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    try {
      await sendPasswordResetEmail(email, {
        url: `${process.env.REACT_APP_FRESH_LIVE_SITE_URL}/login`,
      });
      toast.success("Email send, please check your email", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="card flex-shrink-0 w-full">
          <div className="card-body gap-0 p-0">
            <h3 className="text-center capitalize text-3xl font-bold pb-10 text-black">
              Forgot password
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">Email</span>
                  <span className="absolute top-11 z-20 left-4 border-r  border-gray-400  text-lg text-primary pr-4">
                    <GrMail />
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-white input-bordered pl-16 py-2 w-full appearance-none border text-sm text-gray-700 placeholder:text-gray-700 rounded-md min-h-12 transition duration-200 focus:ring-0 ease-in-out border-gray-300  focus:outline-none focus:border-primary h-11 md:h-12"
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

              {sending && <span className="label-text-alt">Loading...</span>}
              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="btn capitalize text-neutral rounded-md btn-primary  py-3 transition-all focus:outline-none my-1"
                >
                  submit
                </button>
              </div>
            </form>
          </div>

          <div className="my-8 divider after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
            OR
          </div>
        </div>
        <div className="text-center text-gray-500">
          <Link
            to={"/login"}
            className=" pl-2 text-primary font-semibold hover:underline cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
