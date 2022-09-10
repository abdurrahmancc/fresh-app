import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../../assets/banner_img/banner-3.png";
import img5 from "../../../assets/banner_img/banner-1.png";
import img2 from "../../../assets/banner_img/banner-2.png";
import img3 from "../../../assets/banner_img/banner-6.png";
import img1 from "../../../assets/banner_img/banner-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link, useLocation } from "react-router-dom";
import "./BannerSlider.css";

const BannerSlider = () => {
  const { pathname } = useLocation();
  const bannerItems = [img1, img2, img3, img4, img5];
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
        {bannerItems.map((bgItem, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${bgItem})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={`w-full h-auto lg:h-[500px] ${
                pathname === "/home2" ? "xl:h-[800px]" : "xl:h-[600px]"
              }  rounded-xl`}
            >
              <div className="xl:pl-20 ml-10 md:pl-16 py-20 h-full flex flex-col justify-center">
                <div>
                  <span className="bg-error text-[2vw] md:text-sm text-neutral rounded px-4 uppercase py-2">
                    sale top 20% off
                  </span>
                  <h1 className="text-[3.5vw] lg:pt-2 pt-5 md:leading-10 lg:leading-[50px] xl:leading-[80px] capitalize font-bold text-neutral">
                    <span className="banner-title">get fresh organic</span> <br />{" "}
                    <span className="banner-title-2">food everyday</span>
                  </h1>
                  <p className="text-neutral text-sm md:pb-10 pb-5 pt-5 md:text-xl">
                    making grocery food errands worth your while
                  </p>
                  <Link
                    to="/shop"
                    className="md:px-6 px-4 text-[2vw] md:text-lg py-2 md:py-4 bg-accent rounded font-semibold "
                  >
                    Buy Product
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;
