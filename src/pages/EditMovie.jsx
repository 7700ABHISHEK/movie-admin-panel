import React, { useEffect, useMemo, useRef, useState } from 'react';
import LightRays from '../react-css/LightRays';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditMovie = () => {

    const [input, setInput] = useState({
        title: '', image: '', genre: '', description: ''
    });
    const [error, setErrors] = useState({});
    const [content, setContent] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/movies/${id}`);
                setInput(res.data);
                setContent(res.data.description);
            } catch (error) {
                console.error("Error fetching movie data", error);
            }
        };

        fetchMovie();
    }, [id]);

    const editor = useRef(null);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        theme: 'dark',
        height: 300,
        toolbarButtonSize: 'middle',
        style: {
            background: '#1e1e2e',
            color: '#ffffff',
        },
        toolbarAdaptive: false,
        toolbarSticky: false,
        toolbar: true,
        buttons: [
            'bold', 'italic', 'underline', 'strikethrough', '|',
            'ul', 'ol', '|',
            'outdent', 'indent', '|',
            'font', 'fontsize', 'brush', '|',
            'paragraph', 'align', 'undo', 'redo', '|',
            'hr', 'table', 'link', 'symbol', 'copyformat',
        ],
        buttonsXS: [
            'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|',
            'paragraph', 'fontsize', 'brush'
        ],
        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
        cleanHTML: {
            fillEmptyParagraph: false,
            removeEmptyElements: false,
            removeEmptyAttributes: false
        },
        enter: 'P',
    }), []);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        setErrors({ ...error, [e.target.id]: "" })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {}

        if (input.title.trim() === '') {
            validationErrors.title = "Enter Valid Title"
        }

        if (input.image.trim() === '') {
            validationErrors.image = "Enter Valid Image URL"
        }

        if (input.genre.trim() === '') {
            validationErrors.genre = "Select Valid Genre"
        }

        if (input.description.trim() === '') {
            validationErrors.description = "Enter Valid Description"
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const editMovie = async () => {
            await axios.put(`http://localhost:5000/movies/${id}`, input);
        }
        editMovie();

        toast.success("Movie Edited Successfully", { autoClose: 1000 });
        navigate("/dashboard")

    }

    return (
        <div>
            <div className="py-32 add-bg bg-center bg-no-repeat bg-cover relative min-h-full bg-gradient-to-br flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#00ffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="w-full h-full"
                    />
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-2xl bg-zinc-900/90 backdrop-blur-sm text-white p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)] space-y-6">
                    <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
                        Edit Movie
                    </h2>

                    {/* Title Input */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={input.title}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="Movie Title"
                            onChange={handleChange}

                        />
                        {
                            error && <p className='text-red-600'>{error.title}</p>
                        }
                    </div>

                    {/* Image URL Input */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-zinc-300 mb-1">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            value={input.image}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="https://example.com/poster.jpg"
                            onChange={handleChange}

                        />
                        {
                            error && <p className='text-red-600'>{error.image}</p>
                        }
                        {
                            input.image !== '' &&
                            <img
                                src={input.image}
                                alt={input.title}
                                className='w-52 h-24 object-cover my-4 rounded-md border border-zinc-700'
                            />
                        }
                    </div>

                    {/* Genre Select */}
                    <div>
                        <label htmlFor="genre" className="block text-sm font-medium text-zinc-300 mb-1">Genre</label>
                        <select
                            id="genre"
                            value={input.genre}
                            className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg block w-full p-2.5"
                            onChange={handleChange}
                        >
                            <option value="">Select Genre</option>
                            <option value="Devotional">Devotional</option>
                            <option value="Horror">Horror</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Action">Action</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Poetry">Poetry</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Other">Other</option>
                        </select>
                        {
                            error && <p className='text-red-600'>{error.genre}</p>
                        }
                    </div>

                    {/* Description (Jodit Editor) */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">Description</label>
                        <div id="description" className="bg-zinc-800 text-white rounded-xl overflow-hidden">
                            <JoditEditor
                                ref={editor}
                                value={input.description || ''}
                                config={config}
                                tabIndex={1}
                                onBlur={newContent => setContent(newContent)}
                                onChange={newContent => {
                                    setInput({ ...input, description: newContent });
                                    setErrors({ ...error, description: '' });
                                }}
                            />
                        </div>
                        {
                            error && <p className='text-red-600'>{error.description}</p>
                        }
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-xl font-medium transition duration-200 shadow-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMovie;
