import React from 'react';
import Header from "./Header.jsx"
import "./index.css"
import Hero from "./Hero.jsx";
import MovieContainer from "./Cards.jsx";
import MoreReasons from "./Morereason.jsx";
function App() {
    return (
        <>
            <Header />
            <Hero/>
            <MovieContainer/>
            <MoreReasons />
        </>
    )
}
export default App
