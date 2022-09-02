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

const MyAccount = () => {
  const [user, loading] = useAuthState(auth);
  const [updateUserName, setUpdateUserName] = useState(false);
  const [updateUserNumber, setUpdateUserNumber] = useState(false);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [photoURL, setPhotoURL] = useState(false);

  const { data, isLoading, refetch } = useQuery(["profileDetails", user], () =>
    axiosPrivet.get(`profileDetails/${user?.email}`)
  );

  const handleUserName = () => {
    setUpdateUserName(true);
    setUserName(data?.data?.displayName && data?.data?.displayName);
  };

  const handleUpdateUserName = async () => {
    await updateProfile({ displayName: userName });
    if (updatingError) {
      toast.error(updatingError?.message);
      return;
    }
    const { data } = await axiosPrivet.put(`updateUserName/${user?.email}`, {
      displayName: userName,
    });
    if (data?.acknowledged) {
      setUpdateUserName(false);
      toast.success("Updated UserName", { id: "updateUserName" });
      refetch();
    }
  };

  const handleUserNumber = () => {
    setUpdateUserNumber(true);
    setUserNumber(data?.data?.displayNumber && data?.data?.displayNumber);
  };

  const handleUpdateUserNumber = async () => {
    await updateProfile({ phoneNumber: userNumber });
    if (updatingError) {
      toast.error(updatingError?.message);
      return;
    }
    const { data } = await axiosPrivet.put(`updateUserNumber/${user?.email}`, {
      phoneNumber: userNumber,
    });
    if (data?.acknowledged) {
      setUpdateUserNumber(false);
      toast.success("Updated UserNumber", { id: "updateUserNumber" });
      refetch();
    }
  };

  // const handleUpdatePhoto = async () => {
  //   setPhotoURL(true);
  //   // reset();
  // };

  const handleUpdatePhoto = async (data) => {
    console.log(data);
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
      const { data: result } = await axiosPrivet.put(`updateUserImage/${user?.email}`, {
        photoURL: image?.data?.url,
      });
      if (result?.acknowledged) {
        // setUpdateUserName(false);
        toast.success("Updated Image", { id: "updateUserImage" });
        refetch();
      }
    }
    console.log(image);
  };

  if (loading || isLoading || updating) {
    return <Loading />;
  }

  return (
    <div className=" w-full">
      <div className="m-5 dashboardBodyShadow rounded-lg">
        <div className="flex justify-between items-center w-full px-10 py-5 border-b">
          <h4 className="text-2xl font-bold">My Profile</h4>
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <span> Edit</span>
            <span>
              <FaEdit />
            </span>
          </div>
        </div>
        <div className="lg:py-10 p-10">
          <div className="grid lg:grid-cols-5 grid-cols-1">
            <div className="col-span-2 w-full">
              <div className="avatar justify-center w-full">
                <div className="w-44 h-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={data?.data?.photoURL ? data?.data?.photoURL : emptyUser} />
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
                      // {...register("inputImage")}
                    />

                    <h5 className=" px-5 py-2 inline-block text-center mx-auto bg-primary rounded-full text-neutral capitalize font-normal">
                      Upload Photo
                    </h5>
                  </label>
                </label>
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-5 mt-10 lg:mt-0">
              <div className="leading-6">
                <h4>User ID:</h4>
                <p className="text-lg">{data?.data?._id}</p>
              </div>
              <div className="flex justify-between ">
                <div className="leading-6">
                  <h4>Full name:</h4>
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
                    <p className="text-lg">
                      {data?.data?.displayName ? data?.data?.displayName : "Update Your Name"}
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
              <div className="leading-6">
                <h4>Email Address:</h4>
                <p className="text-lg">
                  {data?.data?.email ? data?.data?.email : "Update Your Email Address"}
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="leading-6">
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
                      {data?.data?.phoneNumber
                        ? data?.data?.phoneNumber
                        : "Update Your Phone Number"}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
