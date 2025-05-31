const calculateSquareAndCube = (num) => ({ square: num * num, cube: num * num * num });
const userInput = prompt("Enter a number:");
const number = parseFloat(userInput);
if (!isNaN(number)) {
    const result = calculateSquareAndCube(number);
    console.log(result);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
