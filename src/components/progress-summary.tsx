
import { Progress } from "@/components/ui/progress";
import { StreakDisplay } from "@/components/streak-display";

interface ProgressSummaryProps {
  streak: number;
  weeklyGoal: number;
  weeklyProgress: number;
}

export function ProgressSummary({ 
  streak,
  weeklyGoal,
  weeklyProgress 
}: ProgressSummaryProps) {
  const progressPercentage = Math.min(100, (weeklyProgress / weeklyGoal) * 100);
  
  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <StreakDisplay streak={streak} />
        
        <div className="flex-1">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-muted-foreground">{weeklyProgress} of {weeklyGoal} cards</span>
            <span className="font-medium">{progressPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        {weeklyProgress >= weeklyGoal ? (
          <p>Great job! You've reached your weekly goal! 🎉</p>
        ) : (
          <p>Keep going! Just {weeklyGoal - weeklyProgress} more cards to reach your weekly goal.</p>
        )}
      </div>
    </div>
  );
}
