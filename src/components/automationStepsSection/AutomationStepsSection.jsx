import React from "react";
import step1 from "/step1.png";
import step2 from "/step2.png";
import step3 from "/step3.png";
import { Sparkles } from "lucide-react";

export default function AutomationStepsSection() {
    const steps = [
        {
            title: "Choose your trigger",
            desc: "Select the event that starts your workflow: email, form, or call.",
            img: step1,
        },
        {
            title: "Build the workflow",
            desc: "Drag-and-drop steps, set conditions, and let AI plan the path.",
            img: step2,
        },
        {
            title: "Let AI handle the rest",
            desc: "Tasks executed automatically, data updated, and notifications sent.",
            img: step3,
        },
    ];

    return (
        <section className="w-full overflow-auto bg-linear-to-r from-[#F2EDF9] via-[#EEEDF6] to-[#E8F1F8] py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1 rounded-full text-xs font-medium text-blue-600 shadow-sm">
                    <Sparkles /> Trigger Actions
                </div>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                    Trigger. <span className="text-blue-600">Automate.</span> Done.
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 flex flex-col hover:shadow-xl transition"
                        >
                            <h3
                                className="text-lg md:text-xl font-semibold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-left drop-shadow-sm"
                            >
                                {step.title}
                            </h3>
                            <p className="text-sm text-slate-600 mt-1 text-left">{step.desc}</p>
                            <div className="mt-4 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
