import axios from "axios";
import { ICluster } from "types/Cluster";
const baseURL = "http://localhost:8080/api";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer ",
};

const ClusterAPI = {
  create: async (cluster: ICluster) => {
    return await axios.post(`${baseURL}/cresources`, cluster, { headers });
  },
  getById: async (_id: string) => {
    return await axios.get(`${baseURL}/cresources/${_id}`, { headers });
  },
  getAll: async () => {
    return await axios.get(`${baseURL}/cresources`, { headers });
  },
  delete: async (_id: string) => {
    return await axios.delete(`${baseURL}/cresources/${_id}`, { headers });
  },
  update: async (cluster: ICluster) => {
    return await axios.put(`${baseURL}/cresources/${cluster._id}`, cluster, {
      headers,
    });
  },
};
export default ClusterAPI;
