/**
 * Essential JavaScript for React - Complete Solutions
 * 
 * This file contains complete solutions for all exercises in start.js
 * Compare your solutions with these to learn best practices.
 */

// ============================================================================
// 1. VARIABLES: const, let, var
// ============================================================================

// Solution: Create a constant variable called 'appName' with value "My React App"
const appName = "My React App";

// Solution: Create a variable called 'version' with value 1.0 (use let for reassignment)
let version = 1.0;
version = 1.1; // Can be updated later

// Solution: Create a variable called 'isActive' with value true
const isActive = true;

// ============================================================================
// 2. DESTRUCTURING OBJECTS AND ARRAYS
// ============================================================================

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA"
  }
};

// Solution: Destructure 'name', 'age', and 'email' from user object
const { name, age, email } = user;

// Solution: Destructure 'name' as 'userName' and 'age' as 'userAge'
const { name: userName, age: userAge } = user;

// Solution: Destructure 'city' from nested address object
const { address: { city } } = user;

// Solution: Destructure with default value for 'phone' property
const { phone = "No phone" } = user;

const colors = ["red", "green", "blue", "yellow", "orange"];

// Solution: Destructure first element as 'firstColor'
const [firstColor] = colors;

// Solution: Destructure second and third elements (skip first)
const [, second, third] = colors;

// Solution: Destructure first element and collect rest in 'otherColors'
const [first, ...otherColors] = colors;

// ============================================================================
// 3. REST/SPREAD OPERATOR
// ============================================================================

const fruits = ["apple", "banana", "orange"];

// Solution: Create a new array 'moreFruits' by spreading fruits and adding "grape"
const moreFruits = [...fruits, "grape"];

// Solution: Create a new array 'allFruits' by spreading fruits and adding "mango"
const allFruits = ["mango", ...fruits];

// Solution: Create a copy of fruits array using spread operator
const fruitsCopy = [...fruits];

const person1 = { name: "John", age: 30 };
const person2 = { city: "NYC", country: "USA" };

// Solution: Merge person1 and person2 into a new object
const mergedPerson = { ...person1, ...person2 };

// Solution: Create a copy of person1 and update age to 31
const updatedPerson = { ...person1, age: 31 };

// Solution: Create a function 'sum' that accepts any number of arguments
const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

// Solution: Create a function that takes array as first arg and rest
const getFirstAndRest = ([first, ...rest]) => {
  return { first, rest };
};

// ============================================================================
// 4. TEMPLATE LITERALS
// ============================================================================

const firstName = "John";
const lastName = "Doe";
const age = 30;

// Solution: Create a greeting message using template literal
const greeting = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;

// Solution: Create a multi-line string with user information
const userInfo = `
  Name: ${firstName} ${lastName}
  Age: ${age}
  Status: Active
`;

// Solution: Use template literal to create a URL
const userId = 123;
const apiUrl = `https://api.example.com/users/${userId}`;

// Solution: Use template literal with ternary
const statusMessage = `Status: ${isActive ? "Active" : "Inactive"}`;

// ============================================================================
// 5. TERNARIES INSTEAD OF if/else STATEMENTS
// ============================================================================

const userAge = 18;

// Solution: Use ternary to set 'status'
const status = userAge >= 18 ? "Adult" : "Minor";

// Solution: Use ternary to set 'discount'
const discount = userAge >= 65 ? 10 : 0;

// Solution: Use nested ternary
const category = userAge < 18 ? "Child" : userAge < 65 ? "Adult" : "Senior";

const isLoggedIn = true;
const userName = "John";

// Solution: Use ternary to create message
const message = isLoggedIn ? `Welcome, ${userName}!` : "Please log in";

// ============================================================================
// 6. ARROW FUNCTIONS
// ============================================================================

// Solution: Convert function to arrow function
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Solution: Convert function to arrow function with implicit return
const add = (a, b) => a + b;

// Solution: Convert function to arrow function
const double = (n) => n * 2;

// Solution: Create arrow function 'multiply'
const multiply = (a, b) => a * b;

// Solution: Create arrow function 'isEven'
const isEven = (n) => n % 2 === 0;

const numbers = [1, 2, 3, 4, 5];

// Solution: Use arrow function with map to double each number
const doubled = numbers.map((n) => n * 2);

// Solution: Use arrow function with filter to get even numbers
const evens = numbers.filter((n) => n % 2 === 0);

// Solution: Use arrow function with reduce to sum all numbers
const sum2 = numbers.reduce((acc, n) => acc + n, 0);

// ============================================================================
// 7. SHORT-CIRCUITING AND LOGICAL OPERATORS (&&, ||, ??)
// ============================================================================

const isAdmin = true;
const userName2 = "John";

// Solution: Use && to log userName only if isAdmin is true
isAdmin && console.log(userName2);

// Solution: Use || to set 'displayName'
const displayName = userName2 || "Guest";

// Solution: Use ?? (nullish coalescing)
const value = null;
const count = value ?? 0; // 0 (because value is null)

const error = null;
const loading = false;
const data = null;

