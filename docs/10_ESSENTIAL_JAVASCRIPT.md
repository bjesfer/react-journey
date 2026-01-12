# Essential JavaScript for React - Complete Guide

Welcome to the **Essential JavaScript Guide**! This comprehensive guide covers all the JavaScript concepts you need to know before diving deep into React development. These are the fundamental JavaScript features that are heavily used in React and modern JavaScript development.

---

## 🎯 Overview of Essential JavaScript

JavaScript is the foundation of React. While React has its own syntax (JSX) and patterns, it's still JavaScript under the hood. Understanding these essential JavaScript concepts will make learning React much easier and help you write better React code.

### Why These Topics Matter for React

React development heavily relies on modern JavaScript features. You'll use these concepts constantly in React:

- ✅ **Destructuring** - Used for props, state, and data handling
- ✅ **Arrow Functions** - Component definitions, event handlers, callbacks
- ✅ **Template Literals** - String formatting, dynamic content
- ✅ **Array Methods** - Rendering lists, data transformation
- ✅ **Async/Await** - Data fetching, API calls
- ✅ **Spread Operator** - State updates, prop passing
- ✅ **Optional Chaining** - Safe property access
- ✅ **Logical Operators** - Conditional rendering

### What You'll Learn

By the end of this guide, you'll understand:

1. ✅ Modern JavaScript syntax and features
2. ✅ ES6+ JavaScript concepts
3. ✅ How these concepts apply to React
4. ✅ Best practices for React development
5. ✅ Common patterns used in React code

### Prerequisites

- Basic understanding of JavaScript (variables, functions, objects, arrays)
- Comfortable with basic programming concepts
- Ready to learn modern JavaScript features

---

## 📑 Table of Contents

