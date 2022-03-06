import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import Blog from "./Blog";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  return blogs.length ? (
    <div className="row">
      {blogs.map((blog) => {
        return <Blog blog={blog} key={blog.id} />;
      })}
    </div>
  ) : (
    <div className="p-3 bg-warning rounded-3 fw-bold fs-3">No any Blogs</div>
  );
};

export default BlogList;