// Solution: Use && to conditionally render error message
error && console.log(`Error: ${error}`);

// Solution: Use && to conditionally render loading spinner
loading && console.log("Loading...");

// Solution: Use || to provide default value for data
const displayData = data || "No data available";

const userSettings = {
  theme: null,
  language: "",
  notifications: undefined
};

// Solution: Use ?? to get theme (default: "light")
const theme = userSettings.theme ?? "light"; // "light" (null uses default)

// Solution: Use || to get language (default: "en")
const language = userSettings.language || "en"; // "en" (empty string uses default)

// Solution: Use ?? to get notifications (default: true)
const notifications = userSettings.notifications ?? true; // true (undefined uses default)

// ============================================================================
// 8. OPTIONAL CHAINING
// ============================================================================

const userProfile = {
  name: "John",
  address: {
    city: "New York",
    zip: null
  },
  preferences: {
    theme: "dark"
  }
};

// Solution: Safely access userProfile.address.city
const city2 = userProfile.address?.city; // "New York"

// Solution: Safely access userProfile.contact.email (doesn't exist)
const email2 = userProfile.contact?.email; // undefined (no error)

// Solution: Safely call userProfile.preferences.getTheme() (doesn't exist)
const theme2 = userProfile.preferences?.getTheme?.(); // undefined (no error)

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

// Solution: Safely access users[0].name
const firstName2 = users?.[0]?.name; // "John"

// Solution: Safely access users[5].name (doesn't exist)
const firstName3 = users?.[5]?.name; // undefined (no error)

const apiResponse = null;

// Solution: Safely access apiResponse.data.users
const users2 = apiResponse?.data?.users; // undefined

// Solution: Combine optional chaining with nullish coalescing
const users3 = apiResponse?.data?.users ?? []; // [] (default value)

// ============================================================================
// 9. ARRAY METHODS (map, filter, reduce, sort, find, etc.)
// ============================================================================

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Book", price: 20, category: "Education" },
  { id: 3, name: "Phone", price: 800, category: "Electronics" },
  { id: 4, name: "Pen", price: 2, category: "Office" },
  { id: 5, name: "Tablet", price: 500, category: "Electronics" }
];

// Solution: Use map to create array of product names only
const productNames = products.map((product) => product.name);

// Solution: Use map to create array of products with 10% discount
const discountedProducts = products.map((product) => ({
  ...product,
  price: product.price * 0.9
}));

// Solution: Use filter to get only Electronics products
const electronics = products.filter((product) => product.category === "Electronics");

// Solution: Use filter to get products with price > 100
const expensiveProducts = products.filter((product) => product.price > 100);

// Solution: Use reduce to calculate total price of all products
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

// Solution: Use reduce to count products by category
const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

// Solution: Use find to get product with id === 3
const product3 = products.find((product) => product.id === 3);

// Solution: Use findIndex to get index of product with name === "Phone"
const phoneIndex = products.findIndex((product) => product.name === "Phone");

// Solution: Use some to check if any product has price > 1000
const hasExpensive = products.some((product) => product.price > 1000);

// Solution: Use every to check if all products have price > 10
const allExpensive = products.every((product) => product.price > 10);

// Solution: Use sort to sort products by price (ascending) - create new array
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];

// Solution: Use sort to sort numbers in ascending order (create new array)
const sortedAsc = [...numbers2].sort((a, b) => a - b);

// Solution: Use sort to sort numbers in descending order (create new array)
const sortedDesc = [...numbers2].sort((a, b) => b - a);

// ============================================================================
// 10. WORKING WITH IMMUTABLE ARRAYS
// ============================================================================

let items = [1, 2, 3, 4, 5];

// Solution: Add 6 to the end of items (create new array)
items = [...items, 6];

// Solution: Add 0 to the beginning of items (create new array)
items = [0, ...items];

// Solution: Remove item at index 2 (create new array)
items = items.filter((item, index) => index !== 2);

// Solution: Remove all items with value 3 (create new array)
items = items.filter((item) => item !== 3);

// Solution: Update item at index 1 to 99 (create new array)
items = items.map((item, index) => (index === 1 ? 99 : item));

// Solution: Update all even numbers to be multiplied by 2 (create new array)
items = items.map((item) => (item % 2 === 0 ? item * 2 : item));

let todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build app", completed: true },
  { id: 3, text: "Deploy", completed: false }
];

// Solution: Add new todo (create new array)
todos = [...todos, { id: 4, text: "Test", completed: false }];

// Solution: Remove todo with id === 2 (create new array)
todos = todos.filter((todo) => todo.id !== 2);

// Solution: Toggle completed status of todo with id === 1 (create new array)
todos = todos.map((todo) =>
  todo.id === 1 ? { ...todo, completed: !todo.completed } : todo
);

// Solution: Update text of todo with id === 3 (create new array)
todos = todos.map((todo) =>
  todo.id === 3 ? { ...todo, text: "Deploy to production" } : todo
);

// Solution: Filter out completed todos (create new array)
const activeTodos = todos.filter((todo) => !todo.completed);

