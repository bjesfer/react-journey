# 🍕 Pizza Menu - React Components & Props Tutorial

Welcome to the **Pizza Menu** project! This is a hands-on learning project designed to teach you the fundamentals of React components, props, JSX, and component composition.

---

## 📚 Complete Learning Guide

**📖 [Read the Complete Step-by-Step Guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md)**

This project has comprehensive documentation that covers everything you need to know about:
- Rendering components and React.StrictMode
- Debugging React applications
- Creating and reusing components
- Understanding JSX
- JavaScript logic in components
- Separation of concerns
- Styling React applications
- Passing and receiving props
- Props immutability and one-way data flow

**👉 Start with the [Complete Guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md) for detailed explanations and step-by-step instructions!**

---

## 🎯 What You'll Learn

By building this pizza menu application, you'll master:

- ✅ **React Components** - Creating function components
- ✅ **Component Composition** - Building complex UIs from simple components
- ✅ **JSX Syntax** - Writing HTML-like code in JavaScript
- ✅ **Props** - Passing data from parent to child components
- ✅ **Conditional Rendering** - Showing/hiding content based on conditions
- ✅ **Lists and Keys** - Rendering arrays of components
- ✅ **Styling** - Using CSS with React components
- ✅ **React.StrictMode** - Understanding development tools

---

## 🏗️ Project Structure

```
04-pizza-menu/
├── public/
│   ├── pizzas/              # Pizza images
│   │   ├── focaccia.jpg
│   │   ├── margherita.jpg
│   │   ├── spinaci.jpg
│   │   ├── funghi.jpg
│   │   ├── salamino.jpg
│   │   └── prosciutto.jpg
│   └── index.html           # HTML template
├── src/
│   ├── index.js            # All React components (learning project)
│   └── index.css          # Global styles
├── package.json
└── README.md              # This file
```

**Note:** All components are in `src/index.js` to make it easier to see how everything connects. This is perfect for learning!

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd 04-pizza-menu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - The page will reload when you make changes

---

## 📖 Available Scripts

### `npm start`

Runs the app in development mode.

- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Hot reloading enabled (changes appear instantly)
- Shows lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

- Optimized for best performance
- Minified and ready for deployment

### `npm run eject`

**⚠️ Warning: This is a one-way operation!**

Ejects from Create React App, giving you full control over configuration. You cannot go back after ejecting.

---

## 🧩 Components Overview

This project demonstrates the following component structure:

```
App (Root Component)
├── Header
│   └── Displays restaurant name
├── Menu
│   ├── Menu description
│   └── Pizza List
│       └── Pizza × 6 (individual pizza cards)
└── Footer
    └── Order (conditional rendering based on hours)
        ├── Business hours
        └── Order button
```

### Key Components

1. **App** - Main container component
2. **Header** - Restaurant header with title
3. **Menu** - Menu section with pizza list
4. **Pizza** - Individual pizza card (reused 6 times)
5. **Footer** - Footer with business hours
6. **Order** - Order information component

---

## 💡 Key Concepts Demonstrated

### 1. Component Creation
```javascript
const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
```

### 2. Props Passing
```javascript
// Parent component
<Pizza pizzaObj={pizza} key={pizza.name} />

// Child component
const Pizza = (props) => {
  const { name, price } = props.pizzaObj;
  return <div>{name} - ${price}</div>;
};
```

### 3. Conditional Rendering
```javascript
{soldOut ? "SOLD OUT" : price}
```

### 4. Lists and Keys
```javascript
{pizzas.map((pizza) => (
  <Pizza pizzaObj={pizza} key={pizza.name} />
))}
```

### 5. JavaScript Logic in Components
```javascript
const Footer = () => {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 22;
  return <footer>{isOpen ? <Order /> : <p>Closed</p>}</footer>;
};
```

---

## 📚 Learning Path

### Before Starting This Project

Make sure you've covered:
1. **[React Overview](../docs/0a_REACT_OVERVIEW.md)** - Understanding React basics
2. **[Essential JavaScript](../docs/10_ESSENTIAL_JAVASCRIPT.md)** - Modern JavaScript concepts
3. **[Create React App Guide](../docs/9_CREATE_REACT_APP.md)** - Setting up React projects

