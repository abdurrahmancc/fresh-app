import React from "react";

const ProductBanner = ({ img }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
      {img && (
        <div
          className="rounded lg:h-[22rem] w-full "
          style={{
            backgroundImage: `url(${img[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {img && (
            <div className="pl-10 flex justify-center flex-col h-full">
              <div className="py-10">
                <h4 className="text-3xl pb-7 leading-10 font-bold capitalize">
                  the best organic <br /> products online
                </h4>
                <p className="text-lg pb-7 uppercase text-error font-bold">save up to 20% off</p>
                <button className="py-3 btn px-6 text-neutral rounded btn-primary ">
                  Shop Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className="rounded lg:h-[22rem] w-full "
        style={{
          backgroundImage: `url(${img[1]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pl-10 flex justify-center flex-col h-full">
          <div className="py-10">
            <h4 className="text-3xl pb-7 leading-10 font-bold capitalize ">
              the best organic <br /> products online
            </h4>
            <p className="text-lg pb-7 uppercase text-error font-bold">save up to 20% off</p>
            <button className="py-3 btn px-6 text-neutral rounded btn-primary ">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
