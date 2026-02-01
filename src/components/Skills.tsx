import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Java", category: "core" },
  { name: "Advanced Java", category: "core" },
  { name: "Servlets", category: "core" },
  { name: "JSP", category: "core" },
  { name: "MySQL", category: "database" },
  { name: "SQL", category: "database" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "Eclipse", category: "tools" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Technical Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="px-6 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
