export interface DepartmentConfig {
  topic: string;
  startWeek: number;
  endWeek: number;
  questionsPerWeek: number;
  finalTestLabel: string;
  totalQuestions: number;
}

export const departmentConfig: Record<string, DepartmentConfig> = {
  cse: {
    topic: "Sample Topic for CSE (Replace Later)",
    startWeek: 0,
    endWeek: 12,
    questionsPerWeek: 15,
    finalTestLabel: "Week 0-12",
    totalQuestions: 190,
  },
  it: {
    topic: "Sample Topic for IT (Replace Later)",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 30, // Week 1-8: 30, Week 9-12: 20 (handled in questions.js)
    finalTestLabel: "Week 1-12",
    totalQuestions: 320, // (8 weeks * 30) + (4 weeks * 20)
  },
  ece: {
    topic: "Introduction to Industry 4.0 and Industrial Internet of Things",
    startWeek: 0,
    endWeek: 12,
    questionsPerWeek: 15,
    finalTestLabel: "Week 0-12",
    totalQuestions: 190,
  },
  "eee-csbs": {
    topic: "Sample Topic for EEE & CSBS (Replace Later)",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 15,
    finalTestLabel: "Week 1-12",
    totalQuestions: 180, // No Week 0
  },
};
