import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import emptyUser from "../../../assets/logo/empty-user.png";
import { imgUpload } from "../../api/api";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import { format } from "date-fns";

const MyAccount = () => {
  const [user, loading] = useAuthState(auth);
  const [updateUserName, setUpdateUserName] = useState(false);
  const [updateUserNumber, setUpdateUserNumber] = useState(false);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [photoURL, setPhotoURL] = useState(false);

  const { data, isLoading, refetch } = useQuery(["getProfileDetails", user], () =>
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
        toast.error(updatingError?.message);
        return;
      }
      await axiosPrivet.put(`users/update/userName/${user?.email}`, {
        displayName: userName,
      });
      setUpdateUserName(false);
      toast.success("Updated UserName", { id: "updateUserName" });
      refetch();
    } catch (error) {
      toast.error(error.message, { id: "updateUserName-error" });
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
        toast.error(updatingError?.message);
        return;
      }
      await axiosPrivet.put(`users/update/Number/${user?.email}`, {
        phoneNumber: userNumber,
      });
      setUpdateUserNumber(false);
      toast.success("Updated UserNumber", { id: "updateUserNumber" });
      refetch();
    } catch (error) {
      toast.error(error.message, { id: "updateUserNumber-error" });
      refetch();
    }
  };

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
          toast.error(updatingError?.message);
          return;
        }
        await axiosPrivet.put(`users/update/photoURL/${user?.email}`, {
          photoURL: image?.data?.url,
        });
        setUpdateUserName(false);
        toast.success("Updated Image", { id: "updateUserImage" });
        refetch();
      }
    } catch (error) {
      toast.error(error.message, { id: "updateUserImage-error" });
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

  return (
    <div className="w-full">
      <div className="m-5 dashboardBodyShadow lg:min-h-[80vh] rounded-lg">
        <div className="flex bg-primary rounded-t-lg justify-between items-center w-full px-10 py-5 border-b">
          <h4 className="text-3xl text-white font-semibold">My Profile</h4>
          <div className="flex justify-between text-white items-center gap-2 cursor-pointer">
            <span> Edit</span>
            <span>
              <FaEdit />
            </span>
          </div>
        </div>
        <div className="lg:py-10 p-10 xl:pl-0">
          <div className="grid lg:grid-cols-5 lg:gap-10 xl:gap-0 grid-cols-1">
            <div className="col-span-2 w-full">
              <div className="avatar justify-center w-full">
                <div className="w-44 h-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={data?.data?.photoURL ? data?.data?.photoURL : emptyUser}
                    alt="my images"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <label htmlFor="updatePhotoModal">
                  <label htmlFor="updatePhoto">
                    <input
                      onChange={(e) => handleUpdatePhoto(e.target.files)}
                      id="updatePhoto"
                      type="file"
                      className="hidden"
                    />
                    <h5 className=" px-5 py-2 inline-block text-center mx-auto bg-primary rounded-full text-neutral capitalize font-normal">
                      Upload Photo
                    </h5>
                  </label>
                </label>
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-y-8 mt-10 lg:mt-0">
              <div className="flex justify-between ">
                <div className="leading-6 xl:flex xl:gap-x-28 items-center">
                  <h4>Name:</h4>
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
                    <p className="text-lg ">
                      {data?.data?.displayName ? (
                        <span className="text-primary font-semibold">
                          {data?.data?.displayName}
                        </span>
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
                      className="bg-primary py-1 flex items-center rounded-full text-neutral px-3"
                    >
                      update
                    </button>
                    <button
                      onClick={() => setUpdateUserName(false)}
                      className="bg-primary py-1 flex items-center  rounded-full text-neutral px-3"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleUserName()}
                    className="flex justify-between items-center gap-2 cursor-pointer"
                  >
                    <span> Edit</span>
                    <span>
                      <FaEdit />
                    </span>
                  </div>
                )}
              </div>
              <div className="leading-6 xl:flex xl:gap-x-14 items-center">
                <h4>Email Address:</h4>
                <p className="text-lg">
                  {data?.data?.email ? (
                    <span className="text-primary font-semibold">{data?.data?.email}</span>
                  ) : (
                    <span className="text-error">Update Your Email Address</span>
                  )}
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="leading-6 xl:flex xl:gap-x-12 items-center">
                  <h4>Phone Number:</h4>
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
                    <p className="text-lg">
                      {data?.data?.phoneNumber ? (
                        <span className="text-primary font-semibold">
                          {data?.data?.phoneNumber}
                        </span>
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
                      className="bg-primary py-1 flex items-center  rounded-full text-neutral px-3"
                    >
                      update
                    </button>
                    <button
                      onClick={() => setUpdateUserNumber(false)}
                      className="bg-primary py-1 flex items-center  rounded-full text-neutral px-3"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleUserNumber()}
                    className="flex justify-between items-center gap-2 cursor-pointer"
                  >
                    <span> Edit</span>
                    <span>
                      <FaEdit />
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between ">
                <div className="leading-6 xl:flex xl:gap-x-28 items-center">
                  <h4>Joined:</h4>
                  <p className="text-lg text-primary font-semibold">{joiningDate && joiningDate}</p>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="leading-6 xl:flex xl:gap-x-14 items-center">
                  <h4>Device Activity:</h4>
                  <p className="text-lg text-primary font-semibold flex gap-2">
                    {data?.data?.loginDevices &&
                      data?.data?.loginDevices.map((device, i) => {
                        return (
                          <span key={i}>
                            ({i + 1}) {device?.browser?.name}
                          </span>
                        );
                      })}
                  </p>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="leading-6 xl:flex xl:gap-x-32 items-center">
                  <h4>Role:</h4>
                  <p className="text-lg text-primary font-semibold">{data?.data?.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
