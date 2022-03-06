import React, { useContext, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";

const AddBlog = () => {
  const { dispatch } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BLOG", title: title, body: body });
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-3 align-items-center mt-3"
    >
      <h2>Create New Blog</h2>
      <input
        className="col-12 ps-3 form-control fs-5"
        type="text"
        placeholder="blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="col-12 ps-3 form-control fs-5"
        type="text"
        placeholder="blog body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input type="submit" value="Add blog+" className="btn btn-success" />
    </form>
  );
};

export default AddBlog;
