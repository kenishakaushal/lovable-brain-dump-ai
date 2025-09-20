import { LogoOptions } from "@/components/LogoOptions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <LogoOptions />
      </main>
    </div>
  );
};

export default Index;