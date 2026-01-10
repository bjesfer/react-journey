# React Router v7 Project Installation Guide

This guide shows you how to create a React Router v7 project from scratch, matching the current project setup.

**📋 Related Guide:** If you want to verify your existing project setup, see `PROJECT_VALIDATION_REPORT.md` for a detailed validation checklist.

## ⚡ Quick Start (TL;DR)

**Fastest way to create a React Router v7 project:**

```bash
# Install degit (one time only)
npm install -g degit

# Create React Router v7 project from template
degit remix-run/react-router-templates/default my-react-router-app

# Setup and run
cd my-react-router-app
npm install
npm run dev
```

That's it! Your app will be running at `http://localhost:5173` 🚀

---

## 📖 Detailed Instructions

Below are detailed methods for different scenarios.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** (comes with Node.js) or **pnpm** or **bun**
- ✅ A code editor (VS Code, Cursor, etc.)
- ✅ Terminal/Command Prompt access

**Check if you have Node.js:**

```bash
node --version
npm --version
```

---

## 🚀 Method 1: Using React Router Template (Recommended - Easiest)

This is the **easiest and recommended way** to create a React Router v7 project.

### Option A: Using degit (Easiest - Recommended)

Use `degit` to clone just the template files without git history:

```bash
# Install degit globally (if not already installed)
npm install -g degit

# Create project from template
degit remix-run/react-router-templates/default my-react-router-app

# Navigate to project
cd my-react-router-app

# Install dependencies
npm install
```

**What this does:**

- Downloads the official React Router v7 template from Remix Run
- Includes file-based routing, SSR, TypeScript, Tailwind CSS
- No git history (clean start)
- Ready to use immediately after `npm install`

**After running degit, verify you have these files:**

- ✅ `react-router.config.ts` - React Router configuration (SSR enabled)
- ✅ `app/root.tsx` - Root layout component
- ✅ `app/routes.ts` - Route configuration
- ✅ `app/routes/home.tsx` - Home route
- ✅ `app/app.css` - Global styles with Tailwind
- ✅ `vite.config.ts` - Vite config with React Router plugin
- ✅ `@react-router/dev` in package.json devDependencies

**Important:** If any of these files are missing, you may have an incorrect setup. Check the verification checklist below.

### Option B: Using GitHub Template (Alternative)

1. **Visit the template repository:**
   - Go to: https://github.com/remix-run/react-router-templates/tree/main/default
   - Click "Use this template" → "Create a new repository"
   - Or clone it directly:

```bash
# Clone the template
git clone https://github.com/remix-run/react-router-templates.git
cd react-router-templates/default

# Copy to your desired location (optional)
cp -r . ../my-react-router-app
cd ../my-react-router-app

# Remove git history if you want a fresh start
rm -rf .git

# Install dependencies
npm install
```

3. **Start development server:**

```bash
npm run dev
```

---

### Option C: Using StackBlitz (Online - Optional)

If you prefer to start online and then download:

1. Visit: https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default
2. Click "Fork" to create your own copy
3. Download as ZIP or connect to GitHub
4. Extract and run locally:
   ```bash
   cd my-react-router-app  # or the downloaded folder name
   npm install
   npm run dev
   ```

**Note:** This method works but using `degit` (Option A) is faster and cleaner.

---

## 🔄 Method 1.5: What to Do If You Created Wrong Project Type

**If you already ran `npm create vite@latest` by mistake** and created a standard React project instead of React Router v7:

### Step 1: Remove Standard Vite Setup

Delete the incorrectly created project or start fresh:

```bash
# If you haven't made changes, just delete and start over
rm -rf my-react-router-app
```

Then use **Method 1 (Option A)** above with `degit`.

### Step 2: Or Convert Manually (Advanced)

If you want to convert your existing Vite React project:

1. **Install React Router v7 dependencies:**

```bash
cd my-react-router-app
npm install react-router@7.12.0 @react-router/node@7.12.0 @react-router/serve@7.12.0
npm install -D @react-router/dev@7.12.0 isbot@^5.1.31
```

2. **Restructure folders:**

```bash
# Create new structure
mkdir -p app/routes
# Move src files to app/routes (adjust based on your structure)
```

3. **Update configuration files** - See Method 2 (Manual Setup) below for all required config files.

**⚠️ Strong Recommendation:** It's **much easier and faster** to delete and use the template (Method 1, Option A) than to convert manually! Manual conversion is error-prone and time-consuming.

