
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to continuous learning and professional growth"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              web applications that combine functionality with beautiful design. My journey in 
              tech started with curiosity and has evolved into a career driven by innovation.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source projects, or mentoring aspiring developers. I believe in the power 
              of technology to solve real-world problems and create meaningful experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "Node.js", "Python", "TypeScript", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
