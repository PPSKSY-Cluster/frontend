export interface IUser {
  _id: string,
  username: string;
  password?: string;
  email?: string;
}

export var currentUser = <IUser>{
  _id:"0",
  username:"foooo",
  password:"123456"
}
