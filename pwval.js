/**
 *1: Into log (prompt user)
 *2: Wait for user input
 *3: verify user input
 *4: On fail, return to step 2
 *5: On success, success message
 *6: Exit Program
 */

const readline = require("readline").createInterface({
  input: process.stdin,

  output: process.stdout,
});

readline.question("Welcome! Please enter your password\n", function (password) {
  if (password.length >= 10) {
    console.log("Grats!");
  } else {
    console.log("wrong, loser");
  }
  readline.close();
});
