import React from "react";
import Select from "react-select";
import { colorsOptions, weightOptions } from "./detailsInfoSelectorOptions";
import { selectorStyle } from "./detailsInfoSelectorStyle";

const DetailsInformation = ({
  register,
  setSelectedWeight,
  selectedWeight,
  setSelectedColors,
  selectedColors,
}) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* color */}
            <div className="form-control pb-4">
              <label htmlFor="Colors" className="label">
                <span className="label-text text-xs">Colors</span>
              </label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                value={selectedColors}
                isClearable={true}
                onChange={setSelectedColors}
                options={colorsOptions}
                styles={selectorStyle}
                placeholder={<div className="text-sm">--Select Colors--</div>}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#556EE6" /* options hover background color */,
                    neutral50: "none" /* placeholder text color */,
                    neutral80: "none" /* input & selected text color */,
                    neutral0: "#2A3041" /* menu background color */,
                    neutral20: "#8F9BBB" /* remove & dropdownIndicator color */,
                    // primary75: "black",
                    danger: "gray" /* hover remove color */,
                    neutral60: "#8F9BBB" /* focus remove & dropdownIndicator color */,
                    primary50: "none" /* option active background color */,
                    dangerLight: "none" /* remove color */,
                    neutral10: "none" /* selected background color */,
                    neutral40: "gray" /* hover remove & dropdownIndicator color */,
                    neutral70: "none",
                  },
                })}
              />
            </div>
            <div className="form-control pb-4">
              <label htmlFor="Weight" className="label">
                <span className="label-text text-xs">Weight</span>
              </label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                value={selectedWeight}
                onChange={setSelectedWeight}
                options={weightOptions}
                styles={selectorStyle}
                placeholder={<div className="text-sm">--Select Weight--</div>}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#556EE6" /* options hover background color */,
                    neutral50: "none" /* placeholder text color */,
                    neutral80: "none" /* input & selected text color */,
                    neutral0: "#2A3041" /* menu background color */,
                    neutral20: "#8F9BBB" /* remove & dropdownIndicator color */,
                    // primary75: "black",
                    danger: "gray" /* hover remove color */,
                    neutral60: "#8F9BBB" /* focus remove & dropdownIndicator color */,
                    primary50: "none" /* option active background color */,
                    dangerLight: "none" /* remove color */,
                    neutral10: "none" /* selected background color */,
                    neutral40: "gray" /* hover remove & dropdownIndicator color */,
                    neutral70: "none",
                  },
                })}
              />
            </div>

            {/* addNow */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
            </div>
            {/* addNow */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="addNow" className="label">
                <span className="label-text text-xs ">add Now</span>
              </label>
              <input
                id="addNow"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("addNow")}
              />
            </div>
            {/* Operating System Battery */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add Now</span>
                </label>
                <input
                  id="addNow"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("addNow")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInformation;
