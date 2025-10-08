import axios from "axios";

const baseApiUrl ="http://localhost/php-react-api/api/";

// const baseApiUrl = "http://localhost/php-react-api/api/";

const api =axios.create({
     baseURL:baseApiUrl,
     headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic29oZWwiLCJlbWFpbCI6InNvaGVsQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTg5NjE1NiwiZXhwIjoxNzU5ODk5NzU2fQ.6Rhfd9j3_omtfJlZc6_UqArZpAuMIOfQxWSPSG2bTDo`
     }
});

export default api