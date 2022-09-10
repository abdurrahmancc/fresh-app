import React, { useRef, useState } from "react";
import "./test.css";
// import { ColourOption, colourOptions } from '../data';
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Select, { StylesConfig } from "react-select";
import ReactImageZoom from "react-image-zoom";
import ReactImageMagnify from "react-image-magnify";
import img1 from "../../../assets/products_img/CashewNuts.png";
import img2 from "../../../assets/products_img/driedFishPacket.png";
import img3 from "../../../assets/products_img/dryShrimp.png";
import img4 from "../../../assets/products_img/greenPeasPacket.png";
import img5 from "../../../assets/products_img/naturalNutsMix.png";
import img6 from "../../../assets/about-img/happy-img.png";
import SpacedSpan from "./SpacedSpan";
import ReactSlick from "react-slick";
// import chroma from "chroma-js";

const options = [
  { label: "Grapes", value: "grapes" },
  { label: "Mango ", value: "mango" },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
];

const frontSrcSet = [
  { src: img1, setting: "2000w" },
  { src: img2, setting: "2000w" },
  { src: img3, setting: "2000w" },
  { src: img4, setting: "2000w" },
  { src: img5, setting: "2000w" },
  { src: img6, setting: "2000w" },
]
  .map((item) => `${item.src} ${item.setting}`)
  .join(", ");

const imageBaseUrl =
  "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1033.jpg";
const inputImages = [
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_355.jpg",
    vw: "355w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_481.jpg",
    vw: "481w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_584.jpg",
    vw: "584w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_687.jpg",
    vw: "687w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_770.jpg",
    vw: "770w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_861.jpg",
    vw: "861w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_955.jpg",
    vw: "955w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1033.jpg",
    vw: "1033w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1112.jpg",
    vw: "1112w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1192.jpg",
    vw: "1192w",
  },
  {
    name: "https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1200.jpg",
    vw: "1200w",
  },
]
  .map((item) => `${item.name} ${item.vw}`)
  .join(", ");

const images = [img1, img2, img3, img4, img5, img6];

// const colourStyles = {
//   control: (styles) => ({ ...styles, backgroundColor: "white" }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? data.color
//         : isFocused
//         ? color.alpha(0.1).css()
//         : undefined,
//       color: isDisabled
//         ? "#ccc"
//         : isSelected
//         ? chroma.contrast(color, "white") > 2
//           ? "white"
//           : "black"
//         : data.color,
//       cursor: isDisabled ? "not-allowed" : "default",

//       ":active": {
//         ...styles[":active"],
//         backgroundColor: !isDisabled
//           ? isSelected
//             ? data.color
//             : color.alpha(0.3).css()
//           : undefined,
//       },
//     };
//   },
//   multiValue: (styles, { data }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: color.alpha(0.1).css(),
//     };
//   },
//   multiValueLabel: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//   }),
//   multiValueRemove: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//     ":hover": {
//       backgroundColor: data.color,
//       color: "white",
//     },
//   }),
// };

