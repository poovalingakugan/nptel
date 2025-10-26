import Quiz from "@/components/Quiz";
import { useParams } from "react-router-dom";

const Index = () => {
  const { weekId, department, topicId } = useParams();
  // If topicId is present, it's CSE department
  const actualDepartment = topicId ? 'cse' : department;
  return <Quiz weekId={weekId} department={actualDepartment} topicId={topicId} />;
};

export default Index;
