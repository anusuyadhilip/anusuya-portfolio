import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Aeronautical Engineering",
    institution: "Nehru Institute of Engineering and Technology",
    score: "8.4 CGPA",
    year: "",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "",
    score: "89%",
    year: "",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "",
    score: "95%",
    year: "",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground">
                    {item.degree}
                  </h3>
                  {item.institution && (
                    <p className="text-muted-foreground">{item.institution}</p>
                  )}
                  <p className="text-primary font-medium mt-1">{item.score}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
