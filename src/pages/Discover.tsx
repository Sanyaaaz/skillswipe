
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Star, Clock, Heart } from "lucide-react";

interface SkillCard {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  popularity: number;
}

const skillCards: SkillCard[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    description: "Learn the basics of React Hooks and how they can simplify your components.",
    category: "tech",
    difficulty: "beginner",
    estimatedTime: "10 min",
    popularity: 98,
  },
  {
    id: "2",
    title: "Meditation Basics",
    description: "Discover simple meditation techniques to reduce stress and improve focus.",
    category: "health",
    difficulty: "beginner",
    estimatedTime: "5 min",
    popularity: 87,
  },
  {
    id: "3",
    title: "Advanced CSS Grid Layouts",
    description: "Master complex layouts with CSS Grid and responsive design patterns.",
    category: "tech",
    difficulty: "intermediate",
    estimatedTime: "15 min",
    popularity: 92,
  },
  {
    id: "4",
    title: "Financial Planning Fundamentals",
    description: "Learn essential strategies for budgeting and financial planning.",
    category: "finance",
    difficulty: "beginner",
    estimatedTime: "12 min",
    popularity: 95,
  },
  {
    id: "5",
    title: "Machine Learning Concepts",
    description: "Understand the core concepts behind machine learning algorithms.",
    category: "tech",
    difficulty: "advanced",
    estimatedTime: "20 min",
    popularity: 99,
  },
  {
    id: "6",
    title: "Effective Public Speaking",
    description: "Master techniques to overcome stage fright and deliver compelling presentations.",
    category: "personal",
    difficulty: "intermediate",
    estimatedTime: "15 min",
    popularity: 91,
  },
];

const categoryColors: Record<string, string> = {
  tech: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  health: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  productivity: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  finance: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  personal: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
};

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredCards = skillCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === null || card.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(skillCards.map(card => card.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Discover New Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore bite-sized learning content across various categories. 
            Swipe right to save, left to skip.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for skills..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={categoryFilter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategoryFilter(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={categoryFilter === category ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategoryFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card key={card.id} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={categoryColors[card.category]}>
                      {card.category.charAt(0).toUpperCase() + card.category.slice(1)}
                    </Badge>
                    <Badge className={difficultyColors[card.difficulty]}>
                      {card.difficulty.charAt(0).toUpperCase() + card.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {card.estimatedTime}
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 text-yellow-500" />
                      {card.popularity}% popularity
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No skills found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
