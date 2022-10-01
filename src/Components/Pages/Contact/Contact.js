import React from "react";
import ContactForm from "./ContactForm";
import "./contact.css";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import GoogleMaps from "./GoogleMaps";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";

const Contact = () => {
  return (
    <>
      <main>
        {/* Breadcrumb start */}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/* Breadcrumb end */}
        <section className="container mx-auto mt-20">
          <GoogleMaps />
        </section>
        {/*------- get In Touch start ------*/}
        <section className="mt-20">
          <div className="py-20">
            <div className="container mx-auto">
              <div className="max-w-[1320px] mx-auto">
                <h2 className="lg:text-4xl text-[4vw] text-center  font-bold capitalize ">
                  Get In Touch
                </h2>
                <p className="pb-10 mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos
                  deserunt <br className="md:block hidden" /> est tenetur nobis vero vel veritatis
                  voluptatem corporis in.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-10">
                  <div className="card max-w-[26.3rem] p-8 rounded-lg clientReview_shadow hover:top-[-4px] relative top-0 ease-in-out duration-500 w-full">
                    <IoLocationSharp className="text-5xl mb-5 text-primary w-full" />

                    <div className="card-body p-0 w-full items-center text-center">
                      <h4 className="card-title pb-2 text-[15px] capitalize ">
                        Utah 43332 United States
                      </h4>
                      <p className="text-gray-500 pb-4 capitalize">
                        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] p-8 rounded-lg clientReview_shadow hover:top-[-4px] relative top-0 ease-in-out duration-500 w-full">
                    <FiPhoneCall className="text-5xl mb-5 text-primary w-full" />

                    <div className="card-body p-0 w-full items-center text-center">
                      <h4 className="card-title pb-2 text-[15px] capitalize ">
                        Utah 43332 United States
                      </h4>
                      <p className="text-gray-500 pb-4 capitalize">
                        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] p-8 rounded-lg clientReview_shadow hover:top-[-4px] relative top-0 ease-in-out duration-500 w-full">
                    <AiOutlineMail className="text-5xl mb-5 text-primary w-full" />

                    <div className="card-body p-0 w-full items-center text-center">
                      <h4 className="card-title pb-2 text-[15px] capitalize ">
                        Utah 43332 United States
                      </h4>
                      <p className="text-gray-500 pb-4 capitalize">
                        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-------------- get In Touch end -------------*/}
        {/*-------------- contact form start ----------- */}
        <section section className="container mx-auto mt-20">
          <ContactForm></ContactForm>
        </section>
        {/*-------------- contact form end ----------- */}
        {/*------- icons  free online money start----- */}
        <section className="container mx-auto mt-20">
          <div className="lg:mx-0 mx-5">
            <FreeOnlineMoney></FreeOnlineMoney>
          </div>
        </section>
        {/*------- icons  free online money end ------*/}
        {/*-------------- Newsletters start -----------*/}
        <section className="max-w-[100%] w-full mt-40">
          <Newsletters></Newsletters>
        </section>
        {/*----------------- Newsletters end -----------*/}
        {/*---------- scroll button start ---------*/}
        <ScrollBtn />
        {/*---------- scroll button end ---------*/}
      </main>
      {/*------------------- footer start --------------*/}
      <footer className=" mt-20">
        <div className="lg:mx-0 mx-5">
          <Footer></Footer>
        </div>
      </footer>
      {/*------------------- footer end ----------------*/}
    </>
  );
};

export default Contact;
