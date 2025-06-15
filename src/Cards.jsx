import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const movies = [
    { title: "Premam", image: "/premam.jpg" },
    { title: "RRR", image: "/RRR.jpg" },
    { title: "ARM", image: "/arm.jpg" },
    { title: "Thudarum", image: "/thudarum.jpg" },
    { title: "Kurip", image: "/kurip.jpg" },
    { title: "Vazha", image: "/vazha.jpg" },
    { title: "Rekachitram", image: "/rekachitram.jpg" },
    { title: "Wolf", image: "/wolf.jpg" },
    { title: "Tsunami", image: "/Tsunami.jpg" },
    { title: "Kasargold", image: "/kasargold.jpg" },
    { title: "Ponman", image: "/pm.jpg" },
    { title: "Painkili", image: "/painkili.jpg" },
    { title: "Supersharanya", image: "/ss.jpg" },
    { title: "Falimy", image: "/falimy.jpg" },
    { title: "Nelavelicham", image: "/nelavelicham.jpg" },
    { title: "Kalki", image: "/Kaliki.jpg" },

];
export default function MovieContainer() {
    const scrollRef = useRef(null);
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
        </div>
    );

}
