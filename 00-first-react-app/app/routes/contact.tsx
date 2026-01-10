import type { Route } from "../+types/root";

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
