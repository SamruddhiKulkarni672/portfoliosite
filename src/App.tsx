import { NightModeProvider } from "./components/useNightMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function AppContent() {
  return (
    <div className="w-screen">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default function App() {
  return (
    <NightModeProvider>
      <AppContent />
    </NightModeProvider>
  );
}