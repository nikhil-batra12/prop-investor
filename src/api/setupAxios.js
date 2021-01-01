import axios from "axios";

const setupAxios = () => {
  axios.defaults.baseURL = "http://localhost:3001/api";
  axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    (request) => {
      console.log(request);
      return request;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
};

export default setupAxios;
