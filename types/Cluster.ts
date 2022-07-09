export interface ICluster {
  _id?: string;
  name: string;
  description: string;
  nodes: number;
  type: number;
  operatingSystem: string;
  admins?: number[];
  reservations?: number[];
}
