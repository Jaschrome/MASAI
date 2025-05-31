const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        if (!book || typeof book !== 'object') {
            console.log("Error: Book information must be an object.");
            return;
        }
        if (typeof book.title !== 'string' || book.title.trim() === '') {
            console.log("Error: Book title is missing or invalid.");
            return;
        }
        if (typeof book.author !== 'string' || book.author.trim() === '') {
            console.log("Error: Book author is missing or invalid.");
            return;
        }
        if (typeof book.year !== 'number' || !Number.isInteger(book.year) || book.year <= 0) {
            console.log("Error: Book year is missing or invalid.");
            return;
        }

        if (this.findBookByTitle(book.title)) {
            console.log(`Error: Book with title "${book.title}" already exists.`);
            return;
        }

        this.books.push(book);
        console.log(`Book "${book.title}" added successfully.`);
    },

    findBookByTitle(title) {
        if (typeof title !== 'string' || title.trim() === '') {
            console.log("Error: Title for search is missing or invalid.");
            return null;
        }
        return this.books.find(book => book.title === title);
    },

    removeBook(title) {
        if (typeof title !== 'string' || title.trim() === '') {
            console.log("Error: Title for removal is missing or invalid.");
            return false;
        }

        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.title !== title);
        
        if (this.books.length < initialLength) {
            console.log(`Book "${title}" removed successfully.`);
            return true;
        } else {
            console.log(`Error: Book with title "${title}" not found.`);
            return false;
        }
    }
};

console.log("--- Initial State ---");
console.log("Library books count:", library.books.length);
console.log("Initial book:", library.books[0]);

console.log("\n--- Testing addBook ---");

console.log("\nAttempting to add incomplete book (missing title):");
library.addBook({ author: "George Orwell", year: 1949 });
console.log("Library books count after failed add:", library.books.length);

console.log("\nAttempting to add incomplete book (missing author):");
library.addBook({ title: "1984", year: 1949 });
console.log("Library books count after failed add:", library.books.length);

console.log("\nAttempting to add incomplete book (missing year):");
library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
console.log("Library books count after failed add:", library.books.length);

console.log("\nAttempting to add book with invalid title type:");
library.addBook({ title: 123, author: "Author", year: 2000 });
console.log("Library books count after failed add:", library.books.length);

console.log("\nAttempting to add valid book '1984':");
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log("Library books count after valid add:", library.books.length);

console.log("\nAttempting to add duplicate book '1984':");
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log("Library books count after duplicate add:", library.books.length);

console.log("\nAttempting to add valid book 'Brave New World':");
library.addBook({ title: "Brave New World", author: "Aldous Huxley", year: 1932 });
console.log("Library books count after another valid add:", library.books.length);

console.log("\n--- Testing findBookByTitle ---");

console.log("\nFinding '1984':", library.findBookByTitle("1984"));

console.log("\nFinding 'Non Existent Book':", library.findBookByTitle("Non Existent Book"));

console.log("\nFinding with invalid title (empty string):", library.findBookByTitle(""));

console.log("\n--- Testing removeBook ---");

console.log("\nAttempting to remove 'Non Existent Book':");
library.removeBook("Non Existent Book");
console.log("Library books count after failed remove:", library.books.length);

console.log("\nAttempting to remove with invalid title (empty string):");
library.removeBook("");
console.log("Library books count after invalid remove:", library.books.length);

console.log("\nAttempting to remove '1984':");
library.removeBook("1984");
console.log("Library books count after successful remove:", library.books.length);

console.log("\n--- Final State ---");
console.log("Library books:", library.books);
