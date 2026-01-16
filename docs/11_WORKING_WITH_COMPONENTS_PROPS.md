# Working with Components and Props - Complete Guide

Welcome to the **Working with Components and Props Guide**! This comprehensive tutorial is designed specifically for the **`04-pizza-menu`** project in this repository. You'll learn how to build a complete React application step-by-step, understanding components, props, JSX, and React fundamentals.

---

## 🎯 What is This Project?

The **04-pizza-menu** project is a pizza restaurant menu application built with React. It demonstrates:

- ✅ Creating and using React components
- ✅ Passing data with props
- ✅ Component composition
- ✅ JSX syntax
- ✅ Conditional rendering
- ✅ Rendering lists
- ✅ Styling React applications
- ✅ React.StrictMode

**Project Location:**
```
04-pizza-menu/
├── src/
│   ├── index.js    # All components in one file (great for learning!)
│   └── index.css   # Styles
├── public/
│   ├── pizzas/     # Pizza images
│   └── index.html
└── package.json
```

> **Note:** This documentation is specifically designed for the `04-pizza-menu` project. The examples, file structure, and code snippets are based on this specific project.

---

## 📑 Table of Contents

1. [Project Setup](#-step-1-project-setup)
2. [Rendering the Root Component and Strict Mode](#-step-2-rendering-the-root-component-and-strict-mode)
3. [Debugging](#-step-3-debugging)
4. [Components as Building Blocks](#-step-4-components-as-building-blocks)
5. [Creating and Reusing a Component](#-step-5-creating-and-reusing-a-component)
6. [What is JSX?](#-step-6-what-is-jsx)
7. [Creating More Components](#-step-7-creating-more-components)
8. [JavaScript Logic in Components](#-step-8-javascript-logic-in-components)
9. [Separation of Concerns](#-step-9-separation-of-concerns)
10. [Styling React Applications](#-step-10-styling-react-applications)
11. [Passing and Receiving Props](#-step-11-passing-and-receiving-props)
12. [Props, Immutability, and One-Way Data Flow](#-step-12-props-immutability-and-one-way-data-flow)
13. [Complete Project Walkthrough](#-complete-project-walkthrough)
14. [Key Takeaways](#-key-takeaways)

---

## 🚀 Step 1: Project Setup

### Creating the Project

This project was created using Create React App. To create a similar project:

```bash
npx create-react-app@latest 04-pizza-menu
cd 04-pizza-menu
npm start
```

**What this creates:**
- React project structure
- Development server
- All necessary dependencies
- Basic file structure

### Project Structure

```
04-pizza-menu/
├── public/
│   ├── pizzas/          # Pizza images (you'll add these)
│   │   ├── focaccia.jpg
│   │   ├── margherita.jpg
│   │   ├── spinaci.jpg
│   │   ├── funghi.jpg
│   │   ├── salamino.jpg
│   │   └── prosciutto.jpg
│   └── index.html       # HTML template
├── src/
│   ├── index.js        # All your React code goes here
│   └── index.css       # All your styles go here
└── package.json        # Project configuration
```

**Key Point:** In this learning project, all components are in `index.js`. This makes it easier to see how everything connects!

---

## 🎨 Step 2: Rendering the Root Component and Strict Mode

### Understanding the Entry Point

Open `src/index.js`. This is where your React app starts!

### Basic Setup

**Initial code structure:**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Your components will go here

// Rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### What is ReactDOM.createRoot?

**React 18 way (what we use):**
```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

**What it does:**
- `document.getElementById("root")` - Gets the HTML element from `public/index.html`
- `ReactDOM.createRoot()` - Creates a React root (React 18 API)
- `root.render(<App />)` - Renders your App component into the DOM

**React 17 way (older):**
```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

### Understanding React.StrictMode

**What is StrictMode?**

`React.StrictMode` is a development tool that helps identify potential problems in your application.

**Adding StrictMode:**

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**What StrictMode does:**

1. **Identifies unsafe lifecycles** - Warns about deprecated lifecycle methods
2. **Warns about legacy APIs** - Detects use of old React patterns
3. **Detects unexpected side effects** - Helps find bugs in render functions
4. **Double-invokes functions** - In development, calls functions twice to detect side effects
5. **Warns about deprecated features** - Alerts you to outdated patterns

**Important Notes:**

- ✅ **Development only** - StrictMode only runs in development
- ✅ **No UI impact** - Doesn't render any visible elements
- ✅ **Helps catch bugs** - Makes your code more robust
- ✅ **Recommended** - Always use StrictMode in development

**Example from the project:**

```javascript
// React.StrictMode is a development-only tool that helps identify potential problems
// in your application. It does NOT render any visible UI, but it enables additional
// checks and warnings for:
// - Components with unsafe lifecycles
// - Legacy string ref API usage
// - Deprecated findDOMNode usage
// - Unexpected side effects
// - Legacy context API
//
// StrictMode intentionally double-invokes certain functions (like component constructors,
// render methods, and state updater functions) to help detect side effects. This only
// happens in development mode and does not affect production builds.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**When you see double console.logs:**

If you see console.log messages twice in development, that's StrictMode! It's normal and helps catch bugs.

---

## 🐛 Step 3: Debugging

### React Developer Tools

**Install React DevTools:**

1. **Chrome/Edge:** [React Developer Tools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
2. **Firefox:** [React Developer Tools Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

**What it does:**
- Inspect component tree
- View props and state
- Debug component hierarchy
- Profile performance

### Console Debugging

**Using console.log:**

```javascript
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  console.log(isOpen); // Debug: Check if restaurant is open
  
  return (
    <footer className="footer">
      {/* Component code */}
    </footer>
  );
};
```

**Common debugging techniques:**

1. **Console.log values:**
   ```javascript
   console.log("Variable value:", variableName);
   ```

2. **Check props:**
   ```javascript
   const Pizza = (props) => {
     console.log("Pizza props:", props);
     // Component code
   };
   ```

3. **Debug state:**
   ```javascript
   console.log("Current state:", state);
   ```

### Browser DevTools

**Using Browser DevTools:**

1. **Right-click → Inspect** - Open DevTools
2. **Console tab** - See errors and logs
3. **Elements tab** - Inspect DOM
4. **React DevTools tab** - Inspect React components (if extension installed)

### Common Errors and Solutions

**Error: "Cannot read property of undefined"**

**Solution:**
- Check if data exists before accessing
- Use optional chaining: `data?.property`
- Add default values

**Error: "Cannot find module"**

**Solution:**
- Check file paths (case-sensitive!)
- Verify imports are correct
- Check file exists

**Error: "Unexpected token"**

**Solution:**
- Check JSX syntax
- Verify all tags are closed
- Check for missing semicolons

---

## 🧱 Step 4: Components as Building Blocks

### What are Components?

**Components** are reusable pieces of UI. Think of them like LEGO bricks - you combine them to build complex applications.

### Component Analogy

**Real-world example:**
- A **house** is made of **rooms** (components)
- Each **room** has **furniture** (smaller components)
- **Furniture** is made of **parts** (even smaller components)

**In React:**
- **App** (house) contains **Header, Menu, Footer** (rooms)
- **Menu** contains **Pizza** components (furniture)
- Each **Pizza** has **image, name, price** (parts)

### Component Hierarchy

In the pizza menu project:

```
App (Main Component)
├── Header (Shows restaurant name)
├── Menu (Shows pizza list)
│   └── Pizza (Individual pizza card) × 6
└── Footer (Shows hours and order button)
    └── Order (Order information)
```

### Why Components?

**Benefits:**
- ✅ **Reusability** - Write once, use many times
- ✅ **Organization** - Break complex UI into manageable pieces
- ✅ **Maintainability** - Fix one component, affects all uses
- ✅ **Testability** - Test components independently
- ✅ **Readability** - Code is easier to understand

### Component Types

**1. Function Components (Modern - What We Use):**

```javascript
const Header = () => {
  return <h1>Fast React Pizza Co.</h1>;
};
```

**2. Function Components with Props:**

```javascript
const Pizza = (props) => {
  return <div>{props.name}</div>;
};
```

**3. Arrow Functions (Also Function Components):**

```javascript
const App = () => {
  return <div>App content</div>;
};
```

---

## 🎨 Step 5: Creating and Reusing a Component

### Creating Your First Component

**Step 1: Create a simple component**

```javascript
const Header = () => {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
```

**What this does:**
- `const Header` - Component name (must start with capital letter)
- `= () =>` - Arrow function syntax
- `{ return ... }` - Returns JSX
- `<header>` - HTML-like JSX

**Step 2: Use the component**

```javascript
const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
```

**Key Points:**
- Component name starts with **capital letter**
- Use component like HTML tag: `<Header />`
- Component returns JSX

### Reusing Components

**The power of components - reuse them!**

```javascript
// Create once
const Pizza = () => {
  return (
    <div className="pizza">
      <h3>Pizza Name</h3>
      <p>Ingredients</p>
      <span>Price</span>
    </div>
  );
};

// Use many times
const Menu = () => {
  return (
    <ul>
      <Pizza />
      <Pizza />
      <Pizza />
    </ul>
  );
};
```

**In the project:**

The `Pizza` component is reused 6 times (once for each pizza):

```javascript
{pizzas.map((pizza) => (
  <Pizza pizzaObj={pizza} key={pizza.name} />
))}
```

### Component Best Practices

**1. Single Responsibility:**
- Each component should do one thing
- `Header` shows the header
- `Pizza` shows one pizza
- `Menu` shows the menu

**2. Descriptive Names:**
- ✅ `Pizza` - Clear and specific
- ✅ `Menu` - Describes purpose
- ❌ `Component1` - Not descriptive
- ❌ `Thing` - Too vague

**3. Keep Components Small:**
- If a component is too long, break it down
- Easier to understand and maintain

---

## 📝 Step 6: What is JSX?

### Understanding JSX

**JSX** stands for **JavaScript XML**. It's a syntax extension that lets you write HTML-like code in JavaScript.

### JSX vs HTML

**HTML:**
```html
<div class="container">
  <h1>Hello World</h1>
  <p>This is HTML</p>
</div>
```

**JSX:**
```jsx
<div className="container">
  <h1>Hello World</h1>
  <p>This is JSX</p>
</div>
```

**Key Differences:**

| HTML | JSX | Why? |
|------|-----|------|
| `class` | `className` | `class` is a reserved word in JavaScript |
| `for` | `htmlFor` | `for` is a reserved word |
| `onclick` | `onClick` | camelCase for event handlers |
| `tabindex` | `tabIndex` | camelCase for attributes |

### JSX Rules

**1. Return a single element:**

```jsx
// ❌ Wrong - multiple elements
return (
  <h1>Title</h1>
  <p>Content</p>
);

// ✅ Correct - wrapped in fragment
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);

// ✅ Also correct - wrapped in div
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
```

**2. Use className instead of class:**

```jsx
// ❌ Wrong
<div class="container">

// ✅ Correct
<div className="container">
```

**3. Embed JavaScript with {}:**

```jsx
const name = "React";
const count = 5;

return (
  <div>
    <h1>Hello {name}!</h1>
    <p>Count: {count}</p>
    <p>Double: {count * 2}</p>
  </div>
);
```

**4. Self-closing tags:**

```jsx
// ✅ Correct
<img src="image.jpg" alt="Description" />
<input type="text" />
<br />

// ❌ Wrong (in JSX)
<img src="image.jpg"></img>
```

### JSX in the Project

**Example from Pizza component:**

```jsx
const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  );
};
```

**Breaking it down:**
- `className="pizza"` - CSS class (not `class`)
- `src={photoName}` - JavaScript variable in JSX
- `{name}` - Embedding variable
- `{soldOut ? "SOLD OUT" : price}` - Ternary operator in JSX

### JSX Compilation

**What you write (JSX):**
```jsx
const element = <h1>Hello, {name}!</h1>;
```

**What it compiles to:**
```javascript
const element = React.createElement("h1", null, "Hello, ", name, "!");
```

**You don't need to write React.createElement** - JSX does it for you!

---

## 🏗️ Step 7: Creating More Components

### Building the Component Tree

Let's build the pizza menu app step by step, creating each component.

### Step 7.1: Create the App Component

**The root component that contains everything:**

```javascript
const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
```

**What this does:**
- Main container for the entire app
- Composes Header, Menu, and Footer components
- Uses `className` for styling

### Step 7.2: Create the Header Component

**Simple header component:**

```javascript
const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
```

**Features:**
- Simple component
- No props needed
- Returns JSX

### Step 7.3: Create the Menu Component

**Menu component that will display pizzas:**

```javascript
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
    </main>
  );
};
```

**Later, we'll add:**
- Pizza list
- Conditional rendering
- Data mapping

### Step 7.4: Create the Footer Component

**Footer with business hours:**

```javascript
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};
```

**Features:**
- JavaScript logic (getting current hour)
- Conditional rendering (ternary operator)
- Passing props to Order component

### Step 7.5: Create the Pizza Component

**Individual pizza card component:**

```javascript
const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  );
};
```

**Features:**
- Receives props
- Destructures props
- Conditional rendering (soldOut check)
- Displays pizza information

### Step 7.6: Create the Order Component

**Order information component:**

```javascript
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
```

**Features:**
- Receives props (destructured)
- Shows business hours
- Order button

### Component Composition

**How components work together:**

```
App
├── Header (no props)
├── Menu (no props, but uses pizzaData)
│   └── Pizza (receives pizzaObj prop) × 6
└── Footer (no props, but has logic)
    └── Order (receives openHour, closeHour props)
```

**Key concept:** Components can contain other components!

---

## 💻 Step 8: JavaScript Logic in Components

### Adding Logic to Components

Components can contain JavaScript logic, not just JSX!

### Example: Footer Component Logic

**Getting current time:**

```javascript
const Footer = () => {
  // JavaScript logic
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // Return JSX
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're closed. Open from {openHour}:00 to {closeHour}:00.</p>
      )}
    </footer>
  );
};
```

**What this does:**
- `new Date().getHours()` - Gets current hour (0-23)
- Calculates if restaurant is open
- Uses result in conditional rendering

### Example: Menu Component Logic

**Working with arrays:**

```javascript
const Menu = () => {
  const pizzas = pizzaData; // Array of pizza objects
  const numPizzas = pizzas.length; // Count pizzas

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>We have {numPizzas} pizzas available.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};
```

**What this does:**
- Gets pizza data
- Counts pizzas
- Conditionally renders based on count
- Maps over array to render Pizza components

### Common JavaScript Patterns in Components

**1. Calculations:**

```javascript
const Cart = () => {
  const items = [10, 20, 30];
  const total = items.reduce((sum, item) => sum + item, 0);
  
  return <div>Total: ${total}</div>;
};
```

**2. Conditional Logic:**

```javascript
const Greeting = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : "Good afternoon";
  
  return <h1>{greeting}!</h1>;
};
```

**3. Array Operations:**

```javascript
const List = () => {
  const items = [1, 2, 3, 4, 5];
  const evens = items.filter(item => item % 2 === 0);
  
  return (
    <ul>
      {evens.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};
```

**4. Date/Time Operations:**

```javascript
const Clock = () => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  
  return <div>Current time: {time}</div>;
};
```

---

## 🎯 Step 9: Separation of Concerns

### What is Separation of Concerns?

**Separation of Concerns** means organizing code so that each part has a single, clear responsibility.

### In React Components

**Each component should:**
- ✅ Have a single responsibility
- ✅ Be focused on one thing
- ✅ Be independent when possible
- ✅ Be reusable

### Example: Good Separation

**In the pizza menu project:**

```javascript
// Header - Only responsible for header
const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

// Menu - Only responsible for menu
const Menu = () => {
  return (
    <main className="menu">
      {/* Menu content */}
    </main>
  );
};

// Footer - Only responsible for footer
const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer content */}
    </footer>
  );
};
```

**Benefits:**
- Easy to find code
- Easy to modify
- Easy to test
- Easy to reuse

### Example: Poor Separation

**❌ Bad - Everything in one component:**

```javascript
const App = () => {
  return (
    <div>
      <header>
        <h1>Fast React Pizza Co.</h1>
      </header>
      <main>
        <h2>Our menu</h2>
        {/* All menu logic here */}
      </main>
      <footer>
        {/* All footer logic here */}
      </footer>
    </div>
  );
};
```

**Problems:**
- Hard to find code
- Hard to modify
- Hard to test
- Hard to reuse

### Data Separation

**Separate data from components:**

```javascript
// Data (at top of file)
const pizzaData = [
  { name: "Focaccia", price: 6, /* ... */ },
  { name: "Margherita", price: 10, /* ... */ },
  // ...
];