const Test = () => {
  const [selected, setSelected] = useState([]);

  const rimProps = {
    isHintEnabled: true,
    shouldHideHintAfterFirstActivation: false,
    enlargedImagePosition: "over",
    width: "200%",
    height: "100%",
  };

  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://github.com/malaman/js-image-zoom/blob/master/example/1.jpg?raw=true",
  };

  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("border-[#e77600]");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("border-[#e77600]");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="Apps bg-black">
      <h1>CSS Dropdown Menu</h1>
      <div>
        <h1 className="">
          <span className="banner-titles">Get Fresh Organic</span>
          <br />
          <span className="banner-title-2">Food Everyday</span>
        </h1>
      </div>
      <ul className="dropdownMenu">
        <li>
          <a href="#">Dropdown</a>
          <ul>
            <li>
              <a href="#">Secondary</a>
            </li>
            <li>
              <a href="#">Secondary</a>
            </li>
            <li>
              <a href="#">Slider</a>
              <ul>
                <li>
                  <a href="#">Tertiary</a>
                </li>
                <li>
                  <a href="#">Tertiary</a>
                </li>
                <li>
                  <a href="#">Tertiary</a>
                </li>
                <li>
                  <a href="#">Tertiary</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Secondary</a>
            </li>
          </ul>
        </li>
      </ul>
      <nav className="nav-test">
        <label htmlFor="touch">
          <span>titre</span>
        </label>
        <input type="checkbox" id="touch" />
        <ul className="slide">
          <li className="hover:bg-primary">
            <div className="dropdown dropdown-right dropdown-hover">
              <label tabindex="0" className="btn m-1">
                Hover
              </label>
              <ul
                tabindex="0"
                className="dropdown-content hover:overflow-x-visible side-dropdown menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:bg-primary">
            <a href="#">Lorem Ipsum</a>
          </li>

          <li className="hover:bg-primary">
            <a href="#">Lorem Ipsum</a>
          </li>
          <li className="hover:bg-primary"></li>
        </ul>
      </nav>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        ClearIcon={"x"}
        ClearSelectedIcon={"t"}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

      <Select
        closeMenuOnSelect={false}
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
        // styles={colourStyles}
      />

      <div id="react-app">
        <ReactImageZoom {...props} />
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="max-w-[1200px] my-0 mx-auto grid grid-cols-2">
          <div className="flex h-[50vh]">
            <div className="flex flex-col gap-3">
              {images.map((image, i) => (
                <div
                  className={
                    i === 0
                      ? "w-[80px] h-[71px] cursor-pointer border border-[#e77600]"
                      : "w-[80px] h-[71px] cursor-pointer border border-gray-300"
                  }
                  key={i}
                  onMouseOver={() => hoverHandler(image, i)}
                  ref={addRefs}
                >
                  <img
                    className="w-[80px] h-[71px] object-contain"
                    src={image}
                    alt="Product_Image"
                  />
                </div>
              ))}
            </div>
            <div className="left_2">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "product_image",
                    isFluidWidth: true,
                    src: img,
                  },
                  largeImage: {
                    src: img,
                    width: 700,
                    height: 620,
                  },
                  enlargedImageContainerDimensions: {
                    width: "250%",
                    height: "250%",
                  },
                }}
                {...rimProps}
              />
            </div>
          </div>
          <div className="right-contain"></div>
        </div>
      </div>
      {/* -------------**********----------------- */}
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-[1200px] my-0 mx-auto grid grid-cols-2">
          <div className="flex h-[50vh]">
            <div className="flex flex-col gap-3">
              {images.map((image, i) => (
                <div
                  className={
                    i == 0
                      ? "w-[80px] h-[80px] cursor-pointer border border-[#e77600]"
                      : "w-[80px] h-[80px] cursor-pointer border border-gray-300"
                  }
                  key={i}
                  onMouseOver={() => hoverHandler(image, i)}
                  ref={addRefs}
                >
                  <img
                    className="w-[70px] h-[70px] object-contain"
                    src={image}
                    alt="Product_Image"
                  />
                </div>
              ))}
            </div>
            <div className="left_2">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "product_image",
                    isFluidWidth: true,
                    src: img,
                    srcset: frontSrcSet,
                    sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                  },
                  largeImage: {
                    src: img,
                    width: 1426,
                    height: 2000,
                  },
                  enlargedImageContainerDimensions: {
                    width: "1426px",
                    height: "2000px",
                  },
                  // lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                }}
                {...rimProps}
              />
            </div>
          </div>
          <div className="right-contain"></div>
        </div>
      </div>
      {/* --------------********---------------------- */}
      <div className="perimeter h-screen">
        <div className="image">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imageBaseUrl,
                srcSet: inputImages,
                sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
              },
              largeImage: {
                alt: "",
                src: `https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1200.jpg`,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "200%",
              },
              isHintEnabled: true,
            }}
            // {...rimProps}
          />
        </div>
        <div className="copy">
          <h3>Touch</h3>
          <p className="App-intro">
            Press (long touch) image to magnify. Pan (drag) to traverse image.
          </p>
          <p className="App-intro">Note the page can be scrolled when touch begins on image.</p>
          <h3>Mouse</h3>
          <p>Hover image to magnify</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
