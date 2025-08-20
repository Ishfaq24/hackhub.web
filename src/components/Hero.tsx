import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";
import { CodeAnimation } from "./CodeAnimation";
import { TypingAnimation } from "./TypingAnimation";
import { AnimatedCartoons } from "./AnimatedCartoons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStartLearning = () => {
    toast({
      title: "Welcome to HackHub!",
      description: "Let's start your coding journey!",
    });
    navigate('/tutorials');
  };

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-accent border border-border/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Welcome to the future of coding</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master the Art of{" "}
            <TypingAnimation 
              texts={["Coding", "Innovation", "Building", "Creating"]}
              className="gradient-text"
            />
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Dive deep into programming tutorials, explore cutting-edge technologies, 
            and join a community of passionate developers building the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group" onClick={handleStartLearning}>
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group" onClick={handleViewProjects}>
              <Code className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">200+</div>
              <div className="text-sm text-muted-foreground mt-1">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>

          {/* Animated Cartoons Showcase */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">Choose your coding persona and join our community</p>
            <AnimatedCartoons />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Code Animation Overlay */}
      <CodeAnimation />
    </section>
  );
};