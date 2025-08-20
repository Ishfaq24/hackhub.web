import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Lightbulb, 
  Users, 
  Rocket, 
  BookOpen, 
  Zap,
  Trophy,
  GitBranch,
  Terminal,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const Features = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const handleFeatureClick = (feature: any, index: number) => {
    toast({
      title: `Exploring ${feature.title}`,
      description: feature.description,
    });
    
    // Navigate based on feature type
    if (feature.title.includes('Interactive Coding') || feature.title.includes('Fast Learning')) {
      navigate('/tutorials');
    } else if (feature.title.includes('Community')) {
      navigate('/about');
    } else if (feature.title.includes('Version Control') || feature.title.includes('Terminal')) {
      navigate('/projects');
    } else {
      navigate('/blog');
    }
  };
  const features = [
    {
      icon: Code2,
      title: "Interactive Coding",
      description: "Learn through hands-on coding exercises and real-world projects that challenge your skills.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Get tips and tricks from industry professionals with years of experience in software development.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of developers sharing knowledge and collaborating on projects.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Latest Technologies",
      description: "Stay up-to-date with cutting-edge frameworks, tools, and programming languages.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      description: "From beginner tutorials to advanced concepts, we cover everything you need to know.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Fast Learning",
      description: "Accelerate your learning with our structured approach and bite-sized lessons.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Earn badges and certificates as you complete courses and master new skills.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Master Git workflows and collaboration techniques used in professional development.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Terminal,
      title: "Command Line Mastery",
      description: "Become proficient with terminal commands and shell scripting for efficient development.",
      gradient: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-accent" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">CodeCraft</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes our platform the perfect place to level up your coding skills
            and connect with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/20 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => handleFeatureClick(feature, index)}
            >
              <CardHeader className="text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mx-auto mb-4 transition-transform duration-300 ${
                  hoveredFeature === index ? 'scale-110' : ''
                }`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <p className="text-muted-foreground text-center leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      hoveredFeature === index ? 'translate-y-0' : 'translate-y-2'
                    }`}
                  >
                    Explore Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};