interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string;  // cannot be changed after initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional
  location: string;           // must always be defined
  [key: string]: any;         // allow additional attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // new required attribute
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
