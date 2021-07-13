export const newAction = async (options: string[]) => {
  const projectName = options[0];
  // Create a folder call the project name

  if (projectName) {
    console.log(`🌟 Starting new ${projectName} project...\n`);
    
    const pGitHub = Deno.run({
      cmd: ["gh", "repo", "create", projectName, '-y']
    })

     await pGitHub.status()
     pGitHub.close()

    Deno.chdir(`./${projectName}`);

    const pNpx = Deno.run({
      cmd: ["npx", "create-react-app", "app", "--template", "typescript"],
    });
    await pNpx.status();
    pNpx.close();

    

    const pCode = Deno.run({
      cmd: ["code", "."],
    });
    await pCode.status();
    pCode.close();
  } else {
    console.log(
"Oops! 😮 \n\
Please provide project name.",
    );
  }
};
