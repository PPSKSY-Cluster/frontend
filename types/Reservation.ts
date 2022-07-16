export interface IReservation {
  _id?: string;
  clusterID: string;
  userID: string;
  nodes: number;
  startTime: number;
  endTime: number;
}
