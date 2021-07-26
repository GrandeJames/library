class Library {
  books = [];

  constructor(books) {
    this.books = books;
  }

  get books() {
    return this.books;
  }
}

class Book {
  title;
  author;
  pages;
  status;

  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

let books = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 336,
    status: false,
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 304,
    status: true,
  },
];

let myLibrary = new Library(books);

function addStatusButtonsListener() {
  const statusButtons = document.querySelectorAll(".status-buttons");

  statusButtons.forEach(statusButton => addStatusButtonListener(statusButton));
}

function addStatusButtonListener(statusButton) {
  statusButton.addEventListener("click", () => {
    if (statusButton.id === "read") {
      statusButton.textContent = "Not Read";
      statusButton.id = "not-read";
    } else {
      statusButton.textContent = "Read";
      statusButton.id = "read";
    }
  });
}

function addSubmitButtonListener() {
  const submitButton = document.querySelector(".submit-button");
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const statusInput = document.querySelector("#status");

  submitButton.addEventListener("click", () => {
    if (titleInput.value.length) {
      const book = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        statusInput.value === "read"
      );

      displayNewBook(book);
    }
  });
}

function displayNewBook(book) {
  const table = document.querySelector("table");

  const tableRow = document.createElement("tr");

  const tableData1 = document.createElement("td");
  const tableData2 = document.createElement("td");
  const tableData3 = document.createElement("td");
  const tableData4 = document.createElement("td");
  const tableData5 = document.createElement("td");

  const statusButton = document.createElement("button");
  const removeButton = document.createElement("button");

  tableRow.setAttribute("data-index", myLibrary.books.indexOf(book));

  tableData1.textContent = book.title;
  tableData2.textContent = book.author;
  tableData3.textContent = book.pages;

  statusButton.type = "button";
  statusButton.className = "status-buttons";
  statusButton.id = book.status ? "read" : "not-read";
  statusButton.textContent = book.status ? "Read" : "Not Read";

  removeButton.type = "button";
  removeButton.className = "remove-buttons";
  removeButton.setAttribute("data-index", myLibrary.books.indexOf(book));
  removeButton.textContent = "Remove";

  tableData4.appendChild(statusButton);
  tableData5.appendChild(removeButton);

  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  tableRow.appendChild(tableData4);
  tableRow.appendChild(tableData5);

  table.appendChild(tableRow);

  addStatusButtonListener(statusButton);
  addRemoveButtonListener(removeButton);
}

function displayInitialBooks() {
  myLibrary.books.forEach(book => displayNewBook(book));
}

function removeTableRow(removeButton) {
  const dataIndexValue = removeButton.getAttribute("data-index");
  const tableRowAtIndex = document.querySelector(
    `[data-index="${dataIndexValue}"]`
  );
  tableRowAtIndex.remove();
}

function addInitialRemoveButtonListener() {
  const removeButtons = document.querySelectorAll(".remove-buttons");

  removeButtons.forEach(removeButton => {
    addRemoveButtonListener(removeButton);
  });
}

function addRemoveButtonListener(removeButton) {
  removeButton.addEventListener("click", () => removeTableRow(removeButton));
}

addStatusButtonsListener();
addSubmitButtonListener();
displayInitialBooks();
addInitialRemoveButtonListener();
