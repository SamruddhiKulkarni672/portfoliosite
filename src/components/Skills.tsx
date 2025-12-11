import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "React.j",
      logo: "/logos/react.svg",
      bgColor: "bg-blue-500",
    },
    {
      name: "Next.js",
      logo: "/logos/next.svg",
      bgColor: "bg-black",
    },
    {
      name: "Tailwind",
      logo: "/logos/taiwind.svg",
      bgColor: "bg-cyan-500",
    },
    {
      name: "Express",
      logo: "/logos/express.svg",
      bgColor: "bg-gray-800",
    },
     {
      name: "redux",
      logo: "/logos/redux.svg",
      bgColor: "bg-purple-900",
    },
     {
      name: "Tone.js",
      logo: "/logos/tone.svg",
      bgColor: "bg-pink-500",
    },
     {
      name: "canvas.js",
      logo: "/logos/canvas.svg",
      bgColor: "bg-yellow-700",
    },
     {
      name: "mediapipes google",
      logo: "/logos/google.svg",
      bgColor: "bg-emerald-400 ",
    },


  ];

  return (
    <section className="bg-[#EEEED7]   py-10 flex items-center justify-center w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 rounded-full px-4 py-2 shadow text-white font-medium text-sm ${skill.bgColor}`}
          >
            <img src={skill.logo} alt={skill.name} className="w-5 h-5" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
