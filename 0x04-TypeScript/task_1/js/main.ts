interface Teacher {
  readonly firstName: string; // cannot be modified after initialization
  readonly lastName: string;  // cannot be modified after initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional
  location: string;           // must always be defined
  [key: string]: any;         // allow additional attributes (like contract)
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
