import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Banner() {
    return (
        <>
            <h1>Banner</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                onSlideChange={
                    () => console.log('slide change')
                }
                onSwiper={
                    (swiper) => console.log(swiper)
                }
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/YdSPC8F/Strawberry.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BB69hfC/mandarin.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </>
    );
}
