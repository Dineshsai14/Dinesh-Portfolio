
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl animate-scale-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          John <span className="text-blue-400">Doe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer & Creative Problem Solver
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web applications that make a difference. 
          I bring ideas to life through clean code and thoughtful design.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:john@example.com"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
