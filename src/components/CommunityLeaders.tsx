import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Users, 
  Award,
  Star,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const CommunityLeaders = () => {
  const { toast } = useToast();
  const [followedLeaders, setFollowedLeaders] = useState<number[]>([]);

  const handleFollow = (leaderId: number, name: string) => {
    if (followedLeaders.includes(leaderId)) {
      setFollowedLeaders(prev => prev.filter(id => id !== leaderId));
      toast({
        title: "Unfollowed",
        description: `You unfollowed ${name}`,
      });
    } else {
      setFollowedLeaders(prev => [...prev, leaderId]);
      toast({
        title: "Following",
        description: `You are now following ${name}`,
      });
    }
  };

  const handleConnect = (platform: string, handle: string) => {
    toast({
      title: `Opening ${platform}`,
      description: `Connecting to ${handle}...`,
    });
  };

  const leaders = [
    {
      id: 1,
      name: "Ishfaq Nazir",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture. Passionate about building communities and mentoring developers.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Kashmir, India",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Python", "Docker"],
      stats: {
        followers: 15420,
        projects: 89,
        contributions: 2340
      },
      social: {
        github: "ishfaqnazir",
        linkedin: "ishfaq-nazir",
        twitter: "ishfaq_dev",
        website: "ishfaqnazir.dev"
      },
      achievements: ["Top Contributor 2024", "Community Builder", "Open Source Advocate"],
      isFounder: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Frontend Architect",
      bio: "UI/UX specialist and React expert. Leading the design system initiative and helping developers create beautiful, accessible interfaces.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "CSS", "Figma", "Accessibility", "Design Systems"],
      stats: {
        followers: 8920,
        projects: 45,
        contributions: 1890
      },
      social: {
        github: "sarahchen",
        linkedin: "sarah-chen-dev",
        twitter: "sarah_codes",
        website: "sarahchen.design"
      },
      achievements: ["Design System Expert", "A11y Champion", "React Contributor"],
      isFounder: false
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure expert specializing in scalable deployments, CI/CD pipelines, and containerization. Helping teams ship faster and safer.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "London, UK",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      stats: {
        followers: 6780,
        projects: 52,
        contributions: 1456
      },
      social: {
        github: "marcusthompson",
        linkedin: "marcus-thompson-devops",
        twitter: "marcus_ops",
        website: "marcusthompson.cloud"
      },
      achievements: ["Cloud Expert", "DevOps Mentor", "Infrastructure Guru"],
      isFounder: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-accent" id="leaders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Community Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate developers and mentors who drive HackHub forward, sharing knowledge 
            and building an inclusive community for developers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <Card 
              key={leader.id} 
              className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/20 ${
                leader.isFounder ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="text-center">
                {leader.isFounder && (
                  <div className="flex justify-center mb-4">
                    <Badge variant="default" className="bg-gradient-primary text-primary-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      Founder
                    </Badge>
                  </div>
                )}
                
                <div className="relative mx-auto mb-4">
                  <img 
                    src={leader.avatar} 
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{leader.location}</p>
                
                <div className="flex justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {leader.stats.followers.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    {leader.stats.projects}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {leader.stats.contributions.toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.bio}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {leader.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {leader.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{leader.skills.length - 4} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {leader.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center gap-2 pt-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleConnect('GitHub', leader.social.github)}
                    className="hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleConnect('LinkedIn', leader.social.linkedin)}
                    className="hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleConnect('Twitter', leader.social.twitter)}
                    className="hover:text-primary"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleConnect('Website', leader.social.website)}
                    className="hover:text-primary"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  variant={followedLeaders.includes(leader.id) ? "secondary" : "hero"} 
                  className="w-full"
                  onClick={() => handleFollow(leader.id, leader.name)}
                >
                  {followedLeaders.includes(leader.id) ? "Following" : "Follow"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-accent border-primary/20 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Want to Become a <span className="gradient-text">Community Leader</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              We're always looking for passionate developers to join our leadership team. 
              Share your expertise, mentor others, and help shape the future of HackHub.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => toast({
                title: "Application Process",
                description: "Opening leadership application form...",
              })}
            >
              Apply to Lead
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};