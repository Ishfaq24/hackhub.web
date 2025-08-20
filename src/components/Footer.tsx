import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  MessageSquare, 
  Users, 
  Mail,
  Code,
  BookOpen,
  Heart,
  TrendingUp,
  Star,
  GitFork,
  ExternalLink,
  ArrowRight,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [stats, setStats] = useState({
    contributors: 1247,
    projects: 342,
    tutorials: 67,
    stars: 2856
  });
  const [recentActivity, setRecentActivity] = useState([
    { type: "tutorial", title: "React Hooks Advanced", author: "Ishfaq Nazir", time: "2h ago" },
    { type: "project", title: "AI Chat Bot", author: "Mohsin Ayoub", time: "4h ago" },
    { type: "contribution", title: "Bug Fix: Auth System", author: "Irfan Javid", time: "6h ago" }
  ]);
  const { toast } = useToast();

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        contributors: prev.contributors + Math.floor(Math.random() * 3),
        projects: prev.projects + Math.floor(Math.random() * 2),
        tutorials: prev.tutorials + Math.floor(Math.random() * 1),
        stars: prev.stars + Math.floor(Math.random() * 5)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate newsletter signup
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our weekly coding insights and updates.",
    });
    setEmail("");
  };

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contribute", path: "/contribute" }
  ];

  const resourceLinks = [
    { name: "Documentation", path: "/docs", external: false },
    { name: "API Reference", path: "/api", external: false },
    { name: "GitHub Repos", url: "https://github.com/ishfaq24", external: true },
    { name: "Discord Community", url: "https://discord.gg/hackhub", external: true }
  ];

  return (
    <footer className="bg-background border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold gradient-text">HackHub</h2>
              </div>
              <p className="text-muted-foreground max-w-md">
                A community-driven platform where developers learn, share, and build amazing projects together. 
                Join thousands of coders on their journey to mastery.
              </p>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-accent border-border/20 hover-scale transition-smooth">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Stay in the Loop</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get weekly coding insights, new tutorials, and community highlights.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" variant="hero" size="sm">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigate</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth story-link text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth story-link text-sm flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link 
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-smooth story-link text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Stats & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Community Stats */}
          <Card className="bg-gradient-accent border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Live Community Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold gradient-text animate-pulse">
                    {stats.contributors.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Users className="h-3 w-3" />
                    Contributors
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold gradient-text animate-pulse">
                    {stats.projects.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <GitFork className="h-3 w-3" />
                    Projects
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold gradient-text animate-pulse">
                    {stats.tutorials.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    Tutorials
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold gradient-text animate-pulse">
                    {stats.stars.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Star className="h-3 w-3" />
                    Stars
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-accent border-border/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary animate-pulse" />
                  <h3 className="font-semibold">Recent Activity</h3>
                </div>
                <Badge variant="outline" className="animate-fade-in">Live</Badge>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 text-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <span className="text-foreground font-medium">{activity.title}</span>
                      <span className="text-muted-foreground"> by {activity.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Activity
                <ArrowRight className="h-3 w-3 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Credits */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 HackHub. Built with{" "}
              <Heart className="h-3 w-3 inline text-red-400 animate-pulse" />{" "}
              by{" "}
              <a 
                href="https://github.com/ishfaq24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ishfaq Nazir
              </a>{" "}
              and the community.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover-scale transition-smooth hover:bg-primary/10"
              onClick={() => window.open('https://github.com/ishfaq24', '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover-scale transition-smooth hover:bg-primary/10"
              onClick={() => window.open('https://twitter.com/ishfaq_24', '_blank')}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover-scale transition-smooth hover:bg-primary/10"
              onClick={() => window.open('https://linkedin.com/in/ishfaq_24', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover-scale transition-smooth hover:bg-primary/10"
              onClick={() => window.open('https://discord.gg/hackhub', '_blank')}
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover-scale transition-smooth hover:bg-primary/10"
              onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com'}
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};