import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
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
