import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { BookOpen, Trophy, ArrowLeft } from "lucide-react";
import { departmentConfig } from "@/data/departments";
import { getQuestionsByDepartmentWeek } from "@/data/questions";
import { useEffect } from "react";

const DepartmentQuiz = () => {
  const navigate = useNavigate();
  const { department, topicId } = useParams();

  const actualDepartment = topicId ? "cse" : department;
  const config = actualDepartment ? departmentConfig[actualDepartment] : null;

  useEffect(() => {
    if (!config) {
      navigate("/");
    }
  }, [config, navigate]);

  if (!config) {
    return null;
  }

  const weeks = [];
  for (let i = config.startWeek; i <= config.endWeek; i++) {
    const actualQuestions = getQuestionsByDepartmentWeek(actualDepartment!, i);
    weeks.push({
      id: i,
      label: `Week ${i}`,
      questions: actualQuestions.length,
    });
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center py-4">
      <div className="mb-4">
        <Button
          onClick={() => navigate(topicId ? "/cse/topics" : "/")}
          variant="ghost"
          className="hover:bg-card text-muted-foreground hover:text-foreground font-semibold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {topicId ? "Back to Topics" : "Back to Courses"}
        </Button>
      </div>

      <Card className="shadow-2xl border border-border/60 bg-card/95 backdrop-blur-sm rounded-3xl overflow-hidden">
        <CardHeader className="text-center pt-8 pb-6 px-6 sm:px-10 space-y-3">
          <div className="flex justify-center mb-1">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
              <BookOpen className="w-9 h-9 text-primary stroke-[2.2]" />
            </div>
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-foreground">
            NPTEL MCQ Practice
          </CardTitle>
          <CardDescription className="text-lg sm:text-xl font-semibold text-primary">
            {config.topic}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 sm:px-10 pb-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {weeks.map((week) => (
              <Button
                key={week.id}
                onClick={() =>
                  navigate(
                    topicId
                      ? `/department/cse/topic/${topicId}/quiz/${week.id}`
                      : `/department/${actualDepartment}/quiz/${week.id}`
                  )
                }
                variant="outline"
                className="h-auto py-4 rounded-xl border-2 border-border/80 flex flex-col items-center gap-1.5 hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <span className="font-bold text-base text-foreground">{week.label}</span>
                <span className="text-xs text-muted-foreground font-medium">
                  {week.questions} Questions
                </span>
              </Button>
            ))}
          </div>

          <div className="pt-2">
            <Button
              onClick={() =>
                navigate(
                  topicId
                    ? `/department/cse/topic/${topicId}/quiz/final`
                    : `/department/${actualDepartment}/quiz/final`
                )
              }
              className="w-full h-auto py-5 text-lg font-bold rounded-2xl shadow-lg hover:shadow-primary/25 transition-all duration-200"
              size="lg"
            >
              <Trophy className="w-5 h-5 mr-2 text-amber-300" />
              Final Test ({config.finalTestLabel})
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepartmentQuiz;
