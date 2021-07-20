let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooksInLibrary() {
    myLibrary.forEach(book => displayNewBook(book));
}

function displayNewBook(book) {
    const table = document.querySelector("table");

    const tableRow = document.createElement("tr");

    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");
    const statusButton = document.createElement("button");

    tableData1.textContent = book.title;
    tableData2.textContent = book.author;
    tableData3.textContent = book.pages;

    statusButton.type = "button";
    statusButton.className = "status-buttons"
    statusButton.id = book.status ? "read" : "not-read";
    statusButton.textContent = book.status ? "Read" : "Not Read";

    tableData4.appendChild(statusButton);
    
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    table.appendChild(tableRow);

    addStatusButtonListener(statusButton);
}

addSubmitButtonListener();

function addSubmitButtonListener() {
    const submitButton = document.querySelector(".submit-button");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const status = document.querySelector("#status");

    submitButton.addEventListener("click", () => {
        
        if (title.value.length) {
            const book = new Book(title.value, author.value, pages.value,
                    (status.value === "read"));

            addBookToLibrary(book);
            displayNewBook(book);
        }
    });
}

addStatusButtonsListener();

function addStatusButtonsListener() {
    const statusButtons = document.querySelectorAll(".status-buttons");

    statusButtons.forEach(statusButton => addStatusButtonListener(statusButton));
}

function addStatusButtonListener(statusButton) {
    statusButton.addEventListener("click", () => {
        if (statusButton.id === "read") {
            statusButton.textContent = "Not Read";
            statusButton.id = "not-read";
        } else if (statusButton.id === "not-read") {
            statusButton.textContent = "Read";
            statusButton.id = "read";
        }
    });
}

function addInitialBooks() {
    const book1 = new Book("Harry Potter", "J. K. Rowling", 336, false);
    const book2 = new Book("The Hobbit", "J. R. R. Tolkien", 304, true);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
}

addInitialBooks();
displayBooksInLibrary();