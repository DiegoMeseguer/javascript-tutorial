var quotient = 66 / 33;
console.log(quotient);

var quotient2 = 66 / 34;
console.log(quotient2);

var quotient3 = 66 / 0;
console.log(quotient3)

console.log(13 % 5);
// Expected output: 3

console.log(-13 % 5);
// Expected output: -3

console.log(4 % 2);
// Expected output: 0

console.log(-4 % 2);
// Expected output: -0

console.log(23 % 1);
// Expected output: 0

console.log(23 % 7);
// Expected output: 2

console.log(7 % 0);
// Expected output: NaN

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
  
console.log(getRandomInt(1));
// Expected output: 0
  
console.log(Math.random());
// Expected output: a number from 0 to <1

function rollDice() {
    result = (getRandomInt(6) % 6) + 1;
    return result
}

console.log(0 % 6);
// Expected output: 0

console.log(1 % 6);
// Expected output: 1

console.log(2 % 6);
// Expected output: 2

console.log(3 % 6);
// Expected output: 3

console.log(4 % 6);
// Expected output: 4

console.log(5 % 6);
// Expected output: 5

console.log(6 % 6);
// Expected output: 0

console.log("Rolling the dice!!")
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());

