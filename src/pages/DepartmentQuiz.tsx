import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { BookOpen, Trophy, ArrowLeft } from "lucide-react";
import { departmentConfig } from "@/data/departments";
import { getQuestionsByDepartmentWeek } from "@/data/questions";

const DepartmentQuiz = () => {
  const navigate = useNavigate();
  const { department } = useParams();
  
  const config = department ? departmentConfig[department] : null;

  if (!config) {
    navigate("/");
    return null;
  }

  const weeks = [];
  for (let i = config.startWeek; i <= config.endWeek; i++) {
    const actualQuestions = getQuestionsByDepartmentWeek(department!, i);
    weeks.push({
      id: i,
      label: `Week ${i}`,
      questions: actualQuestions.length,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Departments
        </Button>
        
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-4xl font-bold">NPTEL MCQ Practice</CardTitle>
            <CardDescription className="text-lg">
              {config.topic}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {weeks.map((week) => (
                <Button
                  key={week.id}
                  onClick={() => navigate(`/department/${department}/quiz/${week.id}`)}
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
                onClick={() => navigate(`/department/${department}/quiz/final`)}
                className="w-full h-auto py-6 text-lg font-semibold"
                size="lg"
              >
                <Trophy className="w-6 h-6 mr-2" />
                Final Test ({config.finalTestLabel})
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentQuiz;
