import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Shopping mall management system",
    description: "This webapp is built using the MERN stack with an attractive UI. It is deployed on Vercel with a CI/CD pipeline built using Github actions. This webapp allows users to find shops in the shopping mall and view the items in them. Sellers can also create shops and add items to them. After creating a shop, the admin must approve them..",
    images: ["/projects/shopping_mall1.png","/projects/shopping_mall2.png","/projects/shopping_mall3.png", "/projects/shopping_mall4.png"],
    tags: ["React", "TailwindCSS", "GitHub Actions", "Node.js", "MongoDB"],
    demoUrl: "https://shopping-mall-dun.vercel.app/",
    githubUrl: "https://github.com/shanulkshan/Shopping-Mall.git",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    images: ["/projects/project2.png"],
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    images: ["/projects/project3.png"],
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// ProjectCard component with expandable description and image carousel
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // Function to truncate text to approximately 4 lines (about 120-150 characters)
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const shouldShowSeeMore = project.description.length > 120;
  const displayDescription = isExpanded ? project.description : truncateText(project.description);

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Modal functions
  const openModal = (imageIndex) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Close modal on escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
    if (e.key === 'ArrowLeft') {
      prevModalImage();
    }
    if (e.key === 'ArrowRight') {
      nextModalImage();
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-xs group bg-card card-hover">
        <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openModal(currentImageIndex)}>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Zoom indicator */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        
          {/* Carousel Navigation - only show if more than 1 image */}
          {project.images.length > 1 && (
            <>
              {/* Previous/Next buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute p-1 text-white transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-black/50 hover:bg-black/70 group-hover:opacity-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute p-1 text-white transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-black/50 hover:bg-black/70 group-hover:opacity-100"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots indicator */}
              <div className="absolute flex gap-1 -translate-x-1/2 bottom-2 left-1/2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              {displayDescription}
            </p>
            {shouldShowSeeMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 text-sm font-medium transition-colors duration-300 text-primary hover:text-primary/80"
              >
                {isExpanded ? "See less" : "See more"}
              </button>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={project.demoUrl}
                target="_blank"
                className="transition-colors duration-300 text-foreground/80 hover:text-primary"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="transition-colors duration-300 text-foreground/80 hover:text-primary"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for expanded image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute z-10 p-2 text-white transition-all duration-300 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <img
              src={project.images[modalImageIndex]}
              alt={`${project.title} - Image ${modalImageIndex + 1}`}
              className="object-contain w-full h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Modal Navigation - only show if more than 1 image */}
            {project.images.length > 1 && (
              <>
                {/* Previous/Next buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModalImage();
                  }}
                  className="absolute p-2 text-white transition-all duration-300 -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModalImage();
                  }}
                  className="absolute p-2 text-white transition-all duration-300 -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Modal Dots indicator */}
                <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImageIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === modalImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image counter */}
            {project.images.length > 1 && (
              <div className="absolute px-3 py-1 text-sm text-white rounded-full top-4 left-4 bg-black/50">
                {modalImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="flex items-center gap-2 mx-auto cosmic-button w-fit"
            target="_blank"
            href="https://github.com/shanulkshan"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
