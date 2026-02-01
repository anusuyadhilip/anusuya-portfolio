import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Anusuya P
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
          Java Backend / Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Passionate Java Developer focused on building scalable, reliable backend applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="gap-2"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <a href="#" download className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
