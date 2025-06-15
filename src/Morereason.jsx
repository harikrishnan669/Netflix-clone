import React from "react";
import { TvIcon,ArrowDownIcon,BoltIcon,UserCircleIcon } from '@heroicons/react/24/solid';

const features = [
    {
        title: "Enjoy on your TV",
        description:
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        icon: <TvIcon className="size-10 text-white"/>,
    },
    {
        title: "Download your shows to watch offline",
        description:
            "Save your favourites easily and always have something to watch.",
        icon: <ArrowDownIcon className="size-10 text-white"/>,
    },
    {
        title: "Watch everywhere",
        description:
            "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
        icon: <BoltIcon className="size-10 text-white"/>,
    },
    {
        title: "Create profiles for kids",
        description:
            "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
        icon: <UserCircleIcon className="size-10 text-white"/>,
    },
];

export default function MoreReasons() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-2xl sm:text-2xl font-bold mb-6 text-white">
                    More reasons to join
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 rounded-2xl shadow-lg h-full transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-sm text-white">{feature.description}</p>
                                </div>
                                <div className="text-4xl text-white ml-4">{feature.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
