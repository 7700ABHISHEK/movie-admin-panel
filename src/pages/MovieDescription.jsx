import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading movie details...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen view-bg bg-center bg-no-repeat bg-cover pt-24 bg-gradient-to-b from-black via-zinc-900 to-black text-white py-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-black/75 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full sm:w-64 h-40 sm:h-72 object-cover rounded-lg border border-zinc-700 shadow-md"
          />

          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3">
              {movie.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 mb-4">
              <span className="font-semibold text-white">Genre:</span> {movie.genre}
            </p>

            <div
              className="prose prose-invert max-w-none text-zinc-200 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: movie.description }}
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button className=' bg-cyan-700 py-2 px-4 rounded-lg' onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
      </div>
    </section>
  );
};

export default MovieDescription;
