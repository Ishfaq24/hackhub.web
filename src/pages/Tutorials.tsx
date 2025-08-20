import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CodeCompiler } from "@/components/CodeCompiler";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, Clock, Users, Star, BookOpen, Code, ExternalLink, Globe, GitFork, Upload, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null);
  const tutorials = [
    {
      id: 1,
      title: "Complete React Developer Course",
      description: "Master React from basics to advanced concepts including Hooks, Context API, and Redux.",
      level: "Beginner to Advanced",
      duration: "12 hours",
      students: 2547,
      rating: 4.8,
      progress: 0,
      category: "React",
      lessons: 45,
      price: "Free",
      thumbnail: "/placeholder.svg",
      resources: [
        { title: "React Official Docs", url: "https://react.dev", type: "documentation" },
        { title: "React Hook Forms", url: "https://react-hook-form.com", type: "library" },
        { title: "React Developer Tools", url: "https://chrome.google.com/webstore/detail/react-developer-tools", type: "tool" }
      ],
      compiler: {
        title: "React Component Practice",
        language: "javascript",
        initialCode: `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Try creating your own component below
function App() {
  return (
    <div>
      <Welcome name="World" />
    </div>
  );
}`,
        expectedOutput: "Hello, World!"
      }
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
      level: "Intermediate",
      duration: "8 hours",
      students: 1823,
      rating: 4.7,
      progress: 25,
      category: "Backend",
      lessons: 32,
      price: "Premium",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description: "Learn JavaScript from scratch with hands-on projects and real-world examples.",
      level: "Beginner",
      duration: "6 hours",
      students: 3421,
      rating: 4.9,
      progress: 100,
      category: "JavaScript",
      lessons: 28,
      price: "Free",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "CSS Grid & Flexbox Mastery",
      description: "Create responsive layouts with modern CSS Grid and Flexbox techniques.",
      level: "Beginner",
      duration: "4 hours",
      students: 1567,
      rating: 4.6,
      progress: 60,
      category: "CSS",
      lessons: 18,
      price: "Free",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Python for Data Science",
      description: "Learn Python programming with focus on data analysis and machine learning.",
      level: "Intermediate",
      duration: "10 hours",
      students: 2134,
      rating: 4.8,
      progress: 0,
      category: "Python",
      lessons: 38,
      price: "Premium",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Git & GitHub Workflow",
      description: "Master version control with Git and collaborative development on GitHub.",
      level: "Beginner",
      duration: "3 hours",
      students: 4521,
      rating: 4.7,
      progress: 0,
      category: "DevOps",
      lessons: 15,
      price: "Free",
      thumbnail: "/placeholder.svg"
    }
  ];

  const categories = ["All", "React", "JavaScript", "Backend", "CSS", "Python", "DevOps"];
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  // Filter tutorials based on selected filters
  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === "All" || tutorial.category === selectedCategory;
    const levelMatch = selectedLevel === "All Levels" || 
      tutorial.level === selectedLevel || 
      tutorial.level.includes(selectedLevel);
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <BottomNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Learn to Code
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master programming with our comprehensive tutorials. From beginner-friendly courses 
            to advanced topics, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                document.getElementById('tutorials-grid')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Browse Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Free Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div>
              <h3 className="text-sm font-medium mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant={category === selectedCategory ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Level</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Badge 
                    key={level} 
                    variant={level === selectedLevel ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section id="tutorials-grid" className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">Tutorial Catalog</h2>
            <p className="text-muted-foreground">
              Explore our comprehensive collection of programming tutorials with hands-on coding experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Card key={tutorial.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <div className="h-48 bg-gradient-secondary rounded-t-lg"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={tutorial.price === "Free" ? "bg-green-500" : "bg-orange-500"}>
                      {tutorial.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{tutorial.rating}</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="icon" 
                        variant="hero" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setSelectedTutorial(tutorial)}
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>Interactive Coding - {tutorial.title}</DialogTitle>
                      </DialogHeader>
                      {selectedTutorial?.compiler && (
                        <CodeCompiler lesson={selectedTutorial.compiler} />
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{tutorial.category}</Badge>
                    <span className="text-xs text-muted-foreground">{tutorial.level}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {tutorial.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{tutorial.progress}%</span>
                        </div>
                        <Progress value={tutorial.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {tutorial.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {tutorial.students.toLocaleString()}
                      </div>
                    </div>
                    
                    {/* Resources Section */}
                    {tutorial.resources && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          Resources
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {tutorial.resources.slice(0, 2).map((resource, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="h-6 text-xs px-2"
                              onClick={() => window.open(resource.url, '_blank')}
                            >
                              <ExternalLink className="h-2 w-2 mr-1" />
                              {resource.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Learning Paths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow structured learning paths to become a professional developer in your chosen field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>
                  HTML, CSS, JavaScript, React, and modern frontend tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>6 courses • 40 hours</div>
                  <div>Beginner to Advanced</div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Start Path
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Backend Developer</CardTitle>
                <CardDescription>
                  Node.js, databases, APIs, and server-side technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>5 courses • 35 hours</div>
                  <div>Intermediate to Advanced</div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Start Path
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Full Stack Developer</CardTitle>
                <CardDescription>
                  Complete web development from frontend to backend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>10 courses • 80 hours</div>
                  <div>Intermediate to Advanced</div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Start Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute to HackHub Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-accent border-border/20 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text mb-2">Contribute to HackHub</CardTitle>
              <CardDescription className="text-base">
                Help us grow the community by contributing tutorials, projects, and resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contribution Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold gradient-text">1000+</div>
                  <div className="text-xs text-muted-foreground">Contributors</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-xs text-muted-foreground">Tutorials</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>

              <Separator />

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => window.open('https://github.com/ishfaq24', '_blank')}
                >
                  <GitFork className="mr-2 h-4 w-4" />
                  Browse Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com?subject=Project Submission&body=Hi HackHub team, I would like to submit my project for review.'}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Tutorial
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://discord.gg/hackhub', '_blank')}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </div>

              {/* Contribution Types */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium text-sm">Code Tutorials</div>
                  <div className="text-xs text-muted-foreground">Share coding knowledge</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium text-sm">Documentation</div>
                  <div className="text-xs text-muted-foreground">Improve learning resources</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium text-sm">Community Help</div>
                  <div className="text-xs text-muted-foreground">Support fellow learners</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">
                  Ready to make an impact? Contact us at{" "}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary"
                    onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com'}
                  >
                    hackhub.dev@gmail.com
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;