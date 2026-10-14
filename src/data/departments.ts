export interface CourseConfig {
  id: string;
  topic: string;
  code?: string;
  category: string;
  description?: string;
  startWeek: number;
  endWeek: number;
  questionsPerWeek: number;
  finalTestLabel: string;
  totalQuestions: number;
  badge?: string;
  gradient?: string;
  iconName?: string;
}

export const departmentConfig: Record<string, CourseConfig> = {
  "industry-4-0-and-industrial-iot": {
    id: "industry-4-0-and-industrial-iot",
    topic: "Introduction to Industry 4.0 and Industrial IOT",
    code: "NOC26-CS28",
    category: "Industrial IoT",
    description: "Comprehensive 12-week NPTEL course covering Industry 4.0, Cyber-Physical Systems, and IIoT architecture.",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 15,
    finalTestLabel: "Week 1-12",
    totalQuestions: 150,
    badge: "12 Weeks",
  },
};

export const getCoursesList = (): CourseConfig[] => {
  return Object.values(departmentConfig);
};

export type DepartmentConfig = CourseConfig;
