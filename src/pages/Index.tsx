import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Hero Section */}
          <div className="space-y-6">
            <Logo size="lg" className="justify-center" />
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-foreground leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
                  Stress
                </span>{" "}
                Into{" "}
                <span className="bg-gradient-to-r from-neural to-success bg-clip-text text-transparent">
                  Success
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                An AI-powered platform that turns your mental overwhelm into organized, actionable insights for personal and professional growth.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-neural hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-neural rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Brain Dump</h3>
              <p className="text-muted-foreground">
                Unload your racing thoughts into our AI system that organizes and prioritizes your mental clutter.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-neural/10 transition-all duration-300 border-neural/20">
              <div className="w-12 h-12 bg-gradient-to-r from-neural to-success rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Stress Analysis</h3>
              <p className="text-muted-foreground">
                Advanced AI identifies stress patterns and provides personalized insights for better mental clarity.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:shadow-success/10 transition-all duration-300 border-success/20">
              <div className="w-12 h-12 bg-gradient-to-r from-success to-success/80 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Success Roadmap</h3>
              <p className="text-muted-foreground">
                Get actionable steps and goal-oriented plans that transform your insights into measurable success.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 via-neural/10 to-success/10 rounded-2xl p-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Ready to Transform Your Mental Chaos?
              </h3>
              <p className="text-lg text-muted-foreground">
                Join thousands who've turned their stress into their greatest success stories.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/50 backdrop-blur">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground">
              © 2024 Brain Dump Hub. Transforming stress into success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;