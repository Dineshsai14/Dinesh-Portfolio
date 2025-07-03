
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Child Exploiters and Cyber Harassers Detection System",
      description: "Designed and implemented a system for the identification of child exploiters and cyber harassers on social networks using machine learning and natural language processing techniques. Built classification models to flag suspicious activities and ensure ethical data usage with privacy standards.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tech: ["Machine Learning", "NLP", "Python", "Data Analysis", "Privacy Compliance"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Web Development Projects",
      description: "During my internship at Elfinity Technologies, I gained hands-on experience in building and maintaining websites using HTML, CSS, and JavaScript. Collaborated with design and backend teams to implement user-friendly features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Algorithm Implementation",
      description: "Various algorithm implementations and problem-solving projects focusing on data structures, sorting algorithms, and optimization techniques using Java and Python.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["Java", "Python", "Algorithms", "Data Structures"],
      github: "https://github.com",
      demo: "#"
    }
  ];

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Elfinity Technologies",
      period: "June 2024 - July 2024",
      description: "Completed a web development internship where I gained hands-on experience in building and maintaining websites. Assisted in developing front-end components, optimizing website performance, and fixing bugs. Worked with tools like Git and GitHub.",
      skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Team Collaboration"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Projects & <span className="text-blue-400">Experience</span>
        </h2>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 mb-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                  <p className="text-lg text-white">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