// Components (below data)
const Menu = () => {
  const pizzas = pizzaData; // Use the data
  // Component logic
};
```

**Benefits:**
- Data can be moved to separate file later
- Easy to update data
- Components stay focused on rendering

### File Organization (Future)

**Current (Learning):**
```
src/
└── index.js  # All components in one file
```

**Future (Production):**
```
src/
├── components/
│   ├── Header.js
│   ├── Menu.js
│   ├── Pizza.js
│   └── Footer.js
├── data/
│   └── pizzaData.js
└── index.js
```

**For now:** Keep everything in `index.js` to learn how components connect!

---

## 🎨 Step 10: Styling React Applications

### CSS in React

React supports multiple ways to style components. This project uses **regular CSS files**.

### Method 1: Global CSS (What This Project Uses)

**Import CSS in `index.js`:**

```javascript
import "./index.css";
```

**Styles apply globally:**

```css
/* index.css */
.pizza {
  display: flex;
  gap: 3.2rem;
}

.pizza img {
  width: 12rem;
}
```

**Pros:**
- ✅ Simple and familiar
- ✅ Works everywhere
- ✅ Easy to understand

**Cons:**
- ❌ Styles can conflict
- ❌ Not scoped to components
- ❌ Global namespace

### Method 2: CSS Modules (Alternative)

**Create `Pizza.module.css`:**

```css
.pizza {
  display: flex;
}
```

**Use in component:**

```javascript
import styles from "./Pizza.module.css";

