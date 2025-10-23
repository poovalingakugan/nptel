// Questions organized by weeks
export const questionsByWeek = {
  0: [ // Week 0 - 10 questions
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
  ]
};

// Generate placeholder questions for weeks 1-12 (15 questions each)
for (let week = 1; week <= 12; week++) {
  questionsByWeek[week] = [];
  for (let q = 1; q <= 15; q++) {
    const id = week * 100 + q;
    questionsByWeek[week].push({
      id,
      question: `Week ${week} - Question ${q}: Replace with actual NPTEL question for Industry 4.0 and IIoT`,
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

// Legacy export for backward compatibility
export const questions = questionsByWeek[0];

// Get all questions combined (for final test)
export const allQuestions = Object.values(questionsByWeek).flat();
