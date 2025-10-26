import { useState, useEffect } from "react";
import { getQuestionsByDepartmentWeek, getAllQuestionsByDepartment } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle2, XCircle, Eye, EyeOff, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface UserAnswers {
  [key: number]: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface QuizProps {
  weekId?: string;
  department?: string;
  topicId?: string;
}

const Quiz = ({ weekId, department = 'ece', topicId }: QuizProps) => {
  const navigate = useNavigate();
  const getInitialQuestions = () => {
    if (weekId === "final") return getAllQuestionsByDepartment(department);
    if (weekId !== undefined) {
      const week = parseInt(weekId);
      return getQuestionsByDepartmentWeek(department, week);
    }
    return getAllQuestionsByDepartment(department);
  };

  const [questions, setQuestions] = useState(getInitialQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  // Shuffle questions on initial load
  useEffect(() => {
    const initialQuestions = getInitialQuestions();
    setQuestions(shuffleArray(initialQuestions));
  }, [weekId, department]);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    questions.forEach(question => {
      if (userAnswers[question.id] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    setShowResults(true);
    setShowAllQuestions(true);
  };

  const handleRestart = () => {
    const initialQuestions = getInitialQuestions();
    setQuestions(shuffleArray(initialQuestions));
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setShowAllQuestions(false);
  };

  const getFeedbackMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return { text: "Excellent", emoji: "🌟", color: "text-success" };
    if (percentage >= 90) return { text: "Very Good", emoji: "👍", color: "text-accent" };
    if (percentage >= 70) return { text: "Good", emoji: "🙂", color: "text-primary" };
    if (percentage >= 45) return { text: "Average", emoji: "😐", color: "text-warning" };
    return { text: "Needs Improvement", emoji: "💪", color: "text-muted-foreground" };
  };

  const currentQuestionData = questions[currentQuestion];
  const correctAnswers = calculateResults();
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);
  const feedback = getFeedbackMessage(correctAnswers, totalQuestions);

  const departmentNames: Record<string, string> = {
    cse: "CSE",
    it: "IT", 
    ece: "ECE",
    "eee-csbs": "EEE & CSBS"
  };

  const displayDepartment = department ? departmentNames[department] || department.toUpperCase() : "";
  const displayWeek = weekId === "final" ? "Final Test" : `Week ${weekId}`;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2">
            <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-4xl font-bold mb-2">Quiz Completed! 🎉</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Here are your results
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
                  <span className="text-6xl">{feedback.emoji}</span>
                </div>
                <h2 className={cn("text-5xl font-bold mb-4", feedback.color)}>
                  {correctAnswers}/{totalQuestions}
                </h2>
                <p className="text-3xl font-semibold text-foreground mb-2">
                  {percentage}%
                </p>
                <p className={cn("text-2xl font-medium", feedback.color)}>
                  {feedback.text}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Correct Answers:</span>
                  <span className="font-semibold text-success flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    {correctAnswers}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Incorrect Answers:</span>
                  <span className="font-semibold text-destructive flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    {totalQuestions - correctAnswers}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Total Questions:</span>
                  <span className="font-semibold text-foreground">{totalQuestions}</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center mb-8">
                <Button 
                  onClick={() => navigate(topicId ? `/department/cse/topic/${topicId}` : department ? `/department/${department}` : "/")}
                  size="lg"
                  variant="outline"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to {department ? 'Weeks' : 'Home'}
                </Button>
                <Button 
                  onClick={handleRestart}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Restart Quiz
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Review Your Answers
                </h3>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {questions.map((question, index) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = userAnswer === question.answer;
                    const wasAnswered = userAnswer !== undefined;

                    return (
                      <div
                        key={question.id}
                        className={cn(
                          "p-4 rounded-lg border-2 transition-colors",
                          isCorrect && "border-success bg-success/5",
                          !isCorrect && wasAnswered && "border-destructive bg-destructive/5",
                          !wasAnswered && "border-muted bg-muted/30"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold",
                            isCorrect && "bg-success text-success-foreground",
                            !isCorrect && wasAnswered && "bg-destructive text-destructive-foreground",
                            !wasAnswered && "bg-muted text-muted-foreground"
                          )}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-2">{question.question}</p>
                            {question.image && question.image !== "PLACE_IMAGE_URL_HERE" && (
                              <div className="mb-2">
                                <img 
                                  src={question.image} 
                                  alt="Question illustration" 
                                  className="max-w-sm h-auto rounded-lg border-2 border-border"
                                />
                              </div>
                            )}
                            <div className="text-sm space-y-1">
                              {wasAnswered && (
                                <>
                                  <p className={cn(
                                    "font-medium",
                                    isCorrect ? "text-success" : "text-destructive"
                                  )}>
                                    Your answer: {question.options[userAnswer]}
                                    {isCorrect ? " ✓" : " ✗"}
                                  </p>
                                  {!isCorrect && (
                                    <p className="text-success font-medium">
                                      Correct answer: {question.options[question.answer]} ✓
                                    </p>
                                  )}
                                </>
                              )}
                              {!wasAnswered && (
                                <p className="text-muted-foreground">
                                  Not answered. Correct answer: {question.options[question.answer]}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            {displayDepartment} - {displayWeek}
          </h1>
          <p className="text-lg text-muted-foreground">
            Test your knowledge with {totalQuestions} questions
          </p>
        </div>

        {/* Progress Card */}
        <Card className="mb-6 shadow-lg border-2">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  Progress
                </span>
                <span className="text-sm font-bold text-foreground">
                  {answeredCount} / {totalQuestions} answered
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAllQuestions(!showAllQuestions)}
                  className="text-xs"
                >
                  {showAllQuestions ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showAllQuestions ? "Hide All" : "Show All"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {showAllQuestions ? (
          /* All Questions View */
          <div className="space-y-4 mb-6">
            {questions.map((question, index) => {
              const isAnswered = userAnswers[question.id] !== undefined;
              return (
                <Card 
                  key={question.id}
                  className={cn(
                    "shadow-md transition-all cursor-pointer hover:shadow-lg border-2",
                    isAnswered && "border-primary/50 bg-primary/5",
                    index === currentQuestion && "ring-2 ring-primary"
                  )}
                  onClick={() => setCurrentQuestion(index)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <span className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                        isAnswered ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div>{question.question}</div>
                        {question.image && question.image !== "PLACE_IMAGE_URL_HERE" && (
                          <div className="mt-2">
                            <img 
                              src={question.image} 
                              alt="Question illustration" 
                              className="max-w-full h-auto rounded-lg border-2 border-border"
                            />
                          </div>
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = userAnswers[question.id] === optionIndex;
                        return (
                          <button
                            key={optionIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAnswerSelect(question.id, optionIndex);
                            }}
                            className={cn(
                              "p-3 rounded-lg text-left transition-all border-2",
                              "hover:border-primary hover:bg-primary/10",
                              isSelected
                                ? "border-primary bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium"
                                : "border-border bg-card"
                            )}
                          >
                            <span className="flex items-center gap-2">
                              <span className={cn(
                                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2",
                                isSelected ? "border-primary-foreground" : "border-current"
                              )}>
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              {option}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Single Question View */
          <Card className="mb-6 shadow-xl border-2">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {currentQuestion + 1}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    {currentQuestionData.question}
                  </CardTitle>
                  {currentQuestionData.image && currentQuestionData.image !== "PLACE_IMAGE_URL_HERE" && (
                    <div className="mt-4 mb-2">
                      <img 
                        src={currentQuestionData.image} 
                        alt="Question illustration" 
                        className="max-w-full h-auto rounded-lg border-2 border-border"
                      />
                    </div>
                  )}
                  <CardDescription>
                    Select the correct answer from the options below
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-3">
                {currentQuestionData.options.map((option, index) => {
                  const isSelected = userAnswers[currentQuestionData.id] === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestionData.id, index)}
                      className={cn(
                        "p-4 rounded-lg text-left transition-all border-2 hover:scale-[1.02]",
                        "hover:border-primary hover:shadow-md",
                        isSelected
                          ? "border-primary bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium shadow-lg"
                          : "border-border bg-card hover:bg-accent/50"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all",
                          isSelected ? "border-primary-foreground bg-primary-foreground/20" : "border-current"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-base">{option}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentQuestion === totalQuestions - 1}
              size="lg"
              className="flex-1"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {answeredCount >= 1 ? (
            <Button
              onClick={handleSubmit}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
            >
              Submit Quiz
            </Button>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm text-muted-foreground">
                Answer at least 1 question to submit
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={() => navigate(topicId ? `/department/cse/topic/${topicId}` : department ? `/department/${department}` : "/")}
              variant="ghost"
              size="sm"
              className="flex-1"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Weeks
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="sm"
              className="flex-1"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
