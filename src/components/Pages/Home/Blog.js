import React from "react";
import { useNavigate } from "react-router";

const Blog = ({ blog }) => {
  const { _id } = blog;
  const navigate = useNavigate();
  return (
    <div className="pt-28 pb-20 mx-auto">
      {/* Card compo start */}
      <div
        className="card bg-base-100 max-h-full"
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <figure>
          <img className="w-96" src={blog.picture} alt="#" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <i className="card-title">{blog.author}</i>
          <p>{blog.body}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/blogs/${_id}`)}
              className="btn btn-warning"
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {/* Card compo end */}
    </div>
  );
};

export default Blog;
