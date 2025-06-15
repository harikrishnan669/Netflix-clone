import React from 'react';

export default function Footer(){
    return (
        <footer className="bg-white text-black-400 py-2">
            <div className="max-w-6xl mx-auto px-6">
                <p className="mb-6 text-sm">Questions? Call <span className="underline">000-800-919-1694</span></p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline text-red">FAQ</a></li>
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

                <p className="text-sm mt-4">Netflix India</p>
            </div>
        </footer>
    );
};
