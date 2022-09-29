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
  const { register, handleSubmit, reset } = useForm();

  const handlePermanentAddress = () => {
    setPermanentAddress(true);
    setPermanentCountry(data?.country && data?.country);
    setPermanentDistrict(data?.district && data?.district);
    setPermanentStreetAddress(data?.streetAddress && data?.streetAddress);
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
                  className="bg-primary inline-block py-[3px] rounded-full text-sm text-neutral px-3"
                  type="submit"
                >
                  update
                </button>
                <button
                  onClick={() => setPermanentAddress(false)}
                  className="bg-primary inline-block py-[3px] rounded-full text-sm text-neutral px-3"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div
                onClick={() => handlePermanentAddress()}
                className="flex justify-between items-center gap-2 cursor-pointer text-primary"
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
              <label htmlFor="permanentCountry" className="text-sm font-bold text-black pb-2">
                Your Country:
              </label>
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
                    <span className="text-[16px] text-[#969696]">{data?.country}</span>
                  ) : (
                    <span className="text-error text-sm">Update Your Country</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentDistrict" className="text-sm text-black font-bold pb-2">
                District:
              </label>
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
                    <span className="text-[16px] text-[#969696]">{data?.district}</span>
                  ) : (
                    <span className="text-error text-sm">Update Your District</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentStreetAddress" className="text-sm font-bold text-black pb-2">
                Street Address:
              </label>
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
                    <span className="text-[16px] text-[#969696]">{data?.streetAddress}</span>
                  ) : (
                    <span className="text-error text-sm">Update Your Permanent Address</span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col leading-7">
              <label htmlFor="permanentZipCode" className="text-sm font-bold text-black pb-2">
                Zip Code:
              </label>
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
                    <span className="text-[16px] text-[#969696]">{data?.zipCode}</span>
                  ) : (
                    <span className="text-error text-sm">Update Zip Code</span>
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
