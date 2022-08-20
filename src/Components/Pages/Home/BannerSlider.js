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
import { Link } from "react-router-dom";
// import "./Banner.css";

const BannerSlider = () => {
  const bannerItems = [img1, img2, img3, img4, img5];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
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
              className="w-full lg:h-[500px] xl:h-[600px] rounded-xl"
            >
              <div className="pl-28 h-full flex flex-col justify-center">
                <div>
                  <span className="bg-error text-neutral rounded px-4 uppercase py-2">
                    sale top 20% off
                  </span>
                  <h1 className="text-[3.5vw] pt-2 leading-[80px] capitalize font-bold text-neutral">
                    get fresh organic <br /> food everyday
                  </h1>
                  <p className="text-neutral pb-10 pt-5 text-xl">
                    making grocery food errands worth your while
                  </p>
                  <Link to="/shop" className="px-6 py-4 bg-accent rounded font-semibold ">
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
