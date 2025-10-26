export interface CSETopic {
  id: string;
  name: string;
  description: string;
}

export const cseTopics: CSETopic[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    description: "Explore AI algorithms, neural networks, and machine learning concepts"
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description: "Learn about cloud infrastructure, services, and deployment models"
  },
  {
    id: "data-structures",
    name: "Data Structures & Algorithms",
    description: "Master fundamental data structures and algorithmic problem solving"
  }
];
