const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// reader.question("What would you like to calculate?", function(input){
// 	const mathSymbol = input[0];
// 	const num1 = input[2];
// 	const num2 = input[4];

// 	console.log('mathSymbol', mathSymbol);
// 	console.log('num1', num1);
// 	console.log('num2', num2);

// 	reader.close()

// });

// reader.question("What would you like to calculate?", function(input){
// 	const mathSymbol = input[0];
// 	const num1 = Number(input[2]);
// 	const num2 = Number(input[4]);

// 	if (mathSymbol === "+"){
// 		console.log(num1 + num2);
// 	}

// 	reader.close()

// });

reader.question("Welcome! Please enter your password", function (input) {
  const tokens = input.split(" ");

  const mathSymbol = tokens[0];
  const num1 = Number(tokens[1]);
  const num2 = Number(tokens[2]);

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  }

  if (mathSymbol === "-") {
    console.log(num1 - num2);
  }

  if (mathSymbol === "*") {
    console.log(num1 * num2);
  }

  if (mathSymbol === "/") {
    console.log(num1 / num2);
  }

  if (mathSymbol === "sqrt") {
    console.log(Math.sqrt(num1));
  }

  reader.close();
});
