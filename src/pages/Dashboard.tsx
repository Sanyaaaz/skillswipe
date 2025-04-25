
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SwipeCard, CardCategory } from "@/components/swipe-card";
import { ProgressSummary } from "@/components/progress-summary";
import { toast } from "sonner";

interface Card {
  id: string;
  title: string;
  description: string;
  category: CardCategory;
}

const sampleCards: Card[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    description: "Learn how useState and useEffect can simplify your React components.",
    category: "tech"
  },
  {
    id: "2",
    title: "5-Minute Mindfulness Practice",
    description: "A quick meditation technique to reduce stress and improve focus.",
    category: "health"
  },
  {
    id: "3",
    title: "Time-Blocking Method",
    description: "Increase productivity by organizing your day into focused blocks.",
    category: "productivity"
  },
  {
    id: "4",
    title: "Understanding API Requests",
    description: "Learn the basics of fetching data from APIs in web applications.",
    category: "tech"
  },
  {
    id: "5",
    title: "Quick Desk Stretches",
    description: "Simple stretches to relieve tension while working at your desk.",
    category: "health"
  }
];

const Dashboard = () => {
  const [cards, setCards] = useState<Card[]>(sampleCards);
  const [streak, setStreak] = useState(3);
  const [weeklyProgress, setWeeklyProgress] = useState(12);
  const weeklyGoal = 20;

  const handleSwipeLeft = (id: string) => {
    toast.info("Card skipped");
    setCards(cards.filter(card => card.id !== id));
  };

  const handleSwipeRight = (id: string) => {
    toast.success("Added to your saved items!");
    setCards(cards.filter(card => card.id !== id));
    setWeeklyProgress(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Today's Cards</h2>
            
            {cards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map(card => (
                  <SwipeCard
                    key={card.id}
                    {...card}
                    onSwipeLeft={() => handleSwipeLeft(card.id)}
                    onSwipeRight={() => handleSwipeRight(card.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-card border rounded-xl p-6 text-center">
                <p className="text-muted-foreground">You've completed all cards for today!</p>
                <p className="mt-2">Check back tomorrow for new content.</p>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Your Progress</h2>
            <ProgressSummary 
              streak={streak}
              weeklyGoal={weeklyGoal}
              weeklyProgress={weeklyProgress}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
