import { ActionTypes } from "../constants/action-types";

const setBlogs = (blogs) => {
  return {
    type: ActionTypes.SET_BLOGS,
    payload: blogs,
  };
};

export default setBlogs;

export const selectedBlog = (blog) => {
  return {
    type: ActionTypes.SELECTED_BLOG,
    payload: blog,
  };
};
