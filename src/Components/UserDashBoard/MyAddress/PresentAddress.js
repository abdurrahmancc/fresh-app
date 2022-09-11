import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import axiosPrivet from "../../Hooks/axiosPrivet";

const PresentAddress = ({ data, refetch, user }) => {
  const [presentCountry, setPresentCountry] = useState("");
  const [presentDistrict, setPresentDistrict] = useState("");
  const [presentStreetAddress, setPresentStreetAddress] = useState("");
  const [presentZipCode, setPresentZipCode] = useState("");
  const [presentAddress, setPresentAddress] = useState(false);

  const { register, handleSubmit, reset, watch } = useForm();

  const handleUpdatePresentAddress = () => {};

  const handlePresentAddress = () => {
    setPresentAddress(true);
    setPresentCountry(data?.country && data?.country);
    setPresentDistrict(data?.district && data?.district);
    setPresentStreetAddress(data?.streetAddress && data?.streetAddress);
    setPresentZipCode(data?.zipCode && data?.zipCode);
  };

  const onSubmit = async (data) => {
    const info = {
      country: data.presentCountry,
      district: data.presentDistrict,
      streetAddress: data.presentStreetAddress,
      zipCode: data.presentZipCode,
    };
    try {
      if (user?.email) {
        const { data: result } = await axiosPrivet.patch(
          `users/update/presentAddress/${user?.email}`,
          { info }
        );
        if (result) {
          toast.success("Update Permanent Address", { id: "updatePresentAddress" });
          reset();
          refetch();
          setPresentAddress(false);
        }
      }
    } catch (error) {
      toast.error(error.message, { id: "updatePermanentAddress-error" });
      refetch();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center w-full">
          <h4 className="text-2xl font-semibold mb-5 text-primary">Present Address</h4>
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
            <label htmlFor="presentCountry">Your Country:</label>
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
                {data?.country ? (
                  <span className="text-lg text-primary font-semibold">{data?.country}</span>
                ) : (
                  <span className="text-error">{"Update Your Country"}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentDistrict">District:</label>
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
                {data?.district ? (
                  <span className="text-lg text-primary font-semibold">{data?.district}</span>
                ) : (
                  <span className="text-error">{"Update Your District"}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentStreetAddress">Street Address:</label>
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
                {data?.streetAddress ? (
                  <span className="text-lg text-primary font-semibold">{data?.streetAddress}</span>
                ) : (
                  <span className="text-error">{"Update Your Street Address"}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentZipCode">Zip Code:</label>
            {presentAddress && (
              <input
                type="text"
                defaultValue={presentZipCode}
                className="input input-bordered max-w-sm"
                {...register("presentZipCode")}
              />
            )}
            {presentAddress || (
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
    </>
  );
};

export default PresentAddress;
