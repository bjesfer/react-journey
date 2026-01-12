/**
 * Essential JavaScript for React - Practice Exercises
 *
 * This file contains exercises covering all essential JavaScript concepts
 * needed for React development. Work through each section and complete
 * the TODO items.
 *
 * After completing exercises, compare your solutions with final.js
 */

// ============================================================================
// 1. VARIABLES: const, let, var
// ============================================================================

// TODO: Create a constant variable called 'appName' with value "My React App"
// TODO: Create a variable called 'version' with value 1.0 (you might need to update it later, so use let)
// TODO: Create a variable called 'isActive' with value true

// ============================================================================
// 2. DESTRUCTURING OBJECTS AND ARRAYS
// ============================================================================

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

// TODO: Destructure 'name', 'age', and 'email' from user object
// TODO: Destructure 'name' as 'userName' and 'age' as 'userAge'
// TODO: Destructure 'city' from nested address object
// TODO: Destructure with default value for 'phone' property (default: "No phone")

const colors = ["red", "green", "blue", "yellow", "orange"];

// TODO: Destructure first element as 'firstColor'
// TODO: Destructure second and third elements (skip first, get second and third)
// TODO: Destructure first element and collect rest in 'otherColors'

// ============================================================================
// 3. REST/SPREAD OPERATOR
// ============================================================================

const fruits = ["apple", "banana", "orange"];

// TODO: Create a new array 'moreFruits' by spreading fruits and adding "grape" at the end
// TODO: Create a new array 'allFruits' by spreading fruits and adding "mango" at the beginning
// TODO: Create a copy of fruits array using spread operator

const person1 = { name: "John", age: 30 };
const person2 = { city: "NYC", country: "USA" };

// TODO: Merge person1 and person2 into a new object 'mergedPerson' using spread
// TODO: Create a copy of person1 and update age to 31 using spread

// TODO: Create a function 'sum' that accepts any number of arguments using rest operator
// TODO: Create a function 'getFirstAndRest' that takes array as first arg and rest using destructuring with rest

// ============================================================================
// 4. TEMPLATE LITERALS
// ============================================================================

const firstName = "John";
const lastName = "Doe";
const age = 30;

// TODO: Create a greeting message using template literal: "Hello, John Doe! You are 30 years old."
// TODO: Create a multi-line string with user information using template literal
// TODO: Use template literal to create a URL: "https://api.example.com/users/123" (where 123 is a variable)

const isActive = true;
// TODO: Use template literal with ternary: "Status: Active" or "Status: Inactive"

// ============================================================================
// 5. TERNARIES INSTEAD OF if/else STATEMENTS
// ============================================================================

const userAge = 18;

// TODO: Use ternary to set 'status' to "Adult" if age >= 18, else "Minor"
// TODO: Use ternary to set 'discount' to 10 if age >= 65, else 0
// TODO: Use nested ternary: "Child" if age < 18, "Adult" if age < 65, else "Senior"

const isLoggedIn = true;
const userName = "John";

// TODO: Use ternary to create message: "Welcome, John!" if logged in, else "Please log in"

// ============================================================================
// 6. ARROW FUNCTIONS
// ============================================================================

// TODO: Convert this function to arrow function:
// function greet(name) { return `Hello, ${name}!`; }

// TODO: Convert this function to arrow function with implicit return:
// function add(a, b) { return a + b; }

// TODO: Convert this to arrow function:
// function double(n) { return n * 2; }

// TODO: Create an arrow function 'multiply' that takes two numbers and returns their product
// TODO: Create an arrow function 'isEven' that takes a number and returns true if even, false otherwise

const numbers = [1, 2, 3, 4, 5];

// TODO: Use arrow function with map to double each number
// TODO: Use arrow function with filter to get even numbers only
// TODO: Use arrow function with reduce to sum all numbers

// ============================================================================
// 7. SHORT-CIRCUITING AND LOGICAL OPERATORS (&&, ||, ??)
// ============================================================================

const isAdmin = true;
const userName = "John";

// TODO: Use && to log userName only if isAdmin is true
// TODO: Use || to set 'displayName' to userName if it exists, else "Guest"
// TODO: Use ?? (nullish coalescing) to set 'count' to 0 if value is null/undefined (but not if 0)

const error = null;
const loading = false;
const data = null;

// TODO: Use && to conditionally render error message if error exists
// TODO: Use && to conditionally render loading spinner if loading is true
// TODO: Use || to provide default value for data

const userSettings = {
  theme: null,
  language: "",
  notifications: undefined,
};

// TODO: Use ?? to get theme (default: "light") - note: null should use default
// TODO: Use || to get language (default: "en") - note: empty string should use default
// TODO: Use ?? to get notifications (default: true) - note: undefined should use default

// ============================================================================
// 8. OPTIONAL CHAINING
// ============================================================================

const userProfile = {
  name: "John",
  address: {
    city: "New York",
    zip: null,
  },
  preferences: {
    theme: "dark",
  },
};

// TODO: Safely access userProfile.address.city using optional chaining
// TODO: Safely access userProfile.contact.email (doesn't exist) using optional chaining
// TODO: Safely call userProfile.preferences.getTheme() (doesn't exist) using optional chaining

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

// TODO: Safely access users[0].name using optional chaining
// TODO: Safely access users[5].name (doesn't exist) using optional chaining

const apiResponse = null;

// TODO: Safely access apiResponse.data.users using optional chaining
// TODO: Combine optional chaining with nullish coalescing: apiResponse?.data?.users ?? []

