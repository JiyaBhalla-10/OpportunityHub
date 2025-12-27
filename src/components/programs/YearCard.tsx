import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface YearCardProps {
  year: number;
  positions: number;
  description: string;
}

const gradients = [
  "from-green-400 to-emerald-500",
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-violet-500",
  "from-orange-400 to-red-500",
];

const yearLabels = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const yearSubtitles = ["Academic Level", "Academic Level", "Academic Level", "Academic Level"];
const yearNumbers = ["1", "2", "3", "4"];

const YearCard = ({ year, positions, description }: YearCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden group">
      {/* Background Year Number */}
      <span className="absolute -right-4 -top-4 text-[120px] font-black text-muted/10 pointer-events-none select-none">
        {yearNumbers[year - 1]}
      </span>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[year - 1]} flex items-center justify-center shadow-lg`}>
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">{yearLabels[year - 1]}</h3>
            <p className="text-xs text-muted-foreground">{yearSubtitles[year - 1]}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${gradients[year - 1]}`}>
          {positions} positions
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6 relative z-10">
        {description}
      </p>

      {/* CTA Button */}
      <Button 
        asChild
        className={`w-full bg-gradient-to-r ${gradients[year - 1]} hover:opacity-90 text-white border-0`}
      >
        <Link to={`/programs?year=${year}`}>
          Explore {yearLabels[year - 1]} Opportunities
        </Link>
      </Button>
    </div>
  );
};

export default YearCard;
