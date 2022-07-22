import Axios from "axios";
import config from "config.json";
import { openCluster } from "jobs/afterSignIn";

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
  const newAccessToken = validateRefreshToken();
  if (newAccessToken) {
    return newAccessToken;
  }
  localStorage.setItem("accessToken", "");
  return false;
};

export const saveAccessTokenAndSignIn = async (refreshToken: string) => {
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
  if (response.status === 200) {
    const accessToken = response.data.token;
    localStorage.setItem("accessToken", accessToken);
    setDefaultHeader("Authorization", `Bearer ${accessToken}`);
    openCluster();
  } else {
    alert(response.statusText);
  }
};

export const signIn = (username: string, password: string) => {
  return axios.post(`${config.BASE_URL}/login`, {
    username,
    password,
  });
};

export const signUp = (
  email: string,
  username: string,
  password: string
) => {
  return axios.post(`${config.BASE_URL}/users`, {
    username,
    password,
    email,
    type: "0",
  });
}; 

async function checkToken(token: string) {
  const response = await axios.post(
    config.BASE_URL+'/token-check',
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.status === 200;
}

const validateRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken || refreshToken === "") {
    return false;
  }
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
  if (response.status == 200) {
    return response.data.token;
  }
  localStorage.setItem("refreshToken", "");
  return false;
};


