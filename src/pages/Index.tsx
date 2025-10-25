import Quiz from "@/components/Quiz";
import { useParams } from "react-router-dom";

const Index = () => {
  const { weekId, department } = useParams();
  return <Quiz weekId={weekId} department={department} />;
};

export default Index;
