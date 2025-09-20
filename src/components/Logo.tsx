import logoImage from "@/assets/logo-option-3.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-12",
    md: "h-16", 
    lg: "h-32"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const subtitleSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Brain Dump: AI Stress to Success Hub" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      <div className="flex flex-col">
        <h1 className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary via-neural to-success bg-clip-text text-transparent`}>
          Brain Dump
        </h1>
        <p className={`${subtitleSizeClasses[size]} text-muted-foreground font-medium`}>
          AI Stress to Success Hub
        </p>
      </div>
    </div>
  );
};