// ============================================================================
// 11. ASYNCHRONOUS JAVASCRIPT: PROMISES
// ============================================================================

// Solution: Create a promise that resolves with "Hello" after 1 second
const helloPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Hello"), 1000);
});

// Solution: Create a promise that rejects with "Error!" after 1 second
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error!"), 1000);
});

// Simulated API functions
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 100);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: `Post for user ${userId}` }]), 100);
  });
}

// Solution: Fetch user with id 1
fetchUser(1).then((user) => console.log(user));

// Solution: Fetch user with id 1, then fetch their posts
fetchUser(1)
  .then((user) => fetchUserPosts(user.id))
  .then((posts) => console.log(posts));

// Solution: Fetch multiple users in parallel using Promise.all
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then((users) => console.log(users))
  .catch((error) => console.error(error));

// ============================================================================
// 12. ASYNCHRONOUS JAVASCRIPT: ASYNC/AWAIT
// ============================================================================

// Solution: Convert the promise chain to async/await
async function getUserPostsAsync() {
  const user = await fetchUser(1);
  const posts = await fetchUserPosts(user.id);
  console.log(posts);
}

// Solution: Create async function 'getUserPosts'
async function getUserPosts(userId) {
  const user = await fetchUser(userId);
  const posts = await fetchUserPosts(user.id);
  return posts;
}

// Solution: Create async function 'getMultipleUsers'
async function getMultipleUsers(userIds) {
  const promises = userIds.map((id) => fetchUser(id));
  const users = await Promise.all(promises);
  return users;
}

// Solution: Add error handling with try/catch
async function getUserPostsWithErrorHandling(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    return posts;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
}

// Solution: Create async function 'processData'
async function processData(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(user.id);
    const filteredPosts = posts.filter((post) => post.id > 0);
    return { user, posts: filteredPosts };
  } catch (error) {
    console.error("Error processing data:", error);
    throw error;
  }
}

// ============================================================================
// 13. MODULES: IMPORT AND EXPORT
// ============================================================================

// Example utility file (utils.js):
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const multiply = (a, b) => a * b;
// const formatPrice = (price, currency = "$") => `${currency}${price.toFixed(2)}`;
// export default formatPrice;

// Solution: Import default export
// import formatPrice from './utils.js';

// Solution: Import named exports
// import { add, subtract, multiply } from './utils.js';

// Solution: Import both default and named exports
// import formatPrice, { add, subtract, multiply } from './utils.js';

// Solution: Import with aliases
// import { add as sum, subtract as diff } from './utils.js';

// ============================================================================
// 14. DEFAULT PARAMETERS
// ============================================================================

// Solution: Create function 'greet' with default parameter
const greet2 = (name = "Guest") => {
  return `Hello, ${name}!`;
};

// Solution: Create function 'createProduct'
const createProduct = (name, price = 0, category = "General") => {
  return { name, price, category };
};

// Solution: Create function 'formatDate'
const formatDate = (date, format = "YYYY-MM-DD") => {
  // Implementation would format the date
  return `${format}: ${date}`;
};

// Solution: Use destructuring with default parameters
const createUser2 = ({ name, age = 18, email = "" } = {}) => {
  return { name, age, email };
};

// ============================================================================
// BONUS: COMBINING CONCEPTS
// ============================================================================

// Solution: Create a function that filters, maps, and returns comma-separated string
const getAdultNames = (users) => {
  return users
    .filter((user) => user.age >= 18)
    .map((user) => user.name)
    .join(", ");
};

// Solution: Create a React-like component function
const renderUserCard = ({ user = {}, showAge = true } = {}) => {
  const name = user?.name ?? "Anonymous";
  const age = user?.age ?? 0;
  const email = user?.contact?.email ?? "No email";

  return `
    <div class="user-card">
      <h2>${name}</h2>
      ${showAge ? `<p>Age: ${age}</p>` : ""}
      <p>Email: ${email}</p>
    </div>
  `;
};

// Solution: Create an async function that combines multiple concepts
async function fetchAndProcessData(userIds) {
  try {
    // Fetch multiple users in parallel
    const users = await Promise.all(userIds.map((id) => fetchUser(id)));

    // Filter active users (age >= 18)
    const activeUsers = users.filter((user) => user.age >= 18);

    // Map to get names only
    const names = activeUsers.map((user) => user.name);

    // Return combined result
    return {
      total: users.length,
      active: activeUsers.length,
      names: names.join(", ")
    };
  } catch (error) {
    console.error("Error in fetchAndProcessData:", error);
    return { total: 0, active: 0, names: "" };
  }
}

// ============================================================================
// TEST YOUR CODE
// ============================================================================

console.log("=== Essential JavaScript Solutions ===");
console.log("All exercises completed!");
console.log("\nRun this file to see solutions in action.");
console.log("Compare your solutions in start.js with these solutions.");

// Test some solutions
console.log("\n=== Test Results ===");
console.log("appName:", appName);
console.log("Greeting:", greeting);
console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Is 4 even?", isEven(4));
console.log("Product names:", productNames);
console.log("Total price:", totalPrice);
