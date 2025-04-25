
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, UserPlus, Home, Compass, Info, Timer } from "lucide-react";

export function Navbar() {
  return (
    <div className="border-b sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            SkillSwipe
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link to="/discover" className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            <Compass className="h-4 w-4" />
            <span>Discover</span>
          </Link>
          <Link to="/focus" className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            <Timer className="h-4 w-4" />
            <span>Focus Mode</span>
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
            <Info className="h-4 w-4" />
            <span>About</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Link>
            </Button>
          </div>
          
          <ThemeToggle />
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/discover" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Compass className="h-5 w-5" />
                  <span>Discover</span>
                </Link>
                <Link to="/focus" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Timer className="h-5 w-5" />
                  <span>Focus Mode</span>
                </Link>
                <Link to="/about" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </Link>
                
                <div className="border-t pt-6 mt-4 flex flex-col gap-4">
                  <Button variant="outline" asChild>
                    <Link to="/login">
                      <LogIn className="mr-2 h-4 w-4" />
                      Log In
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
