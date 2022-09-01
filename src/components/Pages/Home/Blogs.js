import React from "react";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";

const Blogs = () => {
  const { blogs, isPending } = useBlogs(
    "https://young-plains-25750.herokuapp.com/blogs"
  );

  return (
    <div className="pt-28 pb-20 mx-auto">
      <h2 className="text-center mb-12 text-3xl font-bold text-slate-300">
        Blog Content
      </h2>
      {/* PROJECT CARD ADDING */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 p-16">
        {blogs && blogs.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)}
      </div>
    </div>
  );
};

export default Blogs;
