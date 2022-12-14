import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Pagination from "../../SharedPages/pagination/Pagination";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import BlogCard from "./BlogCard";
import BlogSideBar from "./BlogSideBar";

const Blogs = () => {
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [size] = useState(12);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await axiosPrivet.get("blog/counter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size, page]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosPrivet.get(`/blog/?page=${page}&size=${size}`);
        setBlogs(data?.blogs);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    })();
  }, [page, size]);

  console.log(blogs);

  return (
    <>
      <main>
        {/*=========== Breadcrumb start ===============*/}
        <section className=" bg-slate-100">
          <div className="container mx-auto">
            <div className="py-8 breadcrumbs">
              <Breadcrumb />
            </div>
          </div>
        </section>
        {/*============= Breadcrumb end ==============*/}
        <div className="container mx-auto mt-20">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10">
            <div className="col-span-3">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mx-auto">
                {blogs && blogs.map((blog) => <BlogCard key={blog?._id} blog={blog} />)}
              </div>
              <div className="flex justify-center mt-10 mb-10 btn-group">
                <Pagination pageCount={pageCount} setPage={setPage} />
              </div>
            </div>
            <div className="col-span-1 px-10 lg:px-0">
              <BlogSideBar />
            </div>
          </div>
        </div>
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
      {(!blogs || isLoading) && <Loading />}
    </>
  );
};

export default Blogs;
