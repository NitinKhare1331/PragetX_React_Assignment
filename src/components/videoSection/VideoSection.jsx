import React from "react";
import { Play, ArrowRight } from "lucide-react";
import videoImg from "/videoImg.png";

export default function VideoSection() {
    return (
        <section className="w-full py-14">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer w-full">
                    <div className="relative w-full aspect-video md:aspect-21/9]">
                        <img
                            src={videoImg}
                            alt="AI video"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <p className="absolute top-3 left-4 text-white text-sm md:text-lg max-w-[60%]">
                            AI that learns, adapts, and powers innovation across industries.
                        </p>

                        <button className="absolute top-3 right-4 bg-linear-to-r from-blue-600 to-sky-500 text-white text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition">
                            Read More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                        </button>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                <Play size={26} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