1. [Overview](#-overview-of-essential-javascript)
2. [Variables: const, let, var](#-variables-const-let-var)
3. [Destructuring Objects and Arrays](#-destructuring-objects-and-arrays)
4. [Rest/Spread Operator](#-restspread-operator)
5. [Template Literals](#-template-literals)
6. [Ternaries Instead of if/else Statements](#-ternaries-instead-of-ifelse-statements)
7. [Arrow Functions](#-arrow-functions)
8. [Short-Circuiting and Logical Operators](#-short-circuiting-and-logical-operators--)
9. [Optional Chaining](#-optional-chaining)
10. [Array Methods](#-array-methods-map-filter-reduce-sort-find-etc)
11. [Working with Immutable Arrays](#-working-with-immutable-arrays)
12. [Asynchronous JavaScript: Promises](#-asynchronous-javascript-promises)
13. [Asynchronous JavaScript: Async/Await](#-asynchronous-javascript-asyncawait)
14. [Modules: Import and Export](#-modules-import-and-export)
15. [Default Parameters](#-default-parameters)
16. [Practice Activity](#-practice-activity)

---

## 🔤 Variables: const, let, var

### Overview

Modern JavaScript has three ways to declare variables. Understanding the differences is crucial for React development.

### const (Most Common in React)

**What it is:** Creates a constant variable that cannot be reassigned.

**Usage:**
```javascript
const name = "React";
const age = 10;
const isActive = true;

// ❌ Error: Cannot reassign
// name = "Vue"; // TypeError
```

**When to use:**
- ✅ Default choice for most variables
- ✅ React components
- ✅ Props and state (in React)
- ✅ Arrays and objects (reference is constant, but content can change)

**Example:**
```javascript
const App = () => {
  const [count, setCount] = useState(0);
  const userName = "John";
  return <div>{userName}</div>;
};
```

### let (When You Need Reassignment)

**What it is:** Creates a variable that can be reassigned, but has block scope.

**Usage:**
```javascript
let counter = 0;
counter = 1; // ✅ OK

if (true) {
  let message = "Hello"; // Only exists in this block
}
// ❌ message is not accessible here
```

**When to use:**
- ✅ Loop counters
- ✅ Variables that need to change
- ✅ Block-scoped variables

**Example:**
```javascript
let total = 0;
for (let i = 0; i < items.length; i++) {
  total += items[i].price;
}
```

### var (Avoid in Modern Code)

**What it is:** Old way to declare variables (function-scoped, not block-scoped).

**Why avoid:**
- ❌ Function-scoped (can cause bugs)
- ❌ Can be redeclared
- ❌ No block scope
- ❌ Hoisting issues

**Modern approach:**
- Use `const` by default
- Use `let` only when reassignment is needed
- Never use `var` in new code

---

## 📦 Destructuring Objects and Arrays

### Overview

Destructuring allows you to extract values from objects and arrays into separate variables. This is used extensively in React for props, state, and data handling.

### Destructuring Objects

**Basic syntax:**
```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Extract values
const { name, age, city } = person;
console.log(name);  // "John"
console.log(age);   // 30
console.log(city);  // "New York"
```

**Renaming variables:**
```javascript
const { name: personName, age: personAge } = person;
console.log(personName); // "John"
```

**Default values:**
```javascript
const { name, age, email = "no-email" } = person;
console.log(email); // "no-email" if email doesn't exist
```

**Nested destructuring:**
```javascript
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

const { name, address: { city } } = user;
console.log(city); // "New York"
```

### Destructuring Arrays

**Basic syntax:**
```javascript
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"
```

**Skipping elements:**
```javascript
const [first, , third] = colors;
console.log(first); // "red"
console.log(third); // "blue"
```

**Default values:**
```javascript
const [first = "unknown", second] = colors;
```

**Rest in destructuring:**
```javascript
const [first, ...rest] = colors;
console.log(first); // "red"
console.log(rest);  // ["green", "blue"]
```

### Using Destructuring in React

**With props:**
```javascript
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{email}</p>
    </div>
  );
}

// Usage
<UserCard name="John" age={30} email="john@example.com" />
```

**With state:**
```javascript
const [user, setUser] = useState({ name: "", age: 0 });

// Destructure in render
const { name, age } = user;
```

**With useState array:**
```javascript
const [count, setCount] = useState(0);
// count is the first element, setCount is the second
```

---

## 🔄 Rest/Spread Operator

### Overview

The `...` operator can be used for two purposes: spreading elements and collecting remaining elements (rest).

### Spread Operator (...)

**What it does:** Expands an array or object into individual elements.

### Spreading Arrays

**Copying arrays:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a new array
console.log(arr2); // [1, 2, 3]
```

**Combining arrays:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

**Adding elements:**
```javascript
const newArray = [0, ...arr1, 4];
console.log(newArray); // [0, 1, 2, 3, 4]
```

**Passing arguments:**
```javascript
const numbers = [1, 2, 3];
Math.max(...numbers); // 3
```

### Spreading Objects

**Copying objects:**
```javascript
const person = { name: "John", age: 30 };
const copy = { ...person };
console.log(copy); // { name: "John", age: 30 }
```

**Merging objects:**
```javascript
const person = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" };
const merged = { ...person, ...address };
console.log(merged); 
// { name: "John", age: 30, city: "New York", country: "USA" }
```

**Updating properties:**
```javascript
const person = { name: "John", age: 30 };
const updated = { ...person, age: 31 };
console.log(updated); // { name: "John", age: 31 }
```

**Adding new properties:**
```javascript
const person = { name: "John" };
const withEmail = { ...person, email: "john@example.com" };
console.log(withEmail); 
// { name: "John", email: "john@example.com" }
```

### Rest Operator (...)

**What it does:** Collects remaining elements into an array or object.

**In function parameters:**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3, 4, 5); // 15
```

**In destructuring:**
```javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
```

**In objects:**
```javascript
const { name, ...rest } = { name: "John", age: 30, city: "NYC" };
console.log(rest); // { age: 30, city: "NYC" }
```

### Using Spread in React

**Updating state immutably:**
```javascript
const [items, setItems] = useState([1, 2, 3]);

// Add item
setItems([...items, 4]); // [1, 2, 3, 4]

// Update item
setItems(items.map((item, index) => 
  index === 1 ? 99 : item
)); // [1, 99, 3]
```

**Updating object state:**
```javascript
const [user, setUser] = useState({ name: "John", age: 30 });

// Update age
setUser({ ...user, age: 31 });

// Add property
setUser({ ...user, email: "john@example.com" });
```

**Passing props:**
```javascript
const props = { name: "John", age: 30, city: "NYC" };
<UserCard {...props} /> // Spreads all props
```

---

## 📝 Template Literals

### Overview

Template literals use backticks (`) instead of quotes and allow embedded expressions using `${}`.

### Basic Usage

**String concatenation:**
```javascript
const name = "John";
const age = 30;

// Old way
const message = "My name is " + name + " and I am " + age + " years old";

// Template literal
const message = `My name is ${name} and I am ${age} years old`;
```

**Multi-line strings:**
```javascript
// Old way
const text = "Line 1\n" + "Line 2\n" + "Line 3";

// Template literal
const text = `
  Line 1
  Line 2
  Line 3
`;
```

### Embedded Expressions

**Variables:**
```javascript
const name = "React";
const version = 19;
console.log(`Welcome to ${name} ${version}!`); 
// "Welcome to React 19!"
```

**Expressions:**
```javascript
const x = 10;
const y = 20;
console.log(`Sum: ${x + y}`); // "Sum: 30"
```

**Functions:**
```javascript
const getName = () => "React";
console.log(`Hello ${getName()}!`); // "Hello React!"
```

**Ternary operators:**
```javascript
const isActive = true;
console.log(`Status: ${isActive ? "Active" : "Inactive"}`);
// "Status: Active"
```

### Using Template Literals in React

**Dynamic content:**
```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
return <h1>{greeting}</h1>;
```

**Conditional rendering:**
```javascript
const user = { name: "John" };
return <div>{user ? `Welcome, ${user.name}!` : "Please log in"}</div>;
```

**Class names:**
```javascript
const isActive = true;
const className = `button ${isActive ? "active" : ""}`;
return <button className={className}>Click me</button>;
```

**URLs and paths:**
```javascript
const userId = 123;
const apiUrl = `https://api.example.com/users/${userId}`;
```

---

## 🔀 Ternaries Instead of if/else Statements

### Overview

Ternary operators provide a concise way to write conditional statements. They're commonly used in React for conditional rendering.

### Basic Syntax

```javascript
condition ? valueIfTrue : valueIfFalse
```

### Basic Examples

**Simple conditional:**
```javascript
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
```

**Assignment:**
```javascript
const isActive = true;
const status = isActive ? "Online" : "Offline";
console.log(status); // "Online"
```

**Return values:**
```javascript
function getGreeting(isMorning) {
  return isMorning ? "Good morning" : "Good evening";
}
```

### Nested Ternaries (Use Carefully)

```javascript
const age = 25;
const category = age < 18 ? "Child" 
                : age < 65 ? "Adult" 
                : "Senior";
```

**Better approach (multiple conditions):**
```javascript
function getCategory(age) {
  if (age < 18) return "Child";
  if (age < 65) return "Adult";
  return "Senior";
}
```

### Using Ternaries in React

**Conditional rendering:**
```javascript
function User({ isLoggedIn, userName }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

**Conditional classes:**
```javascript
const isActive = true;
return (
  <button className={isActive ? "btn active" : "btn"}>
    Click me
  </button>
);
```

**Conditional props:**
```javascript
const error = null;
return (
  <div>
    {error ? (
      <ErrorComponent message={error} />
    ) : (
      <SuccessComponent />
    )}
  </div>
);
```

**Inline conditionals:**
```javascript
const count = 5;
return (
  <div>
    {count > 0 ? `You have ${count} items` : "No items"}
  </div>
);
```

### When to Use Ternaries vs if/else

**Use ternaries for:**
- ✅ Simple conditions (one line)
- ✅ Conditional rendering in JSX
- ✅ Assignment based on condition
- ✅ Return values based on condition

**Use if/else for:**
- ✅ Complex logic
- ✅ Multiple conditions
- ✅ Side effects (console.log, etc.)
- ✅ Better readability

---

## ➡️ Arrow Functions

### Overview

Arrow functions provide a shorter syntax for writing functions. They're heavily used in React for component definitions, event handlers, and callbacks.

### Basic Syntax

**Regular function:**
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

**Arrow function:**
```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

**Implicit return (single expression):**
```javascript
const greet = (name) => `Hello, ${name}!`;
```

**No parameters:**
```javascript
const greet = () => "Hello!";
```

**Single parameter (parentheses optional):**
```javascript
const greet = name => `Hello, ${name}!`;
```

**Multiple parameters:**
```javascript
const add = (a, b) => a + b;
```

### Arrow Functions in Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);

// filter
const evens = numbers.filter(n => n % 2 === 0);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Using Arrow Functions in React

**Component definition:**
```javascript
const App = () => {
  return <h1>Hello React!</h1>;
};

export default App;
```

**Event handlers:**
```javascript
const Button = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };
  
  return <button onClick={handleClick}>Click me</button>;
};
```

**Inline handlers:**
```javascript
<button onClick={() => setCount(count + 1)}>Increment</button>
```

**Callbacks:**
```javascript
useEffect(() => {
  fetchData();
}, []);
```

### this Keyword Difference

**Regular function:**
```javascript
const obj = {
  name: "React",
  greet: function() {
    console.log(this.name); // "React" - this refers to obj
  }
};
```

**Arrow function:**
```javascript
const obj = {
  name: "React",
  greet: () => {
    console.log(this.name); // undefined - this is lexical
  }
};
```

**In React:**
- Arrow functions in React components don't need `this`
- Regular functions need `.bind(this)` or arrow wrapper
- Arrow functions are preferred for event handlers

---

## ⚡ Short-Circuiting and Logical Operators (&&, ||, ??)

### Overview

Logical operators can be used for conditional logic and short-circuiting. They're commonly used in React for conditional rendering.

### AND Operator (&&)

**What it does:** Returns the first falsy value, or the last value if all are truthy.

**Short-circuiting:**
```javascript
true && console.log("This runs");  // Logs: "This runs"
false && console.log("This doesn't"); // Doesn't log
```

**Returning values:**
```javascript
const result = true && "Hello";
console.log(result); // "Hello"

const result2 = false && "Hello";
console.log(result2); // false
```

**Using && in React (Conditional rendering):**
```javascript
const items = [1, 2, 3];

return (
  <div>
    {items.length > 0 && (
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    )}
  </div>
);
```

**More examples:**
```javascript
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn && <UserProfile />}
    {error && <ErrorMessage message={error} />}
    {loading && <Spinner />}
  </div>
);
```

### OR Operator (||)

**What it does:** Returns the first truthy value, or the last value if all are falsy.

**Default values:**
```javascript
const name = user.name || "Anonymous";
const count = items.length || 0;
```

**Short-circuiting:**
```javascript
const greeting = userName || "Guest";
console.log(greeting); // "Guest" if userName is falsy
```

**Using || in React:**
```javascript
const userName = null;

return (
  <div>
    <h1>Welcome, {userName || "Guest"}!</h1>
  </div>
);
```

### Nullish Coalescing Operator (??)

**What it is:** Returns the right-hand operand when the left-hand operand is `null` or `undefined`.

**Difference from ||:**
```javascript
const value1 = 0 || "default";  // "default" (0 is falsy)
const value2 = 0 ?? "default";  // 0 (0 is not null/undefined)

const value3 = "" || "default"; // "default" (empty string is falsy)
const value4 = "" ?? "default"; // "" (empty string is not null/undefined)

const value5 = null ?? "default"; // "default"
const value6 = undefined ?? "default"; // "default"
```

**Using ?? in React:**
```javascript
const count = 0;

return (
  <div>
    <p>Count: {count ?? "No count"}</p> {/* Shows 0, not "No count" */}
  </div>
);
```

### Combining Operators

```javascript
const user = { name: "John", age: null };
const displayName = user?.name ?? "Anonymous";
const displayAge = user?.age ?? 0;
```

---

## 🔗 Optional Chaining (?.)

### Overview

Optional chaining allows you to safely access nested object properties and methods without checking if each level exists.

### Basic Usage

**Accessing properties:**
```javascript
const user = {
  name: "John",
  address: {
    city: "New York"
  }
};

// Without optional chaining
const city = user.address && user.address.city;

// With optional chaining
const city = user.address?.city;
console.log(city); // "New York"
```

**Safe property access:**
```javascript
const user = null;
const city = user?.address?.city;
console.log(city); // undefined (no error)
```

**Method calls:**
```javascript
const user = {
  name: "John",
  greet() {
    return `Hello, ${this.name}!`;
  }
};

user?.greet?.(); // "Hello, John!"

const user2 = null;
user2?.greet?.(); // undefined (no error)
```

**Array access:**
```javascript
const users = [{ name: "John" }];
const firstName = users?.[0]?.name;
console.log(firstName); // "John"

const users2 = null;
const firstName2 = users2?.[0]?.name;
console.log(firstName2); // undefined
```

### Using Optional Chaining in React

**Safe data access:**
```javascript
const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user?.name ?? "Anonymous"}</h2>
      <p>{user?.address?.city ?? "Unknown city"}</p>
      <p>{user?.email ?? "No email"}</p>
    </div>
  );
};
```

**API responses:**
```javascript
const [data, setData] = useState(null);

useEffect(() => {
  fetchData().then(response => {
    setData(response?.data?.users);
  });
}, []);

return (
  <div>
    {data?.map(user => (
      <UserCard key={user?.id} user={user} />
    ))}
  </div>
);
```

**Event handlers:**
```javascript
const handleClick = () => {
  props?.onClick?.();
};
```

### Combining with Nullish Coalescing

```javascript
const userName = user?.profile?.name ?? "Guest";
const userEmail = user?.contact?.email ?? "No email";
```

---

## 📋 Array Methods (map, filter, reduce, sort, find, etc.)

### Overview

Array methods are essential for working with data in React. You'll use them constantly for rendering lists, filtering data, and transforming arrays.

### map()

**What it does:** Creates a new array by calling a function on every element.

**Syntax:**
```javascript
const newArray = array.map((element, index) => {
  return transformedElement;
});
```

**Examples:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Transform objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // ["John", "Jane"]

// Add properties
const usersWithId = users.map((user, index) => ({
  ...user,
  id: index + 1
}));
```

**Using map() in React:**
```javascript
const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build app", completed: true }
];

return (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

### filter()

**What it does:** Creates a new array with elements that pass a test.

**Syntax:**
```javascript
const newArray = array.filter((element, index) => {
  return condition; // true to include, false to exclude
});
```

**Examples:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ name: "John", age: 30 }, { name: "Bob", age: 35 }]
```

**Using filter() in React:**
```javascript
const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build app", completed: true }
]);

const activeTodos = todos.filter(todo => !todo.completed);

return (
  <ul>
    {activeTodos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

### reduce()

**What it does:** Reduces an array to a single value by applying a function.

**Syntax:**
```javascript
const result = array.reduce((accumulator, element, index) => {
  return updatedAccumulator;
}, initialValue);
```

**Examples:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Count occurrences
const items = ["apple", "banana", "apple", "orange", "banana"];
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { apple: 2, banana: 2, orange: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

**Using reduce() in React:**
```javascript
const cart = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

return <div>Total: ${total}</div>;
```

### find()

**What it does:** Returns the first element that matches a condition.

**Syntax:**
```javascript
const found = array.find((element, index) => {
  return condition;
});
```

**Examples:**
```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Jane" }

const userByName = users.find(u => u.name === "Bob");
console.log(userByName); // { id: 3, name: "Bob" }
```

**Using find() in React:**
```javascript
const [users, setUsers] = useState([...]);
const selectedId = 2;

const selectedUser = users.find(user => user.id === selectedId);
```

### findIndex()

**What it does:** Returns the index of the first element that matches a condition.

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1
```

### some()

**What it does:** Returns true if at least one element passes the test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true
```

### every()

**What it does:** Returns true if all elements pass the test.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven); // true
```

### sort()

**What it does:** Sorts the array in place (modifies original).

**Examples:**
```javascript
const numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 3, 4, 5]

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

users.sort((a, b) => a.age - b.age);
console.log(users); // Sorted by age
```

**Immutable sort (create new array):**
```javascript
const sorted = [...numbers].sort((a, b) => a - b);
```

### forEach()

**What it does:** Executes a function for each element (doesn't return new array).

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num);
});
```

**Note:** Use `map()` instead of `forEach()` in React when you need to transform and return JSX.

---

## 🔒 Working with Immutable Arrays

### Overview

In React, you should never mutate state directly. Always create new arrays/objects when updating state. This section shows how to work with arrays immutably.

### Adding Items

**Add to end:**
```javascript
const [items, setItems] = useState([1, 2, 3]);

// ✅ Correct: Create new array
setItems([...items, 4]); // [1, 2, 3, 4]

// ❌ Wrong: Mutating
// items.push(4); // Don't do this!
```

**Add to beginning:**
```javascript
setItems([0, ...items]); // [0, 1, 2, 3]
```

**Add at specific index:**
```javascript
const index = 1;
const newItem = 99;
setItems([...items.slice(0, index), newItem, ...items.slice(index)]);
```

### Removing Items

**Remove by index:**
```javascript
const [items, setItems] = useState([1, 2, 3, 4]);

// Remove item at index 1
setItems(items.filter((item, index) => index !== 1)); // [1, 3, 4]
```

**Remove by value:**
```javascript
setItems(items.filter(item => item !== 2)); // Remove all 2s
```

**Remove by condition:**
```javascript
const todos = [{ id: 1, completed: true }, { id: 2, completed: false }];
setTodos(todos.filter(todo => !todo.completed)); // Remove completed
```

### Updating Items

**Update by index:**
```javascript
const [items, setItems] = useState([1, 2, 3, 4]);

// Update item at index 1
setItems(items.map((item, index) => 
  index === 1 ? 99 : item
)); // [1, 99, 3, 4]
```

**Update by condition:**
```javascript
const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build app", completed: false }
]);

// Toggle completion
setTodos(todos.map(todo =>
  todo.id === 1 
    ? { ...todo, completed: !todo.completed }
    : todo
));
```

### Reordering Items

**Swap items:**
```javascript
const swap = (array, index1, index2) => {
  const newArray = [...array];
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
};

setItems(swap(items, 0, 2));
```

**Move item:**
```javascript
const move = (array, fromIndex, toIndex) => {
  const newArray = [...array];
  const [item] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, item);
  return newArray;
};
```

### Best Practices

**Always create new arrays:**
```javascript
// ✅ Good
setItems([...items, newItem]);
setItems(items.filter(item => item !== removeItem));
setItems(items.map(item => item.id === id ? updatedItem : item));

// ❌ Bad
items.push(newItem); // Mutates!
items.pop(); // Mutates!
items[index] = newValue; // Mutates!
```

---

## 🔄 Asynchronous JavaScript: Promises

### Overview

Promises are used for handling asynchronous operations like API calls, file reading, etc. Understanding promises is essential for React data fetching.

### Creating Promises

**Basic syntax:**
```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    resolve("Success!");
    // or
    // reject("Error!");
  }, 1000);
});
```

### Consuming Promises

**Using .then() and .catch():**
```javascript
promise
  .then(result => {
    console.log(result); // "Success!"
  })
  .catch(error => {
    console.error(error); // "Error!"
  });
```

**Chaining promises:**
```javascript
fetchData()
  .then(data => processData(data))
  .then(processed => saveData(processed))
  .then(() => console.log("Done!"))
  .catch(error => console.error(error));
```

### Promise Methods

**Promise.all() - Wait for all:**
```javascript
Promise.all([fetch1(), fetch2(), fetch3()])
  .then(results => {
    console.log(results); // Array of all results
  })
  .catch(error => {
    // If any fails, catch runs
  });
```

**Promise.allSettled() - Wait for all (doesn't fail if one fails):**
```javascript
Promise.allSettled([fetch1(), fetch2()])
  .then(results => {
    // Array of { status: 'fulfilled'|'rejected', value|reason }
  });
```

**Promise.race() - First to complete:**
```javascript
Promise.race([fetch1(), fetch2()])
  .then(result => {
    // First result that completes
  });
```

### Using Promises in React

**In useEffect:**
```javascript
useEffect(() => {
  fetch('/api/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => setError(error.message));
}, []);
```

**Loading states:**
```javascript
const [loading, setLoading] = useState(true);
const [data, setData] = useState(null);

useEffect(() => {
  setLoading(true);
  fetchData()
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
}, []);
```

---

## ⏳ Asynchronous JavaScript: Async/Await

### Overview

Async/await is syntactic sugar over promises that makes asynchronous code look more like synchronous code. It's the preferred way to handle async operations in modern JavaScript.

### Basic Syntax

**Async function:**
```javascript
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
```

**Arrow function:**
```javascript
const fetchData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
};
```

### Error Handling

**Try/catch:**
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw or handle
  }
}
```

**Multiple awaits:**
```javascript
async function processData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return comments;
  } catch (error) {
    console.error('Error in processData:', error);
  }
}
```

### Parallel Execution

**Promise.all() with await:**
```javascript
async function fetchAll() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  
  return { users, posts, comments };
}
```

### Using Async/Await in React

**In useEffect:**
```javascript
useEffect(() => {
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  fetchData();
}, []);
```

**In event handlers:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    setSuccess(result);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```

---

## 📦 Modules: Import and Export

### Overview

Modules allow you to split your code into separate files. This is essential for React development where components are in separate files.

### Export

**Default export:**
```javascript
// utils.js
const add = (a, b) => a + b;
export default add;

// Or
export default function add(a, b) {
  return a + b;
}
```

**Named exports:**
```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
```

**Multiple exports:**
```javascript
// utils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export { add, subtract };
```

### Import

**Default import:**
```javascript
import add from './utils.js';
```

**Named import:**
```javascript
import { add, subtract } from './utils.js';
```

**Aliased import:**
```javascript
import { add as sum, subtract as diff } from './utils.js';
```

**Mixed import:**
```javascript
import add, { subtract, multiply } from './utils.js';
```

**Namespace import:**
```javascript
import * as utils from './utils.js';
utils.add(1, 2);
```

### Using in React

**Component file:**
```javascript
// UserCard.js
import React from 'react';
import './UserCard.css';

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
```

**Using component:**
```javascript
// App.js
import UserCard from './UserCard';
import { Button, Input } from './components';
```

---

## 🎯 Default Parameters

### Overview

Default parameters allow you to set default values for function parameters.

### Basic Usage

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
```

**Multiple parameters:**
```javascript
function createUser(name, age = 18, city = "Unknown") {
  return { name, age, city };
}

createUser("John"); // { name: "John", age: 18, city: "Unknown" }
createUser("John", 30); // { name: "John", age: 30, city: "Unknown" }
```

**With destructuring:**
```javascript
function createUser({ name, age = 18, city = "Unknown" } = {}) {
  return { name, age, city };
}

createUser(); // { name: undefined, age: 18, city: "Unknown" }
createUser({ name: "John" }); // { name: "John", age: 18, city: "Unknown" }
```

### Using in React

**Component props:**
```javascript
function UserCard({ name = "Anonymous", age = 0, email = "No email" }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{email}</p>
    </div>
  );
}
```

**Utility functions:**
```javascript
const formatPrice = (price, currency = "$") => {
  return `${currency}${price.toFixed(2)}`;
};

formatPrice(10); // "$10.00"
formatPrice(10, "€"); // "€10.00"
```

---

## 🎓 Practice Activity

Now that you've learned all the essential JavaScript concepts, it's time to practice! 

### Activity Files

This repository includes practice files in the `03-essential_javascript` directory:

- **`start.js`** - Starter file with exercises for each topic
- **`final.js`** - Completed file with all solutions

### How to Practice

1. **Read the documentation** - Understand each concept
2. **Open `start.js`** - Work through the exercises
3. **Check `final.js`** - Compare your solutions
4. **Experiment** - Try your own variations

### Practice Topics

Each exercise in `start.js` covers:
- ✅ Variables (const, let)
- ✅ Destructuring
- ✅ Spread/Rest operators
- ✅ Template literals
- ✅ Ternaries
- ✅ Arrow functions
- ✅ Logical operators
- ✅ Optional chaining
- ✅ Array methods
- ✅ Immutable array operations
- ✅ Promises
- ✅ Async/Await
- ✅ Modules
- ✅ Default parameters

---

## 📚 Key Takeaways

Remember these important points:

1. **Use `const` by default** - Use `let` only when reassignment is needed
2. **Destructure for cleaner code** - Especially with props and state in React
3. **Use spread for immutability** - Always create new arrays/objects
4. **Template literals for strings** - Much cleaner than concatenation
5. **Ternaries for simple conditionals** - Use if/else for complex logic
6. **Arrow functions are preferred** - Especially in React components
7. **Logical operators for conditional rendering** - `&&` and `||` in JSX
8. **Optional chaining for safety** - Prevent errors with nested properties
9. **Array methods are essential** - `map`, `filter`, `reduce` are your friends
10. **Always work immutably** - Never mutate state directly
11. **Async/await is preferred** - Cleaner than promises
12. **Modules organize code** - Split into logical files

---

## 🚀 Next Steps

Now that you understand essential JavaScript:

1. ✅ **Complete the practice activity** - Work through `start.js`
2. ✅ **Review React Overview** - [React Overview Guide](0a_REACT_OVERVIEW.md)
3. ✅ **Start building React apps** - Apply these concepts
4. ✅ **Practice regularly** - JavaScript skills improve with practice

---

## 📖 Related Resources

### In This Repository

- **[React Overview](0a_REACT_OVERVIEW.md)** - React fundamentals
- **[Create React App Guide](9_CREATE_REACT_APP.md)** - Setting up React projects
- **03-essential_javascript Project** - Practice files with exercises

### External Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Compatibility Table](https://kangax.github.io/compat-table/es6/)

---

**Congratulations!** 🎉

You've learned all the essential JavaScript concepts needed for React development. These skills will help you write better React code and understand React patterns more easily.

**Remember:** Practice is key. Work through the exercises, experiment, and apply these concepts in your React projects!

---

_This guide demonstrates the essential JavaScript concepts that every React developer should know. Understanding these fundamentals will make learning React much easier!_
