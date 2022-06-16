import { IUser } from "./User";

// reserved time slots?,
export interface ICluster {
  _id?: string;
  name: string;
  description: string;
  nodes?: any;
  type?: number;
  admins?: IUser[];
  balancingAlg?: number;
  reservations?: any;
  highAvailability?: boolean;
  highPerformanceComputing?: boolean;
  operatingSystem?: number;
}
