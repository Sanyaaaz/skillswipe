
import { cn } from "@/lib/utils";

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
      <div className="streak-badge">
        {streak} day{streak !== 1 ? "s" : ""}
      </div>
    </div>
  );
}
