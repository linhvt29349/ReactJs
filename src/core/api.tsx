import axios from "axios";


export const intrences = axios.create({
    baseURL: " http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        timeout: 1000
    }
})