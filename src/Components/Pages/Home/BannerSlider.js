import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img6 from "../../../assets/banner_img/banner-3.png";
import img5 from "../../../assets/banner_img/banner-1.png";
import img2 from "../../../assets/banner_img/banner-2.png";
import img3 from "../../../assets/banner_img/banner-6.png";
import img4 from "../../../assets/banner_img/banner-4.png";
import img1 from "../../../assets/banner_img/banner-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
// import "./Banner.css";

const BannerSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const bannerItems = [img1, img2, img3, img4, img5, img6];
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
        // navigation={true}
        // pagination={pagination}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerItems.map((bgItem, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img className="w-full h-[600px] rounded-3xl" src={bgItem} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;
