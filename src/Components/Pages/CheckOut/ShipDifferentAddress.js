import React, { useState } from "react";
import Collapsible from "react-collapsible";

const ShipDifferentAddress = ({ register, errors }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="form-control pb-5">
        <label className="label justify-start gap-2 cursor-pointer">
          <input
            onClick={() => setIsChecked(!isChecked)}
            type="checkbox"
            className="checkbox rounded-sm checkbox-xs text-white checkbox-primary"
          />
          <span className="label-text">Ship to a different address?</span>
        </label>
      </div>
      <Collapsible className="w-full" open={isChecked}>
        {isChecked && (
          <div className="m-1">
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* First Name  */}
              <div className="form-control pb-5 w-full">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name *"
                  className="input rounded-none  input-bordered"
                  {...register("firstName", {
                    required: { value: true, message: "First Name is require" },
                  })}
                />
                {errors.firstName?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.firstName?.message}
                  </span>
                )}
              </div>
              {/* last Name */}
              <div className="form-control pb-5 w-full">
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name *"
                  className="input rounded-none  input-bordered"
                  {...register("lastName", {
                    required: { value: true, message: "Last Name Name is require" },
                  })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.lastName?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* company Name */}
              <div className="form-control pb-5 w-full">
                <input
                  id="companyName"
                  type="text"
                  placeholder="Company Name *"
                  className="input rounded-none input-bordered"
                  {...register("companyName", {
                    required: { value: true, message: "Company Name is require" },
                  })}
                />
                {errors.companyName?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.companyName?.message}
                  </span>
                )}
              </div>
              {/* Country */}
              <div className="form-control pb-5 w-full">
                <input
                  id="country"
                  type="text"
                  placeholder="Country *"
                  className="input rounded-none input-bordered"
                  {...register("country", {
                    required: { value: true, message: "country is require" },
                  })}
                />
                {errors.country?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.country?.message}
                  </span>
                )}
              </div>
            </div>
            {/* Street Address */}
            <div className="form-control pb-5 w-full">
              <input
                id="streetAddress"
                type="text"
                placeholder="Home Number And Street Address *"
                className="input rounded-none input-bordered"
                {...register("streetAddress", {
                  required: { value: true, message: "Street Address is require" },
                })}
              />
              {errors.streetAddress?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.streetAddress?.message}
                </span>
              )}
            </div>
            <div className="form-control pb-4">
              <input
                id="streetAddress2"
                type="text"
                placeholder="Address (Optional)"
                className="input rounded-none input-bordered"
                {...register("streetAddress2")}
              />
            </div>
            {/* Town / City */}
            <div className="form-control pb-5 w-full">
              <input
                id="townCity"
                type="text"
                placeholder="City *"
                className="input rounded-none input-bordered"
                {...register("townCity", {
                  required: { value: true, message: "Town / City Address is require" },
                })}
              />
              {errors?.townCity?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.townCity?.message}
                </span>
              )}
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* State */}
              <div className="form-control pb-5 w-full">
                <input
                  id="state"
                  type="text"
                  placeholder="State *"
                  className="input rounded-none input-bordered"
                  {...register("state", {
                    required: { value: true, message: "State Address is require" },
                  })}
                />
                {errors?.state?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors?.state?.message}
                  </span>
                )}
              </div>
              {/* Postcode / Zip */}
              <div className="form-control pb-5 w-full">
                <input
                  id="postcode"
                  type="text"
                  placeholder="Postcode / Zip *"
                  className="input rounded-none input-bordered"
                  {...register("postcode", {
                    required: { value: true, message: "Postcode is require" },
                  })}
                />
                {errors.postcode?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.postcode?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Collapsible>
    </>
  );
};

export default ShipDifferentAddress;
