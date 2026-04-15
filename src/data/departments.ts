export interface DepartmentConfig {
  topic: string;
  startWeek: number;
  endWeek: number;
  questionsPerWeek: number;
  finalTestLabel: string;
  totalQuestions: number;
}

export const departmentConfig: Record<string, DepartmentConfig> = {
  "sensors-and-actuators": {
    topic: "Sensors and Actuators",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 10,
    finalTestLabel: "Week 1-12",
    totalQuestions: 120,
  },
};
