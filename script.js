const myLibrary = [];

const addBook = document.querySelector(".add-book");
const displayContent = document.querySelector(".display-content");
const bookContent = document.querySelector(".book-content");
const bookDetails = document.querySelector(".book-details");

let title = bookDetails.querySelector(".title");
let author = bookDetails.querySelector(".author");
let pages = bookDetails.querySelector(".pages");
let status = bookDetails.querySelector(".status");
let deleteButton = bookDetails.querySelector('.delete-book');

let bookForm = document.querySelector('.book-form');
let formTitle = bookForm[0];
let formAuthor = bookForm[1];
let formPages = bookForm[2];
let formStatus = bookForm[3];
let formButton = bookForm[4];


function Book(title, author, numOfPages, readStatus) {
  //the constructor
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

function getBookData() {
  let book;

  title = formTitle.value
  author = formAuthor.value
  numOfPages = formPages.value
  readStatus = formStatus.value

  book = new Book(title, author, numOfPages, readStatus);
  addBookToLibrary(book);
  displayBooks();

  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
  formStatus.value = '';
}

function addBookToLibrary(bookToAdd) {
  myLibrary.push(bookToAdd);

  //just to debugging
  console.log(myLibrary);
}

function displayBooks() {
  let book = myLibrary.at(-1)
 if(book.title !='' && book.author !='' && book.status != '')
  {
    let bookContainer = bookContent.cloneNode(true);

    let title = bookContainer.querySelector(".title");
    let author = bookContainer.querySelector(".author");
    let pages = bookContainer.querySelector(".pages");
    let status = bookContainer.querySelector(".status");
  
    title.textContent = book.title;
    
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.numOfPages}`;
    status.textContent = `Status: ${book.readStatus}`;
  
    displayContent.appendChild(bookContainer);
  }
  else{
    alert('You have to fill the TITLE,AUTHOR and choose a STATUS')
  }
}


//button for adding a new book
formButton.addEventListener('click', getBookData)
deleteButton.addEventListener('click', console.log('delete'))




