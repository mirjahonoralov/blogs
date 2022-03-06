import React, { createContext, useEffect, useReducer } from "react";
import BlogReducer from "../reducers/BlogReducer";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogs, dispatch] = useReducer(BlogReducer, [], () => {
    let localData = localStorage.getItem("blogs");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
