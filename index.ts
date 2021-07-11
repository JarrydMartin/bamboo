import { dispatchAction } from "./dispatch-action/index.ts";

const main = (args: string[]) => {
  console.log("🎍 Bamboo\n");

  const actionArgs = args[0];
  const action = dispatchAction(actionArgs);

  const options = args.slice(-1);
  action(options);
};

main(Deno.args);
