let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addInitialBooks();
displayBooksInLibrary();

function displayBooksInLibrary() {
    myLibrary.forEach(book => displayNewBook(book));
}

function displayNewBook(book) {
    const table = document.querySelector("table");

    const tableRow = document.createElement("tr");

    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");

    tableData1.textContent = book.title;
    tableData2.textContent = book.author;
    tableData3.textContent = book.pages;
    
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);

    table.appendChild(tableRow);
}

function addInitialBooks() {
    const book1 = new Book("Harry Potter", "J. K. Rowling", 336);
    const book2 = new Book("The Hobbit", "J. R. R. Tolkien", 304);

    addBookToLibrary(book1);
    addBookToLibrary(book2);
}

function addSubmitButtonListener() {
    const submitButton = document.querySelector(".submit-button");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");

    submitButton.addEventListener("click", () => {
        
        if (title.value.length && author.value.length && pages.value.length) {
            const book = new Book(title.value, author.value, pages.value);

            addBookToLibrary(book);
            displayNewBook(book);
        }
    });
}

addSubmitButtonListener();

