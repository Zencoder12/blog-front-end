import jwtDecode from "jwt-decode";

function setUserId() {
  const jwtAccessToken = sessionStorage.getItem("access_token");
  const tokenData = JSON.stringify(jwtDecode(jwtAccessToken).user_id);
  sessionStorage.setItem("userId", tokenData);
}

function getUserId() {
  return sessionStorage.getItem("userId");
}

function removeUserId() {
  sessionStorage.removeItem("userId");
}

export { setUserId, getUserId, removeUserId };
