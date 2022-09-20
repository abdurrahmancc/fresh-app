import React from "react";
import logo from "../../../assets/logo/logo.png";
import apple from "../../../assets/logo/apple.png";
import googlePlay from "../../../assets/logo/googlePlay.png";
import paypal from "../../../assets/logo/paypal-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto">
        <footer className="footer md:grid-cols-5 md:justify-items-start  sm:grid-cols-3 text-base-content">
          <div>
            <img className="md:w-6/12 w-4/12" src={logo} alt="logo" />
            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex gap-2">
                <IoLocationOutline className="inline-block text-xl text-primary" />
                <span>2855 Stevens Creek BLVD, Utah 43332 United States.</span>
              </li>
              <li className="flex gap-2">
                <SiMinutemailer className="inline-block text-xl text-primary" />
                <span>sale@fresh.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-black">Company</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/" className="link link-hover">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-black">Account</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/" className="link link-hover">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  View Cart
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Help Ticket
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Shipping Details
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-black">Categories</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/" className="link link-hover">
                  Bakery & pastry
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Meats
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Vegetable
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Custard Powder
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Farm Raised Fillets
                </a>
              </li>
              <li>
                <a href="/" className="link link-hover">
                  Snacks Item
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold pb-3 text-black">Install App</h5>
            <p>From App Store or Google Play</p>
            <div className="flex items-center gap-2 pb-5 pt-2">
              <a href="/" className="relative hover:top-[-4px] top-0 ease-linear duration-200 ">
                <img src={apple} alt="apple store logo" />
              </a>
              <a href="/" className="relative hover:top-[-4px] top-0 ease-linear  duration-200 ">
                <img src={googlePlay} alt="google play logo" />
              </a>
            </div>
            <p className="pb-2">Secured Payment Gateways</p>
            <img src={paypal} className="w-6/12" alt="Payment Gateways" />
          </div>
        </footer>
        <footer className=" py-4 border-t  mt-10 flex justify-center md:justify-between">
          <div className="items-center grid-flow-col ">
            <p className="capitalize text-center md:text-start">
              Copyright &copy; {new Date().getFullYear()}, {""}
              <strong className="text-primary">Fresh</strong>
              {""} - Ecommerce template <br /> All rights reserved
            </p>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="flex gap-3 items-center">
              <h5 className="font-semibold">Follow Us</h5>
              <div className="flex text-primary  gap-1">
                <a
                  href="https://www.facebook.com/"
                  className="text-lg p-1 rounded-full bg-primary text-neutral hover:bg-blue-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="text-lg p-1  rounded-full bg-primary text-neutral hover:bg-neutral hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-lg  p-1 border rounded-full bg-primary text-neutral hover:text-red-500 hover:bg-neutral"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  className="text-lg  p-1  rounded-full bg-primary text-neutral hover:bg-red-600 hover:text-neutral"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="text-lg  p-1  rounded-full bg-primary text-neutral hover:bg-red-500"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <p className="text-gray-500">Up to 15% discount on your first subscribe</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
