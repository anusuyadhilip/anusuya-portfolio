import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          About Me
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            I am an engineering graduate with a degree in Aeronautical Engineering. 
            After a career break for family responsibilities, I am now restarting my 
            professional journey as a <span className="text-primary font-medium">Java Backend Developer</span>.
          </p>
          <p>
            During this time, I completed a comprehensive Java Full Stack Developer 
            certification to update my skills and prepare for the current job market. 
            I am excited to bring my problem-solving mindset and fresh technical skills 
            to a development team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Problem Solver</h3>
              <p className="text-sm text-muted-foreground">
                I enjoy breaking down complex problems into simple, logical solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Detail Oriented</h3>
              <p className="text-sm text-muted-foreground">
                I pay close attention to details to ensure quality and accuracy in my work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                I believe in writing clean, maintainable, and well-documented code.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
