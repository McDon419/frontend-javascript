// Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Put them into an array
const studentsList: Student[] = [student1, student2];

// Create table element
const table: HTMLTableElement = document.createElement("table");

// Create table header
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();

const headers: string[] = ["First Name", "Last Name", "Age", "Location"];
headers.forEach((headerText) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

// Create table body and add student rows
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();

  const cellFirstName: HTMLTableCellElement = row.insertCell();
  cellFirstName.textContent = student.firstName;

  const cellLastName: HTMLTableCellElement = row.insertCell();
  cellLastName.textContent = student.lastName;

  const cellAge: HTMLTableCellElement = row.insertCell();
  cellAge.textContent = student.age.toString();

  const cellLocation: HTMLTableCellElement = row.insertCell();
  cellLocation.textContent = student.location;
});

// Append table to body
document.body.appendChild(table);
