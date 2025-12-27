import { ArrowRight, Sparkles, Star, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-500 rounded-full pulse-glow" />
      <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-cyan-400 rounded-full pulse-glow" />
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-pink-500 rounded-full pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full pulse-glow" />
      
      {/* Floating Elements */}
      <Star className="absolute top-32 left-32 w-5 h-5 text-purple-500/40 floating-element" />
      <Zap className="absolute top-48 right-32 w-6 h-6 text-cyan-400/40 floating-element-delayed" />
      <Target className="absolute bottom-48 left-40 w-5 h-5 text-pink-500/40 floating-element" />

      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-muted-foreground">Your Gateway to Tech Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Unlock Your</span>
          <br />
          <span className="gradient-text">Tech Future</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover life-changing opportunities that shape tomorrow's tech leaders. Connect with{" "}
          <span className="text-cyan-400">premium internships</span>,{" "}
          <span className="text-pink-400">exclusive scholarships</span>, and{" "}
          <span className="text-purple-400">cutting-edge resources</span> to accelerate your career journey.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
          >
            <Link to="/programs" className="flex items-center gap-2">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Quote */}
        <p className="mt-16 text-muted-foreground italic text-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
          "The future belongs to those who believe in the beauty of their dreams."
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
