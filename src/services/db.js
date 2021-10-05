import axios from "axios";

const serverApi = process.env.REACT_APP_API_URL;

// defining the basic axios object
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

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function (error) {
    console.log(error.response.data);
    const originalRequest = error.config;

    // unexpected response
    if (
      typeof error.response === "undefined" ||
      error.response.status === 500
    ) {
      window.location.href = "/error-500";
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === serverApi + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    // sent the token but the token was not valid, so use refresh token to get a
    // new access token
    if (
      error.response.status === 401 &&
      error.response.data.code === "token_not_valid" &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      // first, check if refresh token exists
      if (refreshToken) {
        const tokenParts = JSON.parse(
          Buffer.from(refreshToken.split(".")[1], "base64")
        );

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        // second, check if refresh token live time expired
        if (tokenParts.exp > now) {
          axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              // return axiosInstance(originalRequest);
            })
            .catch((err) => {
              window.location.href = "/login";
            });
        } else {
          alert(
            "2- Looks like your session expired. Please login again. Redirecting..."
          );
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        alert(
          "3 - Looks like your session expired. Please login again. Redirecting..."
        );
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);