const Pizza = () => {
  return <div className={styles.pizza}>Pizza</div>;
};
```

**Pros:**
- ✅ Scoped to component
- ✅ No naming conflicts
- ✅ Still regular CSS

### Method 3: Inline Styles (For Dynamic Styles)

**Using style prop:**

```javascript
const Header = () => {
  const style = {
    color: "red",
    fontSize: "48px",
    textAlign: "center"
  };

  return <h1 style={style}>Fast React Pizza Co.</h1>;
};
```

**Note:** In the project, there's a commented-out inline style example:

```javascript
// const style = {
//   color: "red",
//   fontSize: "48px",
//   // ...
// };
const style = {}; // Empty object (not using inline styles)
```

### CSS in This Project

**Global styles in `index.css`:**

```css
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto Mono", sans-serif;
  background-color: #f7f2e9;
}

/* Component styles */
.header h1 {
  color: #edc84b;
  font-size: 5.2rem;
  text-align: center;
}

.pizza {
  display: flex;
  gap: 3.2rem;
}

.pizza img {
  width: 12rem;
  aspect-ratio: 1;
}
```

### CSS Best Practices

**1. Use className (not class):**

```jsx
// ✅ Correct
<div className="pizza">

// ❌ Wrong
<div class="pizza">
```

**2. Use camelCase for inline styles:**

```jsx
// ✅ Correct
<div style={{ fontSize: "20px", backgroundColor: "red" }}>

