import { Models } from "@rematch/core";
import { jwt } from "./jwt";
export interface RootModel extends Models<RootModel> {
  jwt: typeof jwt;
}

// bases, account, player(for overview), notifcations,

export const models: RootModel = {
  jwt,
};
