import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, BookOpen, Map } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const roadmaps = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts for interviews and problem-solving",
    icon: "🧮",
    duration: "6-8 months",
    difficulty: "Beginner to Advanced",
    skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Recursion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Build modern, responsive user interfaces with React and modern CSS",
    icon: "🎨",
    duration: "4-6 months",
    difficulty: "Beginner to Advanced",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Create scalable server-side applications and RESTful APIs",
    icon: "⚙️",
    duration: "5-7 months",
    difficulty: "Intermediate to Advanced",
    skills: ["Node.js", "Python", "Databases", "APIs", "Authentication"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning fundamentals",
    icon: "🤖",
    duration: "6-9 months",
    difficulty: "Intermediate to Advanced",
    skills: ["Python", "TensorFlow", "Neural Networks", "Data Science", "NLP"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description: "Build decentralized applications and smart contracts",
    icon: "🔗",
    duration: "4-6 months",
    difficulty: "Intermediate",
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "arvr",
    title: "AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences",
    icon: "🥽",
    duration: "5-7 months",
    difficulty: "Intermediate to Advanced",
    skills: ["Unity", "C#", "3D Modeling", "Spatial Computing", "XR Design"],
    color: "from-pink-500 to-rose-500",
  },
];

const Roadmaps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-foreground">Tech Learning </span>
              <span className="gradient-text">Roadmaps</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Follow structured learning paths, master in-demand skills, and accelerate your journey to becoming a tech professional.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500">
                <Download className="w-4 h-4 mr-2" />
                Download All PDFs
              </Button>
              <Button variant="outline" className="border-border hover:bg-muted">
                <BookOpen className="w-4 h-4 mr-2" />
                View Learning Guide
              </Button>
            </div>
          </div>

          {/* Choose Your Path */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Map className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-foreground">Choose Your Path</h2>
            </div>
            <p className="text-muted-foreground">
              Curated roadmaps with step-by-step guidance to master any technology
            </p>
          </div>

          {/* Roadmap Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((roadmap) => (
              <div key={roadmap.id} className="glow-card p-6 group">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${roadmap.color} flex items-center justify-center mb-4 shadow-lg text-2xl`}>
                  {roadmap.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {roadmap.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {roadmap.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span>{roadmap.duration}</span>
                  <span>•</span>
                  <span>{roadmap.difficulty}</span>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {roadmap.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/roadmaps/${roadmap.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:gap-3"
                >
                  View Roadmap
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Motivation Banner */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Master Your Skills Through Practice
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Consistent practice, real-world projects, and persistence are the keys to mastering any technology. 
                Follow these roadmaps, build projects, and never stop learning.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmaps;
