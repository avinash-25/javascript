# JavaScript Destructuring

## Table of Contents
1. [Introduction to Destructuring](#introduction)
2. [Object Destructuring](#object-destructuring)
3. [Array Destructuring](#array-destructuring)
4. [Nested Object Destructuring](#nested-object-destructuring)
5. [Nested Array Destructuring](#nested-array-destructuring)
6. [Mixed Array Destructuring](#mixed-array-destructuring)
7. [Advanced Destructuring Techniques](#advanced-destructuring)
8. [Module Import/Export with Destructuring](#module-destructuring)
9. [Best Practices](#best-practices)

---

## Introduction to Destructuring

**Destructuring** is a JavaScript feature that allows you to extract values from arrays or properties from objects and assign them to variables in a single statement. It provides a clean and concise way to unpack values, making code more readable and efficient.

- The process of extracting the values from the array or object into the variables is known as destructuring.
- The two most used data structures in JavaScript are Object and Array, both allows us to unpack individual values into variables.

<br>

### Why Use Destructuring?
- **Cleaner Code**: Reduces the need for repetitive property access
- **Improved Readability**: Makes variable assignments more explicit
- **Efficiency**: Allows multiple assignments in one line
- **Flexibility**: Works with nested structures and provides default values

---

## Object Destructuring

- The process of extracting the values from the object into the variables is known as object destructuring.
- All the key names provided on LHS are consider as variable and these variables should be declared and written inside curly braces.
- The variable name should same as object key name
- Js engine will search for the key inside the object.
- If the key is present, the value is extracted and copy into variable.
- If the key is not present, undefined is store in the variable.
- After destructuring, we can directly access variable names, without using object reference.

### Basic Syntax
```javascript
const {property1, property2} = object;
```

<br><br><br><br>

### Example :- 
```javascript
const obj = {
    username: "Avinash",
    age: 24,
    city: "Noida"
}

const {username, age, city} = obj;

console.log(username); // "Avinash"
console.log(age);      // 24
console.log(city);     // "Noida"
```

### Key Points:
- Variable names must match object property names
- Order doesn't matter in object destructuring
- Unmatched properties are ignored
- Missing properties result in `undefined`

### Advanced Object Destructuring

#### Renaming Variables
```javascript
const obj = {
    username: "Avinash",
    age: 24
}
const {username: name, age: userAge} = obj;
console.log(name);    // "Avinash"
console.log(userAge); // 24
```

<br><br>

#### Default Values
```javascript
const obj = {
    username: "Avinash"
}
const {username, age = 25, city = "Delhi"} = obj;
console.log(username); // "Avinash"
console.log(age);      // 25 (default value)
console.log(city);     // "Delhi" (default value)
```

---

## Array Destructuring.

- The process of extracting the values from the array into the variables is known as array destructuring.
- All the key names provided on LHS are consider as variable and should be written inside square brackets.
- Js engine will extract the array values and stored them variables in the same order as they are present inside array.
- if we try to access value which is not present inside array, js engine will store undefined inside that variable.

### Basic Syntax

```javascript
const [variable1, variable2] = array;
```
### Example from Class
```javascript
const movies = ["welcome", "housefull", "dhammal"];
const [m1, , m3] = movies; // Note: empty space skips second element
console.log(m1); // "welcome"
console.log(m3); // "dhammal"
```

### Key Points:
- Position matters in array destructuring
- Use empty spaces to skip elements
- Excess variables become `undefined`
- Excess array elements are ignored

### Advanced Array Destructuring

#### Rest Operator
```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

#### Swapping Variables
```javascript
let a = 1, b = 2;
[a, b] = [b, a]; // Swap values
console.log(a); // 2
console.log(b); // 1
```

---

## Nested Object Destructuring 

Destructuring works with nested objects, allowing you to extract deeply nested properties.

<br><br>

### Example :
```javascript
const obj = {
    username: "Avinash",
    address: { state: "UP", pin: 201301
    }
}
// Method 1: Rename nested object
const {username, address: add} = obj;
console.log(username); // "Avinash"
console.log(add);      // {state: "UP", pin: 201301}
// Method 2: Extract nested properties directly
const {username, address: {state, pin}} = obj;
console.log(username); // "Avinash"
console.log(state);    // "UP"
console.log(pin);      // 201301
```


### Complex Nested Example
```javascript
const user = {
    name: "Avinash",
    contact: {
        email: "avinashranjan918@gmail.com",
        phone: { mobile: "+91 6204732828", landline: "011-12345678"
        }
    }
}
const {
    name,
    contact: {
        email,
        phone: {mobile, landline}
    }
} = user;
console.log(name);     // "Avinash"
console.log(email);    // "avinashranjan918@gmail.com"
console.log(mobile);   // "+91 6204732828"
console.log(landline); // "011-12345678"
```

---

<br><br>

## Nested Array Destructuring

Arrays can contain other arrays, and destructuring can extract elements from nested arrays.

### Example from Class
```javascript
const arr = [
    ["Html", "css"],
    ["js", "TS"],
    ["Node", "java"],
    ["Mongo", "sql"]
]

const [ui, logic, [b1, b2], db] = arr;

console.log(b1);    // "Node"
console.log(b2);    // "java"
console.log(ui);    // ["Html", "css"]
console.log(logic); // ["js", "TS"]
console.log(db);    // ["Mongo", "sql"]
```

### Alternative Approach with Renaming
```javascript
const arr = [
    ["Html", "css"],
    ["js", "TS"],
    ["Node", "java"],
    ["Mongo", "sql"]
]

const [ui, logic, backend = [b1, b2], db] = arr;
```

---

<br><br><br>

## Mixed Array Destructuring

Arrays can contain objects, and destructuring can handle mixed data structures effectively.

### Example from Class - Basic Approach
```javascript
const users = [ 
    {
        fname: "avinash",
        lname: "ranjan   "
    },
    {
        fname: " Tinku  ",
        lname: "      sharma"
    },
    {
        fname: "Golu     ",
        lname: "verma  "
    }
];

// Traditional approach with separate destructuring
const x = users.map((element, index, array) => {
    const {fname, lname} = element;
    return {
        fname: fname.trim(), // removes extra spaces
        lname: lname.trim()
    }
})

console.log(users); // Original array (unchanged)
console.log(x);     // New array with trimmed names
```

<br><br><br><br><br><br>

### Advanced Approach - Direct Destructuring in Parameters
```javascript
const users = [ 
    {
        fname: "avinash",
        lname: "ranjan   "
    },
    {
        fname: " Tinku  ",
        lname: "      sharma"
    },
    {
        fname: "Golu     ",
        lname: "verma  "
    }
];

// Advanced: Destructuring directly in function parameters
const x = users.map(({fname, lname}, index, array) => {
    // Modify original array elements
    array[index] = {
        fname: fname.trim(),
        lname: lname.trim()
    }
    
    console.log("After trim:", fname.trim());
    console.log("After trim:", lname.trim());
})
```

### Understanding the Difference
- **First approach**: Creates a new array, original remains unchanged
- **Second approach**: Modifies the original array elements
- **Key insight**: Destructuring in function parameters is cleaner and more functional

---


<br><br><br>


## Advanced Destructuring Techniques 

### Function Parameters Destructuring

- We can destructure array or object in function parameter so that we can access value directly.
- Destructuring object in function parameter At the time of object destructuring, we have to make sure variable name is same as object key name and write within curly braces.

```javascript
function details({name,age}) {
console.log(name); // Avinash
console.log(age); // 24
}

let obj = {
name:"Avinash" ,
age:24 ,
}

details(obj) // function call
```


```javascript
// Object parameters
function greetUser({name, age, city = "Unknown"}) {

    console.log(`Hello ${name}, you are ${age} years old from ${city}`);
}

greetUser({name: "Avinash", age: 24, city: "Noida"});

// Array parameters
function processCoordinates([x, y, z = 0]) {

    console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

processCoordinates([10, 20]); // Z defaults to 0

```

### Computed Property Names
```javascript
const key = "username";
const obj = {
    username: "Avinash",
    age: 24
}

const {[key]: name, age} = obj;
console.log(name); // "Avinash"
```



### Dynamic Destructuring with Loops
```javascript
const users = [
    {id: 1, name: "Avinash", role: "developer"},
    {id: 2, name: "Tinku", role: "designer"},
    {id: 3, name: "Golu", role: "tester"}
];

for (const {id, name, role} of users) {
    console.log(`User ${id}: ${name} is a ${role}`);
}
```

---

<br><br><br><br><br><br><br><br><br><br><br>

## Module Import/Export with Destructuring 

Based on your `logic.js` file, here's how destructuring works with ES6 modules:

### Export File (logic.js)
```javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const greet = (user) => `Good Morning ${user}`;
const user = "Avinash";

export {add, sub, greet, user};

// This creates an object-like structure:
// {
//     add: (a,b) => a + b,
//     sub: (a,b) => a - b,
//     greet: (user) => `Good Morning ${user}`,
//     user: "Avinash"
// }
```

### Import with Destructuring
```javascript
import {add, greet, user} from "./logic.js";

console.log(user);           // "Avinash"
console.log(add(5, 3));      // 8
console.log(greet("Tinku")); // "Good Morning Tinku"
```

<br><br><br><br><br><br>

### Alternative Import Methods
```javascript
// Import all as object
import * as utils from "./logic.js";
console.log(utils.add(5, 3));

// Import with renaming
import {add as addition, user as username} from "./logic.js";

// Import default and named exports
import defaultExport, {add, sub} from "./logic.js";
```

---

## Best Practices

### 1. Use Meaningful Variable Names
```javascript
// Good
const {firstName, lastName, email} = user;

// Avoid
const {a, b, c} = user;
```

### 2. Provide Default Values
```javascript
const {name = "Anonymous", age = 0} = user;
```

### 3. Don't Over-Destructure
```javascript
// Good - reasonable depth
const {user: {profile: {name}}} = data;

// Avoid - too deep, hard to read
const {user: {profile: {settings: {theme: {color}}}}} = data;
```

### 4. Use Rest Operator Wisely
```javascript
// Good for separating first few items from the rest
const [first, second, ...others] = items;

// Good for extracting specific properties
const {id, name, ...otherProps} = user;
```

### 5. Handle Undefined Safely
```javascript
// Safe destructuring with default empty object
const {name, age} = user || {};

// Or use optional chaining (ES2020)
const {name, age} = user?.profile || {};
```

### 6. Combine with Modern JavaScript Features
```javascript
// With template literals
const {name, city} = user;
console.log(`${name} lives in ${city}`);

// With arrow functions
const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

// With async/await
const {data, error} = await fetchUser(id);
```

---

<br><br><br><br><br><br>

## Summary

Destructuring is a powerful JavaScript feature that:

- **Simplifies variable assignment** from objects and arrays
- **Improves code readability** and reduces repetition
- **Works with nested structures** for complex data extraction
- **Supports default values** and variable renaming
- **Integrates seamlessly** with modern JavaScript features
- **Essential for modern JavaScript development**, especially with frameworks like React

Master destructuring to write cleaner, more maintainable JavaScript code!