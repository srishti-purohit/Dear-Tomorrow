export default function HowItWorks() {
  return (
    <section className="py-24">
      <h2 className="handwritten mb-12 text-center text-4xl font-bold">
        How It Works
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white p-8 shadow-sm">
          <h3 className="handwritten mb-3 text-xl font-semibold">
            01. Imagine
          </h3>

          <p className="text-stone-600">
            Picture a future day that feels perfect to you, whether it's a
            quiet morning in a bookstore, your dream graduation, or a trip
            you've always wanted to take.
          </p>
        </div>

        <div className="bg-white p-8 shadow-sm">
          <h3 className="handwritten mb-3 text-xl font-semibold">
            02. Write
          </h3>

          <p className="text-stone-600">
            Send a postcard from that future moment and describe what happened,
            who was there, and what made the day unforgettable.
          </p>
        </div>

        <div className="bg-white p-8 shadow-sm">
          <h3 className="handwritten mb-3 text-xl font-semibold">
            03. Create a Recipe
          </h3>

          <p className="text-stone-600">
            Turn memories, emotions, places, and experiences into a recipe for
            happiness that captures the essence of your perfect day.
          </p>
        </div>
      </div>
    </section>
  );
}