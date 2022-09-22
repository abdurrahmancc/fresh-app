import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Breadcrumb from "../../SharedPages/Breadcrumb";
import Footer from "../../SharedPages/Footer/Footer";
import Loading from "../../SharedPages/Loading";
import Newsletters from "../../SharedPages/Newsletters/Newsletters";
import Pagination from "../../SharedPages/pagination/Pagination";
import ScrollBtn from "../../SharedPages/ScrollBtn";
import BlogSideBar from "./BlogSideBar";

const Blogs = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size] = useState(1);
  const [reload, setReload] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("blog/counter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size, page]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get(`/blog/?page=${page}&size=${size}`);
        setBlogs(data?.blogs);
        setReload(true);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [reload, page, size]);

  if (!blogs) {
    return <Loading />;
  }

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
        <div className="container mx-auto mt-20">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10">
            <div className="col-span-3">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mx-auto">
                {blogs &&
                  blogs.map((blog) => (
                    <div
                      key={blog?._id}
                      className="card hover:top-[-4px] relative top-0 ease-in-out duration-500 card-compact lg:max-w-sm max-w-md mx-auto  bg-base-100 shadow"
                    >
                      <figure>
                        <img
                          height={256}
                          width={384}
                          className={"h-[256px] w-full"}
                          src={blog?.image}
                          alt="blog"
                        />
                      </figure>
                      <div className="card-body">
                        <div className="flex justify-center gap-5 items-center">
                          <span className="text-gray-400">category</span>
                          <span className="text-gray-400">122k view</span>
                          <span className="text-gray-400">23 April 3232</span>
                        </div>
                        <h2 className="card-title text-2xl leading-10">{blog?.title}</h2>
                        <p className="text-sm pt-2">{blog?.description1.slice(0, 184)}...</p>
                        <div className="card-actions justify-start pt-4">
                          <Link
                            to={`/blog-details/${blog?._id}`}
                            href=""
                            className="capitalize font-bold text-primary"
                          >
                            read more...
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-20 mb-10 btn-group">
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
    </>
  );
};

export default Blogs;
