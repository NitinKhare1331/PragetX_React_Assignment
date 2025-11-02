import React from "react";
import growth from "/growth.jpg";
import { Sparkles } from "lucide-react";

export default function GrowthSection() {
    const points = [
        "Reduce repetitive admin tasks by up to 80%.",
        "Average 22% reduction in operating costs.",
        "Teams scale without adding headcount."
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-center mb-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-linear-to-r from-purple-100 via-blue-50 to-blue-100 text-slate-600 flex items-center gap-2 border border-purple-200/40 shadow-sm">
                        <Sparkles size={14} /> Faster Growth
                    </span>
                </div>
                <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-16">
                    Less Busywork. More{" "}
                    <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Growth.
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        {points.map((text, i) => {
                            const isActive = i === 0;

                            return (
                                <div key={i} className="relative flex items-center gap-3">
                                    <div
                                        className={`relative w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold bg-white z-10 ${isActive ? "text-blue-600" : "text-gray-500 border border-gray-300"
                                            }`}
                                        style={
                                            isActive
                                                ? {
                                                    background:
                                                        "linear-gradient(white, white) padding-box, linear-gradient(90deg, #A855F7, #38BDF8) border-box",
                                                    border: "2px solid transparent",
                                                }
                                                : {}
                                        }
                                    >
                                        {i + 1}
                                    </div>
                                    <div
                                        className={`w-6 h-0.5 ${isActive ? "bg-linear-to-r from-purple-400 to-sky-400" : "bg-gray-200"
                                            }`}
                                    ></div>
                                    <div
                                        className={`relative flex-1 rounded-full text-sm md:text-base font-medium py-3 px-5 ${isActive ? "bg-white text-slate-800" : "bg-gray-50 text-gray-600 border border-gray-200"
                                            }`}
                                        style={
                                            isActive
                                                ? {
                                                    background:
                                                        "linear-gradient(white, white) padding-box, linear-gradient(90deg, #A855F7, #38BDF8) border-box",
                                                    border: "2px solid transparent",
                                                }
                                                : {}
                                        }
                                    >
                                        <span
                                            className={
                                                isActive
                                                    ? "bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                                                    : ""
                                            }
                                        >
                                            {text}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full h-[280px] md:h-[300px] bg-slate-900 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                        <img src={growth} alt="Growth graphic" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
}
