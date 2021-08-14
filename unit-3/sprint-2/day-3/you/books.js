const readline = require("readline");
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let books = ["Panchathanthram", "Chandamama Kathalu", "Mahabaratham"];

function bookshelf()
{
    
   // let books = ["Panchathanthram", "Chandamama Kathalu", "Mahabaratham"];

    readline1.question("Select any of the below options: \n1 - Show all books \n2 - Add a new book \n3 - Quit\n", function (num) {
        if (num == 1) {
            console.log(books);
            bookshelf();
        }
        else if (num == 2)
        {
            readline1.question("Enter the book name\n", function (name) {
                books.push(name);
                console.log("book added successfully");
                bookshelf();
            });
        }
        else if (num == 3)
        {
            readline1.question("Are you sure you want to quit - press Y to quit\n", function (enter) {
                if (enter == "y" || enter == "Y") {
                    readline1.close();
                }
            });
        }
        else
        {
            console.log("You have selected an invalid entry so please press 1, 2 or 3\n");
            bookshelf();
            }
    })
}

readline1.on("close", function () {
    console.log("Bye Bye!")
});
bookshelf();
