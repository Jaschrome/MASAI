function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number' && number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd or invalid`);
    }
  });
}
