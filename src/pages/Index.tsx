import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Logo Showcase */}
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">
              Your Selected Logo
            </h1>
            
            {/* Large Logo Display */}
            <Card className="p-12 bg-white/50 backdrop-blur border-primary/20">
              <Logo size="lg" className="justify-center" />
            </Card>

            {/* Different Size Examples */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/30 backdrop-blur">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Large (Hero)</h3>
                  <Logo size="lg" className="justify-center" />
                </div>
              </Card>
              
              <Card className="p-6 bg-white/30 backdrop-blur">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Medium (Header)</h3>
                  <Logo size="md" className="justify-center" />
                </div>
              </Card>
              
              <Card className="p-6 bg-white/30 backdrop-blur">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground">Small (Footer)</h3>
                  <Logo size="sm" className="justify-center" />
                </div>
              </Card>
            </div>
          </div>

          {/* Logo Details */}
          <div className="bg-gradient-to-r from-primary/10 via-neural/10 to-success/10 rounded-2xl p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Organic Neural Flow Logo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your selected logo features flowing organic curves and neural pathways with a beautiful gradient from purple to teal, perfectly representing the transformation from stress to success through AI intelligence.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button className="bg-gradient-to-r from-primary to-neural">
                  Download Logo Files
                </Button>
                <Button variant="outline">
                  See Other Options
                </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;