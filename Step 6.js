// Step 6: Working with JSON

'JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.'; // Source: https://www.json.org/json-en.html

// JSON Object
let jsonString = '{"firstName": "Mobarak", "lastName": "Ali", "age": 30, "isStudent": false}';

// Persing JSON string to JavaScript Object
let person = JSON.parse(jsonString);

console.log(person.firstName); // Output: Mobarak
console.log(person.lastName); // Output: Ali
console.log(person.age); // Output: 30

// Modifying JSON Object
person.age = 49;
console.log(person.age); // Output: 49

// Converting JavaScript Object to JSON string
let updatedJsonString = JSON.stringify(person);
console.log(updatedJsonString); // Output: {"firstName":"Mobarak","lastName":"Ali","age":49,"isStudent":false}

