// Define Teacher interface
interface Teacher {
  readonly firstName: string; // readonly means it can only be set during initialization
  readonly lastName: string;  // same here
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allows adding extra properties dynamically
}

// Example teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
