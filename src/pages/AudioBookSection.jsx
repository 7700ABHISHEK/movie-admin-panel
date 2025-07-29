import React from "react";

const audioBooks = [
    {
        id: 1,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        image: "/audiobook-image/power-of-now.jpg",
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        image: "/audiobook-image/atomic-habits.webp",
    },
    {
        id: 3,
        title: "Think Like a Monk",
        author: "Jay Shetty",
        image: "/audiobook-image/think-like-a-monk.jpg",
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        image: "/audiobook-image/rich-dad-poor-dad.jpg",
    },
    {
        id: 5,
        title: "Ikigai",
        author: "Francesc Miralles",
        image: "/audiobook-image/ikigai.jpg",
    },
    {
        id: 6,
        title: "Can't Hurt Me",
        author: "David Goggins",
        image: "/audiobook-image/cant-hurt-me.jpg",
    },
    {
        id: 7,
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "/audiobook-image/alchemist.jpg",
    },
    {
        id: 8,
        title: "Deep Work",
        author: "Cal Newport",
        image: "/audiobook-image/deep-work.jpeg",
    },
];

const AudioBookSection = () => {
    return (
        <section className="bg-zinc-900 py-12 px-6 text-white">
            <h2 className="text-3xl font-bold my-12 text-center">Popular Audiobooks</h2>
            <p className="text-xl font-bold my-12 text-center">This Section is just for showing purpose as per client requirement i can design it properly</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {audioBooks.map((book) => (
                    <div
                        key={book.id}
                        className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{book.title}</h3>
                            <p className="text-sm text-zinc-400">{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AudioBookSection;
