// Sample questions - Replace these with your actual 180 NPTEL questions
export const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search algorithm?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1 // Index of correct answer (0-based)
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

// Helper to generate placeholder questions to reach 190 total
const generatePlaceholderQuestions = () => {
  const placeholders = [];
  for (let i = 11; i <= 190; i++) {
    placeholders.push({
      id: i,
      question: `Sample Question ${i}: This is a placeholder question. Replace with actual NPTEL question.`,
      options: [
        "Option A - Replace with actual option",
        "Option B - Replace with actual option",
        "Option C - Replace with actual option",
        "Option D - Replace with actual option"
      ],
      answer: 0 // Default to first option
    });
  }
  return placeholders;
};

// Combine sample questions with placeholders to make 190 total
export const allQuestions = [...questions, ...generatePlaceholderQuestions()];
