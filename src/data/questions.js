// Questions organized by department and weeks
export const questionsByDepartment = {
  cse: {},
  it: {},
  ece: {},
  eee: {},
  csbs: {},
};

// ECE Department - Week 0 questions
questionsByDepartment.ece[0] = [
  {
    id: 1,
    question: "What is the time complexity of binary search algorithm?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: 1
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    id: 4,
    question: "Which programming paradigm does Python primarily support?",
    options: ["Only Object-Oriented", "Only Functional", "Multi-paradigm", "Only Procedural"],
    answer: 2
  },
  {
    id: 5,
    question: "What is the primary purpose of an operating system?",
    options: ["Run applications only", "Manage hardware and software resources", "Create documents", "Browse the internet"],
    answer: 1
  },
  {
    id: 6,
    question: "In SQL, which command is used to retrieve data from a database?",
    options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
    answer: 1
  },
  {
    id: 7,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: 1
  },
  {
    id: 8,
    question: "Which of these is NOT a valid HTTP method?",
    options: ["GET", "POST", "FETCH", "DELETE"],
    answer: 2
  },
  {
    id: 9,
    question: "What is the base of binary number system?",
    options: ["2", "8", "10", "16"],
    answer: 0
  },
  {
    id: 10,
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for loop", "while loop", "do-while loop", "foreach loop"],
    answer: 2
  }
];

// Generate placeholder questions for all departments
const departments = ['cse', 'it', 'ece', 'eee', 'csbs'];

departments.forEach(dept => {
  const startWeek = dept === 'csbs' ? 1 : 0;
  const endWeek = 12;
  
  for (let week = startWeek; week <= endWeek; week++) {
    // Skip Week 0 for ECE as we have actual questions, skip for CSBS as it doesn't have Week 0
    if ((dept === 'ece' && week === 0) || (dept === 'csbs' && week === 0)) continue;
    
    questionsByDepartment[dept][week] = [];
    for (let q = 1; q <= 15; q++) {
      const id = parseInt(`${dept.charCodeAt(0)}${week}${q.toString().padStart(2, '0')}`);
      questionsByDepartment[dept][week].push({
        id,
        question: `${dept.toUpperCase()} Week ${week} - Question ${q}: Replace with actual NPTEL question`,
        options: [
          "Option A - Replace with actual option",
          "Option B - Replace with actual option",
          "Option C - Replace with actual option",
          "Option D - Replace with actual option"
        ],
        answer: 0
      });
    }
  }
});

// Helper function to get questions for a specific department and week
export const getQuestionsByDepartmentWeek = (department, week) => {
  return questionsByDepartment[department]?.[week] || [];
};

// Helper function to get all questions for a department (for final test)
export const getAllQuestionsByDepartment = (department) => {
  const deptQuestions = questionsByDepartment[department];
  if (!deptQuestions) return [];
  return Object.values(deptQuestions).flat();
};

// Legacy exports for backward compatibility (ECE department)
export const questionsByWeek = questionsByDepartment.ece;
export const questions = questionsByDepartment.ece[0] || [];
export const allQuestions = getAllQuestionsByDepartment('ece');
