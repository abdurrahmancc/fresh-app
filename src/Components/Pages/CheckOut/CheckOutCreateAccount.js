import React, { useState } from "react";
import Collapsible from "react-collapsible";

const CheckOutCreateAccount = ({ register, errors }) => {
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
          <span className="label-text">Create an account?</span>
        </label>
      </div>
      <Collapsible className="w-full" open={isChecked}>
        {isChecked && (
          <div className="grid lg:grid-cols-2 lg:gap-5">
            {/* Create account password * */}
            <div className="form-control pb-5 w-full">
              {/* <label htmlFor="createAccountPassword" className="label">
        <span className="label-text text-xs">Create account password *</span>
      </label> */}
              <input
                id="createAccountPassword"
                type="text"
                placeholder="Create account password *"
                className="input rounded-none input-bordered"
                {...register("state", {
                  required: { value: true, message: "Password is Require" },
                })}
              />
              {errors?.state?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors?.state?.message}
                </span>
              )}
            </div>
            {/* Confirm Password **/}
            <div className="form-control pb-5 w-full">
              {/* <label htmlFor="confirmPassword" className="label">
        <span className="label-text text-xs">Confirm Password *</span>
      </label> */}
              <input
                id="confirmPassword"
                type="text"
                placeholder="Confirm Password *"
                className="input rounded-none input-bordered"
                {...register("confirmPassword", {
                  required: { value: true, message: "Confirm Password is Require" },
                })}
              />
              {errors.postcode?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.postcode?.message}
                </span>
              )}
            </div>
          </div>
        )}
      </Collapsible>
    </>
  );
};

export default CheckOutCreateAccount;
