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
  "industry-4-0-and-industrial-iot": {
    topic: "Introduction to Industry 4.0 and Industrial IOT",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 15,
    finalTestLabel: "Week 1-12",
    totalQuestions: 180,
  },
  "blockchain-and-its-applications": {
    topic: "Blockchain and its Applications",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 10,
    finalTestLabel: "Week 1-12",
    totalQuestions: 120,
  },
};
