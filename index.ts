import { dispatchAction } from "./dispatch-action/dispatchAction.ts";

const main = (args:string[]) => {
    console.log("🎍 Bamboo\n");

    const actionArgs= args[0];
    const action = dispatchAction(actionArgs)
    action()
}

main(Deno.args);