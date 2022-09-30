import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import "./TopHeader.css";
import Select from "react-select";
import { topHeaderSelectLibraryStyle } from "../../../SharedCss/SelectComponentCss";

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
              <ul id="vertical-line1" className="flex justify-start items-center gap-5">
                <li>
                  <Link to="#" className="flex items-center px-2 gap-1 pl-0">
                    <IoLocationOutline />
                    <span>Location</span>
                  </Link>
                </li>
                <li>
                  <span className="flex items-center px-2 gap-1 vertical-line">
                    <AiOutlineMail />
                    <span>Info@fresh.com</span>
                  </span>
                </li>
                <li>
                  <Link to="#" className="flex items-center px-2 gap-1 vertical-line13">
                    <AiOutlineQuestionCircle />
                    <span>Free Query</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul
                id="vertical-line"
                className="flex justify-center lg:justify-end items-center gap-5"
              >
                <li /* className="pr-5 border-r border-gray-400" */>
                  <Link to="user-dashboard/my-order" className="flex px-2 items-center gap-1">
                    <span>
                      <FaShippingFast className="opacity-80" />
                    </span>
                    <span> Order Tracking</span>
                  </Link>
                </li>
                <li /* className="pr-5 border-r border-gray-400" */>
                  <span className="flex px-2 rounded-md items-center gap-1 vertical-line">
                    <TbWorld className="opacity-80" />

                    <span>
                      <Select
                        styles={topHeaderSelectLibraryStyle}
                        id="top-header-select-component"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        placeholder={"English"}
                        options={options}
                      />
                    </span>
                  </span>
                </li>
                <li>
                  <Link to="#" className="flex rounded-md px-2 items-center  vertical-line">
                    <BsCurrencyDollar />

                    <span>
                      <Select
                        styles={topHeaderSelectLibraryStyle}
                        id="top-header-select-component"
                        defaultValue={selectedMoneyOption}
                        onChange={setSelectedMoneyOption}
                        placeholder={"USD"}
                        options={optionsM}
                      />
                    </span>
                  </Link>
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
