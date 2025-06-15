import React from "react";
import {ChevronDown} from "lucide-react";

export default function Hero() {
    return (
        <>
            <img
                src="/netflix.jpg"
                alt="Background"
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 pointer-events-none select-none brightness-[0.4] sepia-[3%]"
            />
            <div
                className="relative text-white h-screen flex flex-col justify-center items-center text-center text-[25px]">
                <h1>Unlimited movies, TV shows and more</h1>
                <p>Starts at ₹149. Cancel at any time.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="text-white px-2 py-4 mt-5 rounded-lg w-[80%] max-w-[500px] text-left">
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
                <div
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 text-3xl rounded-full p-1 cursor-pointer sm:text-4xl md:text-5xl animate-bounce"
                >
                    <ChevronDown size={50}/>
                </div>
            </div>
        </>
    )
}
