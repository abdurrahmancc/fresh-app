import React from "react";
import banner from "../../../assets/about-img/organic-foods.png";

import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import "./about.css";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import WelcomeToFresh from "./WelcomeToFresh";
import WhyChooseUs from "./WhyChooseUs";
import OurPerformance from "./OurPerformance";
import EasilyBuyOurProducts from "./EasilyBuyOurProducts";
import OurHappyClients from "./OurHappyClients";
import ExpertTeam from "./ExpertTeam";

const About = () => {
  return (
    <>
      <main>
        {/*---------- Breadcrumb start ---------*/}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/*----------- Breadcrumb end ------------*/}
        {/*------------- Welcome To Fresh start ---------- */}
        <section className="mt-20">
          <WelcomeToFresh banner={banner} />
        </section>
        {/*------------- Welcome To Fresh end ---------- */}
        {/*--------- Why Choose Us start---------*/}
        <section className="mt-20">
          <WhyChooseUs />
        </section>
        {/*--------- Why Choose Us end---------*/}

        {/*---------- Our performance start ----------*/}
        <section className="mt-20">
          <OurPerformance />
        </section>
        {/*---------- Our performance end ----------*/}

        {/*----------- easily purchase our products start ----------*/}
        <section className="mt-20">
          <EasilyBuyOurProducts />
        </section>
        {/*----------- easily purchase our products end ----------*/}

        {/*--------- our happy clients  start---------*/}
        <section className="mt-20">
          <OurHappyClients />
        </section>
        {/*--------- our happy clients  end---------*/}

        {/*--------- Dedicated Expert Team  start---------*/}
        <section className="mt-20">
          <ExpertTeam />
        </section>
        {/*--------- Dedicated Expert Team  end---------*/}

        {/*------- icons  free online money start----- */}
        <section className="container mx-auto mt-20">
          <div className="lg:mx-0 mx-5">
            <FreeOnlineMoney></FreeOnlineMoney>
          </div>
        </section>
        {/*------- icons  free online money end ------*/}
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
          <Newsletters></Newsletters>
        </section>
        {/*------ Newsletters end -------*/}
        {/*---------- scroll button start ---------*/}
        <ScrollBtn />
        {/*---------- scroll button end ---------*/}
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

export default About;
