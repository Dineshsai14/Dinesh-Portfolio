
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with focus on algorithms and efficiency"
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
              I'm a B.Tech graduate in Computer Science and Engineering from G. Pullaiah College 
              of Engineering and Technology with a CGPA of 7.79. I aim to begin my career in a 
              dynamic and growth-oriented organization where I can apply my technical knowledge 
              and problem-solving skills.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I am eager to contribute to software development or IT projects while learning from 
              experienced professionals. Passionate about coding, algorithms, and new technologies, 
              I strive to build efficient solutions and grow continuously in the tech industry.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <div className="space-y-2">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-blue-400 font-medium">B.Tech in Computer Science & Engineering</p>
                  <p className="text-gray-300 text-sm">G. Pullaiah College of Engineering and Technology</p>
                  <p className="text-gray-400 text-sm">2021 - 2025 • CGPA: 7.79</p>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-blue-400 font-medium">Intermediate, Class XII</p>
                  <p className="text-gray-300 text-sm">Narayana Junior College</p>
                  <p className="text-gray-400 text-sm">2021 • CGPA: 8.17</p>
                </div>
              </div>
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
