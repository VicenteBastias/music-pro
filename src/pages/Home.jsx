import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from 'react-router-dom';

function Home() {
    const [authenticated, setauthenticated] = useState(null);
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("authenticated");
    //     if (loggedInUser) {
    //     setauthenticated(loggedInUser);
    //     }
    // }, []);
    // if (!authenticated) {
    //     return <Navigate replace to="/login" />;
    // } else {
    return (
        <h1>Bienvenido a Music Pro</h1>
    );
    //}
};

export default Home