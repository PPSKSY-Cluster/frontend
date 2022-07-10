export interface ICluster {
  _id?: string;
  name: string;
  description: string;
  nodes: number;
  type: number;
  operatingSystem: number;
  admins?: number[];
  reservations?: number[];
}
