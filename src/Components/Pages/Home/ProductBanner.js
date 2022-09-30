import React from "react";
import { Fade } from "react-reveal";

const ProductBanner = ({ img }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
      {img && (
        <div
          className="rounded-lg lg:h-[18rem] w-full "
          style={{
            backgroundImage: `url(${img[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {img && (
            <div className="pl-14 flex justify-center flex-col h-full">
              <div className="py-10">
                <Fade bottom>
                  <h4 className="text-3xl pb-5 leading-10 font-bold capitalize">
                    the best organic <br /> products online
                  </h4>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-lg pb-7 uppercase text-error font-bold">save up to 20% off</p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="py-3 btn-animate btn px-6 text-neutral font-bold rounded-none btn-primary ">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className="rounded-lg hidden lg:block lg:h-[18rem] w-full "
        style={{
          backgroundImage: `url(${img[1]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pl-14 flex justify-center flex-col h-full">
          <div className="py-10">
            <Fade bottom>
              <h4 className="text-3xl pb-5 leading-10 font-bold capitalize ">
                the best organic <br /> products online
              </h4>
            </Fade>
            <Fade bottom delay={300}>
              <p className="text-lg pb-7 uppercase text-error font-bold">save up to 20% off</p>
            </Fade>
            <Fade bottom delay={600}>
              <button className="py-3 btn-animate btn px-6 text-neutral font-bold rounded-none btn-primary ">
                Shop Now
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
