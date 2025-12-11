import { useNightMode } from "../components/useNightMode";

export default function About() {
  const { isNightMode } = useNightMode();

  return (
    <section className={`py-12 px-6 md:px-12 lg:px-20 transition-colors duration-500 ${
      isNightMode ? "bg-[#EEEED7]" : "bg-[#EEEED7]"
    }`}>
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Heading with conditional background image */}
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
            about me
          </h3>
        </div>

        {/* About Text */}
        <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
          isNightMode ? "text-[#222222]" : "text-[#222222]"
        }`}>
          I'm a passionate software developer specializing in building web
          applications using{" "}
          <span className={`font-semibold ${isNightMode ? "text-black" : "text-black"}`}>
            React, Next.js
          </span>, and modern JavaScript technologies. I have{" "}
          <span className={`font-semibold ${isNightMode ? "text-black" : "text-black"}`}>
            2 years work experience
          </span>. I love solving real-world problems, contributing to open-source, and
          exploring UI/UX best practices.
        </p>
      </div>
    </section>
  );
}