**Quick fix:**

```bash
# Delete the incorrect project
rm -rf my-react-router-app

# Create correctly using degit
npm install -g degit
degit remix-run/react-router-templates/default my-react-router-app
cd my-react-router-app
npm install
npm run dev
```

---

## 🛠️ Method 2: Manual Setup (For Learning)

If you want to understand every step or the template doesn't work, follow this manual setup:

### Step 1: Create Project Directory

```bash
mkdir my-react-router-app
cd my-react-router-app
```

### Step 2: Initialize npm Project

```bash
npm init -y
```

This creates a `package.json` file.

### Step 3: Install React Router v7 Dependencies

Install the required packages:

```bash
npm install react@^19.2.3 react-dom@^19.2.3 react-router@7.12.0
npm install @react-router/node@7.12.0 @react-router/serve@7.12.0 isbot@^5.1.31
```

### Step 4: Install Development Dependencies

```bash
npm install -D @react-router/dev@7.12.0
npm install -D typescript@^5.9.2
npm install -D @types/node@^22 @types/react@^19.2.7 @types/react-dom@^19.2.3
npm install -D vite@^7.1.7 vite-tsconfig-paths@^5.1.4
npm install -D tailwindcss@^4.1.13 @tailwindcss/vite@^4.1.13
```

### Step 5: Create Project Structure

Create the necessary folders and files:

```bash
mkdir -p app/routes
mkdir -p public
```

### Step 6: Create Configuration Files

#### Create `package.json` scripts

Edit `package.json` and add these scripts:

```json
{
  "name": "my-react-router-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "react-router build",
    "dev": "react-router dev",
    "start": "react-router-serve ./build/server/index.js",
    "typecheck": "react-router typegen && tsc"
  }
}
```

#### Create `vite.config.ts`

```ts
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
```

#### Create `react-router.config.ts`

```ts
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
} satisfies Config;
```

#### Create `tsconfig.json`

```json
{
  "include": [
    "**/*",
    "**/.server/**/*",
    "**/.client/**/*",
    ".react-router/types/**/*"
  ],
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "types": ["node", "vite/client"],
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "rootDirs": [".", "./.react-router/types"],
    "baseUrl": ".",
    "paths": {
      "~/*": ["./app/*"]
    },
    "esModuleInterop": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

### Step 7: Create App Files

#### Create `app/root.tsx`

```tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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

#### Create `app/routes.ts`

```ts
import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;
```

#### Create `app/routes/home.tsx`

```tsx
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to React Router v7!</h1>
      <p className="text-lg">Your app is running successfully.</p>
    </main>
  );
}
```

#### Create `app/app.css`

```css
@import "tailwindcss";

/* Your custom styles here */
```

#### Create `public/favicon.ico`

