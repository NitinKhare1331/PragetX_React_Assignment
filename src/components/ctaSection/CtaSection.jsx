import React from "react";

export default function CTASection() {
    return (
        <section className="w-full pb-10 px-4 mb-4">
            <div
                className="max-w-6xl mx-auto rounded-4xl p-16 text-center relative overflow-hidden"
                style={{
                    background: `linear-gradient(90deg, #ff9bbf 0%, #8fcaff 100%)`,
                }}
            >
                <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
                        backgroundSize: "18px 18px",
                    }}
                />
                <div className="absolute top-8 left-8 text-white text-4xl opacity-90">
                    ✦
                </div>
                <div className="absolute bottom-8 right-8 text-white text-4xl opacity-90">
                    ✦
                </div>
                <div className="relative z-10">
                    <p className="text-white/90 text-sm mb-3">
                        Our workflows, powered by AI — simple, fast, reliable
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Ready to Automate Your <br /> Business with AI?
                    </h2>

                    <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium text-sm shadow hover:shadow-lg transition">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
