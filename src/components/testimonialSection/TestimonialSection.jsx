import React from "react";
import reviewer1 from "/people/reviewer1.png";
import reviewer2 from "/people/reviewer2.png";
import reviewer3 from "/people/reviewer3.png";

export default function TestimonialSection() {
    const reviewers = [
        {
            img: reviewer1,
            name: "Priyanka Sharma",
            role: "CTO, ShopNow",
            desc: `"Pragetx.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."`
        },
        {
            img: reviewer2,
            name: "Alex Sharma",
            role: "CTO, ShopNow",
            desc: "Pragetx.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."
        },
        {
            img: reviewer3,
            name: "Michele Sharma",
            role: "CTO, ShopNow",
            desc: "Pragetx.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth."
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Trusted by Industry{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-700">
                            Leaders
                        </span>
                    </h2>
                    <p className="mt-2 text-slate-600">
                        See what our clients say about scaling smarter with AI agents.
                    </p>
                </div>
                <div className="md:hidden flex flex-col gap-10">
                    {reviewers.map((r, i) => (
                        <div key={i} className="space-y-4">
                            <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
                                <img src={r.img} alt={r.name} className="w-full h-64 object-cover rounded-lg" />
                                <div className="flex items-center gap-2 mt-3">
                                    <img src={r.img} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="text-sm font-semibold">{r.name}</p>
                                        <p className="text-xs text-gray-500">{r.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                                <div className="relative p-5 rounded-xl overflow-hidden">
                                    <div
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 35%, #e0f2fe 100%)",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.10) 1.5px, transparent 1px)",
                                            backgroundSize: "15px 15px",
                                            opacity: 0.5,
                                        }}
                                    />
                                    <div className="relative mb-2">
                                        <span className="text-blue-600 text-xl font-bold">“</span>
                                    </div>
                                    <p className="relative text-sm text-slate-700 leading-relaxed">
                                        {r.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
                    {reviewers.map((r, i) => (
                        <div key={i} className="bg-white rounded-xl border border-gray-200 shadow p-4">
                            <img src={r.img} alt={r.name} className="w-full h-72 object-cover rounded-lg" />
                            <div className="flex items-center gap-2 mt-3">
                                <img src={r.img} className="w-8 h-8 rounded-full" />
                                <div>
                                    <p className="text-sm font-semibold">{r.name}</p>
                                    <p className="text-xs text-gray-500">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden md:grid grid-cols-3 gap-6">
                    {reviewers.map((r, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
                        >
                            <div className="relative p-5 rounded-xl overflow-hidden">
                                <div
                                    className="absolute inset-0 rounded-xl"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #f8fafc 0%, #eef2ff 35%, #e0f2fe 100%)",
                                    }}
                                />
                                <div
                                    className="absolute inset-0 rounded-xl"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(0,0,0,0.10) 1.5px, transparent 1px)",
                                        backgroundSize: "15px 15px",
                                        opacity: 0.5,
                                    }}
                                />
                                <div className="relative mb-2">
                                    <span className="text-blue-600 text-xl font-bold">“</span>
                                </div>
                                <p className="relative text-sm text-slate-700 leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <img src={r.img} className="w-8 h-8 rounded-full border" />
                                <div>
                                    <p className="text-sm font-semibold">{r.name}</p>
                                    <p className="text-xs text-gray-500">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
