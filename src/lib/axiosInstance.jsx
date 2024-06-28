import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ecommerce-server-voxn.onrender.com"
    // baseURL: "http://localhost:4000"
    // baseURL: "https://urban-nest-8h06skkkq-henna-marias-projects.vercel.app"
})