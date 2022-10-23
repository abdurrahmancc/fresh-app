import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../Hooks/useAuthState";
import emptyUser from "../../assets/logo/empty-user.png";
import Breadcrumb from "../SharedPages/Breadcrumb";
import Footer from "../SharedPages/Footer/Footer";
import Loading from "../SharedPages/Loading";
import Newsletters from "../SharedPages/Newsletters/Newsletters";
import { NavLink, Outlet } from "react-router-dom";
import { IoCloseCircle, IoLocationOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import "./userDashboard.css";
import { VscSettings } from "react-icons/vsc";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { accessToken, removeCookie } from "../Hooks/useCookies";
import { useState } from "react";
import { imgUpload } from "../api/api";
import axiosPrivet from "../Hooks/axiosPrivet";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  /* ------------ handle Update Photo ------------- */
  const handleUpdatePhoto = async (data) => {
    try {
      const inputImages = data[0];
      const formData = new FormData();
      formData.append("image", inputImages);
      const image = await imgUpload(formData);
      if (image?.data?.url) {
        await updateProfile({ photoURL: image?.data?.url });
        if (updatingError) {
          toast.error(updatingError?.message, { autoClose: 1000 });
          return;
        }
        await axiosPrivet.put(`users/update/photoURL/${user?.email}`, {
          photoURL: image?.data?.url,
        });
        setIsUpdate(false);
        toast.success("Updated Image", { autoClose: 1000 });
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
    }
  };

  const handleSignOut = async () => {
    signOut(auth);
    removeCookie(accessToken);
  };

  if (loading || updating) {
    return <Loading />;
  }

  return (
    <>
      <main className="">
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        <section className="container mx-auto mt-10">
          <div className="flex md:flex-row flex-col gap-y-10">
            <div className="min-h-[780px]">
              <ul className="menu min-h-[780px] h-full lg:w-[290px] m-5 rounded-lg dashboardBodyShadow bg-white text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li className="border-b hover:bg-white border-primary mb-4">
                  <div className="absolute hover:bg-white right-0">
                    {!isUpdate ? (
                      <button onClick={() => setIsUpdate(!isUpdate)} className="focus:bg-white">
                        <FiEdit2 className="text-primary" />
                      </button>
                    ) : (
                      <button onClick={() => setIsUpdate(!isUpdate)} className="focus:bg-white">
                        <IoCloseCircle className="text-primary" />
                      </button>
                    )}
                  </div>
                  <div className="p-10 hover:bg-white flex flex-col">
                    <div className="avatar online mx-auto">
                      <div className="w-24 border-2 border-primary rounded-full">
                        <img
                          src={user?.photoURL ? user?.photoURL : emptyUser}
                          className={"mx-auto"}
                          alt="user_logo"
                        />
                      </div>
                    </div>
                    {isUpdate ? (
                      <label htmlFor="updatePhotoModal">
                        <label htmlFor="updatePhoto">
                          <input
                            onChange={(e) => handleUpdatePhoto(e.target.files)}
                            id="updatePhoto"
                            type="file"
                            className="hidden"
                          />
                          <h5 className=" px-5 py-2 inline-block text-center mx-auto bg-primary rounded-full text-neutral font-semibold text-sm capitalize">
                            Upload Photo
                          </h5>
                        </label>
                      </label>
                    ) : (
                      <h5 className=" font-semibold text-xl">{user?.displayName}</h5>
                    )}
                  </div>
                </li>
                <li className="mx-5">
                  <NavLink
                    to={"/user-dashboard/user-dashboard-details"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[16px] text-white duration-300 ease-linear transition bg-gradient-to-r from-primary lg:px-10 px-3 rounded-md to-[#66b436]"
                        : "text-[16px] duration-300 ease-linear transition lg:px-10 px-3 active:bg-gradient-to-r from-primary rounded-md to-[#66b436] active:text-white"
                    }
                  >
                    <VscSettings className="rotate-90 font-bold" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="mx-5">
                  <NavLink
                    to={"/user-dashboard/my-account"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[16px] text-white duration-300 ease-linear transition bg-gradient-to-r from-primary to-[#66b436] lg:px-10 px-3 rounded-md"
                        : "text-[16px] duration-300 ease-linear transition lg:px-10 px-3 active:bg-gradient-to-r from-primary rounded-md to-[#66b436] active:text-white"
                    }
                  >
                    <BiUser />
                    My Profile
                  </NavLink>
                </li>
                <li className="mx-5">
                  <NavLink
                    to={"/user-dashboard/my-order"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[16px] text-white duration-300 ease-linear transition bg-gradient-to-r from-primary to-[#66b436] lg:px-10 px-3 rounded-md"
                        : "text-[16px] duration-300 ease-linear transition lg:px-10 px-3 active:bg-gradient-to-r from-primary rounded-md to-[#66b436] active:text-white"
                    }
                  >
                    <span>
                      <MdAddShoppingCart />
                    </span>{" "}
                    My Orders
                  </NavLink>
                </li>
                <li className="mx-5">
                  <NavLink
                    to={"/user-dashboard/my-address"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[16px] text-white duration-300 ease-linear transition bg-gradient-to-r from-primary to-[#66b436] lg:px-10 px-3 rounded-md"
                        : "ld:text-[16px] duration-300 ease-linear transition lg:px-10 px-3 active:bg-gradient-to-r from-primary rounded-md to-[#66b436] active:text-white"
                    }
                  >
                    <span>
                      <IoLocationOutline />
                    </span>{" "}
                    My Address
                  </NavLink>
                </li>
                <li className="mx-5 pb-4">
                  <button
                    onClick={handleSignOut}
                    className={
                      "text-[16px] active:bg-gradient-to-r from-primary rounded-md to-[#66b436] active:text-white lg:px-10 px-3 duration-300 ease-linear transition hover:rounded-md"
                    }
                  >
                    <span>
                      <FiLogOut />
                    </span>{" "}
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full min-h-[780px]">
              <Outlet />
            </div>
          </div>
        </section>
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default UserDashboard;
