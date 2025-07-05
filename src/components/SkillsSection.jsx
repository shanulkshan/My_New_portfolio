import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  // Brand icons from react-icons
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiAmazon,
  SiLaravel
} from "react-icons/si";
import { Terminal } from "lucide-react";

const skillIcons = {
  "HTML/CSS": <SiHtml5 className="w-8 h-8 text-orange-500" />,
  "JavaScript": <SiJavascript className="w-8 h-8 text-yellow-400" />,
  "React": <SiReact className="w-8 h-8 text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
  "React Native": <SiReact className="w-8 h-8 text-cyan-400" />,
  "Flutter": <SiFlutter className="w-8 h-8 text-blue-400" />,
  "Node.js": <SiNodedotjs className="w-8 h-8 text-green-500" />,
  "Express": <SiExpress className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
  "Laravel": <SiLaravel className="w-8 h-8 text-red-600" />,
  "MongoDB": <SiMongodb className="w-8 h-8 text-green-600" />,
  "MySQL": <SiMysql className="w-8 h-8 text-blue-600" />,
  "AWS": <SiAmazon className="w-8 h-8 text-orange-400" />,
  "Git/GitHub": <SiGithub className="w-8 h-8 text-gray-900 dark:text-white" />,
  "Docker": <SiDocker className="w-8 h-8 text-blue-500" />,
  "Figma": <SiFigma className="w-8 h-8 text-red-500" />,
  "VS Code": <Terminal className="w-8 h-8 text-blue-600" />,
};

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Flutter", category: "mobile" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },

  // Cloud & Tools
  { name: "AWS", category: "tools" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "mobile", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="relative px-4 py-24 ">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-secondary/70 text-forefround hover:bd-secondary"
                  : "border border-primary text-primary hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="p-6 text-center transition-all duration-300 border rounded-lg shadow-xs bg-card border-border hover:border-primary card-hover"
            >
              <div className="flex flex-col items-center gap-3">
                <div>
                  {skillIcons[skill.name]}
                </div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
