import { Models } from "@rematch/core";
import { notifications } from "./notifications";
export interface RootModel extends Models<RootModel> {
  notifications: typeof notifications;
}

export const models: RootModel = {
  notifications,
};
