import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-foreground leading-tight">
                Turn Your{" "}
                <span className="bg-gradient-to-r from-stress to-primary bg-clip-text text-transparent">
                  Stress
                </span>{" "}
                Into{" "}
                <span className="bg-gradient-to-r from-neural to-calm bg-clip-text text-transparent">
                  Success
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dump your racing thoughts, overwhelming feelings, and daily chaos. Our AI instantly transforms your mental clutter into clarity, actionable plans, and emotional support — designed specifically for students.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-stress via-primary to-neural text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg px-8 py-4"
              >
                Start Your Brain Dump
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                See How It Works
              </Button>
            </div>
          </section>

          {/* How It Works */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Three Steps to Transformation
              </h2>
              <p className="text-xl text-muted-foreground">
                From chaos to clarity in seconds
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-xl hover:shadow-stress/10 transition-all duration-300 border-stress/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stress/5 to-transparent"></div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-stress to-primary rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">1. Dump Everything</h3>
                    <p className="text-muted-foreground text-lg">
                      Type, speak, or even take a selfie. Unload all your stress, worries, and overwhelming thoughts without judgment.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl hover:shadow-neural/10 transition-all duration-300 border-neural/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neural/5 to-transparent"></div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-neural to-success rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">2. AI Analysis</h3>
                    <p className="text-muted-foreground text-lg">
                      Our AI processes your thoughts, identifies patterns, and understands both your emotions and practical challenges.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl hover:shadow-calm/10 transition-all duration-300 border-calm/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-calm/5 to-transparent"></div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-success to-calm rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">3. Get Your Trio</h3>
                    <p className="text-muted-foreground text-lg">
                      Receive an action plan, wellness reset tip, and motivation boost — everything you need to move forward.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* The Magic Trio */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Your Personal Success Trio
              </h2>
              <p className="text-xl text-muted-foreground">
                Every brain dump gives you exactly what you need
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-to-br from-stress/10 via-primary/10 to-transparent border-primary/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-stress to-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">✅ Action Plan</h3>
                  <p className="text-muted-foreground text-lg">
                    Step-by-step, bite-sized tasks that tackle your actual problems. No overwhelming to-do lists — just clear next steps.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-neural/10 via-success/10 to-transparent border-neural/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neural to-success rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">💆 Wellness Reset</h3>
                  <p className="text-muted-foreground text-lg">
                    Quick body and mind nudges — stretch, hydrate, breathe. Simple resets that actually work in your busy student life.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-success/10 via-calm/10 to-transparent border-calm/30">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-success to-calm rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">💡 Motivation Boost</h3>
                  <p className="text-muted-foreground text-lg">
                    Personalized affirmations and reframing that actually resonate. Turn negative spirals into forward momentum.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Supermemory Integration */}
          <section className="bg-gradient-to-r from-deep/10 via-neural/10 to-success/10 rounded-3xl p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Your AI Remembers Everything
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powered by Supermemory integration, BrainDump builds a personal knowledge graph of your stress patterns, growth, and victories. The more you use it, the smarter and more personalized it becomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">📊 Pattern Recognition</h3>
                <p className="text-muted-foreground">
                  "You've been mentioning exams a lot lately. Today's plan includes focused study sprints plus stress-busting breaks."
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">🎯 Personal Growth</h3>
                <p className="text-muted-foreground">
                  Track your emotional patterns and see how you're handling stress better over time. Celebrate your wins!
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-8 py-16">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-foreground">
                Ready to Transform Your Chaos?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who've turned their overwhelming stress into organized success stories.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-stress via-primary via-neural to-calm text-white hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 text-xl px-12 py-6"
            >
              Start Your Free Brain Dump
            </Button>
            
            <p className="text-sm text-muted-foreground">
              No signup required • Get instant results • Your data stays private
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground text-center">
              © 2024 BrainDump. Transforming student stress into success, one dump at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;