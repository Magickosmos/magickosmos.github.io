import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AskAI from "@/components/AskAI";
import AutoClicker from "@/components/AutoClicker";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Left content */}
        {/*
          - Remove 'px-6 py-8' for zero padding (or set to 'p-0')
          - Add 'lg:border-r lg:border-gray-700' for the right border (Tailwind's 'gray-700' is a good standard grey)
        */}
        <div className="flex-1 max-w-2xl lg:border-r lg:border-gray-700">
          <div className="px-6 py-8"> {/* Re-add padding inside for content spacing */}
            <Hero />
            <About />
            <Experience />
            <Projects />
            <AskAI />
            <AutoClicker />
          </div>
        </div>

        {/* Right background canvas */}
        <div className="hidden lg:block flex-1 relative">
          <BackgroundCanvas />
        </div>
      </div>
    </main>
  );
}