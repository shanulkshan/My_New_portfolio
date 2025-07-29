import { useState } from "react";

const certificateData = [
  {
    image: "/projects/aws.png",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    description: [
      "🧠 Basics of cloud computing and AWS infrastructure.",
      "⚙️ Core services: EC2, Lambda, S3, EBS, RDS, DynamoDB.",
      "🔐 IAM, security, compliance best practices.",
      "🏗️ Load balancing, auto scaling, monitoring with CloudWatch.",
      "💰 AWS pricing, billing tools, and support plans.",
    ],
    link: "https://www.credly.com/badges/0942415e-45d7-4554-8125-508e83e97e62/linked_in_profile",
  },
  {
    image: "/projects/docker.jpeg",
    title: "Introduction to Containerization - CoDeKu DevOps Academy",
    description: [
      "🚫 Solve dependency issues with containerization.",
      "📦 Learn container basics and how they work.",
      "🐳 Understand Docker and its key components.",
      "⚙️ Install Docker and troubleshoot setup problems.",
      "🖼️ Manage Docker images and containers.",
      "📥 Pull from Docker Hub and run containers.",
      "🌐 Expose ports for containerized applications.",
      "🧭 Use essential Docker commands confidently."
    ],
    link: "https://www.linkedin.com/posts/shanuka-lakshan_im-happy-to-share-that-ive-obtained-a-new-activity-7312732326222827521-M3Jy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbrtDgBoDVmc4doQZ9cfrAec_py3J35pKA",
  },
  {
    image: "/projects/mongo.png",
    title: "Introduction to MongoDB",
    description: [
      "🗂️ Learn how MongoDB stores data using JSON-like documents.",
      "☁️ Set up and manage databases with MongoDB Atlas (cloud platform)",
      "🔧 Perform CRUD operations (Create, Read, Update, Delete).",
      "🧠 Understand indexing and query optimization.",
      "🔄 Explore aggregation pipelines for advanced data processing.",
      "🔐 Get introduced to ACID transactions in NoSQL",
      "🔍 Build search features using Atlas Search.",
      "📊 Design scalable and flexible data models.",
      "🧪 Practice through interactive labs and real-world exercises.",
    ],
    link: "https://learn.mongodb.com/c/oxSfuRZMS5uwryzBMNrPfA",
  },
  {
    image: "/projects/python.jpeg",
    title: "Python for Beginners - University of Moratuwa",
    description: [
      "🐍 Python Programming Foundations - Learn the basics of Python syntax: variables, data types, and expressions. Master control flow: conditional statements, loops, and iterations. Work with lists, strings, files, and handle errors gracefully. Write functions and build clean, readable code.",
      "💻 Practical Python Skills - Explore standard libraries and prepare for real-world Python projects. Complete assignments like programming a calculator with history tracking.",
      "🧠 Computational Thinking & Software Concepts",
      "🛠️ Software Development Essentials",
    ],
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
];

export const Certificates = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <section id="certificates" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Licenses <span className="text-primary">&</span> Certificates
        </h2>

        {/* Grid container for the certificates */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificateData.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition-transform duration-300 transform bg-gray-800/20 rounded-xl card-hover gradient-border"
            >
              {/* Image Container */}
              <div
                className="relative flex items-center justify-center w-full p-4 cursor-pointer bg-gray-900/30 h-52"
                onClick={() => openModal(cert.image)}
                title="Click to expand"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  width={200}
                  height={150}
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-2 text-xl font-semibold">{cert.title}</h3>
                <ul className="flex-grow space-y-1 list-disc list-inside text-muted-foreground">
                  {cert.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-semibold transition-colors text-primary hover:text-primary/80"
                >
                  View Certificate &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Expanded Certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute text-3xl font-bold text-white top-6 right-8"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </section>
      );
};