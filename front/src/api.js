import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl = "http://localhost:" + backendPortNumber + "/";
console.log(serverUrl);

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + params, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
    withCredentials: true,
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
    withCredentials: true,
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
    withCredentials: true,
  });
}

async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
    withCredentials: true,
  });
}

export { get, post, put, del as delete };