// ❌ Wrong
<div style={{ font-size: "20px", background-color: "red" }}>
```

**3. Organize CSS:**

- Group related styles
- Use comments to separate sections
- Follow a naming convention

**4. Responsive Design:**

```css
@media (max-width: 768px) {
  .pizzas {
    grid-template-columns: 1fr;
  }
}
```

---

## 📤 Step 11: Passing and Receiving Props

### What are Props?

**Props** (short for properties) are how you pass data from parent components to child components.

### Passing Props

**Parent component passes data:**

```javascript
const Menu = () => {
  const pizza = {
    name: "Margherita",
    price: 10,
    ingredients: "Tomato and mozarella"
  };

  return <Pizza pizzaObj={pizza} />;
};
```

**What this does:**
- `pizzaObj={pizza}` - Passes pizza object as prop named `pizzaObj`
- Props are passed like HTML attributes
- Can pass strings, numbers, objects, arrays, functions

### Receiving Props

**Child component receives props:**

```javascript
const Pizza = (props) => {
  // props contains all passed data
  console.log(props); // { pizzaObj: { name: "Margherita", ... } }
  
  return <div>{props.pizzaObj.name}</div>;
};
```

### Destructuring Props

**Better way - destructure props:**

```javascript
const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;
  
  return (
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
    </div>
  );
};
```

**Even better - destructure in parameters:**

```javascript
const Pizza = ({ pizzaObj }) => {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;
  
  return (
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
    </div>
  );
};
```

**Or destructure nested:**

```javascript
const Pizza = ({ pizzaObj: { name, ingredients, price } }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
    </div>
  );
};
```

### Props Types

**You can pass different types:**

```javascript
// String
<Component name="John" />

