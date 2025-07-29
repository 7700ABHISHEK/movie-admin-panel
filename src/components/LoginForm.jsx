import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({ setIsLogin, isLogin }) => {
    const [input, setInput] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (input.password.trim() === '' || input.password.length < 8) {
            validationErrors.password = 'Please enter a valid password (min. 8 characters)';
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        if (input.email === 'admin@gmail.com' && input.password === 'admin@123') {
            toast.success('Logged in successfully!', { autoClose: 1000 });
            navigate("/add-movie")
            setIsLogin(true)
        } else {
            toast.error('Invalid email or password.');
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] flex items-center justify-center px-4 py-12">

                <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-500 ease-in-out hover:scale-[1.01]">

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-extrabold text-indigo-400">Welcome Back</h1>
                        <p className="mt-2 text-gray-300">Login to your account</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={input.email}
                                className="w-full px-4 py-3 bg-black/40 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400"
                                placeholder="admin@gmail.com"
                                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={input.password}
                                className="w-full px-4 py-3 bg-black/40 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400"
                                placeholder="admin@123"
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="text-red-500 mt-1 text-sm font-medium">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-800 hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
