
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardCategory = "tech" | "health" | "productivity";

export interface SwipeCardProps {
  id: string;
  title: string;
  description: string;
  category: CardCategory;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export function SwipeCard({
  id,
  title,
  description,
  category,
  onSwipeLeft,
  onSwipeRight,
}: SwipeCardProps) {
  return (
    <div className={cn("swipe-card", category)}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full",
            category === "tech" && "bg-category-tech/10 text-category-tech",
            category === "health" && "bg-category-health/10 text-category-health",
            category === "productivity" &&
              "bg-category-productivity/10 text-category-productivity"
          )}
        >
          {category}
        </span>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
      
      <div className="card-actions">
        <button className="swipe-button swipe-left" onClick={onSwipeLeft}>
          <X className="h-5 w-5" />
        </button>
        <button className="swipe-button swipe-right" onClick={onSwipeRight}>
          <Check className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
