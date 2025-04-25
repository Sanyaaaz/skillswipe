
import { Award, Star, Users } from "lucide-react";

const features = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Bite-sized Learning",
    description:
      "Learn new concepts in just minutes a day with our carefully crafted micro-content, perfect for busy schedules.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Social Learning",
    description:
      "Learn with friends, create duets, and challenge each other to maintain streaks and master new skills together.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Gamified Experience",
    description:
      "Earn badges, maintain streaks, and compete on leaderboards to make your learning journey exciting and rewarding.",
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Why SkillSwipe?</h2>
          <p className="mt-4 text-muted-foreground">
            Our platform is designed with modern learning science and engagement
            techniques to help you build lasting skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
