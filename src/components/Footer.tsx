import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-stone-200 py-8 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/envelope-postmarked.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
        />
      </div>

      <p className="handwritten text-3xl">
        Dear Tomorrow
      </p>

      <p className="mt-2 text-sm text-stone-500">
        A postcard from your future self.
      </p>

      <p className="mt-4 text-xs text-stone-400">
        © 2026 Dear Tomorrow
      </p>
    </footer>
  );
}