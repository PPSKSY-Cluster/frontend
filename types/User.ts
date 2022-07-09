import React, { useState } from "react";

type UserType = {
  type: number
}

export interface IUser {
  _id: string,
  username: string;
  password?: string;
  email?: string;
  token?: string;
  type?: string;
}



export const currentUser= <IUser>({
  _id:"0",
  username:"0",
})

