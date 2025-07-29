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
              I am a fourth year undergraduate student who has completed
              my <span class='text-highlight font-semibold'>B.Sc(Hons) Information Technology specialization in information technology </span> 
              degree at the Sri Lanka Institute of Information Technology 
              and is looking forward to graduating.
            </p>

            <p className="text-muted-foreground">
              I have <span class='text-highlight font-semibold'>over two years</span> of experience in web application development and
              have also completed a <span class='text-highlight font-semibold'>6-month internship as a Full-Stack web developer</span>.
            </p>

            <p className="text-muted-foreground">
              In addition, I am passionate about <span class='text-highlight font-semibold'>DevOps</span> and have a keen interest
              in the tools and technologies associated with it.
              I also have hands-on experience in their use.
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
                  {/* Custom SVG for Software Engineering */}
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h6M11 11h6M11 15h6" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Builds responsive websites and dynamic web apps and mobile apps using modern frameworks.
                     Focused on clean design, fast performance, and seamless user experience.

                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* Infinity SVG for DevOps */}
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5 8c-2 0-4 2-5.5 4s-3.5 4-5.5 4C3.57 16 2 14.43 2 12.5S3.57 9 5.5 9c2 0 4 2 5.5 4s3.5 4 5.5 4c1.93 0 3.5-1.57 3.5-3.5S19.43 8 17.5 8z" />
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">DevOps Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Streamlines development and operations using CI/CD, containerization, and cloud tools. Focused on automation, scalability, and faster delivery cycles.

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
