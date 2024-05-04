"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 my-2 border border-gray-300 rounded"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button onClick={e => {console.log("login")}} className="w-full p-2 my-2 border border-gray-300 rounded">Login</button>
      </div>
    </main>
  );
}
