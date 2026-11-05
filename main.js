import { calculateAverage } from './calculateAverage.js';
import { findTopStudent } from './findTopStudent.js';
import { filterFailed } from './filterFailed.js';
import { addLetterGrade } from './addLetterGrade.js';

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:\n", addLetterGrade(grades));