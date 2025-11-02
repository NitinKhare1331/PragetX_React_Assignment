import React, { useState } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import swift from "/icons/swift.png";
import factory from "/factory.png";

const slides = [
    {
        id: 1,
        logo: swift,
        title: "SwiftLogix Smart Logistics Automation",
        desc: "SwiftLogix partnered with us to automate shipment tracking and customer support.",
        details:
            "By deploying AI agents, they reduced manual data entry by 75%, cut response times from hours to seconds, and improved overall delivery efficiency.",
        tags: ["AI Agents", "Predictive Analytics", "NLP Chatbot"],
        img: factory,
    },
    {
        id: 2,
        logo: swift,
        title: "AI Driven Warehouse Automation",
        desc: "End-to-end automation of inventory and distribution workflows.",
        details:
            "Enabled real-time tracking, automated routing, and predictive warehousing.",
        tags: ["Computer Vision", "Automation", "AI Agents"],
        img: factory,
    },
];

export default function SuccessStorySection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="w-full bg-linear-to-r from-gray-100 via-gray-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Success{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-700">
                                Stories
                            </span>{" "}
                            That Matter
                        </h2>
                        <p className="mt-2 text-slate-600 text-sm md:text-base">
                            See how companies are cutting costs and boosting efficiency with our AI-powered solutions.
                        </p>
                    </div>

                    <button className="px-6 py-3 rounded-full text-sm font-medium text-white bg-linear-to-r from-blue-600 to-sky-500 shadow hover:shadow-lg transition flex items-center gap-2">
                        Read All Case Studies <ArrowRight size={16} />
                    </button>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((s, i) => (
                            <div
                                key={i}
                                className="min-w-full bg-white rounded-3xl border border-gray-200 shadow-md p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center"
                            >
                                <div className="flex-1">
                                    <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-linear-to-r from-purple-100 via-blue-50 to-blue-100 text-slate-700 flex items-center gap-1 border border-purple-200/40 shadow-sm w-fit mb-4">
                                        <Sparkles size={14} /> Logistics & Supply Chain
                                    </span>

                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={s.logo} className="w-10 h-10 object-contain" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                                            {s.title.split(" ").slice(0, 3).join(" ")} <br />
                                            <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                                                {s.title.split(" ").slice(3).join(" ")}
                                            </span>
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm md:text-base mt-2">
                                        {s.desc}
                                    </p>
                                    <p className="text-slate-600 text-sm md:text-base mt-1 mb-5">
                                        {s.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5 text-sm">
                                        {s.tags.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border text-xs shadow-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a href="#" className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">
                                        Read Case Study <ArrowUpRight size={14} />
                                    </a>
                                </div>
                                <div className="relative flex-1">
                                    <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[300px] md:h-[360px]">
                                        <img src={s.img} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:bg-slate-100 text-gray-700"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow hover:bg-slate-100 text-gray-700"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
