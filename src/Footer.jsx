import React from 'react';

export default function Footer(){
    return (
        <footer className="bg-gradient-to-t from-[#000000] via-[#000000] to-[#001f3f] text-black-400 py-2">
            <div className="text-white px-6 py-4 mt-5 rounded-lg w-[80%] max-w-[500px] mx-auto">
                <div className="flex mt-0.5 mb-0.5">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-white bg-opacity-10 border border-white/30 px-4 py-2 rounded-l-md text-black text-[15px] h-[50px] focus:outline-none"
                    />
                    <button
                        className="px-5 h-[50px] bg-[#e50914] text-white text-[16px] font-medium rounded-r-md cursor-pointer hover:bg-red-700 transition"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <p className="mb-6 text-sm text-white">Questions? Call <span
                    className="underline">000-800-919-1694</span></p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-white">
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline ">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Investor Relations</a></li>
                        <li><a href="#" className="hover:underline">Privacy</a></li>
                        <li><a href="#" className="hover:underline">Speed Test</a></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Help Centre</a></li>
                        <li><a href="#" className="hover:underline">Jobs</a></li>
                        <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
                        <li><a href="#" className="hover:underline">Legal Notices</a></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Account</a></li>
                        <li><a href="#" className="hover:underline">Ways to Watch</a></li>
                        <li><a href="#" className="hover:underline">Corporate Information</a></li>
                        <li><a href="#" className="hover:underline">Only on Netflix</a></li>
                    </ul>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Media Centre</a></li>
                        <li><a href="#" className="hover:underline">Terms of Use</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                <div className="mt-8">
                    <select className="bg-black border border-gray-600 px-4 py-2 text-sm rounded text-white">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>

                <p className="text-sm mt-4 text-white text-center">Netflix Clone (Made by Harikrishnan)</p>
            </div>
        </footer>
    );
};
