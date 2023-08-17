const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
  renderList();
}

function renderList(){
  let libraryBook = document.querySelector(".library");
  libraryBook.innerHTML="";
  for (let i=0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <div class = "card">
      <div class = "card-header">
        <h3 class = "title">${book.title}</h3>
        <h5 class = "author">by ${book.author}</h5>
      </div>
      <div class = "card-body">
        <p>${book.pages} pages</p>
        <p class = "read-status">${book.read ? "Read" : "Not Read"}</p>
        <button onclick = "removeBook(${i})">Remove</button>
        <button onclick = "toggleRead(${i})">Toggle Read</button>
      </div>
    </div>
    <p></p>
    `;
    libraryBook.appendChild(bookDiv);
  }
}

function removeBook(index){
   myLibrary.splice(index, 1);
   renderList();
}

function addBookToLibrary() {

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;

  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  renderList();
}

let newBookbtn = document.querySelector('.newbook');

newBookbtn.addEventListener("click", function(){
    let newBookform = document.querySelector("#new-book-form");
    newBookform.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event  ){
  event.preventDefault();
  addBookToLibrary();
})