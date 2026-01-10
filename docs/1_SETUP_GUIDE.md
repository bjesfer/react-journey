# React Router v7 Setup Guide (File-Based Routing)

This guide is tailored for your **React Router v7** project created with Vite, which uses **file-based routing**. This is the modern way React Router v7 works!

## Your Project Structure

Your project uses:
- ✅ **React Router v7.12.0** with file-based routing
- ✅ **TypeScript** (.tsx files)
- ✅ **Vite** as the build tool
- ✅ **Tailwind CSS** for styling
- ✅ **Server-Side Rendering (SSR)** enabled by default

**Key Files:**
- `app/root.tsx` - Root layout component
- `app/routes.ts` - Route configuration
- `app/routes/` - Your route files (file-based routing)
- `react-router.config.ts` - React Router configuration

---

## Understanding File-Based Routing

In React Router v7, **the file structure determines your routes automatically**:
- Files in `app/routes/` become routes
- `routes/home.tsx` → `/` route (home page)
- `routes/about.tsx` → `/about` route
- `routes/contact.tsx` → `/contact` route

---

## Step 1: Understanding Your Current Setup

Let's check what you already have:

**File: `app/routes.ts`**
```ts
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;
```

**What this does:** This configures your home route (`/`) to use the `routes/home.tsx` file.

---

## Step 2: Create New Route Pages

### Create an About Page

Create a new file: `app/routes/about.tsx`

```tsx
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - My React Router App" },
    { name: "description", content: "Learn more about us" },
  ];
}

export default function About() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="text-lg">This is the about page.</p>
    </main>
  );
}
```

**What this does:**
- `meta()` function sets the page title and meta tags (great for SEO!)
- The component returns the page content
- Uses Tailwind CSS classes for styling

### Create a Contact Page

Create a new file: `app/routes/contact.tsx`

```tsx
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - My React Router App" },
    { name: "description", content: "Get in touch with us" },
  ];
}

export default function Contact() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p className="text-lg">Get in touch with us!</p>
    </main>
  );
}
```

---

## Step 3: Update Route Configuration

Edit `app/routes.ts` to include your new routes:

```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
```

**What this does:**
- `index()` - Sets the home route (`/`)
- `route("about", ...)` - Creates the `/about` route
- `route("contact", ...)` - Creates the `/contact` route

**Note:** With file-based routing, React Router v7 can also auto-detect routes. You can simplify this later, but explicit configuration helps you understand how it works!

---

## Step 4: Add Navigation Component

Create a shared navigation component. Let's add it to your root layout.

Edit `app/root.tsx` to include navigation:

```tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Navigation component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-6">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
```

**What this does:**
- Adds a `Navbar` component with `Link` components (from React Router)
- `Link` components navigate without page reloads
- Navigation is fixed at the top of the page
- Uses Tailwind CSS for styling

---

## Step 5: Update Your Home Page

Edit `app/routes/home.tsx` to remove the welcome component or customize it:

```tsx
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - My React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-6">Welcome to the home page!</p>
      <div className="space-y-2">
        <p>Navigate using the links above to see different pages.</p>
        <p>This app uses React Router v7 with file-based routing.</p>
      </div>
    </main>
  );
}
```

---

## Step 6: Run Your Development Server

Navigate to your project directory:
```bash
cd my-react-router-app
```

Start the development server:
```bash
npm run dev
```

**What this does:** Starts the React Router dev server. You should see output like:
```
  React Router dev server running...

  ➜  Local:   http://localhost:5173/
```

Open that URL in your browser!

---

## Step 7: Test Your Routes

1. ✅ Click the navigation links - pages should load without refresh
2. ✅ Try typing `/about` or `/contact` in the URL bar
3. ✅ Use browser back/forward buttons - they should work!
4. ✅ Check page titles in the browser tab - they should change per route

---

## Understanding React Router v7 Features

### 1. **Meta Tags (SEO)**
Each route can export a `meta()` function to set page titles and descriptions:
```tsx
export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Page Title" },
    { name: "description", content: "Page description" },
  ];
}
```

### 2. **Loaders (Data Fetching)**
Fetch data before rendering:
```tsx
export async function loader({ request }: Route.LoaderArgs) {
  const response = await fetch("/api/data");
  return response.json();
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.title}</div>;
}
```

### 3. **Actions (Form Handling)**
Handle form submissions:
```tsx
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  // Handle form submission
  return { success: true };
}
```

---

## Troubleshooting Common Issues

### Issue: TypeScript errors about `+types`
**Solution:** React Router v7 generates these types automatically. If you see errors, try:
```bash
npm run typecheck
```

### Issue: Routes not working
**Solution:** 
- Make sure your route files are in `app/routes/` directory
- Check `app/routes.ts` has your routes configured
- Verify exports are correct (`export default function PageName`)

### Issue: Navigation not showing
**Solution:**
- Make sure you added `<Navbar />` in the `Layout` component
- Check that `Link` is imported from `"react-router"`

### Issue: Styles not applying
**Solution:**
- Make sure Tailwind CSS is configured (it should be pre-configured)
- Check that classes are spelled correctly
- Restart the dev server if needed

---

## Next Steps to Practice

1. **Add Dynamic Routes** - Create routes with parameters:
   - `routes/blog.$id.tsx` → `/blog/:id`

2. **Use Loaders** - Fetch data before rendering pages

3. **Add Forms** - Use Actions to handle form submissions

4. **Nested Routes** - Create routes within routes

5. **404 Page** - Custom error handling (you already have ErrorBoundary!)

6. **Programmatic Navigation** - Use `useNavigate()` hook:
   ```tsx
   import { useNavigate } from "react-router";
   
   function MyComponent() {
     const navigate = useNavigate();
     return <button onClick={() => navigate("/about")}>Go to About</button>;
   }
   ```

---

## Key Differences from React Router v6

| Feature | v6 | v7 (Your Setup) |
|---------|----|----|
| **Configuration** | Manual routes in JSX | File-based routing + `routes.ts` |
| **File Structure** | Any structure | Routes in `app/routes/` |
| **Type Safety** | Basic | Advanced TypeScript types |
| **SSR** | Optional | Enabled by default |
| **Meta Tags** | Manual | Built-in `meta()` function |

---

## Quick Reference: Route File Structure

```
app/
  ├── root.tsx          # Root layout (wraps all pages)
  ├── routes.ts         # Route configuration
  ├── routes/
  │   ├── home.tsx      # / (home page)
  │   ├── about.tsx     # /about
  │   └── contact.tsx   # /contact
  └── app.css           # Global styles
```

---

Good luck! React Router v7's file-based routing is powerful and intuitive once you get the hang of it. 🚀

**Pro Tip:** As you create more routes, React Router v7 can auto-detect them. But starting with explicit configuration in `routes.ts` helps you understand how everything connects!
