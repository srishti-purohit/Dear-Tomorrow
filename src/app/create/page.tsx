"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RecipeBuilder from "@/components/RecipeBuilder";
import PostcardPreview from "@/components/PostcardPreview";
import Footer from "@/components/Footer";
import { savePostcard } from "@/lib/storage";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [letter, setLetter] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    savePostcard({
      id: crypto.randomUUID(),
      title,
      date,
      letter,
      ingredients,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);

    setTitle("");
    setDate("");
    setLetter("");
    setIngredients([]);
  };

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6">
        <Navbar />

        <div className="py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl">Create Your Postcard</h1>

            <p className="mt-4 text-stone-600">
              Write a letter from your future perfect day and build its recipe.
            </p>
          </div>

          {saved && (
            <div className="mb-8 rounded-xl border p-4 text-center">
              Postcard sealed successfully.
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h2 className="mb-6 text-2xl">Letter Details</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Postcard title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border p-4"
                />

                <input
                  type="text"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  placeholder="Write your letter..."
                  value={letter}
                  onChange={(e) => setLetter(e.target.value)}
                  rows={8}
                  className="w-full rounded-xl border p-4"
                />

                <RecipeBuilder
                  ingredients={ingredients}
                  setIngredients={setIngredients}
                />

                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full rounded-xl border p-4"
                >
                  Seal Postcard
                </button>
              </div>
            </div>

            <PostcardPreview
              title={title}
              date={date}
              letter={letter}
              ingredients={ingredients}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}