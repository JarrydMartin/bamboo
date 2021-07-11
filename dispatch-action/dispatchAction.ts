import { help, initAction, newAction } from "./index.ts";

export const dispatchAction = (action: string) => {
  switch (action) {
    case "new":
      return newAction;
    case "init":
      return initAction;
    case "help":
      return help;
    default:
      return help;
  }
};
