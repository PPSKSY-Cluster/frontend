import { axios } from "./API";
import { IUser } from "types/User";
import config from "config.json";

const UserAPI = {
  create: (user: IUser) => {
    return axios.post(`${config.BASE_URL}/users`, user);
  },
  getById: (_id: string) => {
    return axios.get(`${config.BASE_URL}/users/${_id}`);
  },
  getAll: () => {
    return axios.get(`${config.BASE_URL}/users`);
  },
  delete: (_id: string) => {
    return axios.delete(`${config.BASE_URL}/users/${_id}`);
  },
  update: (user: IUser) => {
    return axios.put(`${config.BASE_URL}/users/${user._id}`, user);
  },
};
export default UserAPI;