import Image from "next/image";

interface PostcardPreviewProps {
  title: string;
  date: string;
  letter: string;
  ingredients: string[];
}

export default function PostcardPreview({
  title,
  date,
  letter,
  ingredients,
}: PostcardPreviewProps) {
  return (
    <div className="paper-card relative p-8">
      <Image
        src="/images/washi-tape.png"
        alt=""
        width={130}
        height={45}
        className="absolute -top-5 left-1/2 -translate-x-1/2 -rotate-2 opacity-90"
      />

      <Image
        src="/images/stamp.png"
        alt=""
        width={90}
        height={90}
        className="absolute -right-2 -top-2 rotate-6 opacity-90"
      />

      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-stone-500">
        Dear Tomorrow
      </p>

      <h2 className="handwritten mb-2 text-6xl">
        {title || "Your Perfect Day"}
      </h2>

      <p className="mb-8 text-sm uppercase tracking-[0.2em] text-stone-500">
        {date || "Future Date"}
      </p>

      <div className="mb-10 whitespace-pre-wrap leading-9 text-stone-700">
        {letter || "Your postcard preview will appear here."}
      </div>

      <div className="border-t border-stone-200 pt-6">
        <h3 className="handwritten mb-4 text-lg font-semibold">
          Recipe for a Perfect Day
        </h3>

        {ingredients.length === 0 ? (
          <p className="text-stone-500">
            Add some ingredients to build your recipe.
          </p>
        ) : (
          <ul className="space-y-2">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>
                • {ingredient}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
