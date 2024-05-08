let index = 0;
let book = [];

function add() {
  alert(index);
  book[index] = document.getElementById("book-number").value + ",";
  book[index] += document.getElementById("title").value + ",";
  book[index] += document.getElementById("author").value + ",";
  book[index] += document.getElementById("book-type").value + ",";
  book[index] += document.getElementById("publication-date").value + ",";
  book[index] += document.getElementById("book-cover").value;
  alert(book[index]);
  index++; 
}

function checkout() {
  alert(index);
  book[index] = document.getElementById("book-number").value;
  alert(book[index]);
  index++;
}

function return1() {
  alert(index);
  book[index] = document.getElementById("book-number").value;
  alert(book[index]);
  index++;
}

function delete1() {
  alert(index);
  book[index] = document.getElementById("book-number").value;
  alert(book[index]);
  index++;
}

function searchtech() {
  alert(index);
  book[index] = document.getElementById("book-number").value + ",";
  book[index] += document.getElementById("title").value + ",";
  book[index] += document.getElementById("author").value + ",";
  book[index] += document.getElementById("book-type").value + ",";
  book[index] += document.getElementById("publication-date").value;
  alert(book[index]);
  index++; 
}

function searchstudent() {
  alert(index);
  book[index] = document.getElementById("book-number").value + ",";
  book[index] += document.getElementById("title").value + ",";
  book[index] += document.getElementById("author").value + ",";
  book[index] += document.getElementById("book-type").value + ",";
  book[index] += document.getElementById("publication-date").value;
  alert(book[index]);
  index++; 
}

function show() {
  alert(book.toString());
}
