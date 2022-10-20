import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center ">
        {/* <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div> */}
        <input defaultChecked={true} type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal bg-[#ffffff5a]">
          <div className="h-screen flex justify-center items-center">
            <div id="loading-animate" className="flex items-center justify-center ">
              <span className="loader"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
