import Image from "next/image";

export default function FeaturedPostcards() {
    return (
        <section className="py-24">
            <h2 className="handwritten mb-12 text-center text-4xl font-bold">
                Featured Perfect Days
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="overflow-hidden bg-white shadow-sm">
                    <div className="relative h-48 w-full">
                        <Image
                            src="/images/books.jpg"
                            alt="A rainy bookstore aisle with shelves and warm light"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h3 className="handwritten mb-4 text-2xl font-semibold">
                            Rainy Bookstore
                        </h3>

                        <p className="mb-4 text-stone-600">
                            A quiet afternoon surrounded by stories and coffee.
                        </p>

                        <div className="space-y-2 text-sm">
                            <p>1 coffee</p>
                            <p>1 rainstorm</p>
                            <p>3 forgotten novels</p>
                            <p>2 hours reading</p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white shadow-sm">
                    <div className="relative h-48 w-full">
                        <Image
                            src="/images/chaitea.jpg"
                            alt="Two glasses of chai with rusk on a plate"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h3 className="handwritten mb-4 text-2xl font-semibold">
                            Grandma's Kitchen
                        </h3>

                        <p className="mb-4 text-stone-600">
                            Warm food, old stories, and an afternoon that never feels long
                            enough.
                        </p>

                        <div className="space-y-2 text-sm">
                            <p>3 cups warmth</p>
                            <p>2 family stories</p>
                            <p>1 cardamom chai</p>
                            <p>1 cozy kitchen</p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white shadow-sm">
                    <div className="relative h-48 w-full">
                        <Image
                            src="/images/scrapbook.jpg"
                            alt="A scrapbook page with memories, notes, and a happy day pinned down"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h3 className="handwritten mb-4 text-2xl font-semibold">
                            Dream Job Day
                        </h3>

                        <p className="mb-4 text-stone-600">
                            The day years of effort finally become reality.
                        </p>

                        <div className="space-y-2 text-sm">
                            <p>1 opportunity</p>
                            <p>2 nervous smiles</p>
                            <p>3 achievements</p>
                            <p>Unlimited excitement!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}