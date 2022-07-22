import Axios from "axios";
import config from "config.json";
export const axios = Axios.create();

export function setDefaultHeader(key: string, value: string) {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common[key] = value;
}

export async function checkToken(token: string) {
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
