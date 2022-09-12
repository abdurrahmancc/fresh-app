import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import { ImArrowLeft2 } from "react-icons/im";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/*------------- 404 not found pages start ----------*/}
        <section>
          <div className="mx-auto bg-[#f7f9f3] w-full flex flex-col justify-center h-screen items-center">
            <h1 className="lg:text-[110px] sm:text-[80px] text-[48px] mx-auto text-center font-semibold">
              404
            </h1>
            <h2 className="lg:text-[70px] sm:text-[52px] text-[28px] font-semibold mb-6 lg:mt-[-40px] sm:mt-[-28px]">
              Page Not Found
            </h2>
            <p className="lg:text-2xl sm:text-xl text-lg text-center text-[#666] sm:mb-12 mb-7 leading-[1.5]">
              The resource requested could not be <br /> found on this server!
            </p>
            <button
              onClick={() => navigate(-1)}
              className="text-white duration-300 transition-all ease-in-out flex items-center gap-3 hover:bg-[#6f9a1b] bg-primary rounded-full font-semibold uppercase py-4 mx-auto text-center text-lg px-10"
            >
              <ImArrowLeft2 className="" /> Previous Page
            </button>
          </div>
        </section>
        {/*------------- 404 not found pages end ----------*/}
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
      </main>
      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------ footer end -------*/}
    </>
  );
};

export default NotFound;
