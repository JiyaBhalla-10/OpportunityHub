import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Building2, GraduationCap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgramCard from "@/components/programs/ProgramCard";
import YearCard from "@/components/programs/YearCard";
import FilterSection from "@/components/programs/FilterSection";
import { programs, yearDescriptions } from "@/data/programs";

const Programs = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState(searchParams.get("year") || "all");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesSearch = 
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = selectedYear === "all" || program.eligibleYears.includes(parseInt(selectedYear));
      const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;

      return matchesSearch && matchesYear && matchesCategory;
    });
  }, [searchQuery, selectedYear, selectedCategory]);

  const yearStats = useMemo(() => {
    return [1, 2, 3, 4].map((year) => ({
      year,
      positions: programs.filter((p) => p.eligibleYears.includes(year)).length,
      description: yearDescriptions[year - 1],
    }));
  }, []);

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

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground">
                Tech Programs & Opportunities
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing program opportunities at top tech companies.
              Filter by year, category, and preferences to find your perfect match.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 min-w-[180px] text-center shadow-xl shadow-purple-500/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">Total</span>
              </div>
              <p className="text-4xl font-black text-white">{programs.length}</p>
              <p className="text-white/80 text-sm">Opportunities</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 min-w-[180px] text-center shadow-xl shadow-orange-500/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">Years</span>
              </div>
              <p className="text-4xl font-black text-white">4</p>
              <p className="text-white/80 text-sm">Available</p>
            </div>
          </div>

          {/* Browse by Year Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-foreground">Browse by Student Year</h2>
            </div>
            <p className="text-muted-foreground">
              Find opportunities tailored to your academic level and experience
            </p>
          </div>

          {/* Year Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {yearStats.map((stat) => (
              <YearCard key={stat.year} {...stat} />
            ))}
          </div>

          {/* Filter Section */}
          <FilterSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            totalResults={filteredPrograms.length}
          />

          {/* Programs Header */}
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Programs <span className="text-muted-foreground font-normal">({filteredPrograms.length} results)</span>
          </h2>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No programs found matching your criteria.</p>
              <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
