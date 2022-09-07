import React, { useState } from "react";
import "./test.css";
// import { ColourOption, colourOptions } from '../data';
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Select, { StylesConfig } from "react-select";
// import chroma from "chroma-js";

const options = [
  { label: "Grapes", value: "grapes" },
  { label: "Mango ", value: "mango" },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
  { label: "Strawberry ", value: "strawberry", disabled: true },
];

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
  return (
    <div>
      <h1>CSS Dropdown Menu</h1>
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
    </div>
  );
};

export default Test;
