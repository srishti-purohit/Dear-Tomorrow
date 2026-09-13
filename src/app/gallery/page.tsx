"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostcards, Postcard } from "@/lib/storage";

export default function GalleryPage() {
  const [postcards, setPostcards] = useState<Postcard[]>([]);

  useEffect(() => {
    setPostcards(getPostcards());
  }, []);

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6">
        <Navbar />

        <div className="py-16">
          <h1 className="mb-12 text-5xl">Gallery</h1>

          {postcards.length === 0 ? (
            <div className="paper-card p-8 text-center">
              <p className="text-stone-600">No postcards yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {postcards.map((postcard) => (
                <article
                  key={postcard.id}
                  className="paper-card p-6"
                >
                  <h2 className="text-2xl">{postcard.title}</h2>

                  <p className="mt-2 text-sm text-stone-500">
                    {postcard.date}
                  </p>

                  <p className="mt-6 whitespace-pre-wrap">
                    {postcard.letter}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-lg">Recipe</h3>

                    <ul className="mt-3 space-y-2">
                      {postcard.ingredients.map((ingredient, index) => (
                        <li key={index}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}