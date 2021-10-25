import axios from "axios";

const url = "http://localhost5050/posts";

export const fetchPosts = () => axios.get(url);
