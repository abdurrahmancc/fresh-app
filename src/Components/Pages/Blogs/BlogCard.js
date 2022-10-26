import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card hover:top-[-4px] relative top-0 ease-in-out duration-500 card-compact lg:max-w-sm max-w-md mx-auto  bg-base-100 shadow">
      <figure>
        <img className={"h-[256px] w-full"} src={blog?.image} alt="blog" />
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
            state={blog?.title}
            className="capitalize font-bold text-primary"
          >
            read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
