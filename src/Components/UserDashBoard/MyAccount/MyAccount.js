import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import { format } from "date-fns";
import GraphicOrder from "./GraphicOrder";
import { FiTrendingUp } from "react-icons/fi";
import { IoSquareSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const MyAccount = () => {
  const [user, loading] = useAuthState(auth);
  const [updateUserName, setUpdateUserName] = useState(false);
  const [updateUserNumber, setUpdateUserNumber] = useState(false);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const { data, isLoading, refetch, error } = useQuery(["getProfileDetails", user], () =>
    axiosPrivet.get(`users/my-profile-details/${user?.email}`)
  );

  /* ----------- handle User Name --------------- */
  const handleUserName = () => {
    setUpdateUserName(true);
    setUserName(data?.data?.displayName && data?.data?.displayName);
  };

  /* -------------- handle Update UserName ---------------- */
  const handleUpdateUserName = async () => {
    try {
      await updateProfile({ displayName: userName });
      if (updatingError) {
        toast.error(updatingError?.message, { autoClose: 1000 });
        return;
      }
      await axiosPrivet.put(`users/update/userName/${user?.email}`, {
        displayName: userName,
      });
      setUpdateUserName(false);
      toast.success("Updated UserName", { autoClose: 1000 });
      refetch();
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
      refetch();
    }
  };

  /* ----------- handle User Number ------------ */
  const handleUserNumber = () => {
    setUpdateUserNumber(true);
    setUserNumber(data?.data?.displayNumber && data?.data?.displayNumber);
  };

  /* --------- handle Update User Number --------- */
  const handleUpdateUserNumber = async () => {
    try {
      await updateProfile({ phoneNumber: userNumber });
      if (updatingError) {
        toast.error(updatingError?.message, { autoClose: 1000 });
        return;
      }
      await axiosPrivet.put(`users/update/Number/${user?.email}`, {
        phoneNumber: userNumber,
      });
      setUpdateUserNumber(false);
      toast.success("Updated UserNumber", { autoClose: 1000 });
      refetch();
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
      refetch();
    }
  };

  /* ------------ handle loading -------------- */
  if (loading || isLoading || updating) {
    return <Loading />;
  }

  /*---------- joined date ----------*/
  let joiningDate;
  if (data?.data?.createdAt) {
    joiningDate = format(new Date(data?.data?.createdAt), "MMMM d, yyyy h:mm aa");
  }

  console.log(error);

  return (
    <div className="w-full h-full">
      <div className="m-5 h-full dashboardBodyShadow  rounded-lg">
        <div className="flex rounded-t-lg justify-between items-center w-full px-10 py-5 border-b">
          <h4 className="text-3xl capitalize font-semibold">My Profile</h4>
        </div>
        <div className="p-10">
          <div className="w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-7 gap-y-8">
              <div className="border p-6 flex flex-col gap-y-6">
                <div className="flex justify-between ">
                  <div className="leading-6 xl:flex xl:gap-x-28 flex-col">
                    <label className="text-black pb-2 text-sm font-bold">Name:</label>
                    {updateUserName ? (
                      <div>
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="input h-8 rounded-none input-bordered w-full "
                        />
                      </div>
                    ) : (
                      <p className="text-sm">
                        {data?.data?.displayName ? (
                          <span className="text-[#818181]">{data?.data?.displayName}</span>
                        ) : (
                          <span className="text-error">Update Your Name</span>
                        )}
                      </p>
                    )}
                  </div>
                  {updateUserName ? (
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleUpdateUserName()}
                        className="bg-primary inline-block py-[3px] rounded-full text-sm  text-neutral px-3"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setUpdateUserName(false)}
                        className="bg-primary inline-block py-[3px] rounded-full text-sm  text-neutral px-3"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleUserName()}
                      className="flex justify-between items-center gap-2 cursor-pointer text-sm text-primary"
                    >
                      <span> Edit</span>
                      <span>
                        <FaEdit />
                      </span>
                    </div>
                  )}
                </div>
                <div className="leading-6 xl:flex xl:gap-x-28 flex-col">
                  <label className="text-black pb-2 text-sm font-bold">Email Address:</label>
                  <p className="text-sm">
                    {data?.data?.email ? (
                      <span className="text-[#818181]">{data?.data?.email}</span>
                    ) : (
                      <span className="text-error">Update Your Email Address</span>
                    )}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <div className="leading-6 xl:flex xl:gap-x-28 flex-col">
                    <label className="text-black pb-2 text-sm font-bold">Phone Number:</label>
                    {updateUserNumber ? (
                      <div>
                        <input
                          type="text"
                          value={userNumber}
                          onChange={(e) => setUserNumber(e.target.value)}
                          className="input h-8 rounded-none input-bordered w-full "
                        />
                      </div>
                    ) : (
                      <p className="text-sm">
                        {data?.data?.phoneNumber ? (
                          <span className="text-[#818181]">{data?.data?.phoneNumber}</span>
                        ) : (
                          <span className="text-error"> Update Your Phone Number</span>
                        )}
                      </p>
                    )}
                  </div>
                  {updateUserNumber ? (
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleUpdateUserNumber()}
                        className="bg-primary inline-block py-[3px] rounded-full text-sm text-neutral px-3"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setUpdateUserNumber(false)}
                        className="bg-primary inline-block py-[3px] rounded-full text-sm  text-neutral px-3"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleUserNumber()}
                      className="flex justify-between items-center gap-2 cursor-pointer text-sm text-primary"
                    >
                      <span> Edit</span>
                      <span>
                        <FaEdit />
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="border p-6 flex flex-col gap-y-6">
                <div className="leading-6 xl:flex xl:gap-x-28 flex-col">
                  <label className="text-black pb-2 text-sm font-bold">Joined:</label>
                  <p className="text-sm text-[#818181]">{joiningDate && joiningDate}</p>
                </div>
                <div className="leading-6 xl:flex xl:gap-x-28 flex-col">
                  <label className="text-black pb-2 text-sm font-bold">Role:</label>
                  <p className="text-sm text-[#818181]">{data?.data?.role}</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="flex pb-4 justify-between items-center">
                <h5 className="flex items-center text-lg text-[#070815] font-semibold">
                  Graphic Order <FiTrendingUp className="ml-4 mr-2 text-[#5CC47C] font-[500]" />{" "}
                  <span className="text-[#5CC47C] font-[500] text-[16px]">+$500</span>
                </h5>
                <div className="flex gap-2 items-center">
                  <IoSquareSharp className="text-primary w-[10px] h-[10px]" />{" "}
                  <span className="text-[#969696] text-sm">Income</span>
                </div>
              </div>
              <GraphicOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
