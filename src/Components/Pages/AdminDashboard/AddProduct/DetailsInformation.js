import React from "react";

const DetailsInformation = ({ register, errors }) => {
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
              <label htmlFor="colors" className="label">
                <span className="label-text text-xs  ">Colors</span>
              </label>
              <input
                id="colors"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("colors")}
              />
            </div>
            {/* weight */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="weight" className="label">
                  <span className="label-text text-xs ">Weight</span>
                </label>
                <input
                  id="weight"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("weight")}
                />
              </div>
              {/*---------------------------------- no------------------------------- */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="addNow" className="label">
                  <span className="label-text text-xs ">add now</span>
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
