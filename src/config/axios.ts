import { baseUrl } from "@/utils/helpers/baseUrl";
import { getToken } from "@/utils/helpers/localStorage";
import axios from "axios";
const axiosInstance: any = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: any) {
    const id_token = getToken();

    try {
      if (!!id_token) {
        config.headers["Authorization"] = `Bearer ${id_token}`;
      }

      return config;
    } catch (err) {
      console.log("error in axios", err);
    }

    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (error: any) {
    if (error.response && error.response.status === 401) {
      //when 401 i.e unauthorized comes
      //write function to clear session
      //console.log('its 401')
      localStorage.removeItem("token");
    }

    if (error.response && error.response.status === 403) {
      //store.dispatch(errorNotify('not authorized'))
    }

    return Promise.reject(error?.response?.data?.message);
  }
);

export default axiosInstance;
