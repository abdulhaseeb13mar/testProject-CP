import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    clearPosts: (state, action) => {
      state.posts = [];
    },
  },
});

export const { setPosts, clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
