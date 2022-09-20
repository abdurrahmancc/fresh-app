import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../../assets/banner_img/banner-11.png";
import img5 from "../../../assets/banner_img/banner-8.png";
import img1 from "../../../assets/banner_img/banner-9.png";
import img3 from "../../../assets/banner_img/banner-12.png";
import img2 from "../../../assets/banner_img/banner-10.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link, useLocation } from "react-router-dom";
import "./BannerSlider.css";
import { Fade } from "react-reveal";

const BannerSlider = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[420px] lg:h-[600px] ${
              pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
            }  rounded-xl`}
          >
            <div className="xl:pl-20 ml-10 md:pl-16 py-20 h-full flex flex-col justify-center">
              <div>
                <Fade bottom>
                  <span className="bg-error text-[15px] text-neutral rounded px-4 uppercase py-2">
                    sale top 20% off
                  </span>
                </Fade>
                <h1 className="xl:text-[52px] md:text-[40px] sm:text-[32px] text-[28px] pt-7 leading-[32px] sm:leading-[36px] md:leading-[44px] xl:leading-[55px] capitalize font-bold text-black">
                  <span className="banner-title text-black">get fresh organic</span> <br />{" "}
                  <span className="banner-title-2 text-black">food everyday</span>
                </h1>
                <Fade bottom>
                  <p className="text-[#797979] md:pb-8 pb-5 pt-6 text-[18px]">
                    making grocery food errands <br className="sm:hidden md:block xl:hidden" />{" "}
                    worth your while
                  </p>
                </Fade>
                <Fade bottom delay={300}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] block px-4 text-lg lg:text-[20px] py-3 lg:py-[14px] btn-animate bg-[#67950b] ease-in-out transition duration-500 text-neutral rounded font-semibold"
                  >
                    Buy Product
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
            className={`w-full  h-[420px] lg:h-[600px] ${
              pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
            }  rounded-xl`}
          >
            <div className="py-20 banner-Slider-2 h-full flex flex-col justify-center">
              <div>
                <Fade bottom>
                  <h1 className="xl:text-[52px] md:text-[40px] sm:text-[32px] text-[28px] banner-Slider-title-2 leading-[32px] sm:leading-[36px] md:leading-[44px] xl:leading-[55px] capitalize text-center pt-5 font-bold text-black">
                    The integrity of living <br /> systems is health.
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-[#797979] text-center md:pb-8 pb-5 pt-6 text-[18px]">
                    Organic food is not only good for you, <br /> but it's also guilt-free.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] mx-auto block px-4 text-lg lg:text-[20px] py-3 lg:py-[14px] btn-animate bg-[#67950b] ease-in-out transition duration-500 text-neutral rounded font-semibold"
                  >
                    Buy Product
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full h-[420px] lg:h-[600px] ${
              pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
            }  rounded-xl`}
          >
            <div className="py-20 ml-32 sm:ml-40 md:ml-52 lg:ml-60 xl:ml-80 h-full banner-Slider-3 flex items-center flex-col justify-center">
              <div>
                <Fade bottom>
                  <h1 className="xl:text-[52px] md:text-[40px] sm:text-[32px] text-start banner-Slider-title-3 text-[28px] leading-[32px] sm:leading-[36px]  pt-5 md:leading-[44px] xl:leading-[55px] capitalize font-bold text-black">
                    Our aim is to provide <br /> healthy nutrition to <br /> our customers
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-[#797979] text-start md:pb-8 pb-5 pt-6 text-[18px]">
                    Organic food is not only good for you, <br className="short-description" /> but
                    it's also guilt-free.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] block px-4 text-lg lg:text-[20px] py-3 lg:py-[14px] btn-animate bg-[#67950b] ease-in-out transition duration-500 text-neutral rounded font-semibold"
                  >
                    Buy Product
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
            className={`w-full h-[420px] lg:h-[600px] ${
              pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
            }  rounded-xl`}
          >
            <div className="xl:pl-20 ml-10 md:pl-16 py-20 h-full flex flex-col justify-center">
              <div>
                <span className="bg-error text-[15px] text-neutral rounded px-4 uppercase py-2">
                  sale top 20% off
                </span>
                <h1 className="xl:text-[52px] md:text-[40px] sm:text-[32px] text-[28px] pt-7 leading-[32px] sm:leading-[36px] md:leading-[44px] xl:leading-[55px] capitalize font-bold text-black">
                  <span className="banner-title text-black">get fresh organic</span> <br />{" "}
                  <span className="banner-title-2 text-black">food everyday</span>
                </h1>
                <p className="text-[#797979] md:pb-8 pb-5 pt-6 text-[18px]">
                  making grocery food errands <br className="sm:hidden md:block xl:hidden" /> worth
                  your while
                </p>
                <Link
                  to="/shop"
                  className="lg:w-[148px] w-[132px] block px-4 text-lg lg:text-[20px] py-3 lg:py-[14px] btn-animate bg-[#67950b] ease-in-out transition duration-500 text-neutral rounded font-semibold"
                >
                  Buy Product
                </Link>
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
            className={`w-full h-[420px] lg:h-[600px] ${
              pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
            }  rounded-xl`}
          >
            <div className="py-20 h-full flex flex-col justify-center">
              <div>
                <Fade bottom>
                  <h1 className="xl:text-[52px] md:text-[40px] sm:text-[32px] banner-Slider-title-2 text-[28px] leading-[32px] sm:leading-[36px] md:leading-[44px] xl:leading-[55px] capitalize text-center pt-5 font-bold text-black">
                    The integrity of living <br /> systems is health.
                  </h1>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="text-[#797979] text-center md:pb-8 pb-5 pt-6 text-[18px]">
                    Organic food is not only good for you, <br /> but it's also guilt-free.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <Link
                    to="/shop"
                    className="lg:w-[148px] w-[132px] mx-auto block px-4 text-lg lg:text-[20px] py-3 lg:py-[14px] btn-animate bg-[#67950b] ease-in-out transition duration-500 text-neutral rounded font-semibold"
                  >
                    Buy Product
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
