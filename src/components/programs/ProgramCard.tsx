import { Clock, Building2 } from "lucide-react";

interface Program {
  id: string;
  company: string;
  title: string;
  description: string;
  category: "hackathon" | "scholarship" | "software" | "research" | "opensource" | "consulting";
  period: string;
  eligibleYears: number[];
  isRemote?: boolean;
}

interface ProgramCardProps {
  program: Program;
}

const categoryColors: Record<string, { border: string; badge: string; badgeText: string }> = {
  hackathon: {
    border: "border-t-red-500",
    badge: "badge-hackathon",
    badgeText: "Hackathon",
  },
  scholarship: {
    border: "border-t-green-500",
    badge: "badge-scholarship",
    badgeText: "Scholarship",
  },
  software: {
    border: "border-t-purple-500",
    badge: "badge-software",
    badgeText: "Software",
  },
  research: {
    border: "border-t-yellow-500",
    badge: "badge-research",
    badgeText: "Research",
  },
  opensource: {
    border: "border-t-emerald-500",
    badge: "badge-opensource",
    badgeText: "Open-source",
  },
  consulting: {
    border: "border-t-blue-500",
    badge: "badge-consulting",
    badgeText: "Consulting",
  },
};

const yearLabels = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const ProgramCard = ({ program }: ProgramCardProps) => {
  const colors = categoryColors[program.category];

  return (
    <div className={`bg-card rounded-xl border border-border ${colors.border} border-t-4 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Building2 className="w-4 h-4 text-muted-foreground" />
          </div>
          <span className="font-semibold text-foreground">{program.company}</span>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
          {colors.badgeText}
        </span>
      </div>

      {/* Remote Badge */}
      {program.isRemote && (
        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium badge-remote border mb-3">
          Remote
        </span>
      )}

      {/* Title */}
      <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {program.description}
      </p>

      {/* Period */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 py-3 border-t border-border">
        <Clock className="w-4 h-4" />
        <div>
          <span className="text-xs block">Period</span>
          <span className="text-foreground font-medium">{program.period}</span>
        </div>
      </div>

      {/* Eligible Years */}
      <div>
        <span className="text-xs text-muted-foreground block mb-2">Eligible Years</span>
        <div className="flex flex-wrap gap-2">
          {program.eligibleYears.map((year) => (
            <span key={year} className="year-pill">
              {yearLabels[year - 1]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
