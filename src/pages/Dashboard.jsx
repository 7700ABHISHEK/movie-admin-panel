import React from 'react';

const Dashboard = ({ movies, onView, onEdit, onDelete }) => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-16 px-4">
            <div className="bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)] p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Movie List</h2>
                {movies.length === 0 ? (
                    <p className="text-zinc-400">No movies added yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border border-zinc-700 text-white">
                            <thead className="bg-zinc-800 text-cyan-300 text-sm">
                                <tr>
                                    <th className="px-4 py-2 border-b border-zinc-700">Poster</th>
                                    <th className="px-4 py-2 border-b border-zinc-700">Title</th>
                                    <th className="px-4 py-2 border-b border-zinc-700">Genre</th>
                                    <th className="px-4 py-2 border-b border-zinc-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id} className="hover:bg-zinc-800 transition">
                                        <td className="px-4 py-2 border-b border-zinc-700">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                className="w-20 h-12 object-cover rounded-md border border-zinc-700"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border-b border-zinc-700">{movie.title}</td>
                                        <td className="px-4 py-2 border-b border-zinc-700">{movie.genre}</td>
                                        <td className="px-4 py-2 border-b border-zinc-700 space-x-2">
                                            <button
                                                className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-sm"
                                                onClick={() => onView(movie)}
                                            >
                                                View
                                            </button>
                                            <button
                                                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
                                                onClick={() => onEdit(movie)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                                                onClick={() => onDelete(movie.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Dashboard;
