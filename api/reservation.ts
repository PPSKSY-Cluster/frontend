import { axios } from "./API";
import { IReservation } from "types/Reservation";
import config from "config.json";

const ReservationAPI = {
  create: (reservation: IReservation) => {
    return axios.post(`${config.BASE_URL}/reservations`, reservation);
  },
  getAllByClusterId: (_cid: string) => {
    return axios.get(`${config.BASE_URL}/reservations/clusters/${_cid}`);
  },
  getAll: () => {
    return axios.get(`${config.BASE_URL}/reservations`);
  },
  getOwn: (userID) => {
    //const userID = localStorage.getItem("userId");
    return axios.get(`${config.BASE_URL}/reservations/users/${userID}`);
  },
  getById: (_id:string)=>{
    return axios.get(`${config.BASE_URL}/reservations/${_id}`)
  },
  delete: (_id: string) => {
    return axios.delete(`${config.BASE_URL}/reservations/${_id}`);
  },
  update: (cluster: IReservation) => {
    return axios.put(`${config.BASE_URL}/reservations/${cluster._id}`, cluster);
  },
};
export default ReservationAPI;
