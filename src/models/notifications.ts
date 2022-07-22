import { createModel } from "@rematch/core";
import type { RootModel } from "./models";

export const notifications = createModel<RootModel>()({
  state: 0,
  reducers: {
    setSuccess: (state: number, payload: string) => 1,
    setError: (state: number, payload: string) => 2,
    setReset: (state: number) => 0,
  },
  effects: (dispatch) => ({
    success: (payload: string, rootState) => {
      dispatch.notifications.setSuccess(payload);
      setTimeout(() => dispatch.notifications.setReset(), 2000);
    },
    error: (payload: string, rootState) => {
      dispatch.notifications.setError(payload);
      setTimeout(() => dispatch.notifications.setReset(), 2000);
    },
  }),
});
