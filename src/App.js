import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./About";
import Footer from "./Footer";
import { useEffect } from 'react'

const App = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="app">
            <Header />
            <Home />
            <About />
            <Footer />
        </div>
    );
};

export default App;