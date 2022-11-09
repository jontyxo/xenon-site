import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://test-test-xenon.herokuapp.com/api/"
})