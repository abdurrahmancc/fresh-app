import React from "react";
import bakery from "../../../assets/feature-img/bakery.png";
import custard_powder from "../../../assets/feature-img/custard_powder.png";
import frozen_food from "../../../assets/feature-img/frozen_food.png";
import fruits from "../../../assets/feature-img/fruits.png";
import juice from "../../../assets/feature-img/juice.png";
import meat from "../../../assets/feature-img/meat.png";
import snacks_item from "../../../assets/feature-img/snacks_item.png";
import vegetables from "../../../assets/feature-img/vegetables.png";
import FeaturesItems from "./FeaturesItems";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const featuresItems = [
  { id: 1, img: vegetables, name: "fresh vegetables", quantity: "12" },
  { id: 2, img: frozen_food, name: "frozen food", quantity: "25" },
  { id: 3, img: meat, name: "meat", quantity: "24" },
  { id: 4, img: snacks_item, name: "snacks item", quantity: "54" },
  { id: 5, img: fruits, name: "organic fruits", quantity: "83" },
  { id: 6, img: juice, name: "fruit juices", quantity: "64" },
  { id: 7, img: custard_powder, name: "custard powder", quantity: "32" },
  { id: 8, img: bakery, name: "bakery & pastry", quantity: "23" },
];

const Features = () => {
  return (
    <div>
      <div className="lg:col-span-3 ">
        <Swiper
          breakpoints={{
            // when window width is >= 1550px
            1550: {
              width: 1536,
              slidesPerView: 6,
            },
            1050: {
              width: 1050,
              slidesPerView: 4,
            },
            750: {
              width: 750,
              slidesPerView: 3,
            },
            500: {
              width: 500,
              slidesPerView: 2,
            },
            300: {
              width: 300,
              slidesPerView: 1,
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
            <SwiperSlide key={feature?.id}>
              <FeaturesItems feature={feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
