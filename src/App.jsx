import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LoginForm from "./components/LoginForm"
import { ToastContainer } from "react-toastify"
import AddMovie from "./pages/AddMovie"

const App = () => {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Header />                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/add-movie" element={<AddMovie />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App