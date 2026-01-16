# Separation of Concerns - Activity Guide

Welcome to the **Separation of Concerns** activity! This hands-on exercise will teach you how to organize React code into separate files, following industry best practices.

---

## 🎯 Learning Objectives

By completing this activity, you will learn:

- ✅ How to separate data from components
- ✅ How to organize components into separate files
- ✅ Understanding imports and exports in React
- ✅ Creating a proper project structure
- ✅ React file organization best practices
- ✅ Default vs named exports
- ✅ Component file naming conventions

---

## 📋 Prerequisites

Before starting this activity, you should:

- ✅ Understand React components and props
- ✅ Know how to use JSX
- ✅ Be familiar with JavaScript imports/exports
- ✅ Have completed the [Components & Props Guide](11_WORKING_WITH_COMPONENTS_PROPS.md)

**Project Reference:** This activity is based on the `04-pizza-menu` project.

---

## 🎓 What is Separation of Concerns?

**Separation of Concerns** is a software design principle that means organizing code so that each part has a single, clear responsibility.

### Why Separate Code?

**Current Structure (Learning):**

```
src/
└── index.js  # Everything in one file
```

**Benefits of Separation:**

- ✅ **Easier to find code** - Know exactly where to look
- ✅ **Easier to maintain** - Change one file, not everything
- ✅ **Easier to test** - Test components independently
- ✅ **Easier to reuse** - Import components anywhere
- ✅ **Better collaboration** - Multiple developers can work on different files
- ✅ **Scalability** - Project can grow without chaos

### Target Structure (Production-Ready):

```
src/
├── components/          # All React components
│   ├── App.js
│   ├── Header.js
│   ├── Menu.js
│   ├── Pizza.js
│   ├── Footer.js
│   └── Order.js
├── data/                # Data and constants
│   ├── pizzaData.js
│   └── constants.js
├── index.js            # Entry point (rendering only)
└── index.css           # Styles
```

---

## 📝 Activity Instructions

### Step 1: Understand the Current Structure

**Current file:** `src/index.js`

This file contains:

- Pizza data array
- All components (App, Header, Menu, Pizza, Footer, Order)
- Rendering logic

**Your task:** Separate everything into organized files!

---

### Step 2: Create Folder Structure

Create the following folders in your `src` directory:

```
src/
├── components/    # New folder for components
└── data/          # New folder for data
```

---

### Step 3: Separate the Data

**Task:** Move `pizzaData` array to its own file.

**Create:** `src/data/pizzaData.js`

**Requirements:**

- Export the `pizzaData` array
- Use a named export
- Keep all the pizza objects exactly as they are

**Hint:** Use `export const pizzaData = [...]`

---

### Step 4: Create Constants File

**Task:** Extract business hours constants.

**Create:** `src/data/constants.js`

**Requirements:**

- Export `OPEN_HOUR` constant (value: 10)
- Export `CLOSE_HOUR` constant (value: 22)
- Use named exports

**Why?** Constants should be in one place for easy updates.

---

### Step 5: Separate Header Component

**Task:** Move Header component to its own file.

**Create:** `src/components/Header.js`

**Requirements:**

- Import React
- Export Header as default export
- Remove the unused `style` variable (clean up code)
- Component should work exactly the same

**File structure:**

```javascript
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

export default Header;
```

---

### Step 6: Separate Pizza Component

**Task:** Move Pizza component to its own file.

**Create:** `src/components/Pizza.js`

**Requirements:**

- Import React
- Export Pizza as default export
- Component receives `props` and destructures `pizzaObj`
- Keep all functionality the same

---

### Step 7: Separate Order Component

**Task:** Move Order component to its own file.

**Create:** `src/components/Order.js`

**Requirements:**

- Import React
- Export Order as default export
- Component receives `{ closeHour, openHour }` as props
- Keep all functionality the same

---

### Step 8: Separate Footer Component

**Task:** Move Footer component to its own file.

**Create:** `src/components/Footer.js`

**Requirements:**

- Import React
- Import Order component
- Import constants (`OPEN_HOUR`, `CLOSE_HOUR`) from `../data/constants`
- Export Footer as default export
- Remove the `console.log(isOpen)` (clean up)
- Use imported constants instead of hardcoded values

**Note:** Footer uses Order component, so you'll need to import it.

---

### Step 9: Separate Menu Component

**Task:** Move Menu component to its own file.

**Create:** `src/components/Menu.js`

**Requirements:**

- Import React
- Import Pizza component
- Import `pizzaData` from `../data/pizzaData`
- Export Menu as default export
- Remove commented code (clean up)
- Keep all functionality the same

---

### Step 10: Separate App Component

**Task:** Move App component to its own file.

**Create:** `src/components/App.js`

**Requirements:**

- Import React
- Import Header, Menu, and Footer components
- Export App as default export
- Keep the same structure

---

### Step 11: Update index.js

**Task:** Clean up `src/index.js` to only handle rendering.

**Requirements:**

- Import React and ReactDOM
- Import App component
- Import CSS
- Keep only the rendering logic
- Keep React.StrictMode

**Final `index.js` should look like:**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## ✅ Activity Checklist

Use this checklist to track your progress:

### Folder Structure

- [ ] Created `src/components/` folder
- [ ] Created `src/data/` folder

### Data Files

- [ ] Created `src/data/pizzaData.js` with pizzaData export
- [ ] Created `src/data/constants.js` with OPEN_HOUR and CLOSE_HOUR

### Component Files

- [ ] Created `src/components/Header.js`
- [ ] Created `src/components/Pizza.js`
- [ ] Created `src/components/Order.js`
- [ ] Created `src/components/Footer.js` (with Order import and constants)
- [ ] Created `src/components/Menu.js` (with Pizza and pizzaData imports)
- [ ] Created `src/components/App.js` (with Header, Menu, Footer imports)

