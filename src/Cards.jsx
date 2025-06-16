import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieModal from "./Moviemodal.jsx";

const movies = [
    {
        title: "Premam",
        image: "/premam.jpg",
        year: 2015,
        info:
            "The film follows George, a typical young guy, through three phases of his life — his teenage years, college days, and early adulthood. Each phase introduces a new romantic interest, representing his journey through infatuation, first love, and mature love.",
        type: "Love",
    },
    {
        title: "RRR",
        image: "/RRR.jpg",
        year: 2022,
        info:
            "Set in the 1920s during British colonial rule in India, RRR is a fictional re-imagining of the lives of two real Indian freedom fighters.",
        type: "Action",
    },
    {
        title: "ARM",
        image: "/arm.jpg",
        year: 2023,
        info:
            "A high-stakes mission led by an elite force to dismantle a global arms syndicate hidden in plain sight.",
        type: "Thriller",
    },
    {
        title: "Thudarum",
        image: "/thudarum.jpg",
        year: 2018,
        info:
            "A heartfelt drama about a woman’s resilience and strength in the face of personal loss and societal pressure.",
        type: "Drama",
    },
    {
        title: "Kurip",
        image: "/kurip.jpg",
        year: 2021,
        info:
            "Based on real events, Kurip tells the story of a notorious criminal and the complex man behind the headlines.",
        type: "Biopic",
    },
    {
        title: "Vazha",
        image: "/vazha.jpg",
        year: 2020,
        info:
            "An absurdist comedy about a man and a banana tree that brings him unexpected fame and trouble.",
        type: "Comedy",
    },
    {
        title: "Rekachitram",
        image: "/rekachitram.jpg",
        year: 2023,
        info:
            "An experimental mystery thriller told through the lens of a silent filmmaker uncovering a dark past.",
        type: "Mystery",
    },
    {
        title: "Wolf",
        image: "/wolf.jpg",
        year: 2021,
        info:
            "Trapped in a house during lockdown, a man’s visit to his girlfriend takes a dark turn when secrets are revealed.",
        type: "Psychological Thriller",
    },
    {
        title: "Tsunami",
        image: "/Tsunami.jpg",
        year: 2021,
        info:
            "A hilarious comedy of errors as a young man’s unexpected mishap at a convent leads to a series of awkward events.",
        type: "Comedy",
    },
    {
        title: "Kasargold",
        image: "/kasargold.jpg",
        year: 2023,
        info:
            "Two men’s plan to smuggle gold takes a violent detour when greed and betrayal enter the scene.",
        type: "Crime Thriller",
    },
    {
        title: "Ponman",
        image: "/pm.jpg",
        year: 2022,
        info:
            "A gentle village story of a young man misunderstood by society, but who holds a heart of gold.",
        type: "Family Drama",
    },
    {
        title: "Painkili",
        image: "/painkili.jpg",
        year: 2020,
        info:
            "A feel-good story of love, music, and second chances set in a small town bursting with color and chaos.",
        type: "Romantic Comedy",
    },
    {
        title: "Supersharanya",
        image: "/ss.jpg",
        year: 2022,
        info:
            "A coming-of-age story of Sharanya, a college girl navigating life, friendships, love, and awkward moments.",
        type: "Youth Drama",
    },
    {
        title: "Falimy",
        image: "/falimy.jpg",
        year: 2022,
        info:
            "A quirky family goes on a road trip to fulfill the final wish of their grandfather, leading to chaos and bonding.",
        type: "Family Comedy",
    },
    {
        title: "Nelavelicham",
        image: "/nelavelicham.jpg",
        year: 2023,
        info:
            "Based on Vaikom Muhammad Basheer's iconic story — a writer stays in a haunted house and forms a connection with a ghost.",
        type: "Horror Drama",
    },
    {
        title: "Kalki",
        image: "/kalki.jpg",
        year: 2019,
        info:
            "A fierce police officer enters a lawless village and takes on a brutal gang to restore justice.",
        type: "Action Thriller",
    },
];

export default function MovieContainer() {
    const scrollRef = useRef(null);
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="relative py-2">
            <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                <ChevronRight size={24} />
            </button>
            <div className="container mx-auto p-6 rounded-lg max-w-6xl w-100px">
                <h2 className="text-white text-2xl font-bold text-left mb-6">
                    Trending Movies
                </h2>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-1 scrollbar-hide"
                >
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            onClick={()=>setSelectedMovie(movie)}
                            className="flex-none w-48 h-80 sm:w-56 md:w-64 bg-zinc-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="p-3 text-white text-center font-semibold text-sm truncate">
                                {movie.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        </div>
    );

}
