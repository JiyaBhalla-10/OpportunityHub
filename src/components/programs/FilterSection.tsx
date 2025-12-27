import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  totalResults: number;
}

const FilterSection = ({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  selectedCategory,
  setSelectedCategory,
  totalResults,
}: FilterSectionProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="w-5 h-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Filter Internships</h3>
        <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
          {totalResults} results
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search companies, titles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>

        {/* Year Filter */}
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="1">1st Year (Freshman)</SelectItem>
            <SelectItem value="2">2nd Year (Sophomore)</SelectItem>
            <SelectItem value="3">3rd Year (Junior)</SelectItem>
            <SelectItem value="4">4th Year (Senior)</SelectItem>
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="hackathon">Hackathon</SelectItem>
            <SelectItem value="opensource">Open Source</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSection;
