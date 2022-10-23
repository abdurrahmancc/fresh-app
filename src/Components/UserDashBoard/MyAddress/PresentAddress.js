import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosPrivet from "../../Hooks/axiosPrivet";

const PresentAddress = ({ data, refetch, user }) => {
  const [presentCountry, setPresentCountry] = useState("");
  const [presentDistrict, setPresentDistrict] = useState("");
  const [presentStreetAddress, setPresentStreetAddress] = useState("");
  const [presentZipCode, setPresentZipCode] = useState("");
  const [presentAddress, setPresentAddress] = useState(false);
  const { register, handleSubmit, reset } = useForm();

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
          toast.success("Update Permanent Address", { autoClose: 1000 });
          reset();
          refetch();
          setPresentAddress(false);
        }
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 1000 });
      refetch();
    }
  };
  return (
    <>
      {/* ============ Present Address form ========== */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center w-full">
          <h4 className="text-2xl font-semibold mb-5 text-primary">Present Address</h4>
          {presentAddress ? (
            <div className="flex gap-2 items-center">
              <button
                type="submit"
                className="bg-primary text-sm inline-block py-[3px] rounded-full text-neutral px-3"
              >
                update
              </button>
              <button
                onClick={() => setPresentAddress(false)}
                className="bg-primary text-sm inline-block py-[3px] rounded-full text-neutral px-3"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div
              onClick={() => handlePresentAddress()}
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
            <label htmlFor="presentCountry" className="text-sm font-bold text-black pb-2">
              Your Country:
            </label>
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
                  <span className="text-[16px] text-[#969696]">{data?.country}</span>
                ) : (
                  <span className="text-error text-sm">Update Your Country</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentDistrict" className="text-sm font-bold pb-2 text-black">
              District:
            </label>
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
                  <span className="text-[16px] text-[#969696] ">{data?.district}</span>
                ) : (
                  <span className="text-error text-sm">Update Your District</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentStreetAddress" className="text-sm font-bold text-black pb-2">
              Street Address:
            </label>
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
                  <span className="text-[16px] text-[#969696]">{data?.streetAddress}</span>
                ) : (
                  <span className="text-error text-sm">Update Your Street Address</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col leading-7">
            <label htmlFor="presentZipCode" className="text-sm font-bold pb-2">
              Zip Code:
            </label>
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
                  <span className="text-[16px] text-[#969696]">{data?.zipCode}</span>
                ) : (
                  <span className="text-error text-sm">Update Zip Code</span>
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
