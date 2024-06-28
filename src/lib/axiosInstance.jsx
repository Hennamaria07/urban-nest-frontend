import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ecommerce-server-voxn.onrender.com"
    // baseURL: "http://localhost:4000"
})