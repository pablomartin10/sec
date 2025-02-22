import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Form1 from './components/Forms/Form1';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); // Cambia el estado a true cuando inicie sesión
    };

    return (
        <div>
            <Header />
            {/* Renderiza el componente basado en el estado isLoggedIn */}
            {isLoggedIn ? (
                <Form1 />
            ) : (
                <Login onLogin={handleLogin} />
            )}
            <Footer />
        </div>
    );
}
