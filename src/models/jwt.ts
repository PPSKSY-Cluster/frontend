import { createModel } from "@rematch/core";
import type { RootModel } from "./models";

export const jwt = createModel<RootModel>()({
  state: "",
  reducers: {
    setJWT: (state: string, payload: string) => payload,
  },
});
