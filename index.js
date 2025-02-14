// importing readlineSync

let readlineSync=require("readline-sync");

// Define a database with questions, options and the answers


const database={
    categories : [
        {
        name : "JavaScript",
        data : [
            {
                question: "What does 'NaN' stand for in JavaScript?",
                options: {
                    a: "Not a Name",
                    b: "Not a Number",
                    c: "Null and None",
                    d: "Negative and Null"
                },
                answer: "b"
            },
            {
                question: "Which of the following is NOT a JavaScript data type?",
                options: {
                    a: "Number",
                    b: "String",
                    c: "Boolean",
                    d: "Character"
                },
                answer: "d"
            },
            {
                question: "Which keyword is used to declare a constant variable in JavaScript?",
                options: {
                    a: "var",
                    b: "let",
                    c: "const",
                    d: "static"
                },
                answer: "c"
            },
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: {
                    a: "//",
                    b: "/* */",
                    c: "#",
                    d: "--"
                },
                answer: "a"
            },
            {
                question: "Which function is used to convert a string to an integer in JavaScript?",
                options: {
                    a: "parseInt()",
                    b: "toInteger()",
                    c: "convertInt()",
                    d: "int()"
                },
                answer: "a"
            },
            {
                question: "How do you check the type of a variable in JavaScript?",
                options: {
                    a: "typeof",
                    b: "checkType",
                    c: "isType",
                    d: "typeOf"
                },
                answer: "a"
            },
            {
                question: "Which method is used to add an element to the end of an array?",
                options: {
                    a: "push()",
                    b: "pop()",
                    c: "shift()",
                    d: "unshift()"
                },
                answer: "a"
            },
            {
                question: "What will '3' + 2 return in JavaScript?",
                options: {
                    a: "32",
                    b: "5",
                    c: "NaN",
                    d: "Error"
                },
                answer: "a"
            },
            {
                question: "What does 'this' keyword refer to in JavaScript?",
                options: {
                    a: "Current function",
                    b: "Global object",
                    c: "Calling object",
                    d: "Window object"
                },
                answer: "c"
            },
            {
                question: "Which function is used to delay execution of a function in JavaScript?",
                options: {
                    a: "setTimeout()",
                    b: "setInterval()",
                    c: "delay()",
                    d: "wait()"
                },
                answer: "a"
            },
            {
                question: "What does 'null' mean in JavaScript?",
                options: {
                    a: "Undefined value",
                    b: "No value assigned",
                    c: "Zero",
                    d: "Error"
                },
                answer: "b"
            },
            {
                question: "Which operator is used for strict equality comparison in JavaScript?",
                options: {
                    a: "==",
                    b: "===",
                    c: "=",
                    d: "!=="
                },
                answer: "b"
            },
            {
                question: "Which of the following is a valid way to create an array in JavaScript?",
                options: {
                    a: "var arr = {}",
                    b: "var arr = []",
                    c: "var arr = ()",
                    d: "var arr = <>"
                },
                answer: "b"
            },
            {
                question: "Which method is used to convert a JavaScript object into a JSON string?",
                options: {
                    a: "JSON.stringify()",
                    b: "JSON.parse()",
                    c: "toString()",
                    d: "convertToJson()"
                },
                answer: "a"
            },
            {
                question: "Which keyword is used to define a function in JavaScript?",
                options: {
                    a: "define",
                    b: "def",
                    c: "function",
                    d: "fn"
                },
                answer: "c"
            },
            {
                question: "What is the default return value of a function that does not return anything?",
                options: {
                    a: "0",
                    b: "undefined",
                    c: "null",
                    d: "false"
                },
                answer: "b"
            },
            {
                question: "How can you declare an arrow function in JavaScript?",
                options: {
                    a: "function() => {}",
                    b: "() => {}",
                    c: "function => {}",
                    d: "() -> {}"
                },
                answer: "b"
            },
            {
                question: "Which loop is used to iterate over object properties?",
                options: {
                    a: "for",
                    b: "forEach",
                    c: "for...in",
                    d: "for...of"
                },
                answer: "c"
            },
            {
                question: "What does 'use strict' do in JavaScript?",
                options: {
                    a: "Enables modern mode",
                    b: "Allows undeclared variables",
                    c: "Disables strict mode",
                    d: "Prevents function execution"
                },
                answer: "a"
            },
            {
                question: "Which method removes the last element from an array in JavaScript?",
                options: {
                    a: "pop()",
                    b: "push()",
                    c: "shift()",
                    d: "slice()"
                },
                answer: "a"
            }
        ]
    }, 
    {
            name: "SQL",
            data: [
                {
                    question: "What does SQL stand for?",
                    options: {
                        a: "Structured Query Language",
                        b: "Sequential Query Language",
                        c: "System Query Language",
                        d: "Standard Query Language"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL statement is used to retrieve data from a database?",
                    options: {
                        a: "GET",
                        b: "EXTRACT",
                        c: "SELECT",
                        d: "FETCH"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL clause is used to filter records?",
                    options: {
                        a: "WHERE",
                        b: "HAVING",
                        c: "FILTER",
                        d: "ORDER BY"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL command is used to remove all records from a table without deleting the table structure?",
                    options: {
                        a: "DELETE",
                        b: "DROP",
                        c: "TRUNCATE",
                        d: "CLEAR"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL function is used to find the total number of rows in a table?",
                    options: {
                        a: "COUNT()",
                        b: "SUM()",
                        c: "TOTAL()",
                        d: "ROWS()"
                    },
                    answer: "a"
                },
                {
                    question: "Which of the following is a valid SQL JOIN type?",
                    options: {
                        a: "LEFT JOIN",
                        b: "RIGHT JOIN",
                        c: "INNER JOIN",
                        d: "All of the above"
                    },
                    answer: "d"
                },
                {
                    question: "Which SQL command is used to add a new row to a table?",
                    options: {
                        a: "INSERT INTO",
                        b: "ADD ROW",
                        c: "NEW RECORD",
                        d: "APPEND"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL statement is used to remove duplicate records from a result set?",
                    options: {
                        a: "UNIQUE",
                        b: "DISTINCT",
                        c: "REMOVE DUPLICATES",
                        d: "FILTER"
                    },
                    answer: "b"
                },
                {
                    question: "Which SQL keyword is used to sort query results?",
                    options: {
                        a: "ORDER BY",
                        b: "SORT",
                        c: "GROUP BY",
                        d: "ARRANGE BY"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL statement is used to modify existing records in a table?",
                    options: {
                        a: "CHANGE",
                        b: "MODIFY",
                        c: "UPDATE",
                        d: "ALTER"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL clause is used to group records based on a specific column?",
                    options: {
                        a: "ORDER BY",
                        b: "GROUP BY",
                        c: "SORT BY",
                        d: "CATEGORIZE BY"
                    },
                    answer: "b"
                },
                {
                    question: "Which SQL command is used to remove a table from a database?",
                    options: {
                        a: "DELETE TABLE",
                        b: "REMOVE TABLE",
                        c: "DROP TABLE",
                        d: "CLEAR TABLE"
                    },
                    answer: "c"
                },
                {
                    question: "What will happen if you execute 'DELETE FROM table_name' without a WHERE clause?",
                    options: {
                        a: "It will delete all rows",
                        b: "It will delete only one row",
                        c: "It will throw an error",
                        d: "It will do nothing"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL constraint ensures that a column cannot contain NULL values?",
                    options: {
                        a: "PRIMARY KEY",
                        b: "UNIQUE",
                        c: "NOT NULL",
                        d: "CHECK"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL statement is used to create a new table?",
                    options: {
                        a: "ADD TABLE",
                        b: "NEW TABLE",
                        c: "CREATE TABLE",
                        d: "MAKE TABLE"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL function returns the highest value in a column?",
                    options: {
                        a: "MAX()",
                        b: "HIGH()",
                        c: "LARGEST()",
                        d: "TOP()"
                    },
                    answer: "a"
                },
                {
                    question: "Which SQL command is used to remove a specific row from a table?",
                    options: {
                        a: "DROP",
                        b: "REMOVE",
                        c: "DELETE",
                        d: "CLEAR"
                    },
                    answer: "c"
                },
                {
                    question: "Which SQL operator is used to check if a value exists in a list of values?",
                    options: {
                        a: "BETWEEN",
                        b: "IN",
                        c: "EXISTS",
                        d: "MATCHES"
                    },
                    answer: "b"
                },
                {
                    question: "Which SQL function is used to return the average value of a column?",
                    options: {
                        a: "MEAN()",
                        b: "AVG()",
                        c: "SUM()",
                        d: "MEDIAN()"
                    },
                    answer: "b"
                },
                {
                    question: "Which SQL statement is used to add a new column to an existing table?",
                    options: {
                        a: "ADD COLUMN",
                        b: "MODIFY COLUMN",
                        c: "ALTER TABLE",
                        d: "INSERT COLUMN"
                    },
                    answer: "c"
                }
            ]
        }
    ]
}


function showQuestions() {
    let categoryInput = readlineSync.question("Enter a category (JavaScript or SQL): ").toLowerCase();

    let selectedCategory = null;
    for (let j = 0; j < database.categories.length; j++) {
        if (database.categories[j].name.toLowerCase() === categoryInput) {
            selectedCategory = database.categories[j];
            break;
        }
    }

    if (!selectedCategory) {
        console.log("Invalid category. Please choose from JavaScript or SQL.");
        return;
    }

    

    let score=0;

    console.log(`Starting a quiz for ${selectedCategory.name}\n`)

    for (let i = 0; i < selectedCategory.data.length; i++) {
        console.log(`Q${i+1}-${selectedCategory.data[i].question}`);
        for(let key in selectedCategory.data[i].options){
            console.log(`${key}) ${selectedCategory.data[i].options[key]} `);
        }
        
        let userAnswr=readlineSync.question("Enter your answer : ").toLowerCase();
        if(userAnswr==selectedCategory.data[i].answer){
            console.log("✅Correct");
            score++;
        }
        else{
            console.log("❌Incorrect");
            console.log(`Correct answer ${selectedCategory.data[i].answer}`)
        }


    }
    console.log("Your Final score is : "+score);
}




showQuestions();
