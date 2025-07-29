import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {

    const navigate = useNavigate();

    useEffect(() => {
        let status = JSON.parse(localStorage.getItem("isLoggedIn"));

        if(!status){
            navigate("/login");
        }

    }, [])

    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute