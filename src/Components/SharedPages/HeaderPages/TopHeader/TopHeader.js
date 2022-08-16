import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { AiOutlineQuestionCircle } from "react-icons/ai";
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
    <div className=" py-1 bg-success border-b-[0.1px] border-[#a7f1bb55]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center  lg:justify-between">
          <div className="hidden lg:block">
            <nav>
              <ul id="vertical-line1" className="flex justify-start items-center gap-5">
                <li className="">
                  <Link to="#" className="flex items-center gap-1 pl-0">
                    <span className="text-neutral">
                      <IoLocationOutline />
                    </span>
                    <span className="text-neutral">Location</span>
                  </Link>
                </li>
                <li className="">
                  <span className="flex items-center gap-1 vertical-line">
                    <span className="text-neutral">
                      <GrMail />
                    </span>
                    <span className="text-neutral">Info@fresh.com</span>
                  </span>
                </li>
                <li className="">
                  <Link to="#" className="flex items-center gap-1 vertical-line13">
                    <span className="text-neutral">
                      <AiOutlineQuestionCircle />
                    </span>
                    <span className="text-neutral">Free Query</span>
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
                  <Link to="#" className="flex items-center gap-1">
                    <span className="text-neutral">
                      <FaShippingFast />
                    </span>
                    <span className="text-neutral"> Order Tracking</span>
                  </Link>
                </li>
                <li /* className="pr-5 border-r border-gray-400" */>
                  <span className="flex items-center gap-1 vertical-line">
                    <span className="text-neutral">
                      <TbWorld />
                    </span>

                    <span className="">
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
                  <Link to="#" className="flex items-center gap-1 vertical-line">
                    <span className="text-neutral">
                      <BsCurrencyDollar />
                    </span>
                    <span className="">
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
