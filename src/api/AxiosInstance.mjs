import axios from "axios";

export const BASE_URL = "http://api.elishi.art/api/";
export const IMAGE_BASE_URL = "http://api.elishi.art/";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
    },
});

export { AxiosInstance };