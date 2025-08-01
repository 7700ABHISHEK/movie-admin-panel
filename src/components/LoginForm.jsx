import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({ setIsLogin }) => {
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
            setIsLogin(true);
            navigate('/');
        } else {
            toast.error('Invalid email or password.', { autoClose: 1000 });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center login-bg">

            <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-0"></div>

            <div className="relative z-10 w-full max-w-md p-6 sm:p-10 bg-white/10 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-xl hover:scale-[1.01] transition-transform duration-500">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-red-500 drop-shadow-sm">Welcome Back</h1>
                    <p className="mt-2 text-white">Login to your account</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={input.email}
                            className="w-full px-4 py-3 bg-white/20 text-white border border-red-300 rounded-lg placeholder-white focus:ring-2 focus:ring-red-400 focus:outline-none"
                            placeholder="admin@gmail.com"
                            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={input.password}
                            className="w-full px-4 py-3 bg-white/20 text-white border border-red-300 rounded-lg placeholder-white focus:ring-2 focus:ring-red-400 focus:outline-none"
                            placeholder="admin@123"
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-200 mt-1 text-sm font-medium">{errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
