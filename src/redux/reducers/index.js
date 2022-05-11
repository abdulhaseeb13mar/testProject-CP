import { combineReducers } from "redux";

import userSlice from "../slices/user";
import postsSlice from "../slices/posts";

const reducers = combineReducers({
  user: userSlice,
  posts: postsSlice,
});

export default reducers;
