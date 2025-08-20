import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks: A Complete Guide",
      description: "Master the fundamentals of React Hooks and learn how to build more efficient and maintainable React applications.",
      author: "Alex Thompson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js and Express",
      description: "Learn how to create robust and scalable backend services using Node.js, Express, and modern best practices.",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Backend",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      description: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
      author: "Mike Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Introduction to Machine Learning with Python",
      description: "Dive into the world of machine learning and learn how to build your first ML model using Python and scikit-learn.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "AI/ML",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Mastering Git: Advanced Techniques and Workflows",
      description: "Level up your Git skills with advanced commands, branching strategies, and collaborative workflows.",
      author: "David Park",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "DevOps",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Building Responsive Web Apps with Tailwind CSS",
      description: "Create beautiful, responsive designs efficiently using Tailwind CSS utility classes and best practices.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "CSS",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "React", "Backend", "CSS", "AI/ML", "DevOps"];

  // Filter posts based on selected category
  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: `Welcome to our newsletter, ${email}!`,
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <BottomNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            HackHub Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and trends in software development. 
            Learn from industry experts and level up your coding skills.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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
      </section>

          {/* Featured Post */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          {filteredPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary rounded-lg m-4"></div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="hero" className="group">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-secondary rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Stay Updated</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Subscribe to our newsletter and never miss the latest coding insights and tutorials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background text-foreground"
                  required
                />
                <Button type="submit" variant="secondary">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;