import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturesItems = ({ featuresItems }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          1550: {
            width: 1536,
            slidesPerView: 6,
          },
          1050: {
            width: 1050,
            slidesPerView: 5,
          },
          750: {
            width: 750,
            slidesPerView: 4,
          },
          500: {
            width: 500,
            slidesPerView: 2,
          },
          300: {
            width: 300,
            slidesPerView: 2,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
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
            <div class="card bg-base-100 shadow border border-gray-200 hover:border-primary">
              <figure class="px-10 pt-10">
                <img src={feature?.img} alt={feature?.name} class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title text-[2vw] md:text-[1vw] capitalize">{feature?.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturesItems;
