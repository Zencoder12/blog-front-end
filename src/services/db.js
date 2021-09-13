import { serverApi } from "../config.json";
import axios from "axios";

export async function getPosts() {
  const apiCall = await fetch(serverApi);
  const data = apiCall.json();

  return data;
}

export const axiosInstance = axios.create({
  baseURL: serverApi,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
