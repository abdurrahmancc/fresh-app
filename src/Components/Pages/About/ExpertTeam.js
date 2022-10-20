import React from "react";
import user1 from "../../../assets/about-img/user-1.png";
import user2 from "../../../assets/about-img/user-2.png";
import user3 from "../../../assets/about-img/user-3.png";

const ExpertTeam = () => {
  return (
    <div className="py-20 bg-[#f4f1ed]">
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto">
          <div className="pb-10">
            <h2 className="lg:text-4xl text-3xl font-bold text-center capitalize pb-3">
              our professional team
            </h2>
            <p className="text-center text-[16px] px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, neque ut!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-10">
            <div className="card max-w-[26.3rem] rounded-lg  bg-base-100 hover:top-[-4px] relative top-0 ease-in-out duration-500 shadow-xl">
              <figure className="px-10 w-full pt-10">
                <img src={user1} className="rounded-[50%]" alt="user_photo" />
              </figure>
              <div className="card-body pt-2 w-full items-center text-center">
                <h2 className="card-title capitalize pt-2 ">Williams</h2>
                <span className="text-gray-500 capitalize">Team Leader</span>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio laboriosam
                  distinctio soluta, minima dolorum!
                </p>
              </div>
            </div>
            <div className="card max-w-[26.3rem] rounded-lg bg-base-100 hover:top-[-4px] relative top-0 ease-in-out duration-500 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={user3} className="rounded-[50%]" alt="user_photo" />
              </figure>
              <div className="card-body pt-2 items-center text-center">
                <h2 className="card-title capitalize pt-2 ">Charlotte</h2>
                <span className="text-gray-500 capitalize">project manager</span>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio laboriosam
                  distinctio soluta, minima dolorum!
                </p>
              </div>
            </div>
            <div className="card max-w-[26.3rem] rounded-lg bg-base-100 hover:top-[-4px] relative top-0 ease-in-out duration-500 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={user2} className="rounded-[50%]" alt="user_photo" />
              </figure>
              <div className="card-body pt-2 items-center text-center">
                <h2 className="card-title capitalize pt-2 ">rodriguez</h2>
                <span className="text-gray-500 capitalize">side manager</span>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio laboriosam
                  distinctio soluta, minima dolorum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
