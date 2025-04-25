
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Lightbulb, Zap, BarChart4, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About SkillSwipe</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing learning with bite-sized content and gamified experiences.
            Learn on the go, one swipe at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At SkillSwipe, we're reimagining education for the digital age. Our platform 
              delivers knowledge in bite-sized formats designed for today's fast-paced world, 
              combining the addictive nature of social media with the transformative power of 
              learning.
            </p>
            <p className="text-muted-foreground">
              We believe that learning shouldn't be confined to classrooms or lengthy courses. 
              Instead, it should be accessible, engaging, and integrated into your daily routine. 
              With just a few minutes each day, you can acquire new skills, expand your knowledge, 
              and stay ahead in an ever-evolving world.
            </p>
          </div>
          
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Why SkillSwipe?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Badge variant="outline" className="h-6 w-6 rounded-full p-1">
                  <Zap className="h-4 w-4 text-primary" />
                </Badge>
                <div>
                  <span className="font-medium">Micro-Learning Format</span>
                  <p className="text-muted-foreground">Bite-sized content designed for quick consumption</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="h-6 w-6 rounded-full p-1">
                  <Users className="h-4 w-4 text-primary" />
                </Badge>
                <div>
                  <span className="font-medium">Social Learning</span>
                  <p className="text-muted-foreground">Learn with friends and build accountability</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="h-6 w-6 rounded-full p-1">
                  <Award className="h-4 w-4 text-primary" />
                </Badge>
                <div>
                  <span className="font-medium">Gamified Experience</span>
                  <p className="text-muted-foreground">Streaks, badges, and challenges keep you motivated</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="h-6 w-6 rounded-full p-1">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </Badge>
                <div>
                  <span className="font-medium">AI-Powered Personalization</span>
                  <p className="text-muted-foreground">Content tailored to your learning style and interests</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Swipe & Learn</h3>
                <p className="text-muted-foreground">
                  Browse through daily cards covering various topics and skills. 
                  Swipe right to save content you like, left to skip.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Build Streaks</h3>
                <p className="text-muted-foreground">
                  Maintain daily learning habits to build streaks. 
                  The longer your streak, the more rewards you earn.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Challenge Friends</h3>
                <p className="text-muted-foreground">
                  Create duets with friends, participate in challenges, 
                  and compete on leaderboards.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card border rounded-xl p-8 shadow-sm mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Accessibility</h3>
                  <p className="text-muted-foreground">Learning should be available to everyone, anywhere, anytime.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Quality</h3>
                  <p className="text-muted-foreground">We ensure all content is accurate, up-to-date, and valuable.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Community</h3>
                  <p className="text-muted-foreground">We believe learning is enhanced through social connection.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Innovation</h3>
                  <p className="text-muted-foreground">We continuously evolve our platform with emerging technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join the SkillSwipe Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Start your learning journey today and join thousands of users 
            who are transforming their lives one swipe at a time.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
