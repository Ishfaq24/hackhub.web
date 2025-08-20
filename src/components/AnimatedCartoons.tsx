import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Zap, Rocket, Brain, Coffee, Star } from "lucide-react";

export const AnimatedCartoons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cartoons = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Code Ninja",
      description: "Master the art of coding",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Lightning Dev",
      description: "Build at the speed of light",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Space Coder",
      description: "Launch your skills to orbit",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Wizard",
      description: "Harness the power of AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Caffeine Coder",
      description: "Powered by endless coffee",
      color: "from-amber-500 to-red-500"
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Code Star",
      description: "Shine bright in the dev world",
      color: "from-indigo-400 to-cyan-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cartoons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cartoons.length]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cartoons.map((cartoon, index) => (
        <Card
          key={index}
          className={`p-4 text-center transition-all duration-500 cursor-pointer hover:scale-105 ${
            index === activeIndex
              ? "animate-bounce shadow-glow-primary"
              : "hover:shadow-card-custom"
          }`}
        >
          <div
            className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${cartoon.color} flex items-center justify-center text-white transform transition-transform duration-300 ${
              index === activeIndex ? "scale-110 rotate-12" : ""
            }`}
          >
            {cartoon.icon}
          </div>
          <h3 className="font-semibold text-sm mb-1">{cartoon.title}</h3>
          <p className="text-xs text-muted-foreground">{cartoon.description}</p>
        </Card>
      ))}
    </div>
  );
};