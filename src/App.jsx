import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LoginForm from "./components/LoginForm"
import { ToastContainer } from "react-toastify"
import AddMovie from "./pages/AddMovie"
import { useEffect, useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
import TVShowSection from "./pages/TvShow"
import AudioBookSection from "./pages/AudioBookSection"
import Dashboard from "./pages/Dashboard"

const App = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(JSON.parse(localStorage.getItem("isLoggedIn")));
    }, [])

    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLogin));
    }, [isLogin])

    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Header isLogin={isLogin} setIsLogin={setIsLogin} />
                <Routes>
                    <Route path="/" element={<HomePage isLogin={isLogin} />} />
                    <Route path="/login" element={<LoginForm setIsLogin={setIsLogin} />} />
                    <Route path="/add-movie" element={<ProtectedRoute Component={AddMovie} />} />
                    <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />
                    <Route path="/tv-show" element={<TVShowSection />} />
                    <Route path="/audio-book" element={<AudioBookSection/>} />
                </Routes>   
            </BrowserRouter>
        </>
    )
}

export default App