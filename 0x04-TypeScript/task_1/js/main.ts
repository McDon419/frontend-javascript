// task_1/js/main.ts

// Define Teacher interface
interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // mandatory
  location: string;                 // mandatory
  yearsOfExperience?: number;       // optional
  [key: string]: any;               // allow additional attributes
}

// Example usage
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
};

const teacher2: Teacher = {
  firstName: "Mary",
  lastName: "Ann",
  fullTimeEmployee: false,
  location: "Paris",
  yearsOfExperience: 10,
  contract: true,  // extra property allowed
};

console.log(teacher1);
console.log(teacher2);
