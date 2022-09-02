import { combineReducers } from "redux";
import {
  blogReducer,
  selectedBlogReducer,
} from "../../../../Redux-Blog/reducers/blogReducer";
import { operationsReducer } from "./todoapp/reducers/oparetion";

export const rootReducer = combineReducers({
  operationsReducer,
  allBlogs: blogReducer,
  blog: selectedBlogReducer,
  // more reducers can be added here
});
