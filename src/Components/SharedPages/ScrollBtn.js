import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <button
        className="cursor-pointer animate-bounce fixed bottom-14 right-2 text-[2rem]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        title="scroll Up"
      >
        <FaArrowCircleUp className="text-primary " />
      </button>
    </>
  );
};

export default ScrollBtn;
