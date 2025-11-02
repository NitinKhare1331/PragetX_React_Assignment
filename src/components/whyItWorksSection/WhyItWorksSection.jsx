import React from "react";
import { Sparkles } from "lucide-react";
import placeholder1 from "/placeholder1.png"
import placeholder2 from "/placeholder2.png"
import placeholder3 from "/placeholder3.png"
import placeholder4 from "/placeholder4.png"
import placeholder5 from "/placeholder5.png"

export default function WhyItWorksSection() {
    const cards = [
        {
            title: "Drowning in Repetition",
            desc: "Let automation handle routine tasks for you.",
            img: placeholder1
        },
        {
            title: "When Accuracy Matters",
            desc: "AI ensures error-free, instant execution.",
            img: placeholder2
        },
        {
            title: "Scaling Too Fast",
            desc: "Grow without overwhelming your team.",
            img: placeholder3
        },
        {
            title: "Always On",
            desc: "Automation never sleeps, unlike humans.",
            img: placeholder4
        }
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex justify-center mb-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-linear-to-r from-purple-100 via-blue-50 to-blue-100 text-slate-600 flex items-center gap-2 border border-purple-200/40 shadow-sm">
                        <Sparkles size={14} />
                        Always On
                    </span>
                </div>

                <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-14 leading-tight">
                    The Right <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-500">Time</span> is Now
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
                            <h3 className="text-lg md:text-xl font-bold mb-1 bg-clip-text text-transparent bg-linear-to-r from-[#6A11CB] to-[#2575FC]">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-500 mb-4">{card.desc}</p>
                            <div
                                className="w-full h-44 md:h-72 rounded-xl relative overflow-hidden shadow-inner bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${card.img})`
                                }}
                            >
                                <div
                                    className="absolute "
                                    style={{
                                        opacity: 0.9,
                                        mixBlendMode: 'overlay'
                                    }}
                                />
                                <div className="absolute  pointer-events-none rounded-xl border border-white/20" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-white rounded-3xl border border-gray-200 shadow-md p-8 md:p-14">

                        <div className="flex-1">
                            <div className="mb-4 flex items-center">
                                <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-linear-to-r from-purple-100 via-blue-50 to-blue-100 text-slate-600 flex items-center gap-2 border border-purple-200/40 shadow-sm">
                                    <Sparkles size={14} />Why<span className="font-semibold">Pragetx.ai</span>
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                An <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">AI innovation</span> partner
                                <br /> trusted by organizations worldwide!
                            </h2>

                            <p className="text-slate-600 text-base md:text-md mb-6">
                                Join hands with our skilled team to turn bold ideas into <br/>
                                practical, scalable AI solutions.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium text-white bg-linear-to-r from-blue-600 to-sky-500 shadow hover:shadow-lg transition-all"
                            >
                                Let’s build the future together with AI →
                            </a>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[250px] md:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg">
                                <img src={placeholder5} className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
}