You can use any favicon or download one from [favicon.io](https://favicon.io/).

### Step 8: Install Dependencies

```bash
npm install
```

### Step 9: Run Type Generation

```bash
npm run typecheck
```

This generates the TypeScript types for your routes.

### Step 10: Start Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173`! 🎉

---

## 🎯 Quick Start (After Installation)

Once your project is set up:

### 1. Start Development Server

```bash
npm run dev
```

**Expected output:**

```
React Router dev server running...

➜  Local:   http://localhost:5173/
```

### 2. Open in Browser

Navigate to `http://localhost:5173` - you should see your React Router app!

### 3. Verify Project Structure

Your project should look like this:

```
my-react-router-app/
├── app/
│   ├── routes/
│   │   └── home.tsx       # Your home page
│   ├── root.tsx            # Root layout
│   ├── routes.ts           # Route configuration
│   └── app.css             # Global styles
├── public/
│   └── favicon.ico         # Favicon
├── node_modules/           # Dependencies (generated)
├── package.json            # Project dependencies
├── react-router.config.ts  # React Router config
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite config
```

---

## 📦 Package Manager Alternatives

### Using pnpm

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm

# Install degit using pnpm (one time)
pnpm install -g degit

# Create project from template
degit remix-run/react-router-templates/default my-react-router-app

# Install dependencies
cd my-react-router-app
pnpm install

# Start dev server
pnpm dev
```

### Using bun

```bash
# Install bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Install degit using bun (one time)
bun install -g degit

# Create project from template
degit remix-run/react-router-templates/default my-react-router-app

# Install dependencies
cd my-react-router-app
bun install

# Start dev server
bun run dev
```

---

## 🔧 Troubleshooting

---

### Issue: "degit command not found"

**Solution:** Install degit globally:

```bash
npm install -g degit
```

Then try the degit command again.

### Issue: Node.js version too old

**Solution:** Update Node.js to version 18 or higher:

- Download from [nodejs.org](https://nodejs.org/)
- Or use [nvm](https://github.com/nvm-sh/nvm) to manage versions:
  ```bash
  nvm install 18
  nvm use 18
  ```

### Issue: TypeScript errors after installation

**Solution:** Run type generation:

```bash
npm run typecheck
```

### Issue: Port 5173 already in use

**Solution:** Kill the process using that port or specify a different port:

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

Or set a different port in your environment:

```bash
PORT=3000 npm run dev
```

### Issue: "Cannot find module" errors

**Solution:**

1. Delete `node_modules` and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```
2. Reinstall dependencies:
   ```bash
   npm install
   ```

### Issue: Tailwind CSS not working

**Solution:** Make sure `app/app.css` includes:

```css
@import "tailwindcss";
```

---

## ✅ Verification Checklist

After installation, verify you have a **correct React Router v7 project**:

### File Structure Check:

- [ ] `react-router.config.ts` exists (React Router config)
- [ ] `app/root.tsx` exists (Root layout)
- [ ] `app/routes.ts` exists (Route configuration)
- [ ] `app/routes/` directory exists
- [ ] `app/routes/home.tsx` exists (Home route)
- [ ] NO `src/` folder (React Router v7 uses `app/` instead)

### Package.json Check:

- [ ] `@react-router/dev` in devDependencies
- [ ] `react-router@7.12.0` in dependencies
- [ ] Scripts include `"dev": "react-router dev"`

### Functionality Check:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts the server
- [ ] Browser opens to `http://localhost:5173`
- [ ] You see the React Router welcome page
- [ ] Hot Module Replacement works (change a file, see it update)
- [ ] TypeScript types generated (check for `.react-router/types` folder)
- [ ] No console errors in browser

**If any items above are missing, you might have created a standard React project instead of React Router v7!**

---

## 📚 Next Steps

After successful installation:

1. ✅ **Read the setup guide** - Learn about routes, pages, and navigation
2. ✅ **Create your first route** - Add an About or Contact page
3. ✅ **Add navigation** - Create a navbar with links
4. ✅ **Customize styling** - Modify Tailwind CSS or add custom styles
5. ✅ **Explore features** - Learn about loaders, actions, and data fetching

---

## 🆘 Getting Help

If you encounter issues:

1. **Check React Router Docs:** https://reactrouter.com/
2. **Check GitHub Issues:** https://github.com/remix-run/react-router/issues
3. **Discord Community:** https://rmx.as/discord
4. **Stack Overflow:** Tag your questions with `react-router-v7`

---

## 📝 Summary

**Recommended Method (Easiest):**

```bash
# Install degit (one time only)
npm install -g degit

# Create React Router v7 project
degit remix-run/react-router-templates/default my-react-router-app

# Setup and run
cd my-react-router-app
npm install
npm run dev
```

**That's it!** The template sets everything up for you. The manual method is great for learning, but using `degit` with the official template is the fastest and most reliable way to get started.

---

## ✅ Verify Your Setup

After installation, use the verification checklist above to ensure you have a correct React Router v7 project.

### Quick Verification

You should have these key indicators:

- ✅ `react-router.config.ts` file exists
- ✅ `app/` folder structure (NOT `src/` folder)
- ✅ `app/root.tsx` file
- ✅ `app/routes.ts` file
- ✅ `app/routes/` directory
- ✅ `@react-router/dev` in package.json devDependencies
- ✅ Scripts use `react-router` commands (not `vite`)

### Detailed Validation

For a comprehensive validation report with all checks, see `PROJECT_VALIDATION_REPORT.md` in your workspace.

### Common Mistakes

**❌ Wrong - Standard React project:**

- Has `src/` folder
- Has `react-router-dom` dependency
- Uses `vite` commands directly
- No `react-router.config.ts`

**✅ Correct - React Router v7 project:**

- Has `app/` folder
- Has `react-router@7.12.0` and `@react-router/dev`
- Uses `react-router dev` and `react-router build` commands
- Has `react-router.config.ts`

---

Happy coding! 🚀
