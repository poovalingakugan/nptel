import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const departments = [
    { id: "cse", label: "CSE", name: "Computer Science Engineering" },
    { id: "it", label: "IT", name: "Information Technology" },
    { id: "ece", label: "ECE", name: "Electronics and Communication Engineering" },
    { id: "eee", label: "EEE", name: "Electrical and Electronics Engineering" },
    { id: "csbs", label: "CSBS", name: "Computer Science and Business Systems" },
  ];

  const handleSubmit = () => {
    if (selectedDepartment) {
      navigate(`/department/${selectedDepartment}`);
    }
  };

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
            <RadioGroup value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedDepartment(dept.id)}
                  >
                    <RadioGroupItem value={dept.id} id={dept.id} />
                    <Label
                      htmlFor={dept.id}
                      className="flex-1 cursor-pointer font-medium text-lg"
                    >
                      {dept.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <Button
              onClick={handleSubmit}
              disabled={!selectedDepartment}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
