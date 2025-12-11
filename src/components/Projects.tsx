"use client";

import { useRef } from "react";
import { useNightMode } from "../components/useNightMode";

type Project = {
  title: string;
  description: string;
  tech: string;
  image?: string;
  link?: string; 
};

const projects: Project[] = [
  {
    title: "Tulika Drawing App",
    description: "A full-featured drawing app supporting layers, undo/redo, and shape tools.",
    tech: "React, Canvas API, Tailwind",
    image: "/111.png",
    link: "https://tulikadigitaldrawingapp.vercel.app/",
  },
    {
    title: "Tulika Landing Page (Promotion)",
    description: "Landing page promoting Tulika Digital Drawing App.",
    tech: "React, Tailwind, Vite",
    image: "/p3.png",
    link: "https://tulikapromo.vercel.app/",
  },
  {
    title: "Motion Melody",
    description:
      "Wave your hands to control music using AI hand-tracking — like conducting your own orchestra.",
    tech: "React, Vite, Tailwind, Tone.js, MediaPipe Hands",
    image: "/p2.png",
    link: "https://motion-melody-psi.vercel.app/",
  },
 
   {
    title: "E-Commerce Admin Dashboard",
    description: "Manage products, variants, and orders with a dynamic dashboard.",
    tech: "Next.js, Redux RTK Query, ShadCN UI",
    image: "/p4.png",
    link: "https://tulikapromo.vercel.app/",
  },
];

export default function Projects() {

   const { isNightMode } = useNightMode();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#EEEED7] py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28">
        {/* Section Heading */}
        <div className="relative w-40 md:w-56 mb-10">
          {isNightMode ? (
            // Night mode image
            <img 
              src="/Group 5.png"  // Your night mode image path
              alt="About icon night" 
              className="w-full h-auto" 
            />
          ) : (
            // Day mode image
            <img 
              src="/Group 3.svg"  // Your original day mode image
              alt="About icon" 
              className="w-full h-auto" 
            />
          )}
          <h3 className={`absolute inset-0 flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-normal text-center transition-colors duration-500 ${
            isNightMode ? "text-black" : "text-black"
          }`}>
             Projects
          </h3>
        </div>

        {/* Scrollable Cards */}
        <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth no-scrollbar">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[50%] xl:w-[48%] border border-[#2a2a2a] shadow-sm p-4 mx-2"
            >
              <div className="w-full h-72 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-500 text-sm">Image Placeholder</div>
                )}
              </div>

              {/* Card Content */}
              <div className="mt-4 text-center">
                <h4 className="text-2xl font-semibold text-black">{proj.title}</h4>
                <p className="mt-2 text-base text-gray-700">{proj.description}</p>
                <p className="mt-1 text-sm text-gray-500">Tech: {proj.tech}</p>

                {/* Link Button */}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => scroll("left")}
            className="border border-gray-500 px-4 py-2 text-xl hover:bg-yellow-100 transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-gray-500 px-4 py-2 text-xl hover:bg-yellow-100 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
