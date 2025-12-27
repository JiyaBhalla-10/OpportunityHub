import { ArrowRight, Building2, Trophy, Award, GitBranch, Star } from "lucide-react";
import { Link } from "react-router-dom";

const opportunities = [
  {
    title: "Programs",
    description: "Exclusive internship and career development programs at top-tier tech companies",
    icon: Building2,
    gradient: "icon-gradient-orange",
    features: ["Remote & Hybrid", "Competitive stipends", "1-on-1 Mentoring", "Industry Projects"],
    link: "/programs",
  },
  {
    title: "Hackathons",
    description: "Compete in prestigious hackathons with industry leaders as judges",
    icon: Trophy,
    gradient: "icon-gradient-red",
    features: ["₹50L+ Prizes", "Global Network", "Startup Funding", "Media Coverage"],
    link: "/programs?category=hackathon",
  },
  {
    title: "Scholarships",
    description: "Merit-based scholarships and financial aid for deserving students",
    icon: Award,
    gradient: "icon-gradient-pink",
    features: ["Full Funding", "Merit Based", "Global Opportunities", "Academic Support"],
    link: "/programs?category=scholarship",
    featured: true,
  },
  {
    title: "Open Source",
    description: "Contribute to meaningful open source projects and build your portfolio",
    icon: GitBranch,
    gradient: "icon-gradient-teal",
    features: ["Real Impact", "Community Support", "Skill Building", "Global Recognition"],
    link: "/programs?category=opensource",
  },
];

const OpportunitiesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav mb-6">
            <span className="text-yellow-400">✨</span>
            <span className="text-sm text-muted-foreground">Transform Your Tech Journey</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="text-foreground">Opportunities That</span>
          <br />
          <span className="gradient-text">Change Everything</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          From first-year exploration to final-year career launches, we provide{" "}
          <span className="text-cyan-400">premium opportunities</span> that set you apart in the competitive tech landscape.
        </p>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glow-card p-6 flex flex-col ${item.featured ? 'glow-card-accent ring-1 ring-cyan-500/30' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Star decoration */}
                <Star className="absolute top-4 right-4 w-4 h-4 text-muted-foreground/30" />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 ${item.featured ? 'gradient-text' : 'text-foreground'}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={item.link}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    item.featured ? 'text-cyan-400 hover:text-cyan-300' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
