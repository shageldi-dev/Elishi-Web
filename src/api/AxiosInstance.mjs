import axios from "axios";

export const BASE_URL = "http://95.85.119.162:5010/api/";
export const IMAGE_BASE_URL = "http://95.85.119.162:5010/";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("my_token")}`,
    },
});

export { AxiosInstance };