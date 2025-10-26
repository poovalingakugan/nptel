import Quiz from "@/components/Quiz";
import { useParams } from "react-router-dom";

const Index = () => {
  const { weekId, department, topicId } = useParams();
  return <Quiz weekId={weekId} department={department} topicId={topicId} />;
};

export default Index;
