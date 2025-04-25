
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StreakDisplayProps {
  streak: number;
  className?: string;
}

export function StreakDisplay({ streak, className }: StreakDisplayProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="text-sm font-medium text-muted-foreground mb-1">
        Current Streak
      </div>
      <div className="text-xl font-bold flex items-center gap-1">
        {streak} 
        <span className="text-sm font-medium">
          day{streak !== 1 ? "s" : ""}
        </span>
        {streak >= 5 && (
          <Badge variant="secondary" className="ml-1 text-xs">
            🔥 On Fire!
          </Badge>
        )}
      </div>
    </div>
  );
}
