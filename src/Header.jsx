import React from 'react';

export default function Header() {
    return (
        <header className="text-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <img src="/netflixheader.png" alt="logo" className="w-32 h-auto" />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
                    Signup
                </button>
            </div>
        </header>
    );
};

