import React, { useMemo, useRef, useState } from 'react';
import LightRays from '../react-css/LightRays';
import JoditEditor from 'jodit-react';


const AddMovie = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        placeholder: 'Start typings...',
        theme: 'dark',
        height: 300,
        toolbarButtonSize: 'middle',
        style: {
            background: '#1e1e2e',
            color: '#ffffff',
        },
    }), []);

    return (
        <div>
            <div className="py-32 relative min-h-full bg-gradient-to-br bg-zinc-900 flex items-center justify-center px-4 overflow-hidden">
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

                <form className="relative z-10 w-full max-w-2xl bg-zinc-900/90 backdrop-blur-sm text-white p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.1)] space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
                        Add New Movie
                    </h2>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="Movie Title"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-zinc-300 mb-1">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="https://example.com/poster.jpg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="genre" className="block text-sm font-medium text-zinc-300 mb-1">Genre</label>
                        <select id="genre" class="bg-zinc-800 border border-zinc-800 text-white text-sm rounded-lg block w-full p-2.5">
                            <option selected>Select Genre</option>
                            <option value="US">Devotional</option>
                            <option value="US">Horror</option>
                            <option value="US">Thriller</option>
                            <option value="CA">Comedy</option>
                            <option value="FR">Action</option>
                            <option value="FR">Fiction</option>
                            <option value="FR">Non-Fiction</option>
                            <option value="FR">Poetry</option>
                            <option value="FR">Drama</option>
                            <option value="FR">Sci-Fi</option>
                            <option value="DE">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">Description</label>
                        <div id='description' className="bg-zinc-800 text-white rounded-xl overflow-hidden">
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1}
                                onBlur={newContent => setContent(newContent)}
                                onChange={() => { }}
                            />
                        </div>
                    </div>

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

export default AddMovie;