// Number
<Component age={30} />

// Boolean
<Component isActive={true} />

// Object
<Component user={{ name: "John", age: 30 }} />

// Array
<Component items={[1, 2, 3]} />

// Function
<Component onClick={() => console.log("clicked")} />
```

### Example from Project

**Passing props in Menu:**

```javascript
const Menu = () => {
  const pizzas = pizzaData;

  return (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};
```

**Receiving props in Pizza:**

```javascript
const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  );
};
```

### Passing Multiple Props

**Example: Order component:**

```javascript
// Parent (Footer)
<Order closeHour={closeHour} openHour={openHour} />

// Child (Order)
function Order({ closeHour, openHour }) {
  return (
    <div>
      <p>We're open from {openHour}:00 to {closeHour}:00.</p>
    </div>
  );
}
```

### Props are Read-Only

**Important rule:**

```javascript
const Pizza = (props) => {
  // ❌ Wrong - Don't modify props!
  props.pizzaObj.price = 0;
  
  // ✅ Correct - Use props as-is
  return <div>{props.pizzaObj.price}</div>;
};
```

**Why?** Props should be treated as immutable (unchanging).

---

## 🔒 Step 12: Props, Immutability, and One-Way Data Flow

### Props are Immutable

**What immutability means:**
- Props cannot be changed by the child component
- Props flow down from parent to child
- Child receives props, but cannot modify them

### Why Immutability Matters

**Benefits:**
- ✅ Predictable behavior
- ✅ Easier to debug
- ✅ Prevents bugs
- ✅ Makes React efficient

### One-Way Data Flow

**Data flows in one direction:**

```
Parent Component (has data)
    ↓ (passes props)
