import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const BlogPreview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleReadMore = (title: string) => {
    toast({
      title: "Opening Article",
      description: `Loading "${title}"...`,
    });
    // Simulate reading article
    setTimeout(() => {
      navigate('/blog');
    }, 500);
  };

  const handleViewAllPosts = () => {
    navigate('/blog');
  };
  const blogPosts = [
    {
      title: "Getting Started with React 19: New Features and Improvements",
      excerpt: "Explore the latest features in React 19 including Server Components, improved hooks, and performance optimizations.",
      category: "React",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt: "Deep dive into advanced TypeScript concepts including conditional types, mapped types, and utility types.",
      category: "TypeScript",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn best practices for creating maintainable and scalable backend applications with modern Node.js.",
      category: "Backend",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      featured: false
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which Layout Method",
      excerpt: "Understand the differences between CSS Grid and Flexbox, and learn when to use each for optimal layouts.",
      category: "CSS",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Introduction to Web Performance Optimization",
      excerpt: "Essential techniques for improving website speed and user experience through various optimization strategies.",
      category: "Performance",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Docker Containers for Frontend Developers",
      excerpt: "A practical guide to using Docker for frontend development workflows and deployment strategies.",
      category: "DevOps",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-24" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and best practices in web development
            and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-elegant transition-all duration-300 h-full bg-gradient-accent border-border/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                    {featuredPost.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="group/btn" onClick={() => handleReadMore(featuredPost.title)}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Recent Posts Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.slice(0, 4).map((post, index) => (
                <Card key={index} className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/20">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {post.category}
                    </Badge>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 group" onClick={handleViewAllPosts}>
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};