"use client";
import { useState } from "react";

export default function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function submitPrompt() {
    setResponse("Loading...");
    const instructions = `Please generate a short response about my resume to any questions, responses should not include 2nd person: 
      My name is Alexander Smith, computer science major at Virginia Tech with GPA 3.87, etc.`;

    try {
      const res = await fetch(
        "https://qx23rvsae4.execute-api.us-east-1.amazonaws.com/production/gemini-api",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ instructions, prompt }),
        }
      );
      const data = await res.json();
      setResponse(data.response || data.error || "No response.");
    } catch (err: any) {
      setResponse("Error: " + err.message);
    }
  }

  return (
    <section id="askai" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Ask AI About Me</h2>
      <p className="text-center mb-4">Powered By Google Gemini hosted on AWS</p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        className="w-full max-w-lg mx-auto h-32 p-2 rounded bg-gray-800 text-white"
      />
      <button
        onClick={submitPrompt}
        className="mt-2 block mx-auto px-6 py-2 bg-teal-400 text-black rounded font-bold hover:bg-teal-500 transition"
      >
        Submit to Gemini
      </button>
      <div className="mt-4 max-w-lg mx-auto bg-gray-900 p-4 rounded">{response}</div>
    </section>
  );
}