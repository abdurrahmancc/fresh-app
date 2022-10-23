import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../../assets/banner_img/banner-14.png";
import img5 from "../../../assets/banner_img/banner-8.png";
import img6 from "../../../assets/banner_img/banner-1.png";
import img3 from "../../../assets/banner_img/banner-12.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import "./BannerSlider.css";
import { Fade } from "react-reveal";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${img6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[420px] lg:h-[600px]  xl:h-[600px] rounded-xl`}
          >
            <div className="pl-[8%] py-20 h-full flex flex-col justify-center">
              <div>
                <Fade left>
                  <div>
                    <span className="bg-[#FFFFFF] text-[14px] text-[#74A512] font-semibold rounded-[28px] gap-[10px] px-4 leading-[17px] uppercase py-[6px]">
                      sale top 20% off
                    </span>
                  </div>
                </Fade>
                <Fade bottom>
                  <h1 className="xl:text-[60px] md:text-[44px] sm:text-[36px] text-[28px] pt-4 leading-[40px] sm:leading-[48px] md:leading-[54px] xl:leading-[74px] capitalize font-bold text-black">
                    <span className="text-black">
                      get <span className="text-primary">fresh</span> organic
                    </span>{" "}
                    <br />{" "}
                    <span className=" text-black">
                      <span className="text-primary">food</span> everyday
                    </span>
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-[#797979] md:pb-8 pb-5 md:pt-6 pt-4 lg:text-[17px] xl:text-lg sm:text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur <br className="md:hidden" /> adipiscing
                    elit. <br className="hidden md:block" /> In eget gravida leo,{" "}
                    <br className="sm:hidden" /> nec iaculis diam.
                  </p>
                </Fade>
                <Fade bottom delay={600} duration={500}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] block px-6 text-center text-[16px] lg:text-lg  py-[10px] lg:py-3 btn-animate bg-primary hover:bg-[#67950b] ease-in-out transition duration-500 text-neutral border-none rounded-sm font-semibold"
                  >
                    Shop Now
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${img5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[420px] lg:h-[600px] xl:h-[600px] rounded-xl"
          >
            <div className="py-20 h-full flex flex-col justify-center">
              <div>
                <Fade bottom>
                  <h1 className="xl:text-[60px] md:text-[44px] sm:text-[36px] text-[28px] pt-4 leading-[40px] sm:leading-[48px] md:leading-[54px] xl:leading-[74px] capitalize font-bold text-black text-center">
                    our <span className="text-primary">goal</span> is to provide <br /> nutritious{" "}
                    <span className="text-primary">food</span>
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-center text-[#797979] md:pb-8 pb-5 md:pt-6 pt-4 lg:text-[17px] xl:text-lg sm:text-[15px]">
                    Organic food is not only good for you, <br /> but it's also guilt-free.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] mx-auto block px-4 text-[16px] lg:text-lg py-[10px] lg:py-3 btn-animate bg-primary text-center hover:bg-[#67950b] ease-in-out transition duration-500 text-neutral border-none rounded-sm font-semibold"
                  >
                    Shop Now
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[420px] lg:h-[600px] xl:h-[600px] rounded-xl`}
          >
            <div className="pl-[8%] py-20 h-full flex flex-col justify-center">
              <div>
                <Fade left>
                  <div>
                    <span className="bg-[#FFFFFF] text-[14px] text-[#74A512] font-semibold rounded-[28px] gap-[10px] px-4 leading-[17px] uppercase py-[6px]">
                      sale top 20% off
                    </span>
                  </div>
                </Fade>
                <Fade bottom>
                  <h1 className="xl:text-[60px] md:text-[44px] sm:text-[36px] text-[28px] pt-4 leading-[40px] sm:leading-[48px] md:leading-[54px] xl:leading-[74px] capitalize font-bold text-black">
                    <span className="text-black">
                      get <span className="text-primary">fresh</span> organic
                    </span>{" "}
                    <br />{" "}
                    <span className=" text-black">
                      <span className="text-primary">food</span> everyday
                    </span>
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-[#797979] md:pb-8 pb-5 md:pt-6 pt-4 lg:text-[17px] xl:text-lg sm:text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur <br className="md:hidden" /> adipiscing
                    elit. <br className="hidden md:block" /> In eget gravida leo,{" "}
                    <br className="sm:hidden" /> nec iaculis diam.
                  </p>
                </Fade>
                <Fade bottom delay={600} duration={500}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] block px-6 text-center text-[16px] lg:text-lg  py-[10px] lg:py-3 btn-animate bg-primary hover:bg-[#67950b] ease-in-out transition duration-500 text-neutral border-none rounded-sm font-semibold"
                  >
                    Shop Now
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full  h-[420px] lg:h-[600px] xl:h-[600px] rounded-xl`}
          >
            <div className="py-20 banner-Slider-2 h-full flex flex-col justify-center">
              <div>
                <Fade bottom>
                  <h1 className="xl:text-[60px] md:text-[44px] sm:text-[36px] text-[28px] pt-4 leading-[40px] sm:leading-[48px] md:leading-[54px] xl:leading-[74px] capitalize font-bold text-black text-center">
                    The <span className="text-primary">integrity</span> of living <br /> systems is{" "}
                    <span className="text-primary">health</span>
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-center text-[#797979] md:pb-8 pb-5 md:pt-6 pt-4 lg:text-[17px] xl:text-lg sm:text-[15px]">
                    Organic food is not only good for you, <br /> but it's also guilt-free.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] mx-auto block px-4 text-[16px] lg:text-lg text-center py-[10px] lg:py-3  btn-animate bg-primary hover:bg-[#67950b] ease-in-out transition duration-500 text-neutral border-none rounded-sm font-semibold"
                  >
                    Shop Now
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
