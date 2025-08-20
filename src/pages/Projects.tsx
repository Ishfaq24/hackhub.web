import { BottomNavigation } from "@/components/BottomNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      difficulty: "Advanced",
      stars: 234,
      forks: 67,
      views: 1520,
      liveDemo: "https://demo.hackhub.com/ecommerce",
      github: "https://github.com/hackhub/ecommerce-platform",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      difficulty: "Intermediate",
      stars: 156,
      forks: 34,
      views: 892,
      liveDemo: "https://demo.hackhub.com/taskmanager",
      github: "https://github.com/hackhub/task-manager",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather, forecasts, and interactive maps using multiple weather APIs.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      difficulty: "Beginner",
      stars: 89,
      forks: 23,
      views: 645,
      liveDemo: "https://demo.hackhub.com/weather",
      github: "https://github.com/hackhub/weather-dashboard",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
      technologies: ["Python", "Flask", "PostgreSQL", "D3.js", "Bootstrap"],
      difficulty: "Advanced",
      stars: 312,
      forks: 89,
      views: 2134,
      liveDemo: "https://demo.hackhub.com/analytics",
      github: "https://github.com/hackhub/social-analytics",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A mobile-first recipe application with ingredient-based search, meal planning, and shopping list generation.",
      technologies: ["React Native", "Redux", "Spoonacular API", "AsyncStorage"],
      difficulty: "Intermediate",
      stars: 178,
      forks: 45,
      views: 1023,
      liveDemo: "https://demo.hackhub.com/recipes",
      github: "https://github.com/hackhub/recipe-finder",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Code Snippet Manager",
      description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging system.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      difficulty: "Intermediate",
      stars: 145,
      forks: 28,
      views: 756,
      liveDemo: "https://demo.hackhub.com/snippets",
      github: "https://github.com/hackhub/snippet-manager",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Web App", "Mobile", "Desktop", "CLI Tool", "API"];
  const technologies = ["All", "React", "Vue.js", "Node.js", "Python", "JavaScript", "TypeScript"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-background pb-20">
      <BottomNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Project Showcase
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection of open-source projects and real-world applications. 
            Learn by building and contribute to the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Github className="mr-2 h-5 w-5" />
              Browse GitHub
            </Button>
            <Button variant="outline" size="lg">
              Submit Project
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
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1.2K+</div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-muted-foreground">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Open Source</div>
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
                    variant={category === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant={tech === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Badge 
                    key={difficulty} 
                    variant={difficulty === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Project</h2>
          {projects.filter(project => project.featured).map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary rounded-lg m-4"></div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="default">Featured</Badge>
                    <Badge variant={
                      project.difficulty === "Beginner" ? "secondary" :
                      project.difficulty === "Intermediate" ? "outline" : "destructive"
                    }>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {project.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {project.views}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <div className="h-48 bg-gradient-secondary rounded-t-lg"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={
                      project.difficulty === "Beginner" ? "secondary" :
                      project.difficulty === "Intermediate" ? "outline" : "destructive"
                    }>
                      {project.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.views}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Contribute to HackHub</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Share your projects with the community and help others learn by building real-world applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  Submit Project
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Contribution Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projects;