import uuid from "react-uuid";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG": {
      if (action.title && action.body)
        return [
          ...state,
          {
            title: action.title,
            body: action.body,
            id: uuid(),
          },
        ];
      else return state;
    }
    case "DELETE_BLOG":
      return state.filter((blog) => blog.id !== action.id);
    default:
      return state;
  }
};

export default BlogReducer;
