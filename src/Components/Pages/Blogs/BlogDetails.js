import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Rating from "../../SharedPages/Rating";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import { FaCalendarAlt, FaThLarge, FaUserAlt } from "react-icons/fa";
import BlogComment from "./BlogComment";
import adminLogo from "../../../assets/logo/admin.jpg";
import product1 from "../../../assets/products_img/CashewNuts.png";
import product2 from "../../../assets/products_img/driedFishPacket.png";
import product3 from "../../../assets/products_img/dryShrimp.png";
import product4 from "../../../assets/products_img/greenPeasPacket.png";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import BlogSideBar from "./BlogSideBar";

const BlogDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");

  const { data, isLoading } = useQuery(
    ["blogDetails", id],
    async () => await axiosPrivet.get(`/blog-details/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {};
  console.log(data);
  const tags = data?.data?.data?.metaKeywords.split(", ");
  console.log(tags);

  const products = [
    {
      _id: "1",
      title: "Cashew Nuts",
      img: product1,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "new",
    },
    {
      _id: "2",
      title: "dried Fish Packet",
      img: product2,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "new",
    },
    {
      _id: "3",
      title: "Dry Shrimp",
      img: product3,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: 20,
    },
    {
      _id: "4",
      title: "green Peas Packet",
      img: product4,
      quantity: "123",
      price: "43",
      regularPrice: "50",
      raging: "4",
      brand: "amazon",
      productQuality: "hot",
    },
  ];
  let isLast = products[products.length - 1];
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
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10">
            <div className="col-span-3">
              <div className="border-b border-dashed border-gray-300">
                <figure>
                  <img
                    className="w-full h-auto rounded-xl"
                    src={data?.data?.images?.ImageURL1}
                    alt=""
                  />
                </figure>
                <div>
                  <h4 className="text-2xl mt-8 font-bold">Blog Image Post</h4>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 mt-4">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{data?.data?.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <FaUserAlt className="text-gray-400" />
                      <span className="capitalize">Posts by: {data?.data?.data?.role}</span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="leading-6">{data?.data?.data?.description1}</p>
                    <blockquote className="ml-20 py-10 ">
                      <p className="p-4 border-l-4 bg-base-200 border-primary">
                        <em> {data?.data?.data?.blockquote}</em>
                      </p>
                    </blockquote>
                    <p className="leading-6">{data?.data?.data?.description2}</p>
                    <div className="flex gap-1 py-10">
                      {tags &&
                        tags.map((tag, index) => (
                          <button
                            key={index}
                            className=" bg-[#FF6000] text-neutral py-2 px-4 rounded "
                          >
                            {tag}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div>
                  <ul>
                    <li className=" flex items-center">
                      <BsFillTagFill Fill className="text-[#FF6000] text-lg" />
                      <Link className="pl-2" to={"blog"}>
                        Branding
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Electronic
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Watch
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Laptop
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        IPad
                      </Link>
                      ,
                    </li>
                  </ul>
                </div>
                <div className="flex justify-around items-center py-10 my-10 bg-base-200">
                  <a href="" className="text-lg font-bold">
                    PREVIOUS POST
                  </a>
                  <FaThLarge className="text-lg " />
                  <a href="" className="text-lg font-bold">
                    NEXT POST
                  </a>
                </div>
                <div className="grid grid-cols-12 bg-base-200 py-10">
                  <div className="col-span-2">
                    <div className="avatar w-full justify-center pt-12">
                      <div className="w-20 rounded">
                        <img src={adminLogo} alt="" className="w-[70px] h-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-10 ">
                    <h4 className="text-xl font-bold">Admin</h4>
                    <p className="leading-7 pt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum
                      quaerat, aspernatur facilis totam nemo saepe quasi veniam. Autem voluptatum
                      saepe, itaque animi praesentium neque ut corrupti amet sit cumque
                      necessitatibus natus enim hic esse iste, dolorum laborum! Quaerat, omnis.
                      saepe, itaque animi praesentium neque ut corrupti amet sit cumque
                      necessitatibus natus enim hic esse iste, dolorum laborum! Quaerat, omnis.
                    </p>
                  </div>
                </div>
                {/* command  */}
                <div className="my-20">
                  <div className="">
                    <h4 className="text-2xl font-bold">Leave a Reply</h4>
                    <span className="text-gray-500">
                      <i> Your email address will not be published. Required fields are marked </i>
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                    <BlogComment />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 px-10 lg:px-0">
              <BlogSideBar />
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

export default BlogDetails;
