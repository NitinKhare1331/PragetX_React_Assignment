import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ConnectionsHero from '../connectionsHero/ConnectionsHero';
import Xicon from "/icons/X.png"
import slack from "/icons/slack.jpg"
import salesforce from "/icons/salesforce.png";
import gmail from "/icons/gmail.png";
import hubspot from "/icons/hubspot.png";
import cursor from "/icons/cursor.png"
import magnifyingGlass from "/icons/magnifyingGlass.png"
import tick from "/icons/tick.jpg"
import growth from "/icons/growth.png"
import machine from "/icons/machine.png"

export default function HeroSection() {

    const left = [
        slack,
        gmail,
        salesforce,
        hubspot
    ];
    const right = [
        magnifyingGlass,
        tick,
        growth,
        machine,
    ];

    const tabs = [
        "Workflow Automation",
        "AI Agents",
        "Data & System Architech"
    ];

    const [active, setActive] = useState(tabs[0]);

    return (
        <section>
            <div className="max-w-7xl mt-12 mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-20">
                <div className="flex justify-center">
                    <div className="
                        inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm md:text-base font-medium
                        bg-linear-to-r from-indigo-50/90 via-sky-50/90 to-blue-50/90
                        shadow-inner border border-black/5
                    ">
                        <Sparkles className="text-blue-600" />
                        <span className="text-violet-700/90">
                            Trusted by businesses in finance, healthcare, logistics, retail, and beyond.
                        </span>
                    </div>
                </div>
                <h1 className="mt-8 md:mt-12 text-center font-extrabold leading-tight tracking-tight">
                    <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-[60px] 
                        bg-linear-to-b from-[#3063D6] to-[#2BC0E4] bg-clip-text text-transparent">
                        Automate,
                    </span>

                    <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-[60px] mt-2
                        bg-linear-to-b from-[#2F67D9] to-[#2BC0E4] bg-clip-text text-transparent">
                        Accelerate & Scale
                    </span>
                </h1>
                <p className="mt-6 md:mt-8 font-semibold text-center max-w-5xl mx-auto text-base md:text-lg lg:text-xl text-slate-700">
                    Unlock the future of work with AI Agents, Workflow Automation, and Smart Data Architecture.
                    From startups to enterprises, we help businesses cut costs, save time, and grow faster without the tech headaches.
                </p>
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="
                            inline-flex items-center justify-center px-8 py-3 rounded-full
                            text-white text-sm md:text-base font-medium shadow-md
                            bg-linear-to-r from-[#2B61D9] to-[#2BC0E4]
                            hover:shadow-lg transition
                        "
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="
                            inline-flex items-center justify-center px-6 py-3 rounded-full
                            text-slate-800 text-sm md:text-base font-medium
                            border border-gray-200 bg-white hover:bg-slate-50
                            transition
                        "
                    >
                        See How It Works
                    </a>
                </div>
            </div>
            <div className='-mt-30'>
                <ConnectionsHero leftIcons={left} rightIcons={right} />
            </div>

            <section className="relative w-full -mt-20 bg-linear-to-br from-white via-white to-blue-50/70">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[22px_22px] opacity-30 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Workflows
                        </span>{" "}
                        that work for you
                    </h2>

                    <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                        Automate repetitive tasks, empower AI-driven decision-making, and build a secure,
                        scalable digital backbone so your business runs faster, smarter,
                        and more reliably than ever.
                    </p>
                    <div className="mt-10 flex justify-center">
                        <div className="flex bg-white border border-gray-200 rounded-full shadow-lg p-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActive(tab)}
                                    className={`px-7 md:px-10 py-2.5 rounded-full text-sm md:text-base font-medium transition-all ${active === tab
                                        ? "bg-linear-to-r from-blue-600 to-sky-400 text-white shadow-lg"
                                        : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 mt-28 grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                            ✦ Smart Automation
                        </span>

                        <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                            <span className='text-blue-700'>Workflows</span> That Run Themselves
                        </h3>

                        <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-md">
                            Automation replaces manual, repetitive work with smart, AI-driven
                            workflows that run effortlessly.
                        </p>
                    </div>

                    <div className="relative rounded-4xl border border-[#E9EEF5] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-14  flex items-center justify-center bg-linear-to-br from-white via-white to-[#E8F3FF] mb-20">

                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-size-[18px_18px] opacity-[0.25]"></div>

                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300" fill="none">

                            <path d="M65 85 C 170 130, 210 120, 250 150" stroke="#4D8DFF" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
                            <path d="M65 150 C 170 170, 210 155, 250 150" stroke="#4D8DFF" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
                            <path d="M65 215 C 170 190, 210 180, 250 150" stroke="#4D8DFF" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />

                            <path d="M435 85 C 330 130, 290 120, 250 150" stroke="#18C1D6" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
                            <path d="M435 150 C 330 170, 290 155, 250 150" stroke="#18C1D6" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
                            <path d="M435 215 C 330 190, 290 180, 250 150" stroke="#18C1D6" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" />
                        </svg>
                        <div className="relative z-10 w-28 h-28 bg-white rounded-2xl border border-[#E5EAF1] shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex items-center justify-center">
                            <img src={Xicon} className="w-20 opacity-90" />
                        </div>
                        <div className="absolute left-0.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                            {[slack, salesforce, gmail].map((i) => (
                                <div className="w-10 h-10 rounded-full bg-white border border-[#E5EAF1] shadow-sm flex items-center justify-center ml-10">
                                    <img src={i} className="w-7" />
                                </div>
                            ))}
                        </div>
                        <div className="absolute right-0.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                            {[gmail, hubspot, salesforce].map((i) => (
                                <div className="w-10 h-10 rounded-full bg-white border border-[#E5EAF1] shadow-sm flex items-center justify-center mr-10">
                                    <img src={i} className="w-7" />
                                </div>
                            ))}
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-99">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full p-0.5 bg-linear-to-r from-[#A47CF3] to-[#67C6FF]">
                                    <div className="w-full h-full rounded-full bg-white"></div>
                                </div>
                                <div className="relative bg-white rounded-full px-2 py-2 flex items-center gap-2 text-sm font-medium text-[#145CFF]">
                                    Save up to 80% of admin time
                                    <img src={cursor} className="w-5" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    );
}
