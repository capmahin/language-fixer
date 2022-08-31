import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [id]);

  return (
    <div className="m-10">
      <h2 className="text-center mb-12 text-3xl font-bold text-slate-300">
        Blogs Details
      </h2>
      {/* {isPending && <div>Loading..</div>} */}
      <div className="artboard artboard-horizontal lg:phone-6 bg-slate-500 text-zinc-300 p-10 mx-auto">
        <i className="text-3xl lg:text-5xl font-bold">{blogs.title}</i>
        <article className="py-5 text-justify">{blogs.body}</article>
        <h2 className="text-xl">-{blogs.author}</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
