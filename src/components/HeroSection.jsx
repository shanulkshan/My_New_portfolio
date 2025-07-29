import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Photo } from "./Photo";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const roles = ["Software Engineer", "Web Developer", "DevOps Enthusiast"];
  const finalText = "Software Engineer || Web Developer || DevOps Enthusiast";

  useEffect(() => {
    if (showFinal) {
      setCurrentText(finalText);
      return;
    }

    const timeout = setTimeout(() => {
      const currentRole = roles[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          if (currentIndex === roles.length - 1) {
            // Finished all roles, show final text
            setShowFinal(true);
          } else {
            // Move to next role
            setCurrentIndex(currentIndex + 1);
          }
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, showFinal, roles, finalText]);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      {/* Main content container */}
      <div className="container z-10 flex flex-col items-center justify-center max-w-6xl gap-12 mx-auto md:gap-16 md:flex-row">
        {/* Photo on the left */}
        <div className="flex justify-center w-full md:w-1/2 md:pr-6">
          <div className="scale-110 md:scale-125">
            <Photo />
          </div>
        </div>

        {/* Text on the right */}
        <div className="w-full space-y-6 text-center md:w-auto md:flex-1 md:max-w-none md:text-left md:pl-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              {" "}Shanuka
            </span>
            <span className="ml-2 opacity-0 text-gradient animate-fade-in-delay-2">
              {" "}Lakshan
            </span>
          </h1>

          <div className="w-full text-xl leading-relaxed opacity-0 md:text-2xl text-muted-foreground animate-fade-in-delay-3">
            <p className="mb-2">
              I create stellar web experiences with modern technologies. 
            </p>
            <p>
              Specializing as a{" "}
              <span className="font-semibold text-primary">
                {currentText}
                {!showFinal && <span className="animate-pulse">|</span>}
              </span>
            </p>
            {/* <p className="mt-2">
              I build interfaces that are both beautiful and functional.
            </p> */}
          </div>

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