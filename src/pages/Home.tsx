import { useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight, PlusCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCoursesList } from "@/data/departments";

const Home = () => {
  const navigate = useNavigate();
  const courses = getCoursesList();

  return (
    <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col justify-center">
      <Card className="shadow-2xl border border-border/60 bg-card/95 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-300">
        <CardHeader className="text-center pt-10 pb-6 px-6 sm:px-10 space-y-3">
          <div className="flex justify-center mb-1">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
              <BookOpen className="w-9 h-9 text-primary stroke-[2.2]" />
            </div>
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-foreground">
            NPTEL MCQ Practice
          </CardTitle>
          <CardDescription className="text-base sm:text-lg text-muted-foreground font-medium">
            Select your Course to begin
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 sm:px-10 pb-10 space-y-4">
          {courses.length > 0 ? (
            <div className="space-y-3.5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group border-2 border-border/80 rounded-2xl p-5 sm:p-6 hover:bg-primary/[0.04] hover:border-primary transition-all duration-200 cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md"
                  onClick={() =>
                    navigate(course.id === "cse" ? "/cse/topics" : `/department/${course.id}`)
                  }
                >
                  <div className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                    {course.topic}
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </div>
              ))}
            </div>
          ) : (
            /* Clean, Simple Empty State while waiting for user's new courses */
            <div className="border-2 border-dashed border-border/80 rounded-2xl p-8 text-center space-y-3 bg-muted/20">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground">
                Ready for New Courses
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                The previous courses have been removed. Tell me the new course names, and they will be added here immediately.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
