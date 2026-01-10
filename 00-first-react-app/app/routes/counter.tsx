import { useEffect, useState } from "react";
import type { Route } from "./+types/counter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Counter - My React Router App" },
    { name: "description", content: "Counter page!" },
  ];
}

export default function Counter() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Counter Page</h1>
      <p className="text-lg">This is the counter page.</p>

      <p className="text-lg">Advice: {advice}</p>
      <p className="text-lg">Count: {count}</p>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={fetchAdvice}
      >
        Get Advice
      </button>
    </main>
  );
}
