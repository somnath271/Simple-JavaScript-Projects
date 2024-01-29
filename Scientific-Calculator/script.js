function addToResult(value) {
  // Append the specified value to the result displayed on the calculator
  // Handle special cases for arithmetic operations
  if (value === "-" || value === "*" || value === "+" || value === "/") {
    document.getElementById("result").innerText += " " + value + " ";
  } else {
    document.getElementById("result").innerText += value;
  }
}

function clearResult() {
  document.getElementById("result").innerText = "";
  document.getElementById("calculationResult").innerText = "";
}

function calculate() {
  let result = document.getElementById("result").innerText;
  let finalResult = eval(result); // Using eval() for simplicity (not recommended for production)
  document.getElementById("calculationResult").innerText =
    "Result: " + finalResult;
}

function stepBack() {
  let result = document.getElementById("result").innerText;
  document.getElementById("result").innerText = result.slice(0, -1);
}

function scientificOperation(operation) {
  let result = document.getElementById("result").innerText;
  let finalResult;

  switch (operation) {
    case "sin":
      finalResult = Math.sin(parseFloat(result));
      break;
    case "cos":
      finalResult = Math.cos(parseFloat(result));
      break;
    case "tan":
      finalResult = Math.tan(parseFloat(result));
      break;
    case "sqrt":
      finalResult = Math.sqrt(parseFloat(result));
      break;
    default:
      break;
  }

  document.getElementById("calculationResult").innerText =
    "Result: " + finalResult;
}
