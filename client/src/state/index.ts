import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: null,
  chats:[],
  users:[]
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state,action) => {
      state.users = action.payload.users
      state.token = action.payload.token
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("друзей нет");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setChats: (state, action) => {
      state.chats = action.payload.chats;
    },
    setChat: (state, action) => {
      const updatedChats = state.chats.map((chat) => {
        if (chat._id === action.payload.chat._id) return action.payload.chat;
        return chat;
      });
      state.chats = updatedChats;
    },
  },
});

export const { setUsers,setMode, setLogin, setLogout, setFriends, setPosts, setPost,setChats,setChat } =
  authSlice.actions;
export default authSlice.reducer;
