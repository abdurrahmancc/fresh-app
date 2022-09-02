import React from "react";
import logo from "../../../assets/logo/logo_white.png";
import payment from "../../../assets/logo/payment.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import GoogleApp from "../Footer/GoogleApp";
import "./Footer2.css";
const Footer2 = () => {
  return (
    <div className="bg-[#227200]">
      <div className="container mx-auto md:px-0 px-5">
        <footer className="mb-20">
          <GoogleApp />
        </footer>
        <footer className="footer md:grid-cols-5 md:justify-items-start  sm:grid-cols-3 text-base-content">
          <div>
            <img className="md:w-6/12 w-4/12" src={logo} alt="logo" />
            <p className="py-3 text-base-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="flex flex-col gap-y-3 text-base-200">
              <li className="">
                <IoLocationOutline className="inline-block text-xl text-white" />
                <strong> Address: </strong>
                <span>2855 Stevens Creek BLVD, Utah 43332 United States.</span>
              </li>
              <li className="">
                <SiMinutemailer className="inline-block text-xl text-white" />
                <strong> E-mail: </strong>
                <span>sale@fresh.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-white">Company</h5>
            <ul className="flex flex-col gap-3 text-base-200">
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <a className="link link-hover">Contact Us</a>
              </li>
              <li>
                <a className="link link-hover">Delivery Information</a>
              </li>
              <li>
                <a className="link link-hover">Privacy Policy</a>
              </li>
              <li>
                <a className="link link-hover">Terms & Conditions</a>
              </li>

              <li>
                <a className="link link-hover">Support Center</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-white">Account</h5>
            <ul className="flex flex-col gap-3 text-base-200">
              <li>
                <a className="link link-hover">Sign In</a>
              </li>
              <li>
                <a className="link link-hover">View Cart</a>
              </li>
              <li>
                <a className="link link-hover">My Wishlist</a>
              </li>
              <li>
                <a className="link link-hover">Track My Order</a>
              </li>
              <li>
                <a className="link link-hover">Help Ticket</a>
              </li>
              <li>
                <a className="link link-hover">Shipping Details</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-white">Categories</h5>
            <ul className="flex flex-col gap-3 text-base-200">
              <li>
                <a className="link link-hover">Bakery & pastry</a>
              </li>
              <li>
                <a className="link link-hover">Meats</a>
              </li>
              <li>
                <a className="link link-hover">Vegetable</a>
              </li>
              <li>
                <a className="link link-hover">Custard Powder</a>
              </li>
              <li>
                <a className="link link-hover">Farm Raised Fillets</a>
              </li>
              <li>
                <a className="link link-hover">Snacks Item</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-lg font-bold pb-3 text-white">Newsletter</h5>
            <p className="text-base-200">Get update every week your inbox</p>
            <form action="" className="relative">
              <SiMinutemailer className="text-accent newsletter-icons text-xl absolute  right-3 top-3" />
              <input
                type="text"
                className="input w-full focus:outline-none rounded-sm newsletter"
                placeholder="Enter your e-mail"
              />
              <button type="submit" className="btn font-bold px-6 mt-5 btn-accent rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </footer>
        <footer className=" py-4 border-t border-[#c5f8c51a] mt-10 flex justify-center md:justify-between">
          <div className="items-center grid-flow-col ">
            <p className="capitalize text-center text-base-200 md:text-start">
              Copyright &copy; {new Date().getFullYear()}, {""}
              <strong className="text-accent">Fresh</strong>
              {""} - Ecommerce template <br /> All rights reserved
            </p>
          </div>
          <div className=" hidden  lg:flex items-center gap-10 md:justify-self-center">
            <img src={payment} className="" alt="Payment Gateways" />
          </div>
          <div className="hidden md:flex flex-col">
            <div className="flex gap-3 items-center text-base-200">
              <h5 className="font-semibold">Follow Us</h5>
              <div className="flex text-primary  gap-1">
                <a
                  href="#"
                  className="text-lg p-1 rounded-full bg-primary text-neutral hover:bg-blue-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-lg p-1  rounded-full bg-primary text-neutral hover:bg-neutral hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-lg  p-1 border rounded-full bg-primary text-neutral hover:text-red-500 hover:bg-neutral"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-lg  p-1  rounded-full bg-primary text-neutral hover:bg-red-600 hover:text-neutral"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#"
                  className="text-lg  p-1  rounded-full bg-primary text-neutral hover:bg-red-500"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <p className="text-base-200">Up to 15% discount on your first subscribe</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer2;
