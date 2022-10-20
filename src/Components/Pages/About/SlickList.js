import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../assets/about-img/about-1.png";
import img2 from "../../../assets/about-img/about-2.png";
import img3 from "../../../assets/about-img/about-3.png";
import img4 from "../../../assets/about-img/about-4.png";
import img5 from "../../../assets/about-img/about-5.png";
import img6 from "../../../assets/about-img/about-6.png";
import img7 from "../../../assets/about-img/about-7.png";
import img8 from "../../../assets/about-img/about-8.png";

const SlickList = () => {
  const featuresItems = [
    { _id: 1, img: img1, name: "fresh vegetables" },
    { _id: 2, img: img2, name: "frozen food" },
    { _id: 3, img: img3, name: "meat" },
    { _id: 4, img: img4, name: "snacks item" },
    { _id: 5, img: img5, name: "organic fruits" },
    { _id: 6, img: img6, name: "fruit juices" },
    { _id: 7, img: img7, name: "custard powder" },
    { _id: 8, img: img8, name: "bakery & pastry" },
  ];

  return (
    <>
      <Swiper
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 3,
            spaceBetween: 20,
          },
          300: {
            width: 300,
            slidesPerView: 2,
          },
        }}
        // slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {featuresItems.map((feature) => (
          <SwiperSlide key={feature?._id}>
            <div className="">
              <figure className="">
                <img src={feature?.img} alt={feature?.name} className="" />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlickList;
