import React from 'react';
import {X} from 'lucide-react'

export default function MovieModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-zinc-900 text-white rounded-lg w-[90%] max-w-3xl overflow-hidden relative shadow-2xl">
                <button onClick={onClose} className="bg-white absolute top-2 right-2 text-black"><X/></button>
                <img src={movie.image} alt={movie.title} className="w-full h-100 object-fit" />
                <div className="p-6">
                    <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                    <div className="flex gap-2 mb-4 text-sm flex-wrap">
                        <span className="bg-gray-700 px-2 py-1 rounded">{movie.year}</span>
                        <span className="bg-gray-700 px-2 py-1 rounded">U/A 16+</span>
                        <span className="bg-gray-700 px-2 py-1 rounded">Movie</span>
                        <span className="bg-gray-700 px-2 py-1 rounded">{movie.type}</span>
                    </div>
                    <p className="text-gray-300 mb-6">
                        {movie.info}
                    </p>
                    <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
