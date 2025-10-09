import axios from "axios";

const baseApiUrl ="http://localhost/php-react-api/api/";

// const baseApiUrl = "http://localhost/php-react-api/api/";

const api =axios.create({
     baseURL:baseApiUrl,
     headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic29oZWwiLCJlbWFpbCI6InNvaGVsQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTk5MDc2NCwiZXhwIjoxNzYwNTk1NTY0fQ.vGWTzt_0h2iqkuGuNBMygWx37qkjcoHyQVU6y0Am7qQ`
     }
});

export default api