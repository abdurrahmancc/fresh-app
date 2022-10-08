import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";
import Select from "react-select";
import {
  topHeaderCurrencySelectorStyle,
  topHeaderLanguageSelectorStyle,
} from "../../../SharedCss/SelectComponentCss";

const TopHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedMoneyOption, setSelectedMoneyOption] = useState(null);
  const options = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "Arabic", label: "Arabic" },
  ];
  const optionsM = [
    { value: "USD", label: "USD" },
    { value: "GBP", label: "GBP" },
    { value: "EUR", label: "EUR" },
    { value: "RUB", label: "RUB" },
  ];

  return (
    /*----- Top Header start ----*/
    <div className=" py-1 bg-white border-b-[1px] border-[#e7e7e7]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center  lg:justify-between">
          <div className="hidden lg:block">
            <nav>
              <ul id="vertical-line1" className="flex justify-start items-center gap-[10px]">
                <li className="flex items-center">
                  <Link to="#" className="flex">
                    Location
                  </Link>
                  <div className="w-[1px] ml-[10px] h-5 border border-gray-300"></div>
                </li>
                <li className="flex items-center">
                  <span className="px-2 vertical-line">Info@fresh.com</span>
                  <div className="w-[1px] ml-[10px] h-5 border border-gray-300"></div>
                </li>
                <li>
                  <Link to="#" className="px-2  vertical-line13">
                    Free Query
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul
                id="vertical-line"
                className="flex justify-center lg:justify-end items-center gap-[10px]"
              >
                <li className="flex items-center">
                  <Link to="user-dashboard/my-order" className=" px-2">
                    Order Tracking
                  </Link>
                  <div className="w-[1px] ml-[10px] h-5 border border-gray-300"></div>
                </li>
                <li className="flex items-center">
                  <span className="flex px-2 rounded-none items-center gap-1 vertical-line">
                    <Select
                      styles={topHeaderLanguageSelectorStyle}
                      id="top-header-select-component"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      placeholder={"English"}
                      options={options}
                    />
                  </span>
                  <div className="w-[1px] ml-[10px] h-5 border border-gray-300"></div>
                </li>
                <li>
                  <span className="flex rounded-none px-2 items-center  vertical-line">
                    <Select
                      styles={topHeaderCurrencySelectorStyle}
                      id="top-header-select-component"
                      defaultValue={selectedMoneyOption}
                      onChange={setSelectedMoneyOption}
                      placeholder={"USD"}
                      options={optionsM}
                    />
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    /*----- Top Header End -----*/
  );
};

export default TopHeader;
