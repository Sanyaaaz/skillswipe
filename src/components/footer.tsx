
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            SkillSwipe
          </Link>
          <p className="mt-2 text-muted-foreground">
            Learn new skills in bite-sized formats, one swipe at a time.
          </p>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/discover" className="text-muted-foreground hover:text-foreground transition-colors">
                Discover Skills
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SkillSwipe. All rights reserved.
      </div>
    </footer>
  );
}
