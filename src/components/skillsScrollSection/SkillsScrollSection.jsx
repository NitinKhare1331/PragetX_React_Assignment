import React from "react";
import { BrainCog, Landmark, Factory, GraduationCap, Film } from "lucide-react";

export default function SkillsScrollSection() {
  const skills = [
    { icon: <Factory size={18} />, title: "Manufacturing & Innovation" },
    { icon: <Landmark size={18} />, title: "Government & Public Sector" },
    { icon: <BrainCog size={18} />, title: "Artificial Intelligence" },
    { icon: <GraduationCap size={18} />, title: "Education" },
    { icon: <Film size={18} />, title: "Media & Entertainment" },
  ];

  // Duplicate list for seamless infinite scroll
  const scrollList = [...skills, ...skills];

  return (
    <section className="relative w-full -mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-44 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-44 bg-linear-to-l from-white to-transparent z-10" />
      <div className="animate-scroll flex gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {scrollList.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-medium transition relative group cursor-pointer"
          >
            <span className="group-hover:text-blue-600 transition">
              {skill.icon}
            </span>

            <span className="group-hover:text-blue-600 transition">
              {skill.title}
            </span>

            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
