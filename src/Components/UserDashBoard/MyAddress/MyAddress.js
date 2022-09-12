import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import auth from "../../Hooks/useAuthState";
import Loading from "../../SharedPages/Loading";
import PermanentAddress from "./PermanentAddress";
import PresentAddress from "./PresentAddress";

const MyAddress = () => {
  const [user, loading] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery(["myAddress", user], () =>
    axiosPrivet.get(`users/my-profile-details/${user?.email}`)
  );

  console.log(data);

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className=" w-full">
      <div className="m-5 dashboardBodyShadow lg:min-h-[80vh] rounded-lg ">
        <div className="flex bg-primary rounded-t-lg justify-between items-center w-full px-10 py-5 border-b">
          <h4 className="text-3xl text-white font-semibold">My Profile</h4>
          <div className="flex text-white justify-between items-center gap-2 cursor-pointer">
            <span> Edit</span>
            <span>
              <FaEdit />
            </span>
          </div>
        </div>
        <div className="p-10">
          <div>
            <PresentAddress data={data?.data?.presentAddress} refetch={refetch} user={user} />
            <PermanentAddress data={data?.data?.permanentAddress} refetch={refetch} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
