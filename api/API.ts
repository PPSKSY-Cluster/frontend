import Axios from "axios";
import config from "config.json";
import { openJob } from "jobs/afterSignIn";

export const axios = Axios.create();

export function setDefaultHeader(key: string, value: string) {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common[key] = value;
}

export const validateAccessToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && accessToken !== "" && (await checkToken(accessToken))) {
    return accessToken;
  }
  const newAccessToken = await validateRefreshToken();
  if (newAccessToken) {
    return newAccessToken;
  }
  localStorage.setItem("accessToken", "");
  return false;
};

export const saveAccessTokenAndSignIn = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/refresh`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    const accessToken = response.data.token;
    localStorage.setItem("accessToken", accessToken);
    setDefaultHeader("Authorization", `Bearer ${accessToken}`);
    openJob();
  } catch (error) {
    alert(error);
  }
};

export const signIn = (username: string, password: string) => {
  return axios.post(`${config.BASE_URL}/login`, {
    username,
    password,
  });
};

export const signUp = (email: string, username: string, password: string) => {
  return axios.post(`${config.BASE_URL}/users`, {
    username,
    password,
    email,
    type: "0",
  });
};

async function checkToken(token: string) {
  try {
    await axios.post(
      config.BASE_URL + "/token-check",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
}

const validateRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken || refreshToken === "") {
    return false;
  }
  try {
    const response = await axios.post(
      `${config.BASE_URL}/refresh`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    return response.data.token;
  } catch (error) {
    localStorage.setItem("refreshToken", "");
    return false;
  }
};
