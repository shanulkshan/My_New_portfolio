import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      {" "}
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/assets/Shanuka%20Lakshan%20CV.pdf"
                download="Shanuka_Lakshan_CV.pdf"
                className="px-6 py-2 transition-colors duration-300 border rounded-full border-primary text-primary hover:bg-primary/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
