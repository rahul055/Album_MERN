import axios from "axios";
const API = axios.create({ baseURL: "https://album-mern.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");

export const createpost = (newpost) => API.post("/posts", newpost);

export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likepost`);

export const signIn = (formData) => API.post("/auth/signin", formData);

export const signup = (form) => API.post("/auth/signup", form);
