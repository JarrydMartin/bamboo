import { help } from "./helpAction.ts";
import { initAction } from "./initAction.ts";

export const  dispatchAction = (action: string) => {
    switch (action) {
        case "init":
            return initAction
        case "help":
            return help
        default:
            return help
    }
}

