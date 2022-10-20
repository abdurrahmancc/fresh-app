import React from "react";
import googlePlay from "../../../assets/logo/google.png";
import apple from "../../../assets/logo/store.png";

const GoogleApp = () => {
  return (
    <div className="pt-20 pb-14 border-b border-[#c5f8c51a]">
      <h5 className="font-bold  pb-3 text-center text-white  text-2xl">Install App</h5>
      <p className="text-center  leading-10 text-3xl font-bold text-white">
        From App Store or Google Play, get <br />
        instant <span className="text-warning">$5.00</span> Cashback
      </p>
      <div className="flex items-center justify-center gap-2 pt-12">
        <a href="/" className="relative hover:top-[-4px] top-0 ease-in-out duration-200 ">
          <img className="max-w-[200px] w-full" src={apple} alt="apple store logo" />
        </a>
        <a href="/" className="relative hover:top-[-4px] top-0 ease-in-out duration-200 ">
          <img src={googlePlay} alt="google play logo" />
        </a>
      </div>
    </div>
  );
};

export default GoogleApp;
