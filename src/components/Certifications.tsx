import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Java Full Stack Developer",
    institution: "Besant Technologies",
    year: "2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Certifications
        </h2>

        <div className="max-w-xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.institution} • {cert.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
