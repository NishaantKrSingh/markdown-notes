// Assuming this file is named something like "runGenerator.js"
const { exec } = require('child_process');

// Define the command to run the generator file
const command = 'npm start';

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
