import React from "react";
import SlickList from "./SlickList";
import banner from "../../../assets/about-img/organic-foods.png";
import product from "../../../assets/about-img/product-img.png";
import happy from "../../../assets/about-img/happy-img.png";
import location from "../../../assets/about-img/location-img.png";
import solution from "../../../assets/about-img/solution.png";
import Rating from "../../SharedPages/Rating";
import user1 from "../../../assets/about-img/user-1.png";
import user2 from "../../../assets/about-img/user-2.png";
import user3 from "../../../assets/about-img/user-3.png";
import user4 from "../../../assets/about-img/user-4.png";
import user5 from "../../../assets/about-img/user-5.png";
import user6 from "../../../assets/about-img/user-6.png";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import "./about.css";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import ScrollBtn from "../../SharedPages/ScrollBtn";

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
          <div className="container mx-auto">
            <div className="max-w-[1320px] mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
                <img src={banner} className="rounded-lg shadow-xl mx-auto" alt="banner" />
                <div className="">
                  <h2 className="lg:text-4xl text-[4vw] font-bold text-center lg:text-start capitalize  pb-8">
                    Welcome to Fresh
                  </h2>
                  <p className="pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                    tempore mollitia! Suscipit, aliquid id possimus dolores odit maiores inventore
                    quam corrupti qui itaque perferendis reiciendis soluta est tempora officia
                    laudantium, porro rem, facere saepe eligendi dolor voluptatem molestias.
                    Provident.
                  </p>
                  <p className="pb-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem pariatur
                    optio voluptatem exercitationem, error laborum eaque dolorum velit deleniti in
                    ad voluptates praesentium quae debitis accusantium voluptate voluptatum fugit?
                    Saepe aspernatur impedit nulla voluptatibus maiores debitis repudiandae! Dicta
                    nulla doloribus voluptate quam pariatur nam provident reprehenderit officiis
                    quia voluptatum?
                  </p>
                  <div>
                    <div>
                      <SlickList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*------------- Welcome To Fresh end ---------- */}
        {/*----------- easily purchase our products start ----------*/}
        <section className="mt-20">
          <div className="py-20 bg-[#f4f1ed]">
            <div className="container mx-auto">
              <div className="max-w-[1320px] mx-auto">
                <h2 className="lg:text-4xl text-[4vw] text-center pb-10 font-bold capitalize ">
                  You can easily purchase our products <br /> within your price range.
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-20">
                  <div className="card max-w-[26.3rem] rounded-lg ">
                    <figure>
                      <img src={location} className="w-20 mx-auto" alt="address-icon" />
                    </figure>
                    <h3 className="text-xl font-bold  py-3 capitalize text-center">
                      Address Details
                    </h3>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid
                      id excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
                    </p>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg ">
                    <figure>
                      <img src={product} className="w-20 mx-auto " alt="products-icon" />
                    </figure>
                    <h3 className="text-xl font-bold  capitalize text-center py-3">
                      Choose product
                    </h3>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid
                      id excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
                    </p>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg ">
                    <figure>
                      <img src={happy} className="w-20 mx-auto" alt="enjoy-icon" />
                    </figure>
                    <h3 className="text-xl font-bold  capitalize text-center py-3">
                      enjoy products
                    </h3>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi aliquid
                      id excepturi incidunt minus eaque, necessitatibus velit! Incidunt, saepe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*----------- easily purchase our products end ----------*/}
        {/*---------- Our performance start ----------*/}
        <section className="mt-20">
          <div className="container mx-auto">
            <div className="max-w-[1320px] lg:mx-auto mx-10">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
                <img src={solution} className="rounded-lg shadow-lg" alt="banner" />
                <div className="">
                  <span className="text-2xl lg:text-start text-center block  text-gray-500 lg:inline">
                    Our performance
                  </span>
                  <h2 className="lg:text-5xl text-center lg:text-start text-[4vw] font-bold capitalize  py-8">
                    Your Partner for e-commerce grocery solution
                  </h2>
                  <p className="pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus
                    tempore mollitia! Suscipit, aliquid id possimus dolores odit maiores inventore
                    quam corrupti qui itaque perferendis reiciendis soluta est tempora officia
                    laudantium, porro rem, facere saepe eligendi dolor voluptatem molestias.
                  </p>
                  <p className="pb-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem pariatur
                    optio voluptatem exercitationem, error laborum eaque dolorum velit deleniti in
                    ad voluptates praesentium quae debitis accusantium voluptate voluptatum fugit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*---------- Our performance end ----------*/}
        {/*--------- Dedicated Expert Team  start---------*/}
        <section className="mt-20">
          <div className="py-20 bg-[#f4f1ed]">
            <div className="container mx-auto">
              <div className="max-w-[1320px] mx-auto">
                <h2 className="lg:text-4xl text-[4vw] text-center pb-20 font-bold capitalize ">
                  our professional and dedicated <br /> expert team leader
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-10">
                  <div className="card max-w-[26.3rem] rounded-lg  bg-base-100 shadow-xl">
                    <figure className="px-10 w-full pt-10">
                      <img src={user1} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body  w-full items-center text-center">
                      <h2 className="card-title capitalize pt-2 ">Williams</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={user3} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title capitalize pt-2 ">Charlotte</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={user2} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title capitalize pt-2 ">rodriguez</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--------- Dedicated Expert Team  end---------*/}
        {/*--------- our happy clients  start---------*/}
        <section className="mt-20">
          <div className="py-20">
            <div className="container mx-auto">
              <div className="max-w-[1320px] mx-auto">
                <h2 className="lg:text-4xl text-[4vw] text-center pb-20 font-bold capitalize ">
                  Our Happy clients
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center justify-items-center gap-10">
                  <div className="card max-w-[26.3rem] rounded-lg  bg-base-100 clientReview_shadow">
                    <figure className="px-10 w-full pt-10">
                      <img src={user4} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body  w-full items-center text-center">
                      <Rating />
                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                      <h2 className="card-title capitalize pt-2 ">Williams</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg bg-base-100 clientReview_shadow">
                    <figure className="px-10 pt-10">
                      <img src={user5} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <Rating />

                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                      <h2 className="card-title capitalize pt-2 ">Charlotte</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                    </div>
                  </div>
                  <div className="card max-w-[26.3rem] rounded-lg bg-base-100 clientReview_shadow">
                    <figure className="px-10 pt-10">
                      <img src={user6} className="rounded-[50%]" alt="user_photo" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <Rating />
                      <p className="pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio
                        laboriosam distinctio soluta, minima dolorum!
                      </p>
                      <h2 className="card-title capitalize pt-2 ">rodriguez</h2>
                      <span className="text-gray-500 capitalize">project manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--------- our happy clients  end---------*/}
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
