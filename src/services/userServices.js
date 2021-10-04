import jwtDecode from "jwt-decode";

function setUserId() {
  const jwtAccessToken = localStorage.getItem("access_token");
  const tokenData = JSON.stringify(jwtDecode(jwtAccessToken).user_id);
  localStorage.setItem("userId", tokenData);
}

function getUserId() {
  return localStorage.getItem("userId");
}

function removeUserId() {
  localStorage.removeItem("userId");
}

export { setUserId, getUserId, removeUserId };
