import { axios } from "./API";
import { ICluster } from "types/Cluster";
import config from "config.json";

const ClusterAPI = {
  create: (cluster: ICluster) => {
    return axios.post(`${config.BASE_URL}/cresources`, cluster);
  },
  getById: (_id: string) => {
    return axios.get(`${config.BASE_URL}/cresources/${_id}`);
  },
  getAll: () => {
    return axios.get(`${config.BASE_URL}/cresources`);
  },
  delete: (_id: string) => {
    return axios.delete(`${config.BASE_URL}/cresources/${_id}`);
  },
  update: (cluster: ICluster) => {
    return axios.put(`${config.BASE_URL}/cresources/${cluster._id}`, cluster);
  },
};
export default ClusterAPI;
