import {Subject} from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Covers programming fundamentals, basic algorithms, and problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },

  {
    id: 2,
    code: 'MATH201',
    name: 'Calculus II',
    department: 'Mathematics',
    description: 'Continuation of single-variable calculus, focusing on integration techniques and series.',
    createdAt: new Date().toISOString(),
  },

  {
    id: 3,
    code: 'ENG150',
    name: 'English Composition',
    department: 'English',
    description: 'Develops academic writing skills through essays, research, and peer review.',
    createdAt: new Date().toISOString(),
  },
];