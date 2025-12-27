import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Code, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      {/* Crafted with section */}
      <div className="flex justify-center -mt-6">
        <div className="glass-nav px-6 py-3 rounded-full flex items-center gap-3">
          <Code className="w-4 h-4 text-cyan-400" />
          <span className="text-muted-foreground">Crafted with</span>
          <Heart className="w-4 h-4 text-pink-500" />
          <span className="text-muted-foreground">Passion & Innovation</span>
          <span className="text-yellow-400">✨</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">OpportunityHub</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering students with opportunities to grow, learn, and succeed in the tech industry. 
              Your gateway to a brighter future starts here.
            </p>
            <div className="flex items-center gap-2 text-pink-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Built with passion for students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link to="/roadmaps" className="text-muted-foreground hover:text-foreground transition-colors">
                Roadmaps
              </Link>
              <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="glass-nav px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Contact us via email</p>
                    <p className="text-sm text-cyan-400">opportunityhub@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="glass-nav px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Based in</p>
                    <p className="text-sm text-pink-400">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Code className="w-4 h-4" />
            <span>© 2025 OpportunityHub. Made with</span>
            <Heart className="w-4 h-4 text-pink-500" />
            <span>by passionate developers</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