### With This Project

Follow along with:
- **[Complete Components & Props Guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md)** - Step-by-step tutorial

### After This Project

Continue learning:
- State management (useState hook)
- Event handling
- Forms and user input
- More advanced React patterns

---

## 🎨 Features

- **6 Different Pizzas** - Displayed in a grid layout
- **Dynamic Pricing** - Shows price or "SOLD OUT" based on availability
- **Business Hours** - Footer shows different content based on current time
- **Responsive Design** - Clean, modern UI with CSS styling
- **Component Reusability** - Pizza component reused for each pizza

---

## 🔍 Project Highlights

### All Components in One File

For learning purposes, all components are in `src/index.js`. This makes it easy to:
- See how components connect
- Understand component hierarchy
- Learn component composition
- Follow data flow

### Real-World Example

This project demonstrates:
- ✅ Component-based architecture
- ✅ Props and data flow
- ✅ Conditional rendering
- ✅ List rendering
- ✅ Styling React applications

---

## 🐛 Debugging Tips

### React Developer Tools

Install the [React Developer Tools](https://react.dev/learn/react-developer-tools) browser extension to:
- Inspect component tree
- View props and state
- Debug component hierarchy

### Console Debugging

Use `console.log()` to debug:
```javascript
const Pizza = (props) => {
  console.log("Pizza props:", props);
  // Component code
};
```

---

## 📝 Code Structure

### Data (Top of File)
```javascript
const pizzaData = [
  { name: "Focaccia", price: 6, /* ... */ },
  // ... more pizzas
];
```

### Components (Middle of File)
```javascript
const App = () => { /* ... */ };
const Header = () => { /* ... */ };
const Menu = () => { /* ... */ };
// ... more components
```

### Rendering (Bottom of File)
```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🎓 Learning Objectives Checklist

After completing this project, you should be able to:

- [ ] Create function components
- [ ] Understand JSX syntax
- [ ] Pass props to components
- [ ] Receive and use props
- [ ] Destructure props
- [ ] Render lists with map()
- [ ] Use keys in lists
- [ ] Implement conditional rendering
- [ ] Understand one-way data flow
- [ ] Style React components
- [ ] Compose components together
- [ ] Use React.StrictMode

---

## 🔗 Related Resources

### In This Repository

- **[React Overview](../docs/0a_REACT_OVERVIEW.md)** - React fundamentals
- **[Essential JavaScript](../docs/10_ESSENTIAL_JAVASCRIPT.md)** - JavaScript concepts for React
- **[Create React App Guide](../docs/9_CREATE_REACT_APP.md)** - Project setup
- **[Components & Props Guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md)** - Complete tutorial for this project

### External Resources

- [React Documentation](https://react.dev/)
- [React Components](https://react.dev/learn/your-first-component)
- [React Props](https://react.dev/learn/passing-props-to-a-component)
- [React JSX](https://react.dev/learn/writing-markup-with-jsx)

---

## 💻 Technologies Used

- **React 19.2.3** - UI library
- **Create React App** - Build tool and dev server
- **CSS3** - Styling

---

## 🤝 Contributing

This is a learning project. Feel free to:
- Experiment with the code
- Add new features
- Modify components
- Try different styling approaches

---

## 📄 License

This project is for educational purposes. Feel free to use and learn from it!

---

## 🙏 Acknowledgments

- This project is part of a React learning journey
- Designed to teach React fundamentals through hands-on practice
- All concepts are explained in the [complete guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md)

---

## 🚀 Next Steps

After completing this project:

1. **Experiment** - Try modifying components
2. **Add Features** - Add more pizzas, filters, or search
3. **Refactor** - Split components into separate files
4. **Learn State** - Move on to useState hook
5. **Build More** - Create your own React projects

---

**Happy Learning! 🎉**

Remember: The best way to learn React is by building projects. This pizza menu app is a perfect starting point!

---

_For detailed explanations and step-by-step instructions, see the [Complete Components & Props Guide](../docs/11_WORKING_WITH_COMPONENTS_PROPS.md)_
