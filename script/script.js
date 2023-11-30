function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function addNumbers() {
  return new Promise((resolve, reject) => {
    const number1 = prompt("Enter number 1: ");
    const number2 = prompt("Enter number 2: ");

    if (isNumber(number1) && isNumber(number2)) {
      const sum = parseFloat(number1) + parseFloat(number2);
      resolve(`${number1} + ${number2} = ${sum}`);
    } else {
      if (!isNumber(number1) && !isNumber(number2)) {
        reject(`Both ${number1} and ${number2} are not numbers`);
      } else if (!isNumber(number1)) {
        reject(`${number1} is not a number`);
      } else {
        reject(`${number2} is not a number`);
      }
    }
  });
}

addNumbers()
  .then((result) => {
    console.log(result);
})
  .catch((error) => {
    console.log(error);
});
