
import { Database, Globe, Palette, Server, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "blue"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "Django", "GraphQL"],
      color: "green"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"],
      color: "purple"
    },
    {
      icon: Zap,
      title: "Tools & DevOps",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      color: "pink"
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Photoshop", "Illustrator"],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-400 bg-blue-400/10 text-blue-400",
      green: "border-green-400 bg-green-400/10 text-green-400",
      purple: "border-purple-400 bg-purple-400/10 text-purple-400",
      orange: "border-orange-400 bg-orange-400/10 text-orange-400",
      pink: "border-pink-400 bg-pink-400/10 text-pink-400",
      cyan: "border-cyan-400 bg-cyan-400/10 text-cyan-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(category.color)} flex items-center justify-center mb-6`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300 text-sm inline-block mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
