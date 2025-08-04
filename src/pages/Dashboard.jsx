import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/movies");
                setMovies(response.data);
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/movies/${id}`);
        const updatedMovie = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovie)
        toast.success("Movie Deleted Successfully");
    }

    return (
        <section className="relative w-full min-h-screen dashboard-bg bg-no-repeat bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 z-0 flex items-center justify-center min-h-screen px-2 sm:px-4">
                <div className="relative z-10 w-full max-w-6xl backdrop-blur-md bg-white/10 rounded-2xl shadow-[0_0_60px_rgba(0,255,255,0.15)] p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6 text-center drop-shadow-md">
                        Movie List
                    </h2>

                    {movies.length === 0 ? (
                        <p className="text-center text-zinc-300 mb-6">No movies added yet.</p>
                    ) : (
                        <div className="overflow-x-auto rounded-md border border-zinc-700">
                            <table className="min-w-full table-auto text-white text-sm sm:text-base">
                                <thead className="bg-zinc-800 text-cyan-300 text-xs sm:text-sm">
                                    <tr>
                                        <th className="px-2 sm:px-4 py-2 border-b border-zinc-700 text-left">Poster</th>
                                        <th className="px-2 sm:px-4 py-2 border-b border-zinc-700 text-left">Title</th>
                                        <th className="px-2 sm:px-4 py-2 border-b border-zinc-700 text-left">Genre</th>
                                        <th className="px-2 sm:px-4 py-2 border-b border-zinc-700 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map((movie) => (
                                        <tr key={movie.id} className="hover:bg-zinc-800/60 transition">
                                            <td className="px-2 sm:px-4 py-3 border-b border-zinc-700">
                                                <img
                                                    src={movie.image}
                                                    alt={movie.title}
                                                    className="w-20 h-12 object-cover rounded-md border border-zinc-700 shadow-sm"
                                                />
                                            </td>
                                            <td className="px-2 sm:px-4 py-3 border-b border-zinc-700 break-words max-w-[150px]">
                                                {movie.title}
                                            </td>
                                            <td className="px-2 sm:px-4 py-3 border-b border-zinc-700 break-words max-w-[120px]">
                                                {movie.genre}
                                            </td>
                                            <td className="px-2 sm:px-4 py-3 border-b border-zinc-700">
                                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                                    <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-xs sm:text-sm transition" onClick={() => navigate(`/movie/${movie.id}`)}>
                                                        View
                                                    </button>
                                                    <button
                                                        className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-xs sm:text-sm transition"
                                                        onClick={() => navigate(`/edit-movie/${movie.id}`)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs sm:text-sm transition" onClick={() => handleDelete(movie.id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
