function checkPrime() {
  let number = parseInt(document.getElementById("inputNumber").value);
  let result = isPrime(number);
  document.getElementById("result").innerText = result;
}

function isPrime(number) {
  if (number <= 1) return "Not Prime";
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}
