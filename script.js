let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooksInLibrary() {
    myLibrary.forEach(book => addTableRow(book));
}

function addTableRow(book) {
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

const book1 = new Book("harry potter", "jk rowling idk", 456);
const book2 = new Book("spirit bear", "idfk author", 146);
const book3 = new Book("harry potter2", "randomAuthor", 627);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooksInLibrary();

