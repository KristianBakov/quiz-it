export interface Question {
  category: string;
  difficulty: string;
  id: string;
  correctAnswer: string;
  question: string;
  incorrectAnswers: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
