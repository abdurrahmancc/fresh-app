import React from "react";

const DetailsInformation = ({ register, errors }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Computer Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="Processor" className="label">
                <span className="label-text text-xs  ">Processor</span>
              </label>
              <input
                id="Processor"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("processor")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="MPN" className="label">
                  <span className="label-text text-xs ">MPN</span>
                </label>
                <input
                  id="MPN"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("MPN")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Model" className="label">
                  <span className="label-text text-xs ">Model</span>
                </label>
                <input
                  id="Model"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("model")}
                />
              </div>
            </div>
            {/* Memory storage */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Memory" className="label">
                  <span className="label-text text-xs ">Memory / Ram</span>
                </label>
                <input
                  id="Memory"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("memory")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Storage" className="label">
                  <span className="label-text text-xs ">Storage</span>
                </label>
                <input
                  id="Storage"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("storage")}
                />
              </div>
            </div>
            {/* Graphics Chipset */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Graphics" className="label">
                  <span className="label-text text-xs ">Graphics</span>
                </label>
                <input
                  id="Graphics"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("graphics")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="PowerSupply" className="label">
                  <span className="label-text text-xs ">Power Supply</span>
                </label>
                <input
                  id="Chipset"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("powerSupply")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="Motherboard" className="label">
                <span className="label-text text-xs ">Motherboard</span>
              </label>
              <input
                id="Motherboard"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("motherboard")}
              />
            </div>
            {/* Operating System Battery */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="cpuCooler" className="label">
                  <span className="label-text text-xs ">CPU COOLER</span>
                </label>
                <input
                  id="cpuCooler"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("cpuCooler")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Casing" className="label">
                  <span className="label-text text-xs ">Casing</span>
                </label>
                <input
                  id="Casing"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("casing")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Warranty" className="label">
                  <span className="label-text text-xs ">Manufacturing Warranty</span>
                </label>
                <input
                  id="Warranty"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("warranty")}
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
