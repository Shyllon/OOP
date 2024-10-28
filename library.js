// Book class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._availability = true;
    }

    // Getter and Setter for availability
    get availability() {
        return this._availability;
    }

    set availability(status) {
        if (typeof status === 'boolean') {
            this._availability = status;
        } else {
            console.log("Invalid status. Must be true or false.");
        }
    }
}

// Member class
class Member {
    constructor(name, memberID) {
        this.name = name;
        this.memberID = memberID;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book) {
        if (book.availability) {
            this.borrowedBooks.push(book);
            book.availability = false;
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`Sorry, "${book.title}" is not available.`);
        }
    }
}

// Librarian class (inherits from Member)
class Librarian extends Member {
    constructor(name, memberID) {
        super(name, memberID); // Call the parent class constructor
    }

    // Method to add a book to the library
    addBook(book, library) {
        library.push(book);
        console.log(`Librarian added "${book.title}" to the library.`);
    }

    // Method to remove a book from the library
    removeBook(book, library) {
        const index = library.indexOf(book);
        if (index > -1) {
            library.splice(index, 1);
            console.log(`Librarian removed "${book.title}" from the library.`);
        } else {
            console.log(`"${book.title}" not found in the library.`);
        }
    }
}

// Demo: Creating objects and testing functionality
const library = []; // Array to store books
const librarian = new Librarian("Afolabi", "L001");
const member = new Member("Shyllon", "M001");

// Create new books
const book1 = new Book("1984", "Aki and Pawpaw", "0123");
const book2 = new Book("The Jungle Justice", "Nike Jokotagba", "41890");

// Librarian adds books to the library
librarian.addBook(book1, library);
librarian.addBook(book2, library);

// Member borrows a book
member.borrowBook(book1);

// Try borrowing the same book again
member.borrowBook(book1);

// Display library contents
console.log("Library:", library);
