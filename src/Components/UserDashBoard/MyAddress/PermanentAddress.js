import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axiosPrivet from "../../Hooks/axiosPrivet";

const PermanentAddress = ({ data, refetch, user }) => {
  const [permanentCountry, setPermanentCountry] = useState("");
  const [permanentDistrict, setPermanentDistrict] = useState("");
  const [permanentStreetAddress, setPermanentStreetAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState(false);
  const [permanentZipCode, setPermanentZipCode] = useState("");
  const { register, handleSubmit, reset, watch } = useForm();
  const handleUpdatePermanentAddress = () => {};

  const handlePermanentAddress = () => {
    setPermanentAddress(true);
    setPermanentCountry(data?.permanentCountry && data?.permanentCountry);
    setPermanentDistrict(data?.permanentDistrict && data?.permanentDistrict);
    setPermanentStreetAddress(data?.permanentStreetAddress && data?.permanentStreetAddress);
    setPermanentZipCode(data?.zipCode && data?.zipCode);
  };

  const onSubmit = async (data) => {
    const info = {
      country: data.permanentCountry,
      district: data.permanentDistrict,
      streetAddress: data.permanentStreetAddress,
      zipCode: data.permanentZipCode,
    };
    try {
      if (user?.email) {
        const { data: result } = await axiosPrivet.patch(
          `users/update/permanentAddress/${user?.email}`,
          { info }
        );
        console.log(result);
        if (result) {
          toast.success("Update permanent Address", { id: "updatePermanentAddress" });
          reset();
          refetch();
          setPermanentAddress(false);
        }
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="mt-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center w-full">
            <h4 className="text-2xl font-semibold mb-5 text-primary">Permanent Address</h4>
            {permanentAddress ? (
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleUpdatePermanentAddress()}
                  className="bg-primary py-1 h-8 rounded-full text-neutral px-3"
                  type="submit"
                >
                  update
                </button>
                <button
                  onClick={() => setPermanentAddress(false)}
                  className="bg-primary py-1 h-8 bor rounded-full text-neutral px-3"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div
                onClick={() => handlePermanentAddress()}
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
              <label htmlFor="permanentCountry">Your Country:</label>
              {permanentAddress && (
                <input
                  type="text"
                  defaultValue={permanentCountry}
                  className="input input-bordered max-w-sm"
                  {...register("permanentCountry")}
                />
              )}
              {permanentAddress || (
                <div>
                  {data?.country ? (
                    <span className="text-lg text-primary font-semibold">{data?.country}</span>
                  ) : (
                    <span className="text-error">{"Update Your Country"}</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentDistrict">District:</label>
              {permanentAddress && (
                <input
                  type="text"
                  className="input input-bordered max-w-sm"
                  defaultValue={permanentDistrict}
                  {...register("permanentDistrict")}
                />
              )}
              {permanentAddress || (
                <div>
                  {data?.district ? (
                    <span className="text-lg text-primary font-semibold">{data?.district}</span>
                  ) : (
                    <span className="text-error">{"Update Your District"}</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentStreetAddress">Street Address:</label>
              {permanentAddress && (
                <input
                  type="text"
                  className="input input-bordered max-w-sm"
                  defaultValue={permanentStreetAddress}
                  {...register("permanentStreetAddress")}
                />
              )}
              {permanentAddress || (
                <div>
                  {data?.streetAddress ? (
                    <span className="text-lg text-primary font-semibold">
                      {data?.streetAddress}
                    </span>
                  ) : (
                    <span className="text-error">{"Update Your Street Address"}</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentZipCode">Zip Code:</label>
              {permanentAddress && (
                <input
                  type="text"
                  defaultValue={permanentZipCode}
                  className="input input-bordered max-w-sm"
                  {...register("permanentZipCode")}
                />
              )}
              {permanentAddress || (
                <div>
                  {data?.zipCode ? (
                    <span className="text-lg text-primary font-semibold">{data?.zipCode}</span>
                  ) : (
                    <span className="text-error">{"Update Your Street Address"}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PermanentAddress;
