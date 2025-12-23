const isMultipleOf3 = (number) => number % 3 === 0;
const isMultipleOf5 = (number) => number % 5 === 0;

const sumOfMultiplesOf3Or5 = (threshold) => {
  let sumOfMultiples = 0;
  for (let currentNumber = 0; currentNumber < threshold; currentNumber++) {
    if (isMultipleOf3(currentNumber) || isMultipleOf5(currentNumber)) {
      sumOfMultiples += currentNumber;
    }
  }
  return sumOfMultiples;
};

console.log(sumOfMultiplesOf3Or5(1000));
