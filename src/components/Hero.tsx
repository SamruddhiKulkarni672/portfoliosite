 




// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="bg-[#FFD24D] relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10">

//       {/* LAMP IMAGE */}
//       <img
//         src="/lamp.svg"
//         alt="Lamp"
//         className="absolute top-4 right-4 w-20 md:w-28 lg:w-32"
//       />

      
// <motion.div
//   initial={{ opacity: 0.5, scale: 0.8, y: 0 }}
//   animate={{
//     opacity: [0.6, 0.9, 0.45],
//     scale: [0.85, 1.8, 0.9],
//     y: [-3, -7, -3],
//   }}
//   transition={{
//     duration: 2.6,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   style={{
//     position: "absolute",
//     left: "93%", // near lamp
//     top: "20%",
//     width: "30px",
//     height: "30px",
//     borderRadius: "50%",
//     background:
//  "radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,170,0.9), rgba(255,255,120,0.4), rgba(255,255,100,0))",
//      filter: "blur(3px)",
//     pointerEvents: "none",
//     zIndex: 20,
//   }}
// />


//       {/* MAIN CONTENT */}
//       <div className="flex flex-col md:flex-row items-center gap-y-10 md:gap-x-12 max-w-7xl mx-auto">
        
//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center md:text-center"
//         >
//           <p className="text-gray-700 text-lg md:text-xl lg:text-3xl">Hello</p>
//           <p className="text-xl md:text-2xl text-gray-700 lg:text-4xl mt-1">
//             I’m <span className="font-bold text-black">Samruddhi Kulkarni</span>
//           </p>
//           <h2 className="text-4xl md:text-5xl lg:text-8xl font-extrabold leading-tight mt-4 text-black">
//             Software <br className="hidden md:block" /> Developer
//           </h2>
//         </motion.div>

//         {/* Illustration */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <img
//             src="/image 10.svg"
//             alt="Software Developer Illustration"
//             className="w-64 sm:w-72 md:w-96 lg:w-[600px] lg:ml-10 lg:mt-10 h-auto"
//           />
//         </motion.div>
//       </div>

//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useNightMode } from "../components/useNightMode";

export default function Hero() {
  const { isNightMode, toggleNightMode } = useNightMode();

  return (
    <section 
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10 transition-colors duration-500 ${
        isNightMode ? "bg-[#653bb1]" : "bg-[#FFD24D]"
      }`}
      id="home"
    >

      {/* Clickable Lamp Image */}
      <motion.img
        src="/lamp.svg"
        alt="Lamp"
        className="absolute top-4 right-4 w-20 md:w-28 lg:w-32 cursor-pointer z-10"
        onClick={toggleNightMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      {/* Lamp Light Effect */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8, y: 0 }}
        animate={{
          opacity: isNightMode ? [0.8, 1, 0.6] : [0.6, 0.9, 0.45],
          scale: isNightMode ? [1, 1.2, 1] : [0.85, 1.8, 0.9],
          y: isNightMode ? [-2, -5, -2] : [-3, -7, -3],
        }}
        transition={{
          duration: isNightMode ? 1.5 : 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "93%",
          top: "20%",
          width: "40px",
          height: "50px",
          borderRadius: "50%",
          background: isNightMode 
            ? "radial-gradient(circle, rgba(255,255,255,1), rgba(200,200,255,0.8), rgba(150,150,255,0.3), rgba(100,100,255,0))"
            : "radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,170,0.9), rgba(255,255,120,0.4), rgba(255,255,100,0))",
          filter: "blur(3px)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-y-10 md:gap-x-12 max-w-7xl mx-auto">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-center"
        >
          <p className={`text-lg md:text-xl lg:text-3xl transition-colors duration-500 ${
            isNightMode ? "text-gray-300" : "text-gray-700"
          }`}>
            Hello
          </p>
          <p className={`text-xl md:text-2xl lg:text-4xl mt-1 transition-colors duration-500 ${
            isNightMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I'm <span className={`font-bold ${isNightMode ? "text-[#f1e2ae] text-shadow-[0_0_60px_rgba(255,255,255,0.2)]" : "text-black"}`}>
              Samruddhi Kulkarni
            </span>
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-8xl font-extrabold leading-tight mt-4 transition-colors duration-500 ${
            isNightMode
  ? "text-[#f3ebd0] text-shadow-[0_0_60px_rgba(255,255,255,0.6)]"
  : "text-black"

          }`}>
            Software <br className="hidden md:block" /> Developer
          </h2>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/image 10.svg"
            alt="Software Developer Illustration"
            className="w-64 sm:w-72 md:w-96 lg:w-[600px] lg:ml-10 lg:mt-10 h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}