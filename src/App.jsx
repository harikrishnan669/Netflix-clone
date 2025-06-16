import React from 'react';
import Header from "./Header.jsx"
import "./index.css"
import Hero from "./Hero.jsx";
import MovieContainer from "./Cards.jsx";
import MoreReasons from "./Morereason.jsx";
import Footer from "./Footer.jsx";
import FAQSection from "./Faqsection.jsx";
function App() {
    return (
        <>
            <Header />
            <Hero/>
            <MovieContainer/>
            <MoreReasons />
            <FAQSection/>
            <Footer/>
        </>
    )
}
export default App
