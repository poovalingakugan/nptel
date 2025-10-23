import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, Trophy } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const weeks = [
    { id: 0, label: "Week 0", questions: 10 },
    { id: 1, label: "Week 1", questions: 15 },
    { id: 2, label: "Week 2", questions: 15 },
    { id: 3, label: "Week 3", questions: 15 },
    { id: 4, label: "Week 4", questions: 15 },
    { id: 5, label: "Week 5", questions: 15 },
    { id: 6, label: "Week 6", questions: 15 },
    { id: 7, label: "Week 7", questions: 15 },
    { id: 8, label: "Week 8", questions: 15 },
    { id: 9, label: "Week 9", questions: 15 },
    { id: 10, label: "Week 10", questions: 15 },
    { id: 11, label: "Week 11", questions: 15 },
    { id: 12, label: "Week 12", questions: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-4xl font-bold">NPTEL MCQ Practice</CardTitle>
            <CardDescription className="text-lg">
              Introduction to Industry 4.0 and Industrial Internet of Things
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {weeks.map((week) => (
                <Button
                  key={week.id}
                  onClick={() => navigate(`/quiz/${week.id}`)}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <span className="font-semibold">{week.label}</span>
                  <span className="text-xs text-muted-foreground">{week.questions} Questions</span>
                </Button>
              ))}
            </div>

            <div className="pt-4">
              <Button
                onClick={() => navigate("/quiz/final")}
                className="w-full h-auto py-6 text-lg font-semibold"
                size="lg"
              >
                <Trophy className="w-6 h-6 mr-2" />
                Final Test (Week 0-12)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
