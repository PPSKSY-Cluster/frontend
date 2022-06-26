import React, { useState } from "react";
export interface IUser {
  _id: string,
  username: string;
  password?: string;
  email?: string;
  token?: string
}

export const currentUser= <IUser>({
  _id:"0",
  username:"0",
})

globalThis.user = <IUser>{
  _id:"0",
  username:"0",
}
