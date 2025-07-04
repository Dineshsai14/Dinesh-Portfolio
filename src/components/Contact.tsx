
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kummarisai14@gmail.com",
      link: "mailto:kummarisai14@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9490765270",
      link: "tel:+919490765270"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kurnool, Andhrapradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Let's work together</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm eager to contribute to software development or IT projects while learning from 
                experienced professionals. Whether you have an internship opportunity, entry-level position, 
                or project collaboration in mind, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-slate-800/50 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Certified in Web Development - Web Technologies</li>
                <li>• Certified in Responsible and Safe AI - NPTEL</li>
                <li>• Certified in Cybersecurity with Python - NPTEL</li>
                <li>• Certified in Basic Environmental Engineering - NPTEL</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send size={18} />
              <span>Send Message</span>
            </Button>
          </form>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2024 Kummari Dinesh Sai. Built with passion for technology and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
