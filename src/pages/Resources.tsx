import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Lock, Sparkles, FileText, Code, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    title: "Aptitude Test Preparation",
    description: "Prepare for interview aptitude tests and reasoning assessments",
    icon: FileText,
    resources: [
      { 
        title: "Goldman Sachs Aptitude Questions", 
        description: "Premium interview preparation material for Goldman Sachs",
        isRestricted: true 
      },
      { 
        title: "Aptitude Test Interview Questions", 
        description: "Comprehensive aptitude test preparation guide",
        isRestricted: false 
      },
    ],
  },
  {
    title: "General Resources",
    description: "Helpful resources for your tech journey",
    icon: Code,
    resources: [
      { title: "Kaggle Contributor Guide", description: "Get started with Kaggle competitions", isRestricted: false },
      { title: "HR Interview Questions", description: "Common HR interview questions and answers", isRestricted: false },
      { title: "Codolio Profile Guide", description: "Build an impressive Codolio profile", isRestricted: false },
      { title: "GitHub Profile README Inspiration", description: "Create stunning GitHub profiles", isRestricted: false },
    ],
  },
  {
    title: "Data Structures & Algorithms Resources",
    description: "Master DSA with these curated resources",
    icon: Code,
    borderColor: "border-green-500",
    resources: [
      { title: "A2Z Striver DSA Sheet", description: "Complete DSA preparation sheet", isRestricted: false },
      { title: "Top 100 LeetCode Questions", description: "Most important LeetCode problems", isRestricted: false },
      { title: "CodeCafe DSA Resources", description: "Premium DSA learning materials", isRestricted: true },
      { title: "Top Google DSA Interview Questions", description: "Google-specific DSA problems", isRestricted: true },
    ],
  },
  {
    title: "Google Summer of Code Resources",
    description: "Everything you need for GSoC preparation",
    icon: Users,
    resources: [
      { title: "GSoC Home", description: "Official GSoC homepage", isRestricted: false },
      { title: "GSoC Student Guide", description: "Complete guide for students", isRestricted: false },
      { title: "GSoC FAQ", description: "Frequently asked questions", isRestricted: false },
      { title: "GSoC Organizations Database", description: "List of participating organizations", isRestricted: false },
    ],
  },
  {
    title: "Professional Resume Templates",
    description: "LaTeX templates for tech interviews",
    icon: FileText,
    resources: [
      { title: "Resume Building Guide", description: "Step-by-step resume creation guide", isRestricted: false },
      { title: "Overleaf LaTeX CV Templates", description: "Professional LaTeX templates", isRestricted: false },
      { title: "FAANG Path Simple Template", description: "Clean template for tech roles", isRestricted: false },
      { title: "Jake's Resume Template", description: "Popular single-page resume template", isRestricted: false },
    ],
  },
];

const Resources = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-nav mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-muted-foreground">Curated Learning Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Premium Resources</span>
              <br />
              <span className="text-foreground">For Your Success</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock your potential with our handpicked collection of resources designed to accelerate your career in tech.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="space-y-12">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      category.borderColor ? 'bg-green-500/20 ring-1 ring-green-500/50' : 'bg-purple-500/20'
                    }`}>
                      <Icon className={`w-5 h-5 ${category.borderColor ? 'text-green-400' : 'text-purple-400'}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Resource Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.resources.map((resource) => (
                      <div 
                        key={resource.title} 
                        className={`glow-card p-5 ${resource.isRestricted ? 'border-dashed border-orange-500/30' : ''}`}
                      >
                        {/* Restricted Badge */}
                        {resource.isRestricted && (
                          <div className="flex items-center gap-1 text-orange-400 text-xs font-medium mb-3">
                            <Lock className="w-3 h-3" />
                            <span>Restricted</span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>

                        {/* CTA Button */}
                        <Button 
                          size="sm" 
                          className={`w-full ${
                            resource.isRestricted 
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400'
                          }`}
                        >
                          {resource.isRestricted ? 'Request Access' : 'Open Resource'}
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