// ============================================================================
// 9. ARRAY METHODS (map, filter, reduce, sort, find, etc.)
// ============================================================================

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Book", price: 20, category: "Education" },
  { id: 3, name: "Phone", price: 800, category: "Electronics" },
  { id: 4, name: "Pen", price: 2, category: "Office" },
  { id: 5, name: "Tablet", price: 500, category: "Electronics" },
];

// TODO: Use map to create array of product names only
// TODO: Use map to create array of products with 10% discount (new price = price * 0.9)
// TODO: Use filter to get only Electronics products
// TODO: Use filter to get products with price > 100
// TODO: Use reduce to calculate total price of all products
// TODO: Use reduce to count products by category (result: { Electronics: 3, Education: 1, Office: 1 })
// TODO: Use find to get product with id === 3
// TODO: Use findIndex to get index of product with name === "Phone"
// TODO: Use some to check if any product has price > 1000
// TODO: Use every to check if all products have price > 10
// TODO: Use sort to sort products by price (ascending) - remember to create new array!

const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];

// TODO: Use sort to sort numbers in ascending order (create new array)
// TODO: Use sort to sort numbers in descending order (create new array)

// ============================================================================
// 10. WORKING WITH IMMUTABLE ARRAYS
// ============================================================================

let items = [1, 2, 3, 4, 5];

// TODO: Add 6 to the end of items (create new array)
// TODO: Add 0 to the beginning of items (create new array)
// TODO: Remove item at index 2 (create new array)
// TODO: Remove all items with value 3 (create new array)
// TODO: Update item at index 1 to 99 (create new array)
// TODO: Update all even numbers to be multiplied by 2 (create new array)

let todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build app", completed: true },
  { id: 3, text: "Deploy", completed: false },
];

// TODO: Add new todo: { id: 4, text: "Test", completed: false } (create new array)
// TODO: Remove todo with id === 2 (create new array)
// TODO: Toggle completed status of todo with id === 1 (create new array)
// TODO: Update text of todo with id === 3 to "Deploy to production" (create new array)
// TODO: Filter out completed todos (create new array)

// ============================================================================
// 11. ASYNCHRONOUS JAVASCRIPT: PROMISES
// ============================================================================

// TODO: Create a promise that resolves with "Hello" after 1 second
// TODO: Create a promise that rejects with "Error!" after 1 second
// TODO: Chain promises: fetch user, then fetch user posts, then log posts
// TODO: Use Promise.all to fetch multiple users in parallel

// Simulated API functions
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 100);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([{ id: 1, title: `Post for user ${userId}` }]),
      100
    );
  });
}

// TODO: Fetch user with id 1
// TODO: Fetch user with id 1, then fetch their posts
// TODO: Fetch multiple users (ids: 1, 2, 3) in parallel using Promise.all
// TODO: Handle errors with .catch()

// ============================================================================
// 12. ASYNCHRONOUS JAVASCRIPT: ASYNC/AWAIT
// ============================================================================

// TODO: Convert the promise chain to async/await:
// fetchUser(1).then(user => fetchUserPosts(user.id)).then(posts => console.log(posts))

// TODO: Create async function 'getUserPosts' that takes userId, fetches user, then posts, and returns posts
// TODO: Create async function 'getMultipleUsers' that fetches users with ids [1, 2, 3] in parallel
// TODO: Add error handling with try/catch to getUserPosts

// TODO: Create async function 'processData' that:
//   1. Fetches user with id 1
//   2. Fetches their posts
//   3. Filters posts (only return posts with id > 0)
//   4. Returns processed data
//   5. Handles errors properly

// ============================================================================
// 13. MODULES: IMPORT AND EXPORT
// ============================================================================

// TODO: Create a utility file with:
//   - Default export: 'formatPrice' function
//   - Named exports: 'add', 'subtract', 'multiply' functions
// TODO: Import default export
// TODO: Import named exports
// TODO: Import both default and named exports
// TODO: Import with aliases

// ============================================================================
// 14. DEFAULT PARAMETERS
// ============================================================================

// TODO: Create function 'greet' with default parameter name = "Guest"
// TODO: Create function 'createProduct' with name, price (default: 0), category (default: "General")
// TODO: Create function 'formatDate' with date and format (default: "YYYY-MM-DD")
// TODO: Use destructuring with default parameters in function 'createUser({ name, age = 18, email = "" } = {})'

// ============================================================================
// BONUS: COMBINING CONCEPTS
// ============================================================================

// TODO: Create a function that:
//   1. Takes an array of user objects
//   2. Filters users with age >= 18
//   3. Maps to get names only
//   4. Returns comma-separated string: "John, Jane, Bob"
//   Use arrow functions, array methods, and template literals

// TODO: Create a React-like component function that:
//   1. Takes props as object (destructured)
//   2. Uses default parameters
//   3. Uses optional chaining for nested props
//   4. Uses template literal for rendering
//   5. Uses ternary for conditional rendering
//   Example: renderUserCard({ user: { name: "John", age: 30 } })

// TODO: Create an async function that:
//   1. Fetches multiple resources in parallel
//   2. Filters results
//   3. Maps to transform data
//   4. Returns combined result
//   5. Handles errors

// ============================================================================
// TEST YOUR CODE
// ============================================================================

// After completing all exercises, test your code by running:
// node start.js
//
// Check final.js for solutions and compare your approach

console.log("Practice exercises file loaded. Work through each TODO item!");
console.log(
  "Check final.js for solutions after you've attempted the exercises."
);
