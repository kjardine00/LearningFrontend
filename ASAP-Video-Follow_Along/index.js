"use strict";
// Typescript Learning
let age = 0;
let course = "Course 1";
let completed = true;
let x = 1;
let courses = ["Html", "CSS"];
let arr;
let arrayOfArrays = [["change2"], ["change", "string"]];
// Tuples
// These are specific order
let person = ["John", 25];
let arrayPeople = [
    ["Sally", 24],
    ["Sally2", 48],
];
// Objects
let obj = {
    user: "john",
    password: "password",
};
let user1 = { name: "kyle", password: "password", hasAccess: true };
let user2 = {
    name: "sally",
    password: "pass",
    age: 123,
    hasAccess: false,
};
// Unions
let result = "string";
result = 123;
let sallyIsPassing = "passed";
// Type Assertion
let y = "hello";
y = 22;
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
function greet() {
    console.log("hello!");
}
// cant use any[] because anything goes and we are basically disabling typescript
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([12, 123, 123]);
getFirstElement(["12", "123", "123"]);
getFirstElement(["12", 123, "123"]);
// Enums
var Input;
(function (Input) {
    Input["A"] = "The jump input";
    Input["B"] = "The attack input";
    Input["LJoystick"] = "Player Movement";
})(Input || (Input = {}));
function displayInput(controller) {
    const controllerInput = controller.type + "\n" + controller.input;
    document.body.innerHTML = controllerInput;
}
displayInput({
    input: Input.A
});
