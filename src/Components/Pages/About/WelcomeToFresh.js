import React from "react";
import SlickList from "./SlickList";

const WelcomeToFresh = ({ banner }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
            <img src={banner} className="rounded-lg shadow-xl mx-auto" alt="banner" />
            <div>
              <div className="mx-10 md:mx-0">
                <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-start capitalize pb-8">
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
                  optio voluptatem exercitationem, error laborum eaque dolorum velit deleniti in ad
                  voluptates praesentium quae debitis accusantium voluptate voluptatum fugit? Saepe
                  aspernatur impedit nulla voluptatibus maiores debitis repudiandae! Dicta nulla
                  doloribus voluptate quam pariatur nam provident reprehenderit officiis quia
                  voluptatum?
                </p>
              </div>
              <div>
                <div>
                  <SlickList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeToFresh;
