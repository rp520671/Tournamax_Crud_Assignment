"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
        type="text"
        placeholder="Topic Title"
      />

      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 resize-none"
        rows="4"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-200 w-full">
        Update Topic
      </button>
    </form>
  );
}
