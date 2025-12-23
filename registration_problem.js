const sumOfOddSquares = (limit) => {
  let sum = 0n;

  for (let number = 1; number <= limit; number += 2) {
    sum += BigInt(number ** 2);
  }

  return sum;
};

console.log(sumOfOddSquares(945000));