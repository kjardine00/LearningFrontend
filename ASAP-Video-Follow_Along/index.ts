// Typescript Learning

let age: number = 0;
let course: string = "Course 1";
let completed: boolean = true;
let x: any = 1;

let courses: string[] = ["Html", "CSS"];
let arr: any[];
let arrayOfArrays: string[][] = [["change2"], ["change", "string"]];

// Tuples
// These are specific order
let person: [string, number] = ["John", 25];
let arrayPeople: [string, number][] = [
  ["Sally", 24],
  ["Sally2", 48],
];

// Objects
let obj: { user: string; password: string } = {
  user: "john",
  password: "password",
};

// Custom Types
type User = {
  name: string;
  password: string;
  hasAccess: boolean;
};

let user1: User = { name: "kyle", password: "password", hasAccess: true };

// Interfaces
interface User1 {
  name: string;
  password: string;
  age: number;
  hasAccess: boolean;
}

let user2: User1 = {
  name: "sally",
  password: "pass",
  age: 123,
  hasAccess: false,
};

// Unions
let result: string | number = "string";
result = 123;
// result = boolean

type isPassing = "passed" | "failed";
let sallyIsPassing: isPassing = "passed";

// Type Assertion
let y: any = "hello";
y = <number>22;

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum(1, 2);

function greet(): void {
  console.log("hello!");
}

// cant use any[] because anything goes and we are basically disabling typescript
function getFirstElement<ArrType>(arr: ArrType[]): ArrType {
  return arr[0];
}

getFirstElement<number>([12, 123, 123]);
getFirstElement<string>(["12", "123", "123"]);
getFirstElement<number | string>(["12", 123, "123"]);

// Enums
enum Input {
  A = "The jump input",
  B = "The attack input",
  LJoystick = "Player Movement",
}

interface Controller {
    type?: string,
    input: Input
}

function displayInput(controller: Controller) : void {
    const controllerInput : string = controller.type + "\n" + controller.input

    document.body.innerHTML = controllerInput
}

displayInput({
    input: Input.A
})