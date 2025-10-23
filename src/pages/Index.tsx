import Quiz from "@/components/Quiz";
import { useParams } from "react-router-dom";

const Index = () => {
  const { weekId } = useParams();
  return <Quiz weekId={weekId} />;
};

export default Index;
