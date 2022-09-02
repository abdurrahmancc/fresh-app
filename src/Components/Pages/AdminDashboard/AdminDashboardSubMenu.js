import React from "react";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const AdminDashboardSubMenu = ({ route, isOpen }) => {
  return (
    <div className="bg-inherit w-full ">
      <div className="w-full">
        <Collapsible className="w-full" trigger={[`${route?.name}`, <BsChevronDown />]}>
          <ul className="w-full mt-2 ">
            {route?.subItems.map((subItem, i) => (
              <NavLink
                to={subItem.path}
                key={i}
                className={({ isActive }) =>
                  `menus link hover:link  font-normal hover:border-r-4 border-white z-50 flex text-  gap-3 py-2 no-underline hover:no-underline text-sm ${
                    isActive ? "border-r-[4px] border-white text-white bg-[rgb(45,51,89)] " : ""
                  }`
                }
              >
                <div className="icon">{subItem.icon}</div>
                {subItem.name}
              </NavLink>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default AdminDashboardSubMenu;
