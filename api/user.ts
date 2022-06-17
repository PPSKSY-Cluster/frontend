import axios from "axios";
import { IUser } from "types/User";
const baseURL = "http://localhost:8080/api";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer ",
};

const UserAPI = {
  create: async (user: IUser) => {
    return await axios.post(`${baseURL}/cresources`, user, { headers });
  },
  getById: async (_id: number) => {
    return await axios.get(`${baseURL}/cresources/${_id}`, { headers });
  },
  getAll: async () => {
    return await axios.get(`${baseURL}/cresources`, { headers });
  },
  delete: async (_id: number) => {
    return await axios.delete(`${baseURL}/cresources/${_id}`, { headers });
  },
  update: async (user: IUser) => {
    return await axios.put(`${baseURL}/cresources/${user._id}`, user, {
      headers,
    });
  },
};
export default UserAPI;