📚 Library Management System
This project demonstrates a simple Library Management System using Object-Oriented Programming (OOP) principles in Node.js. It showcases the use of classes, inheritance, encapsulation, and polymorphism to manage books, librarians, and members.

🛠 Features
Add and Remove Books: Managed by the librarian.
Borrow Books: Both members and librarians can borrow books with different behaviors.
Encapsulation: Book availability and member details are secured with getters and setters.
Inheritance: A Librarian class inherits from Member and has extra privileges.
Polymorphism: Borrowing behavior is customized for Librarian and Member.
Optional Search Functionality (can be implemented later).

🚀 How to Run the Code
Prerequisites
Node.js installed on your machine (Download Node.js).
Steps to Run
Clone or download the project files to your local machine.
Open a terminal and navigate to the project folder.
bash
Copy code
cd path/to/project/folder
Run the program using Node.js:
bash
Copy code
node library.js
Expected Output
text

Copy code
Librarian added "1984" to the library.
Librarian added "The Jungle Justice" to the library.
Shyllon borrowed "1984".
Sorry, "1984" is not available.
Library: [
  Book {title: '1984', author: 'Aki and Pawpaw', ISBN: '0123', _availability: false},
  Book { title: 'The Jungle Justice', author: 'Nike Jokotagba', ISBN: '41890', _availability: true }
]

📂 Project Structure
bash
Copy code
/Library-Management
│── library.js      # Main codebase
└── README.md       # Documentation (this file)

💻 Code Overview
Classes Used
Book: Represents a book with title, author, ISBN, and availability.
Member: Represents a library member who can borrow books.
Librarian: Inherits from Member and has privileges to add or remove books.
Example Code Snippet
javascript
Copy code
class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this._availability = true;
  }

  get availability() {
    return this._availability;
  }

  set availability(status) {
    this._availability = status;
  }
}

🔧 Future Improvements
Search Functionality: Allow members to search books by title or author.
Persistent Storage: Save the library data using JSON, SQLite, or MongoDB.
Web Interface: Extend the project with a frontend using HTML, CSS, and JavaScript.
📝 Conclusion
This project illustrates the practical use of OOP principles such as inheritance, encapsulation, and polymorphism. It offers a glimpse into backend logic design using Node.js and serves as a foundation for more complex applications.

📄 License
This project is licensed under the ISC License.