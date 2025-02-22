src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Form1 from './components/Forms/Form1';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/form1" element={<ProtectedRoute><Form1 /></ProtectedRoute>} />
            </Routes>
            <Footer />
        </Router>
    );
}
