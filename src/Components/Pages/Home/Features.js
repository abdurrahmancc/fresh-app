import React from "react";
import featureBanner from "../../../assets/banner_img/side-banner-1.png";
import bakery from "../../../assets/feature-img/bakery.png";
import custard_powder from "../../../assets/feature-img/custard_powder.png";
import frozen_food from "../../../assets/feature-img/frozen_food.png";
import fruits from "../../../assets/feature-img/fruits.png";
import juice from "../../../assets/feature-img/juice.png";
import meat from "../../../assets/feature-img/meat.png";
import snacks_item from "../../../assets/feature-img/snacks_item.png";
import vegetables from "../../../assets/feature-img/vegetables.png";
import FeaturesItems from "./FeaturesItems";

const featuresItems = [
  { id: 1, img: vegetables, name: "fresh vegetables" },
  { id: 2, img: frozen_food, name: "frozen food" },
  { id: 3, img: meat, name: "meat" },
  { id: 4, img: snacks_item, name: "snacks item" },
  { id: 5, img: fruits, name: "organic fruits" },
  { id: 6, img: juice, name: "fruit juices" },
  { id: 7, img: custard_powder, name: "custard powder" },
  { id: 8, img: bakery, name: "bakery & pastry" },
];

const Features = () => {
  return (
    <div className="">
      <div className="lg:col-span-3">
        <FeaturesItems featuresItems={featuresItems} />
      </div>
    </div>
  );
};

export default Features;
