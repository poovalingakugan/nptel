import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";
import { cseTopics } from "@/data/cseTopics";

const CSETopics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-4xl font-bold">CSE - Select Topic</CardTitle>
            <CardDescription className="text-lg">
              Choose a topic to begin your quiz
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {cseTopics.map((topic) => (
              <div
                key={topic.id}
                className="border-2 rounded-lg p-6 hover:bg-accent/50 hover:border-primary transition-all cursor-pointer"
                onClick={() => navigate(`/department/cse/topic/${topic.id}`)}
              >
                <div className="font-bold text-xl mb-2">{topic.name}</div>
                <div className="text-sm text-muted-foreground">{topic.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CSETopics;
