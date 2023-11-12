//pseudo When the user inputs a number initialize a counter variable and set its value to 0
//While counter is smaller than user inputted number increment the counter by 1
//Print the value of the counter variable

function fizzBuzz(i){ //add the i here because your adding the local scope from the other (f)
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
 for (let i = 1; i <= answer; i++){
    fizzBuzz(i);
 }

