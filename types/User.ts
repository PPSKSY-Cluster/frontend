export interface IUser {
  _id: string,
  username: string;
  password?: string;
  email?: string;
  token?: string;
  type?: number;
}