### Entry Point

- [ ] Updated `src/index.js` to only handle rendering
- [ ] All imports are correct
- [ ] App still works exactly the same

### Code Quality

- [ ] Removed unused code (style variable, console.log, comments)
- [ ] All components use proper imports/exports
- [ ] No errors in console
- [ ] Application runs successfully

---

## 🧪 Testing Your Solution

After completing the activity, verify:

1. **Application runs:**

   ```bash
   npm start
   ```

   - Should open at http://localhost:3000
   - Should display the pizza menu correctly

2. **No console errors:**

   - Open browser DevTools
   - Check Console tab
   - Should have no errors

3. **All features work:**

   - Header displays correctly
   - Menu shows all pizzas
   - Footer shows correct hours
   - Order button appears when open
   - Sold out pizzas show "SOLD OUT"

4. **File structure:**
   ```
   src/
   ├── components/
   │   ├── App.js
   │   ├── Header.js
   │   ├── Menu.js
   │   ├── Pizza.js
   │   ├── Footer.js
   │   └── Order.js
   ├── data/
   │   ├── pizzaData.js
   │   └── constants.js
   ├── index.js
   └── index.css
   ```

---

## 💡 Tips and Best Practices

### File Naming

- ✅ Use PascalCase for component files: `Header.js`, `Pizza.js`
- ✅ Use camelCase for data files: `pizzaData.js`, `constants.js`
- ✅ Match file name to export name (for components)

### Exports

- ✅ Use **default export** for components (one per file)
- ✅ Use **named exports** for data and constants
- ✅ Be consistent with your export style

### Imports

- ✅ Group imports: React first, then components, then data, then styles
- ✅ Use relative paths: `./` for same folder, `../` for parent folder
- ✅ Be explicit: `import Header from "./components/Header"`

### Organization

- ✅ One component per file
- ✅ Related components in same folder
- ✅ Data separate from components
- ✅ Constants in dedicated file

---

## 🎓 Key Concepts

### Default Export vs Named Export

**Default Export (Components):**

```javascript
// Component file
const Header = () => {
  /* ... */
};
export default Header;

// Import
import Header from "./Header";
```

**Named Export (Data/Constants):**

```javascript
// Data file
export const pizzaData = [...];
export const OPEN_HOUR = 10;

// Import
import { pizzaData } from "./pizzaData";
import { OPEN_HOUR, CLOSE_HOUR } from "./constants";
```

### Import Paths

**Same folder:**

```javascript
import Header from "./Header";
```

**Parent folder:**

```javascript
import { pizzaData } from "../data/pizzaData";
```

**Multiple levels:**

```javascript
import { something } from "../../utils/helpers";
```

---

## 🚨 Common Mistakes to Avoid

1. **Forgetting to import React:**

   ```javascript
   // ❌ Wrong
   const Header = () => {
     /* ... */
   };

   // ✅ Correct
   import React from "react";
   const Header = () => {
     /* ... */
   };
   ```

2. **Wrong export type:**

   ```javascript
   // ❌ Wrong (using named export for component)
   export const Header = () => {
     /* ... */
   };

   // ✅ Correct (default export)
   const Header = () => {
     /* ... */
   };
   export default Header;
   ```

3. **Incorrect import paths:**

   ```javascript
   // ❌ Wrong
   import Header from "Header";

   // ✅ Correct
   import Header from "./Header";
   ```

4. **Missing imports:**

   ```javascript
   // ❌ Wrong (using Pizza without importing)
   const Menu = () => {
     return <Pizza />; // Error!
   };

   // ✅ Correct
   import Pizza from "./Pizza";
   const Menu = () => {
     return <Pizza />;
   };
   ```

---

## 📚 What You'll Learn

After completing this activity, you'll understand:

1. **File Organization** - How to structure React projects
2. **Module System** - How imports/exports work in React
3. **Separation of Concerns** - Why and how to separate code
4. **Best Practices** - Industry standards for React projects
5. **Scalability** - How to organize code for growth

---

## 🔗 Related Resources

### In This Repository

- **[Components & Props Guide](11_WORKING_WITH_COMPONENTS_PROPS.md)** - Understanding components and props
- **[Essential JavaScript Guide](10_ESSENTIAL_JAVASCRIPT.md)** - JavaScript modules and exports
- **04-pizza-menu Project** - The project this activity is based on

### External Resources

- [React File Structure](https://react.dev/learn/importing-and-exporting-components)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [React Best Practices](https://react.dev/learn/thinking-in-react)

---

## 🆘 Need Help?

If you get stuck:

1. **Check the answer key:** See `12.1_SEPARATION_OF_CONCERNS_ANSWER.md`
2. **Review imports/exports:** Make sure all imports match exports
3. **Check file paths:** Verify relative paths are correct
4. **Console errors:** Read error messages carefully
5. **Compare structure:** Ensure your folder structure matches the target

---

## ✅ Completion

Once you've completed all steps:

1. ✅ All components are in separate files
2. ✅ Data is separated from components
3. ✅ Constants are in their own file
4. ✅ Application works exactly as before
5. ✅ Code is clean and organized
6. ✅ No console errors

**Congratulations!** 🎉 You've successfully learned separation of concerns in React!

---

## 🚀 Next Steps

After completing this activity:

1. **Practice** - Try separating components in other projects
2. **Experiment** - Create your own component structure
3. **Learn More** - Study larger React projects to see organization patterns
4. **Build** - Apply these principles to your own projects

---

**Ready to start?** Begin with Step 1 and work through each step carefully. Take your time and make sure you understand each concept before moving on!

---

_This activity teaches you professional React development practices. Mastering separation of concerns is essential for building maintainable React applications!_
