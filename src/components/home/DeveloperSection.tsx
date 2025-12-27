import { Trophy, Github, Linkedin } from "lucide-react";

const DeveloperSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-foreground">Meet the </span>
          <span className="gradient-text">Developer</span>
        </h2>

        {/* Developer Card - Centered */}
        <div className="flex justify-center">
          <div className="glow-card glow-card-accent p-8 max-w-md w-full text-center relative">
            {/* Trophy decoration */}
            <Trophy className="absolute top-6 right-6 w-6 h-6 text-yellow-500" />
            
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">JB</span>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Jiya Bhalla
            </h3>

            {/* University Info */}
            <p className="text-muted-foreground mb-4">
              B.Tech CSE, IGDTUW '28
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Software Development
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Problem Solving
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-400 border border-pink-500/30">
                Tech Innovation
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-6">
              Computer Science innovator crafting the future with code & creativity 💻
            </p>

            {/* Year Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav mb-6">
              <span className="text-sm text-muted-foreground">CSE – 2nd Year</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full glass-nav flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
