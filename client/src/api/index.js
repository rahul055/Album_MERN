import axios from "axios";
const url = "http://localhost:5050/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newpost) => axios.post(url, newpost);
