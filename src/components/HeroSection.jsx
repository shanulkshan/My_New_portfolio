import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Photo } from "./Photo";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      {/* Main content container */}
      <div className="container z-10 flex flex-col items-center justify-center max-w-5xl gap-12 mx-auto md:flex-row">
        {/* Photo on the left */}
        <div className="flex justify-center w-full md:w-1/2">
          <Photo />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-[700px] space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              {" "}Shanuka
            </span>
            <span className="ml-2 opacity-0 text-gradient animate-fade-in-delay-2">
              {" "}Lakshan
            </span>
          </h1>

          <p className="w-full text-xl leading-relaxed opacity-0 md:text-2xl text-muted-foreground animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground"> Scroll </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
