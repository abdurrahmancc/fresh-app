import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminDashboardSubMenu from "./AdminDashboardSubMenu";

const AdminDashboardMenu = ({ route, showAnimation, isOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <div
        onClick={toggleMenu}
        className="menus link  hover:font-bold flex justify-between  gap-3 py-2 px-3 no-underline hover:no-underline text-lg"
      >
        <div className="menu_items flex ">
          <div className="icon mt-1">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                inherit="hidden"
                animate="show"
                exit="hidden"
                className="link_text whitespace-nowrap text-sm"
              >
                <AdminDashboardSubMenu route={route} isOpen={isOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardMenu;
