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
    totalQuestions: 180,
    badge: "12 Weeks",
  },
  "vlsi-design-flow-rtl-to-gds": {
    id: "vlsi-design-flow-rtl-to-gds",
    topic: "VLSI Design Flow: RTL to GDS",
    code: "NOC26-EE106",
    category: "VLSI / Electronics",
    description: "Comprehensive 12-week NPTEL course covering the complete VLSI chip design flow from RTL description to GDSII layout.",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 10,
    finalTestLabel: "Week 1-12",
    totalQuestions: 120,
    badge: "12 Weeks",
  },
  "cyber-security-and-privacy": {
    id: "cyber-security-and-privacy",
    topic: "Cyber Security and Privacy",
    code: "NOC26-CS",
    category: "Cybersecurity",
    description: "Comprehensive 12-week NPTEL course covering cryptography, system security, network security, and data privacy principles.",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 10,
    finalTestLabel: "Week 1-12",
    totalQuestions: 120,
    badge: "12 Weeks",
  },
  "electronic-systems-for-cancer-diagnosis": {
    id: "electronic-systems-for-cancer-diagnosis",
    topic: "Electronic Systems for Cancer Diagnosis",
    code: "NOC26-EE",
    category: "Biomedical Electronics",
    description: "Comprehensive 12-week NPTEL course covering biosensors, microfluidics, instrumentation, and electronic detection systems for cancer diagnosis.",
    startWeek: 1,
    endWeek: 12,
    questionsPerWeek: 10,
    finalTestLabel: "Week 1-12",
    totalQuestions: 119,
    badge: "12 Weeks",
  },
};

export const getCoursesList = (): CourseConfig[] => {
  return Object.values(departmentConfig);
};

export type DepartmentConfig = CourseConfig;
