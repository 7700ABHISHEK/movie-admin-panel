import React from "react";

const tvShows = [
    {
        id: 1,
        title: "Stranger Things",
        genre: "Sci-Fi, Thriller",
        image: "/movie-image/stranger-things.jpg",
    },
    {
        id: 2,
        title: "Breaking Bad",
        genre: "Crime, Drama",
        image: "/movie-image/breaking-bad.jpg",
    },
    {
        id: 3,
        title: "The Witcher",
        genre: "Fantasy, Action",
        image: "/movie-image/the-whitcher.jpg",
    },
    {
        id: 4,
        title: "Mahavatar Narsimha",
        genre: "Animation, Devotional",
        image: "/movie-image/mahavatar-narsimha.jpg",
    },
    {
        id: 5,
        title: "Money Heist",
        genre: "Crime, Thriller",
        image: "/movie-image/money-heist.jpg",
    },
    {
        id: 6,
        title: "Hanuman",
        genre: "Adventure",
        image: "/movie-image/hanuman.webp",
    },
    {
        id: 7,
        title: "Shang-Chi",
        genre: "Thriller, Fiction",
        image: "/movie-image/shang-chi.jpeg",
    },
    {
        id: 8,
        title: "Monster Island",
        genre: "Horror",
        image: "/movie-image/monster-island.avif",
    },
];

const TVShowSection = () => {
    return (
        <section className="bg-zinc-900 py-12 px-6 text-white h-[100]">
            <h2 className="text-3xl font-bold my-12 text-center">Popular TV Shows</h2>
            <p className="text-xl font-bold my-12 text-center">This Section is just for showing purpose as per client requirement i can design it properly</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {tvShows.map((show) => (
                    <div
                        key={show.id}
                        className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={show.image}
                            alt={show.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{show.title}</h3>
                            <p className="text-sm text-zinc-400">{show.genre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TVShowSection;
