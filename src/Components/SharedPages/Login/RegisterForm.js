import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaLock, FaUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import { accessToken } from "../../Hooks/useCookies";
import useToken from "../../Hooks/useToken";
import Loading from "../Loading";

const RegisterForm = ({ handleLoginMOdal }) => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [matchingPass, setMatchingPass] = useState("");
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, cUser, cLoading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser || cUser);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const confirmPassword = data.confirmPassword;
    const password = data.password;
    const displayName = data.name;
    const info = { displayName, password, email };
    if (password !== confirmPassword) {
      setMatchingPass("Password does not match");
      return;
    }
    try {
      const { data: result } = await axiosPrivet.post("/users", info);
      if (result.token) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        Cookies.set(accessToken, result.token);
        toast.success("check email and please verify");
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.errors?.email) {
        setError("email", { type: "pattern", message: error?.response?.data?.errors?.email?.msg });
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  console.log(token);

  if (updating || loading || cLoading || gLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={`p-4 `}>
        <div className="card flex-shrink-0 w-full">
          <div className="card-body gap-0 p-0">
            <h3 className="text-center text-3xl font-bold text-black">Register</h3>
            <p className="text-sm text-center md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              Create an account with email
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">Full name</span>
                  <span className="absolute top-11 left-4 border-r  border-gray-500 pr-4 z-20 text-lg text-primary">
                    <FaUser />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input bg-white input-bordered pl-16 py-2 w-full appearance-none border text-gray-700 placeholder:text-gray-700 text-sm rounded-md min-h-12 transition duration-200 focus:ring-0 ease-in-out border-gray-300 focus:outline-none focus:border-primary h-11 md:h-12"
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
              <div className="form-control pt-5">
                <label className="label relative pt-0 pb-2">
                  <span className="label-text text-gray-500">Email</span>
                  <span className="absolute top-11 left-4 border-r  border-gray-500 pr-4 z-20 text-lg text-primary">
                    <GrMail />
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                  <span className="label-text text-gray-500">Confirm Password</span>
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
                {loading || gLoading ? (
                  <span className="label-text-alt">Loading...</span>
                ) : errors.confirmPassword?.type === "pattern" ? (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                ) : (
                  errors.confirmPassword?.type === "required" && (
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
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="my-5 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
            OR
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <button
            onClick={() => signInWithGoogle()}
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
          Already have a account?
          {location?.pathname.includes("register") ? (
            /* If you are currently on the login page */
            <Link
              to={"/login"}
              className=" pl-2 text-primary font-semibold hover:underline cursor-pointer"
            >
              Login
            </Link>
          ) : (
            /* If you want to open login modal */
            <button
              onClick={() => handleLoginMOdal()}
              className="text-primary pl-2 font-semibold hover:underline cursor-pointer"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
