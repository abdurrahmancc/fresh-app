import React from "react";
import pattern from "../../../assets/bg-img/pattern-1.png";

const Newsletters = () => {
  return (
    <div className="bg-primary">
      <div
        className="h-[12rem]"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col lg:flex-row py-5 lg:gap-0 gap-y-5 items-center lg:justify-between justify-center">
            <div className="flex flex-col lg:justify-start lg:items-start items-center lg:gap-y-5 gap-y-2">
              <h4 className="sm:text-4xl text-3xl font-semibold text-white capitalize">
                Sign Up For Newsletters
              </h4>
              <div>
                <p className="text-neutral capitalize text-center lg:text-start ">
                  Get E-mail updates about our latest shop and{" "}
                  <strong className="text-warning">special offers</strong>
                </p>
              </div>
            </div>
            <div className="max-w-xl w-full">
              <div className="w-full">
                <form action="" className="w-full">
                  <div className="flex justify-center lg:gap-4 gap-2">
                    <input
                      type="text"
                      placeholder="Enter you email"
                      className="input rounded-none max-w-sm w-full text-accent bg-white"
                    />
                    <button className=" btn btn-warning hover:bg-[#f8ab30] border-none rounded-none text-white  font-bold  py-[14px] lg:px-10">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
