import axios from "axios";
const baseURL = "http://localhost:8080/api";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer ",
};

const ClusterAPI = {
  create: async ({ name, description }) => {
    return await axios.post(
      `${baseURL}/cresources`,
      { name, description },
      { headers }
    );
  },
  getAll: async () => {
    return await axios.get(`${baseURL}/cresources`, { headers });
  },
};
export default ClusterAPI;
