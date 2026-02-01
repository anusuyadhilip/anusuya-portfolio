import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Product Management System",
    description:
      "Developed a CRUD-based product management system to manage product data efficiently. Implemented database integration ensuring data consistency and smooth operations.",
    techStack: ["Java", "Servlets", "JSP", "MySQL", "HTML", "CSS"],
    features: [
      "Add, update, and delete products",
      "MySQL database integration",
      "Clean and responsive UI",
      "Data validation and error handling",
    ],
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border-0 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
