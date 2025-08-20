import { Button } from "@/components/ui/button";
import { Home, BookOpen, Code, User, FileText, GitFork } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "Tutorials", path: "/tutorials", icon: BookOpen },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Contribute", path: "/contribute", icon: GitFork },
    { name: "About", path: "/about", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.name} to={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.name}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};