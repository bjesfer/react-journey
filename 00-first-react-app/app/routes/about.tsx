import type { Route } from "../+types/root";

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
