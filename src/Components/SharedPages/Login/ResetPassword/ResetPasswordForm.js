import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import auth from "../../../Hooks/useAuthState";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrMail } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { confirmPasswordReset } from "firebase/auth";

const ResetPasswordForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    setLoading(true);
    if (password === confirmPassword) {
      try {
        await confirmPasswordReset(auth, searchParams.get("oobCode"), password);
        toast.success("success", { id: "reset-password" });
        navigate("/login");
        setLoading(false);
      } catch (error) {
        toast.error(error.message, { id: "reset-password" });
        setLoading(false);
      }
    } else if (password !== confirmPassword) {
      setError("confirmPassword", { type: "custom", message: "Password does not match" });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="card flex-shrink-0 w-full">
          <div className="card-body gap-0 p-0">
            <h3 className="text-center capitalize text-3xl font-bold pb-10 text-black">
              Reset Password
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">New Password</span>
                  <div>
                    <div className="absolute top-11 left-4 border-r border-gray-500 pr-4 z-20 text-lg text-primary">
                      <FaLock />
                    </div>
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="text-lg absolute cursor-pointer z-20 right-3 top-11 text-gray-500"
                    >
                      <AiFillEyeInvisible className={`${showPass || "hidden"} `} />{" "}
                      <AiFillEye className={`${showPass && "hidden"} `} />
                    </div>
                  </div>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Password"
                  className="input bg-white pl-16 input-bordered py-2 z-10 w-full appearance-none border text-sm text-gray-700 placeholder:text-gray-700 rounded-md min-h-12 transition duration-200 focus:ring-0 ease-in-out border-gray-300  focus:outline-none focus:border-primary h-11 md:h-12"
                  {...register("password", {
                    required: { value: true, message: "password is require" },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                    },
                  })}
                />
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control pt-5">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">New Confirm Password</span>
                  <div>
                    <div className="absolute top-11 left-4 border-r border-gray-500 pr-4 z-20 text-lg text-primary">
                      <FaLock />
                    </div>
                    <div
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="text-lg absolute cursor-pointer z-20 right-3 top-11 text-gray-500"
                    >
                      <AiFillEyeInvisible className={`${showPass || "hidden"} `} />{" "}
                      <AiFillEye className={`${showPass && "hidden"} `} />
                    </div>
                  </div>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Confirm password"
                  className="input bg-white pl-16 input-bordered py-2 z-10 w-full appearance-none border text-sm text-gray-700 placeholder:text-gray-700 rounded-md min-h-12 transition duration-200 focus:ring-0 ease-in-out border-gray-300 focus:outline-none focus:border-primary h-11 md:h-12"
                  {...register("confirmPassword", {
                    required: { value: true, message: "Confirm Password is Require" },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                    },
                  })}
                />
                {loading ? (
                  <span className="label-text-alt">Loading...</span>
                ) : errors.confirmPassword?.type === "pattern" ? (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                ) : errors.confirmPassword?.type === "required" ? (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                ) : (
                  errors.confirmPassword?.type === "custom" && (
                    <span className="label-text-alt text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </span>
                  )
                )}
              </div>

              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="btn capitalize text-neutral rounded-md btn-primary  py-3 transition-all focus:outline-none my-1"
                >
                  Reset Password
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

export default ResetPasswordForm;
