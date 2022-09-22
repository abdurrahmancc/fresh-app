import axios from "axios";

const axiosPrivet = axios.create({
  withCredentials: true,
  // baseURL: "https://fresh-0mf8.onrender.com/api/v1/",
  baseURL: "http://localhost:5000/api/v1/",
});
axiosPrivet.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivet.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status === 403) {
      //
    }
    return Promise.reject(error);
  }
);

export default axiosPrivet;
