import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./BannerSlider.css";
import { Fade } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import banner6 from "../../../assets/product_Banner/product_Banner-6.png";
import banner7 from "../../../assets/product_Banner/product_Banner-7.png";
import banner8 from "../../../assets/product_Banner/product_Banner-8.png";
import banner9 from "../../../assets/product_Banner/product_Banner-9.png";

const ProductBannerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="rounded-lg h-[18rem] w-full "
            style={{
              backgroundImage: `url(${banner9})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center flex-col h-full">
              <div className="py-10">
                <Fade bottom delay={300}>
                  <div className="text-center pb-2">
                    <span className="text-[16px] uppercase  font-bold text-warning">THE SALAD</span>
                  </div>
                </Fade>
                <Fade bottom>
                  <h4 className="md:text-[26px] text-center text-2xl text-white  pb-6 leading-10 font-bold uppercase ">
                    FRESH & NATURAL <br /> HEALTHY FOOD SPECIAL OFFER
                  </h4>
                </Fade>
                <Fade bottom delay={600}>
                  <div className="text-center">
                    <button className="py-3 btn-animate btn px-6 text-neutral mx-auto text-center font-bold rounded-sm border-none btn-primary ">
                      Shop Now
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="rounded-lg lg:h-[18rem] w-full "
            style={{
              backgroundImage: `url(${banner7})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="pl-[10%] flex justify-center flex-col h-full">
              <div className="py-10">
                <Fade bottom delay={300}>
                  <p className="text-lg uppercase text-black font-bold md:pb-4 pb-1">
                    Start from <span className="text-[#f67606]">$05.99</span>
                  </p>
                </Fade>
                <Fade bottom>
                  <h4 className="md:text-3xl text-2xl text-black md:pb-8 pb-5 leading-10 font-bold capitalize ">
                    Organic span up to 20% off
                  </h4>
                </Fade>

                <Fade bottom delay={600}>
                  <button className="py-3 btn-animate btn px-6 text-neutral font-bold rounded-sm border-none btn-primary ">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-lg h-[18rem] w-full "
            style={{
              backgroundImage: `url(${banner8})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center flex-col h-full">
              <div className="py-10">
                <Fade bottom delay={300}>
                  <div className="text-center pb-2">
                    <span className="text-[16px] uppercase  font-bold text-warning">THE SALAD</span>
                  </div>
                </Fade>
                <Fade bottom>
                  <h4 className="md:text-[26px] text-center text-2xl text-white  pb-6 leading-10 font-bold uppercase ">
                    FRESH & NATURAL <br /> HEALTHY FOOD SPECIAL OFFER
                  </h4>
                </Fade>
                <Fade bottom delay={600}>
                  <p className="text-white text-lg text-center">Don't miss our current offer!</p>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-lg lg:h-[18rem] w-full "
            style={{
              backgroundImage: `url(${banner6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="pl-[10%] flex justify-center flex-col h-full">
              <div className="py-10">
                <Fade bottom delay={300}>
                  <p className="text-lg uppercase text-black font-bold md:pb-4 pb-1">
                    Start from <span className="text-[#f67606]">$05.99</span>
                  </p>
                </Fade>
                <Fade bottom>
                  <h4 className="md:text-3xl text-2xl text-black md:pb-8 pb-5 leading-10 font-bold capitalize ">
                    Organic span up to 20% off
                  </h4>
                </Fade>

                <Fade bottom delay={600}>
                  <button className="py-3 btn-animate btn px-6 text-neutral font-bold rounded-sm border-none btn-primary ">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductBannerSlider;
