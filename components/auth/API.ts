import Axios from "axios";
export const axios = Axios.create();

export function setDefaultHeader(key: string, value: string) {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common[key] = value;
}
