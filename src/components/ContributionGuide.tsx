import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GitFork, GitPullRequest, Code, Upload, ExternalLink, MessageSquare, Heart, Star, Users } from "lucide-react";

export const ContributionGuide = () => {
  const contributionSteps = [
    {
      icon: <GitFork className="h-6 w-6" />,
      title: "Fork the Repository",
      description: "Start by forking our repository to your GitHub account",
      details: [
        "Click the 'Fork' button on our GitHub repo",
        "Clone your forked repository locally",
        "Set up the development environment"
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Create Your Contribution",
      description: "Make your changes and ensure they follow our guidelines",
      details: [
        "Create a new branch for your feature/fix",
        "Write clean, well-documented code",
        "Add tests if applicable",
        "Follow our coding standards"
      ]
    },
    {
      icon: <GitPullRequest className="h-6 w-6" />,
      title: "Submit Pull Request",
      description: "Submit your changes for review by our team",
      details: [
        "Push your changes to your fork",
        "Create a detailed pull request",
        "Include screenshots if UI changes",
        "Wait for code review and feedback"
      ]
    }
  ];

  const contributionTypes = [
    {
      title: "Code Contributions",
      description: "Bug fixes, new features, performance improvements",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Documentation",
      description: "Improve docs, write tutorials, create guides",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "Design & UI",
      description: "UI improvements, design systems, user experience",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Content Creation",
      description: "Blog posts, tutorials, video content",
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold gradient-text mb-4">Contribution Guide</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our open-source community and help us build the future of coding education together.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.open('https://github.com/ishfaq24', '_blank')}
        >
          <GitFork className="mr-2 h-5 w-5" />
          Browse GitHub
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com?subject=Project Submission&body=Hi HackHub team, I would like to submit my project for review. Please find the project details below:'}
        >
          <Upload className="mr-2 h-5 w-5" />
          Submit Project
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => window.open('https://discord.gg/hackhub', '_blank')}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Join Discord
        </Button>
      </div>

      {/* Contribution Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contributionTypes.map((type, index) => (
          <Card key={index} className="text-center hover:shadow-glow-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className={type.color} variant="outline">
                {type.description}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Step-by-step Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contributionSteps.map((step, index) => (
          <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guidelines */}
      <Card className="bg-gradient-accent border-border/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-400" />
            Community Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Code Quality</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Follow TypeScript best practices</li>
                <li>• Write meaningful commit messages</li>
                <li>• Include proper documentation</li>
                <li>• Test your changes thoroughly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Community Values</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Be respectful and inclusive</li>
                <li>• Help others learn and grow</li>
                <li>• Share knowledge openly</li>
                <li>• Celebrate diverse perspectives</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>1000+ contributors and growing</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4" />
              <span>Join our community of makers</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="text-center bg-gradient-primary text-primary-foreground border-0">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Reach out to our community team for guidance and support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com'}
            >
              Email Support
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.open('https://discord.gg/hackhub', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Discord Community
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};