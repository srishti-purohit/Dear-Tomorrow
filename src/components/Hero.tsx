import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/paper%20bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[var(--background)]/60" />
      </div>

      <p className="handwritten mb-4 text-3xl text-stone-600">
        Dear Tomorrow
      </p>

      <h1 className="handwritten max-w-4xl text-5xl leading-tight md:text-7xl">
        What if your perfect day could write back?
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-stone-600">
        Write a postcard from a future memory and create a recipe from the
        moments, people, and experiences that made it unforgettable.
      </p>

      <Link
        href="/create"
        className="mt-10 vintage-button text-lg"
      >
        Create Postcard
      </Link>
    </section>
  );
}