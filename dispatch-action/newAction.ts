export const newAction = async (options: string[]) => {
  console.log("🌟 Starting new project...\n");

  const projectName = options[0];
  // Create a folder call the project name

  if (projectName) {
    console.log(`🌎 Creating ${projectName} workspace...`);
    await Deno.mkdir(projectName);
    Deno.chdir(`./${projectName}`);
    console.log(Deno.cwd());
  } else {
    console.log(
"Oops! 😮 \n\
Please provide project name.",
    );
  }
};
