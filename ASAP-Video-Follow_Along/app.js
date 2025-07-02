// Create a for loop that loops 1 through 15 and prints the number and if it is divisible by 5, even, or odd
// for (let i = 1; i <= 15; i++) {
   
//     let output = "";

//     if ( i % 5 === 0 ) {
//         output += "divisible by 5";
//     }
//     else if ( i % 2 === 0) {
//         output += "even";
//     }
//     else {
//         output += "odd";
//     }

//     console.log(output);
// }


// Print out all the characters in the string "Hello World" as individual characters

let str = "Hello World, Thank you for your help!";

for (let i = 0; i < str.length; i++) {
    if (str[i] === " "){
        console.log("...");
    }
    else {
    console.log(str[i]);
    }
}