
const myLibrary = [];

const addBook = document.querySelector('.add-book')

function Book(title, author, numOfPages, readStatus){
  //the constructor
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
}

function getBookData(){
  let book;

  title = prompt('Enter the book title', 'Harry Potter')
  author = prompt('Enter the book author', 'Harry Rich')
  numOfPages = prompt('Enter the number of pages in the book', '213')
  readStatus = prompt('Did you read the book?','Read,Not Read, Still Reading')

  book = new Book(title,author,numOfPages,readStatus);
  addBookToLibrary(book)
}

//how to display the array of books
//step 1 get access to "book-details"
//step 2 get access to the children elements like title,author,pages,status.
//step 3 make a function that loops for every object book in the myLibrary
// it will a div in "book-content" add to it the class "book-details".
//step 4 and create a title,author,pages and status div.
// step 5 now you can add the correct content to the div's you created up.

function addBookToLibrary(bookToAdd){
  myLibrary.push(bookToAdd);
 
  //just to debugging
  console.log(myLibrary)
}

//button for adding a new book
addBook.addEventListener('click',getBookData)





// i want to get user input and store the data in a new Book
// then i want to add that book to the library array





// const book1 = new Book('dont give up', 'you', 1, 'read')
