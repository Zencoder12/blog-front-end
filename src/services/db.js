import { serverApi } from "../config.json";

export async function getPosts() {
  const apiCall = await fetch(serverApi);
  const data = apiCall.json();

  return data;
}
