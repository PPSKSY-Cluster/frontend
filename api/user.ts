import axios from "axios";
import { IUser } from "types/User";
const baseURL = "http://localhost:8080/api";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer ${token}",
};

const UserAPI = {
  create: async (user: IUser) => {
    return await axios.post(`${baseURL}/users`, user, { headers });
  },
  getById: async (_id: number) => {
    return await axios.get(`${baseURL}/users/${_id}`, { headers });
  },
  getAll: async () => {
    return await axios.get(`${baseURL}/users`, { headers });
  },
  delete: async (_id: string) => {
    return await axios.delete(`${baseURL}/users/${_id}`, { headers });
  },
  update: async (user: IUser) => {
    return await axios.put(`${baseURL}/users/${user._id}`, user, {
      headers,
    });
  },
};
export default UserAPI;