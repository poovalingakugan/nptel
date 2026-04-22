import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const departments = [
    { id: "sensors-and-actuators", label: "Sensors and Actuators" },
    { id: "industry-4-0-and-industrial-iot", label: "Introduction to Industry 4.0 and Industrial IOT" },
    { id: "blockchain-and-its-applications", label: "Blockchain and its Applications" },
  ];

  return (
    <div className="w-full p-4 md:p-8 flex-1">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2 pb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-4xl font-bold">NPTEL MCQ Practice</CardTitle>
            <CardDescription className="text-lg">
              Select your Course to begin
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="border-2 rounded-lg p-6 hover:bg-accent/50 hover:border-primary transition-all cursor-pointer"
                  onClick={() =>
                    navigate(dept.id === "cse" ? "/cse/topics" : `/department/${dept.id}`)
                  }
                >
                  <div className="font-bold text-2xl mb-2">{dept.label}</div>
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
