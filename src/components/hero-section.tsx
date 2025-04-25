
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 w-full h-full -z-10 opacity-20"></div>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Learn New Skills with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent block">
            Every Swipe
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Micro-learning made fun and social. Swipe through bite-sized lessons,
          challenge friends, and build daily learning habits.
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
