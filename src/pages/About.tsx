import { BottomNavigation } from "@/components/BottomNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, Code, Users, BookOpen, Target, Lightbulb, Globe, Crown } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Ishfaq Nazir",
      role: "Founder & CEO",
      bio: "Visionary leader and full-stack developer with 10+ years of experience building scalable applications. Passionate about democratizing coding education and empowering developers worldwide.",
      skills: ["Leadership", "Full-Stack Development", "Product Strategy", "Team Building"],
      avatar: "/placeholder.svg",
      featured: true,
      social: {
        github: "https://github.com/ishfaq24",
        linkedin: "https://linkedin.com/in/ishfaq_24",
        twitter: "https://twitter.com/ishfaq_24"
      }
    },
    {
      name: "Mohsin Ayoub",
      role: "Lead Developer",
      bio: "Full-stack developer with 8 years of experience. Passionate about teaching and building developer communities.",
      skills: ["React", "Node.js", "Python", "AWS"],
      avatar: "/placeholder.svg",
      social: {
        github: "https://github.com/mohsinayoub",
        linkedin: "https://linkedin.com/in/mohsinayoub",
        twitter: "https://twitter.com/mohsinayoub"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Content Creator & Backend Specialist",
      bio: "Backend engineer turned educator. Creates comprehensive tutorials on system design and scalable architectures.",
      skills: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      avatar: "/placeholder.svg",
      social: {
        github: "https://github.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson"
      }
    },
    {
      name: "Irfan Javid",
      role: "Frontend Architect & UI/UX Designer",
      bio: "Creative developer with a passion for beautiful, accessible user interfaces and smooth user experiences.",
      skills: ["React", "Vue.js", "CSS", "Figma"],
      avatar: "/placeholder.svg",
      social: {
        github: "https://github.com/irfanjavid",
        linkedin: "https://linkedin.com/in/irfanjavid",
        twitter: "https://twitter.com/irfanjavid"
      }
    },
    {
      name: "Ovais Tariq Lone (OTL)",
      role: "AI/ML Researcher & Educator",
      bio: "PhD in Machine Learning. Focuses on making AI concepts accessible to developers of all backgrounds.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science"],
      avatar: "/placeholder.svg",
      social: {
        github: "https://github.com/ovaistariq",
        linkedin: "https://linkedin.com/in/ovaistariq",
        twitter: "https://twitter.com/ovaistariq"
      }
    }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Knowledge Sharing",
      description: "We believe in the power of open knowledge and collaborative learning to advance the entire tech community."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Inclusive Community",
      description: "Creating a welcoming space for developers of all backgrounds, experience levels, and learning styles."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Practical Focus",
      description: "Our content emphasizes real-world applications and industry-relevant skills that matter in today's job market."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Staying at the forefront of technology trends and teaching the tools that shape the future of development."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Open Source",
      description: "Contributing to and promoting open source software that benefits the entire developer ecosystem."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion-Driven",
      description: "Everything we do is driven by our genuine love for coding, learning, and helping others succeed."
    }
  ];

  const stats = [
    { number: "50K+", label: "Community Members" },
    { number: "200+", label: "Tutorials Created" },
    { number: "100+", label: "Open Source Projects" },
    { number: "15+", label: "Countries Reached" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <BottomNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            About HackHub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're a passionate community of developers dedicated to sharing knowledge, 
            building amazing projects, and helping each other grow in the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-4">Our Mission</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                To democratize coding education and create a world where anyone, anywhere, 
                can learn to build the technology that shapes our future.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-primary-foreground/80">
                Founded in 2023, HackHub started as a small blog and has grown into a comprehensive 
                learning platform serving developers worldwide. We believe that great code comes from 
                great communities, and we're here to foster both.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from the content we create to the community we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind HackHub, each bringing unique expertise and perspectives 
              to help you succeed in your coding journey.
            </p>
          </div>
          
          {/* Featured Founder */}
          <div className="mb-12">
            {team.filter(member => member.featured).map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300 bg-gradient-primary text-primary-foreground border-0">
                <CardHeader className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4"></div>
                    <Crown className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/90 font-medium text-lg">
                    {member.role}
                  </CardDescription>
                  <p className="text-primary-foreground/80 max-w-2xl mx-auto">{member.bio}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Leadership & Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-white/20 text-primary-foreground border-white/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.open(member.social.github, '_blank')}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.open(member.social.linkedin, '_blank')}
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.open(member.social.twitter, '_blank')}
                      >
                        <Twitter className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.filter(member => !member.featured).map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium mb-2">
                        {member.role}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(member.social.github, '_blank')}
                      >
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(member.social.linkedin, '_blank')}
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(member.social.twitter, '_blank')}
                      >
                        <Twitter className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              From a simple idea to a thriving community - here's how HackHub evolved.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">The Beginning (2023)</h3>
                <p className="text-muted-foreground">
                  Started as a personal blog sharing coding tips and tutorials. The positive response 
                  from the community inspired us to dream bigger.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Growing the Community</h3>
                <p className="text-muted-foreground">
                  Expanded to include video tutorials, open-source projects, and interactive coding challenges. 
                  Our community began to take shape.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Platform Launch</h3>
                <p className="text-muted-foreground">
                  Launched the comprehensive HackHub platform with structured learning paths, 
                  project showcases, and community features.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">The Future</h3>
                <p className="text-muted-foreground">
                  Continuously evolving with new technologies, expanding our course offerings, 
                  and building tools that make coding more accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-secondary text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Get in Touch</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:hackhub.dev@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => window.open('https://discord.gg/hackhub', '_blank')}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;