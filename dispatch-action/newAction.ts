export const newAction = async (options: string[]) => {
  const projectName = options[0];
  // Create a folder call the project name

  if (projectName) {
    console.log(`🌟 Starting new ${projectName} project...\n`);
    await Deno.mkdir(projectName);
    Deno.chdir(`./${projectName}`);

    const pNpx = Deno.run({
      cmd: ["npx", "create-react-app", "app", "--template", "typescript"],
    });
    await pNpx.status();

    const pCode = Deno.run({
      cmd: ["code", "."],
    });
    await pCode.status();
  } else {
    console.log(
"Oops! 😮 \n\
Please provide project name.",
    );
  }
};
