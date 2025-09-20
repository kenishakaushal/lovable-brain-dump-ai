import logo1 from "@/assets/logo-option-1.png";
import logo2 from "@/assets/logo-option-2.png";
import logo3 from "@/assets/logo-option-3.png";
import logo4 from "@/assets/logo-option-4.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LogoOptions = () => {
  const logos = [
    {
      id: 1,
      src: logo1,
      title: "Minimalist Geometric",
      description: "Clean lines and dots forming a brain silhouette"
    },
    {
      id: 2,
      src: logo2,
      title: "Tech Circuit Board",
      description: "Digital circuit patterns in brain shape"
    },
    {
      id: 3,
      src: logo3,
      title: "Organic Neural Flow",
      description: "Flowing curves and neural pathways"
    },
    {
      id: 4,
      src: logo4,
      title: "Low-Poly Crystal",
      description: "Geometric triangular brain design"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-neural to-success bg-clip-text text-transparent">
          Choose Your Logo
        </h1>
        <p className="text-xl text-muted-foreground">
          Pick the perfect logo for Brain Dump: AI Stress to Success Hub
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {logos.map((logo) => (
          <Card key={logo.id} className="p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/20">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-8 flex items-center justify-center min-h-[200px]">
                <img 
                  src={logo.src} 
                  alt={`Logo Option ${logo.id}`}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Option {logo.id}: {logo.title}
                </h3>
                <p className="text-muted-foreground">
                  {logo.description}
                </p>
                <Button variant="outline" className="w-full">
                  Select This Logo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 bg-muted/30 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-foreground">
          Need Something Different?
        </h3>
        <p className="text-muted-foreground">
          Let me know if you'd like to see variations of any of these styles or explore completely different concepts!
        </p>
        <Button className="bg-gradient-to-r from-primary to-neural">
          Request Custom Logo
        </Button>
      </div>
    </div>
  );
};