import React from "react";
import slack from "/icons/slack.jpg";
import gmail from "/icons/gmail.png";
import hubspot from "/icons/hubspot.png";
import salesforce from "/icons/salesforce.png";

export default function ToolsSection() {

    const grid = [
        "", "", "", "", "", "", "", "", "", "",
        "", "", "slack", "", "slack", "", "", "", "", "",
        "gmail", "", "hubspot", "", "gmail", "", "", "",
        "", "", "salesforce", "", "salesforce", "", "", "", "",
        "", "", "", "", "", "", "", "",
    ];

    const iconMap = { slack, gmail, hubspot, salesforce };

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10">
                    Here are the{" "}
                    <span className="relative text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
                        Tools
                        <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-70"></span>
                    </span>{" "}
                    & Software We Use
                </h2>
                <div className="grid grid-cols-9 md:grid-cols-9 gap-5 justify-center mx-auto max-w-[850px]">
                    {grid.map((item, i) => {
                        const icon = iconMap[item];

                        return (
                            <div
                                key={i}
                                className={`w-12 h-12 md:w-[90px] md:h-[90px] rounded-2xl flex items-center justify-center transition-all
                ${icon
                                        ? "bg-white hover:scale-110 shadow-xl"
                                        : "bg-linear-to-br from-white via-[#f8faff] to-[#eef2ff]"
                                    }`}
                                style={
                                    icon
                                        ? {
                                            border: "2px solid transparent",
                                            borderRadius: "18px",
                                            backgroundImage:
                                                "linear-gradient(#fff,#fff),linear-gradient(45deg,#4ea4fc,#a55bff)",
                                            backgroundOrigin: "border-box",
                                            backgroundClip: "content-box, border-box",
                                            boxShadow: "0 0 35px rgba(80,132,255,0.25)",
                                        }
                                        : { opacity: 0.55 }
                                }
                            >
                                {icon && (
                                    <img
                                        src={icon}
                                        className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-[0_4px_10px_rgba(80,132,255,0.4)]"
                                        alt=""
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
