import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./About";
import Footer from "./Footer";

const App = () => {
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