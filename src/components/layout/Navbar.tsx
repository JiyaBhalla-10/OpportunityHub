import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Map, BookOpen, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Programs", path: "/programs", icon: Building2 },
  { 
    name: "Roadmaps", 
    path: "/roadmaps", 
    icon: Map,
    dropdown: [
      { name: "Data Structures & Algorithms", path: "/roadmaps/dsa" },
      { name: "Frontend Development", path: "/roadmaps/frontend" },
      { name: "Backend Development", path: "/roadmaps/backend" },
      { name: "AI & Machine Learning", path: "/roadmaps/aiml" },
      { name: "Blockchain Development", path: "/roadmaps/blockchain" },
      { name: "AR/VR Development", path: "/roadmaps/arvr" },
    ]
  },
  { name: "Resources", path: "/resources", icon: BookOpen },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-nav px-2 py-2 rounded-full flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          if (item.dropdown) {
            return (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                      ${active 
                        ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="glass-nav border-white/10 mt-2 min-w-[200px]"
                  align="center"
                >
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.path}
                        className="cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${active 
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
