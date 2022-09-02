import React from "react";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer/Footer";
import Newsletters from "../Newsletters/Newsletters";
import LoginForm from "./LoginForm";
import "./login.css";

const Login = () => {
  return (
    <>
      <main className="bg-[#F9F9F9]">
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
          <div className="">
            <div className="max-w-[500px] mx-auto">
              <div className="rounded-lg bg-white loginBodyShadow">
                <div className="p-5">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*------ Newsletters start ------*/}
        <section className="max-w-[100%] w-full mt-20">
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

export default Login;
