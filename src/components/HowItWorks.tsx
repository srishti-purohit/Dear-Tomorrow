import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-24">
      <h2 className="handwritten mb-12 text-center text-4xl font-bold">
        How It Works
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="overflow-hidden bg-white shadow-sm">
          <div className="relative h-40 w-full">
            <Image
              src="/images/writing-desk.jpg"
              alt="A desk with a notebook, pen, and planner for imagining a perfect day"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="handwritten mb-3 text-xl font-semibold">
              01. Imagine
            </h3>

            <p className="text-stone-600">
              Picture a future day that feels perfect to you, whether it's a
              quiet morning in a bookstore, your dream graduation, or a trip
              you've always wanted to take.
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-white shadow-sm">
          <div className="relative h-40 w-full">
            <Image
              src="/images/handwrittenletter.jpg"
              alt="A handwritten letter on paper with soft lighting"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="handwritten mb-3 text-xl font-semibold">
              02. Write
            </h3>

            <p className="text-stone-600">
              Send a postcard from that future moment and describe what happened,
              who was there, and what made the day unforgettable.
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-white shadow-sm">
          <div className="relative h-40 w-full">
            <Image
              src="/images/recipe.jpg"
              alt="A recipe card and ingredients laid out for a perfect day"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="handwritten mb-3 text-xl font-semibold">
              03. Create a Recipe
            </h3>

            <p className="text-stone-600">
              Turn memories, emotions, places, and experiences into a recipe for
              happiness that captures the essence of your perfect day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}