Child Component (receives props)
    ↓ (cannot change props)
    (can only use props)
```

**Visual representation:**

```
App (has pizzaData)
    ↓ props
Menu (receives pizzaData)
    ↓ props
Pizza (receives pizzaObj)
    (displays data, cannot change it)
```

### Example: One-Way Flow

**Parent has data:**

```javascript
const Menu = () => {
  const pizzas = pizzaData; // Data lives here
  
  return (
    <ul>
      {pizzas.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};
```

**Child receives data:**

```javascript
const Pizza = (props) => {
  // Receives data, cannot change it
  const { name, price } = props.pizzaObj;
  
  // ❌ This won't work (props are read-only)
  // props.pizzaObj.price = 0;
  
  return <div>{name} - ${price}</div>;
};
```

### What if Child Needs to Change Data?

**Solution: Pass functions as props:**

```javascript
// Parent
const Menu = () => {
  const [pizzas, setPizzas] = useState(pizzaData);
  
  const updatePrice = (name, newPrice) => {
    setPizzas(pizzas.map(pizza =>
      pizza.name === name ? { ...pizza, price: newPrice } : pizza
    ));
  };
  
  return (
    <Pizza 
      pizzaObj={pizza} 
      onUpdatePrice={updatePrice} 
    />
  );
};

// Child
const Pizza = ({ pizzaObj, onUpdatePrice }) => {
  return (
    <button onClick={() => onUpdatePrice(pizzaObj.name, 15)}>
      Update Price
    </button>
  );
};
```

**Flow:**
1. Child calls function (via prop)
2. Function executes in parent
3. Parent updates state
4. New data flows down as props

### Immutability in Practice

**Always create new objects/arrays:**

```javascript
// ❌ Wrong - Mutating props
const updatePizza = (pizza) => {
  pizza.price = 0; // Don't do this!
};

// ✅ Correct - Create new object
const updatePizza = (pizza) => {
  return { ...pizza, price: 0 }; // New object
};
```

---

## 🏗️ Complete Project Walkthrough

Let's build the complete pizza menu app step by step!

### Step 1: Setup Project Structure

**1. Create the project:**

```bash
npx create-react-app@latest 04-pizza-menu
cd 04-pizza-menu
```

**2. Clean up `src/index.js`:**

Remove default code, keep only:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
```

### Step 2: Add Pizza Data

**Add pizza data array at the top:**

```javascript
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
```

### Step 3: Create App Component

**Create the main App component:**

```javascript
const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
```

### Step 4: Create Header Component

**Create Header component:**

```javascript
const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
```

### Step 5: Create Menu Component

**Create Menu component (basic version first):**

```javascript
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
    </main>
  );
};
```

**Then add pizza list:**

```javascript
const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};
```

### Step 6: Create Pizza Component

**Create Pizza component:**

```javascript
const Pizza = (props) => {
  const { name, ingredients, photoName, price, soldOut } = props.pizzaObj;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  );
};
```

### Step 7: Create Footer Component

**Create Footer component:**

```javascript
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};
```

### Step 8: Create Order Component

**Create Order component:**

```javascript
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
```

### Step 9: Render the App

**Add rendering code at the bottom:**

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Step 10: Add Images

**Add pizza images to `public/pizzas/` folder:**

- `focaccia.jpg`
- `margherita.jpg`
- `spinaci.jpg`
- `funghi.jpg`
- `salamino.jpg`
- `prosciutto.jpg`

**Reference in code:**

```javascript
photoName: "pizzas/focaccia.jpg" // Path relative to public folder
```

### Step 11: Add Styling

**Copy CSS to `src/index.css`** (see project file for complete styles)

**Key styles:**
- Container layout
- Header styling
- Pizza grid layout
- Button styling
- Responsive design

### Step 12: Test the App

**Run the development server:**

```bash
npm start
```

**What you should see:**
- Header with restaurant name
- Menu with pizza list
- Footer with hours
- Pizza cards with images
- "SOLD OUT" for sold-out pizzas

---

## 📊 Understanding the Complete Code

### File Structure

**All code in `src/index.js`:**

```javascript
// 1. Imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 2. Data
const pizzaData = [ /* ... */ ];

// 3. Components (in order of use)
const App = () => { /* ... */ };
const Header = () => { /* ... */ };
const Menu = () => { /* ... */ };
const Pizza = (props) => { /* ... */ };
const Footer = () => { /* ... */ };
function Order({ closeHour, openHour }) { /* ... */ }

// 4. Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Component Hierarchy

```
App
├── Header
│   └── <h1>Fast React Pizza Co.</h1>
├── Menu
│   ├── <h2>Our menu</h2>
│   ├── <p>Description</p>
│   └── <ul className="pizzas">
│       ├── Pizza (Focaccia)
│       ├── Pizza (Margherita)
│       ├── Pizza (Spinaci)
│       ├── Pizza (Funghi)
│       ├── Pizza (Salamino) - SOLD OUT
│       └── Pizza (Prosciutto)
└── Footer
    └── Order (if open) or Closed message
        ├── <p>Hours</p>
        └── <button>Order</button>
```

### Data Flow

```
pizzaData (array)
    ↓
Menu component (uses pizzaData)
    ↓ map()
Pizza components (receive pizzaObj prop)
    ↓
Display pizza information
```

### Key Concepts Demonstrated

1. ✅ **Component creation** - Multiple components
2. ✅ **Component composition** - Components inside components
3. ✅ **Props passing** - Data flows from parent to child
4. ✅ **Props receiving** - Child components use props
5. ✅ **JSX syntax** - HTML-like code in JavaScript
6. ✅ **Conditional rendering** - Ternary operators, && operator
7. ✅ **Lists and keys** - map() function, key prop
8. ✅ **JavaScript in JSX** - Calculations, logic
9. ✅ **Styling** - CSS classes, className
10. ✅ **React.StrictMode** - Development tool

---

## 🎓 Advanced Topics

### Conditional Rendering Patterns

**1. Ternary Operator:**

```javascript
{soldOut ? "SOLD OUT" : price}
```

**2. Logical AND:**

```javascript
{numPizzas > 0 && <PizzaList />}
```

**3. Early Return:**

```javascript
if (!isOpen) return <p>CLOSED</p>;
```

### Lists and Keys

**Rendering lists:**

```javascript
{pizzas.map((pizza) => (
  <Pizza pizzaObj={pizza} key={pizza.name} />
))}
```

**Why keys are important:**
- React uses keys to identify items
- Helps React update efficiently
- Must be unique
- Use stable identifiers (not index if list can reorder)

### Fragment Usage

**React Fragment (`<>`):**

```javascript
{numPizzas > 0 ? (
  <>
    <p>Description</p>
    <ul>Pizza list</ul>
  </>
) : (
  <p>No pizzas</p>
)}
```

**Why fragments:**
- Group multiple elements
- No extra DOM node
- Cleaner than wrapping in div

---

## 💡 Best Practices

### Component Best Practices

1. **Single Responsibility**
   - Each component does one thing
   - Header = header only
   - Pizza = one pizza card

2. **Descriptive Names**
   - `Pizza` not `Item`
   - `Menu` not `List`
   - `Order` not `Info`

3. **Props Naming**
   - Use descriptive prop names
   - `pizzaObj` not `data`
   - `closeHour` not `close`

4. **Component Size**
   - Keep components small
   - If too long, break it down

### Code Organization

1. **Data at Top**
   - Put data arrays/objects at top
   - Easy to find and modify

2. **Components Below Data**
   - Define components after data
   - Logical flow

3. **Rendering at Bottom**
   - `root.render()` at the end
   - Clear entry point

### JSX Best Practices

1. **Use className**
   - Always `className`, never `class`

2. **Self-close Tags**
   - `<img />` not `<img></img>`

3. **Keys in Lists**
   - Always provide unique keys

4. **Conditional Rendering**
   - Use ternaries for simple cases
   - Use if/else for complex logic

---

## 🎯 Key Takeaways

Remember these important points:

1. **Components are reusable** - Write once, use many times
2. **Props flow down** - Parent → Child, one direction
3. **Props are read-only** - Child cannot modify props
4. **JSX is JavaScript** - It compiles to JavaScript
5. **Components can contain logic** - Not just JSX
6. **Separation of concerns** - Each component has one job
7. **Styling with className** - Use CSS classes
8. **Keys in lists** - Always provide unique keys
9. **StrictMode helps** - Use it in development
10. **Practice makes perfect** - Build more components!

---

## 📚 Related Resources

### In This Repository

- **[React Overview](0a_REACT_OVERVIEW.md)** - React fundamentals
- **[Essential JavaScript Guide](10_ESSENTIAL_JAVASCRIPT.md)** - JavaScript concepts needed for React
- **[Create React App Guide](9_CREATE_REACT_APP.md)** - Setting up React projects
- **04-pizza-menu Project** - The project this documentation is based on

### External Resources

- [React Components Documentation](https://react.dev/learn/your-first-component)
- [React Props Documentation](https://react.dev/learn/passing-props-to-a-component)
- [React JSX Documentation](https://react.dev/learn/writing-markup-with-jsx)

---

## ✅ Checklist: Components and Props Mastery

Use this checklist to track your progress:

- [ ] Understand what components are
- [ ] Can create function components
- [ ] Understand JSX syntax
- [ ] Can pass props to components
- [ ] Can receive and use props
- [ ] Understand destructuring props
- [ ] Can render lists with map()
- [ ] Understand keys in lists
- [ ] Can use conditional rendering
- [ ] Understand one-way data flow
- [ ] Know props are immutable
- [ ] Can style React components
- [ ] Understand component composition
- [ ] Built the complete pizza menu app

---

**Congratulations!** 🎉

You've learned how to work with React components and props! You can now:
- Create reusable components
- Pass data with props
- Build component hierarchies
- Style React applications
- Build complete React apps

**Next Steps:**
- Practice creating more components
- Learn about state (useState hook)
- Learn about events and interactivity
- Build more complex applications

---

_This guide demonstrates the fundamentals of React components and props. Understanding these concepts is essential for building React applications!_
