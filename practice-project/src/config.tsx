import axios from "axios";

const baseApiUrl ="http://localhost/php-react-api/api/";

// const baseApiUrl = "http://localhost/php-react-api/api/";

const api =axios.create({
     baseURL:baseApiUrl,
     headers:{
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${localStorage.getItem("bearer_token")}`
     }
});

// add interceptors to always attach the latest token 

api.interceptors.request.use(
     (config) => {
     const token = localStorage.getItem("bearer_token");
     if (token) {
          config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
     },
     (error)=>Promise.reject(error)
);

export default api;
