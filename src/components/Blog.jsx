import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

const Blog = ({ blog }) => {
  const { dispatch } = useContext(BlogContext);
  return (
    <div className="p-2 col-md-6 col-12">
      <div className="bg-secondary text-white p-3 rounded-3 ">
        <div className="d-flex flex-column" key={blog.id}>
          <div className="m-2 fs-2">{blog.title}</div>
          <div className="m-2">{blog.body}</div>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DELETE_BLOG", id: blog.id })}
        >
          Delete blog
        </button>
      </div>
    </div>
  );
};

export default Blog;
