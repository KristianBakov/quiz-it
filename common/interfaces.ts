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

declare global {
  interface Array<T> {
    shuffle(): Array<T>;
  }
}

Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
  return this.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
