import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import axiosPrivet from "../../Hooks/axiosPrivet";

const PresentAddress = ({ data, refetch, user }) => {
  const [presentCountry, setPresentCountry] = useState("");
  const [presentDistrict, setPresentDistrict] = useState("");
  const [presentStreetAddress, setPresentStreetAddress] = useState("");
  const [presentAddress, setPresentAddress] = useState(false);

  const { register, handleSubmit, reset, watch } = useForm();

  const handleUpdatePresentAddress = () => {};

  const handlePresentAddress = () => {
    setPresentAddress(true);
    setPresentCountry(data?.presentCountry && data?.presentCountry);
    setPresentDistrict(data?.presentDistrict && data?.presentDistrict);
    setPresentStreetAddress(data?.presentStreetAddress && data?.presentStreetAddress);
  };
  const onSubmit = async (data) => {
    if (user?.email) {
      const { data: result } = await axiosPrivet.patch(`presentAddress/${user?.email}`, data);
      if (result?.acknowledged) {
        toast.success("Update Permanent Address", { id: "updatePresentAddress" });
        reset();
        refetch();
        setPresentAddress(false);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center w-full">
          <h4 className="text-xl font-bold mb-3 text-primary">Present Address</h4>
          {presentAddress ? (
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleUpdatePresentAddress()}
                type="submit"
                className="bg-primary py-1 h-8 rounded-full text-neutral px-3"
              >
                update
              </button>
              <button
                onClick={() => setPresentAddress(false)}
                className="bg-primary py-1 h-8 bor rounded-full text-neutral px-3"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div
              onClick={() => handlePresentAddress()}
              className="flex justify-between items-center gap-2 cursor-pointer"
            >
              <span> Edit</span>
              <span>
                <FaEdit />
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
          <div className="flex flex-col leading-7">
            <label htmlFor="presentCountry">Your Country</label>
            {presentAddress && (
              <input
                type="text"
                className="input input-bordered max-w-sm"
                defaultValue={presentCountry}
                {...register("presentCountry")}
              />
            )}
            {presentAddress || (
              <div>
                {data?.presentCountry ? (
                  <span className="text-lg">{data?.presentCountry}</span>
                ) : (
                  <span className="text-error">{"Update Your Country"}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentDistrict">District</label>
            {presentAddress && (
              <input
                type="text"
                defaultValue={presentDistrict}
                className="input input-bordered max-w-sm"
                {...register("presentDistrict")}
              />
            )}
            {presentAddress || (
              <div>
                {data?.presentDistrict ? (
                  <span className="text-lg">{data?.presentDistrict}</span>
                ) : (
                  <span className="text-error">{"Update Your District"}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentStreetAddress">Street Address</label>
            {presentAddress && (
              <input
                type="text"
                defaultValue={presentStreetAddress}
                className="input input-bordered max-w-sm"
                {...register("presentStreetAddress")}
              />
            )}
            {presentAddress || (
              <div>
                {data?.presentStreetAddress ? (
                  <span className="text-lg">{data?.presentStreetAddress}</span>
                ) : (
                  <span className="text-error">{"Update Your Street Address"}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default PresentAddress;
