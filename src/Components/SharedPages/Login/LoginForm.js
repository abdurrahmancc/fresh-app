import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import { accessToken } from "../../Hooks/useCookies";
import useValidToken from "../../Hooks/useValidToken";

const LoginForm = ({ handleLoginMOdal, setIsOpenModal }) => {
  const [showPass, setShowPass] = useState(false);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] = useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [isValidToken, tokenLoading] = useValidToken(user || eUser || gUser);
  const [isLogin, setIsLogin] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*---------------- submit form start --------------*/
  const onSubmit = async (data) => {
    const username = data.email;
    const password = data.password;
    const info = { username, password };
    try {
      setIsLogin(true);
      const { data: result } = await axiosPrivet.post("login", info);
      await signInWithEmailAndPassword(username, password);
      Cookies.set(accessToken, result.token);
      setIsLogin(false);
    } catch (error) {
      setIsLogin(false);
      toast.error("login fail! please try again", { autoClose: 1000 });
    }
  };
  /*---------------- submit form end --------------*/

  const handleForgotPassword = () => {
    navigate("/forgot-password");
    setIsOpenModal(false);
  };

  const handleSignGoogle = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (isValidToken && location.pathname.includes("login")) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isValidToken, location.pathname]);

  return (
    <>
      <div className="p-4">
        <div className="card flex-shrink-0 w-full">
          <div className="card-body gap-0 p-0">
            <h3 className="text-center text-3xl font-bold text-black">Login</h3>
            <p className="text-sm text-center md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              Login with your email and password
            </p>
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
              <div className="form-control pt-5">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">Password</span>
                  <div>
                    <div className="absolute z-20 top-11 left-4 border-r text-lg text-primary border-gray-400 pr-4">
                      <FaLock />
                    </div>
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="text-lg absolute cursor-pointer z-20 right-3 top-11 text-gray-500"
                    >
                      <AiFillEyeInvisible className={`${showPass || "hidden"} `} />{" "}
                      <AiFillEye className={`${showPass ? "hidden" : ""} `} />
                    </div>
                  </div>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="password"
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
                <label className="label">
                  <span
                    onClick={handleForgotPassword}
                    className="label-text-alt text-sm pt-2 link link-hover  hover:text-primary"
                  >
                    Forgot password?
                  </span>
                </label>
              </div>
              {eError && <span className="text-red-500 label-text-alt">{eError?.message}</span>}
              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="btn capitalize text-neutral rounded-md btn-primary py-3 transition-all focus:outline-none my-1"
                >
                  {isLogin || loading || eLoading || gLoading || tokenLoading ? (
                    <span className="btn-loading inline-block"></span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
                <button type="button" className="bg-indigo-500 btn-loading"></button>
              </div>
            </form>
          </div>

          <div className="my-5 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
            OR
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <button
            onClick={() => handleSignGoogle()}
            className="relative  bottom-0 z-50 cursor-pointer text-sm inline-flex items-center capitalize transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 gap-1 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2"
          >
            <FaFacebookF />
            <span>Continue with google</span>
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="relative bottom-0 z-50 cursor-pointer text-sm inline-flex items-center transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md capitalize focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 gap-1 hover:text-white hover:bg-error h-11 md:h-12 w-full mr-2"
          >
            <BsGoogle />
            <span>Continue with google</span>
          </button>
        </div>
        <div className="mt-4 text-center text-gray-500">
          New to Fresh?
          {location?.pathname.includes("login") ? (
            /* If you are currently on the login page */
            <Link
              to={"/register"}
              className=" pl-2 text-primary font-semibold hover:underline cursor-pointer"
            >
              Register
            </Link>
          ) : (
            /* If you want to open login modal */
            <button
              onClick={() => handleLoginMOdal()}
              className=" pl-2 text-primary font-semibold hover:underline cursor-pointer"
            >
              Register
            </button>
          )}
        </div>
      </div>
      {/* {(loading || eLoading || gLoading) && <Loading />} */}
    </>
  );
};

export default LoginForm;
