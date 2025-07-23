const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (!book || !book.title || !book.author || !book.year) {
      console.log("Error: Book information is incomplete. Please provide title, author, and year.");
      return;
    }

    const isDuplicate = this.books.some(
      (existingBook) => existingBook.title.toLowerCase() === book.title.toLowerCase()
    );

    if (isDuplicate) {
      console.log(`Error: Book with title "${book.title}" already exists in the library.`);
      return;
    }

    this.books.push(book);
    console.log(`Book "${book.title}" added successfully.`);
  },

  findBookByTitle(title) {
    const foundBook = this.books.find((book) => book.title === title);
    if (!foundBook) {
      console.log(`Book with title "${title}" not found.`);
    }
    return foundBook;
  },

  removeBook(title) {
    const initialLength = this.books.length;
    this.books = this.books.filter((book) => book.title !== title);

    if (this.books.length < initialLength) {
      console.log(`Book "${title}" removed successfully.`);
    } else {
      console.log(`Book with title "${title}" not found for removal.`);
    }
  },

  listAllBooks() {
    console.log("\n--- Current Library Collection ---");
    if (this.books.length === 0) {
      console.log("The library is currently empty.");
    } else {
      this.books.forEach((book, index) => {
        console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
      });
    }
    console.log("---------------------------------");
  },
};

console.log("Initial library state:");
library.listAllBooks();
console.log("Number of books:", library.books.length);

console.log("\nAttempting to add an incomplete book:");
library.addBook({ author: "George Orwell", year: 1949 });
console.log("Number of books after incomplete add attempt:", library.books.length);

console.log("\nAdding a complete new book: '1984'");
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log("Number of books after adding '1984':", library.books.length);
library.listAllBooks();

console.log("\nAdding another complete new book: 'To Kill a Mockingbird'");
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 });
console.log("Number of books after adding 'To Kill a Mockingbird':", library.books.length);
library.listAllBooks();

console.log("\nAttempting to add a duplicate book: '1984'");
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("\nSearching for 'The Hobbit':");
const hobbit = library.findBookByTitle("The Hobbit");
if (hobbit) {
  console.log("Found:", hobbit);
}

console.log("\nSearching for a non-existent book: 'Moby Dick'");
library.findBookByTitle("Moby Dick");

console.log("\nRemoving '1984':");
library.removeBook("1984");
console.log("Number of books after removing '1984':", library.books.length);
library.listAllBooks();

console.log("\nAttempting to remove a non-existent book: 'The Great Gatsby'");
library.removeBook("The Great Gatsby");
console.log("Number of books after failed removal:", library.books.length);

console.log("\nRemoving 'The Hobbit':");
library.removeBook("The Hobbit");
library.listAllBooks();

console.log("\nRemoving 'To Kill a Mockingbird':");
library.removeBook("To Kill a Mockingbird");
library.listAllBooks();
console.log("Final number of books:", library.books.length);

/*
Fixes Made:
    * Added `return;` after logging "Book information is incomplete." to prevent incomplete books from being added to the array.
    * Added a check `!book` to handle cases where a null or undefined book object might be passed.
    * Implemented duplicate book checking based on title (case-insensitive) to prevent adding the same book multiple times.
    * Improved console messages for success and error conditions.
    * Changed `splice` to `filter` for a more functional and immutable approach to removing books. It creates a new array without the specified book.
    * Added clear console messages indicating whether a book was successfully removed or not found.
    * Added a `console.log` message when a book is not found, providing clearer feedback.
    * Added a new utility method to display all books in the collection, including a message for an empty library, which helps in debugging and verifying operations.
*/
