import React from "react";
import BannerSlider from "../Home/BannerSlider";
import BestSellingProducts from "../Home/BestSellingProducts/BestSellingProducts";
import DealsOfTheDay from "../Home/DealsOfTheDay/DealsOfTheDay";
import Features from "../Home/Features";
import FreeOnlineMoney from "../Home/FreeOnlineMoney";
import ProductBanner from "../Home/ProductBanner";
import "../Home/home.css";
import ProductsOfYourChoice from "../Home/ProductsOfYourChoice/ProductsOfYourChoice";
import banner1 from "../../../assets/product_Banner/product_Banner-2.png";
import banner2 from "../../../assets/product_Banner/product_Banner-4.png";
import banner4 from "../../../assets/product_Banner/product_Banner-1.png";
import banner3 from "../../../assets/product_Banner/product_Banner-3.png";
import TopTrendingRecently from "../Home/TopTrendingRecently/TopTrendingRecently";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Footer from "../../SharedPages/Footer/Footer";
import Footer2 from "../../SharedPages/Footer2.js/Footer2";

const Home2 = () => {
  const img1 = [banner1, banner2];
  const img2 = [banner3, banner4];
  return (
    <main>
      {/*------- Banner Slider section start -------*/}
      <section className="container mx-auto mt-10">
        <div className="lg:mx-0 mx-5">
          <BannerSlider />
        </div>
      </section>
      {/*------- Banner Slider section start -------*/}

      {/*category features start*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <Features></Features>
        </div>
      </section>
      {/* category features  end */}
      {/*Banner start*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <ProductBanner img={img1}></ProductBanner>
        </div>
      </section>
      {/* Banner  end */}
      {/*------ Deals Of The Day start ------*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <DealsOfTheDay></DealsOfTheDay>
        </div>
      </section>
      {/*------ Deals Of The Day end --------*/}
      {/*------ Best Selling products start ------*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <BestSellingProducts></BestSellingProducts>
        </div>
      </section>
      {/*------ Best Selling products end --------*/}
      {/*Banner start*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <ProductBanner img={img2}></ProductBanner>
        </div>
      </section>
      {/* Banner  end */}
      {/*------ products of your choice start ------*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <ProductsOfYourChoice></ProductsOfYourChoice>
        </div>
      </section>
      {/*------ products of your choice end --------*/}
      {/*------- icons  free online money start----- */}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <FreeOnlineMoney></FreeOnlineMoney>
        </div>
      </section>
      {/*------- icons  free online money end ------*/}
      {/*------ Top Trending Recently products start ------*/}
      <section className="container mx-auto mt-20">
        <div className="lg:mx-0 mx-5">
          <TopTrendingRecently></TopTrendingRecently>
        </div>
      </section>
      {/*------ Top Trending Recently products end --------*/}

      {/*------ footer start ------*/}
      <footer className=" mt-20">
        <Footer2></Footer2>
      </footer>
      {/*------ footer end -------*/}
    </main>
  );
};

export default Home2;
