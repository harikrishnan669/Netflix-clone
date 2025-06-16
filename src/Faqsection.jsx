import React from 'react';
import {ChevronDownIcon} from "lucide-react";

const faqsections = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devicesYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can i watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question:"How do i cancel?",
        answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
        question:"What can i watch on netflix?",
        answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question:"Is netflix good for kids?",
        answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]
export default function FAQSection() {
    const[opening, setOpening] = React.useState(null);
    const toggleOpening = (index) => {
        setOpening(opening === index? null:index);
    };
    return (
        <section className="text-white px-4 py-10">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-2xl sm:text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
                <div className="space-y-2 max-3-xl mx-auto">
                    {faqsections.map((faq, index) => (
                        <div key={index} className="bg-[#2b2b2b] px-5 py-6 hover:bg-[#3a3a3a] transition">
                            <button onClick={()=>toggleOpening(index)} className="w-full h-full flex justify-between items-centerp-5">
                                <span className="text-lg">{faq.question}</span>
                                <ChevronDownIcon
                                    className={`w-6 h-6 transform transition-transform ${
                                        opening === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {opening === index &&(
                                <div className="px-5 pb-5 text-lg py-5 text-white-300">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
)
}