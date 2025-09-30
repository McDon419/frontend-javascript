// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // must always exist
  yearsOfExperience?: number;       // optional
  location: string;                 // must always exist
  [propName: string]: any;          // allow additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property not in interface
};

console.log(teacher3);
