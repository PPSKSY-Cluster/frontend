export interface IReservation {
  _id?: string;
  clusterId: string;
  userId: string;
  nodes: number;
  startTime: number;
  endTime: number;
}
