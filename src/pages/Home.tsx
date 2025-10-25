import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const departments = [
    { id: "cse", label: "CSE", name: "Computer Science Engineering" },
    { id: "it", label: "IT", name: "Information Technology" },
    { id: "ece", label: "ECE", name: "Electronics and Communication Engineering" },
    { id: "eee-csbs", label: "EEE & CSBS", name: "Electrical and Electronics Engineering & Computer Science and Business Systems" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-4xl font-bold">NPTEL MCQ Practice</CardTitle>
            <CardDescription className="text-lg">
              Select your department to begin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="border-2 rounded-lg p-6 hover:bg-accent/50 hover:border-primary transition-all cursor-pointer"
                  onClick={() => navigate(`/department/${dept.id}`)}
                >
                  <div className="font-bold text-2xl mb-2">{dept.label}</div>
                  <div className="text-sm text-muted-foreground">{dept.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
