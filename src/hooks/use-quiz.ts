import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { Question } from "../common/interfaces";

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

export const useQuiz = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Array<Question>>();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuestion = questions?.[currentQuestionNumber];

  const shuffledAnswers = useMemo(
    () =>
      currentQuestion
        ? [
            currentQuestion.correctAnswer,
            ...currentQuestion.incorrectAnswers,
          ].shuffle()
        : [],
    [currentQuestion]
  );

  const chooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion?.correctAnswer) {
      setScore((prevValue) => prevValue + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    setCurrentQuestionNumber((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    async function getApiData() {
      const limit = searchParams.get("limit");
      const categories = searchParams.get("categories");
      const difficulty = searchParams.get("difficulty");

      const response = await fetch(
        `https://the-trivia-api.com/api/questions?limit=${
          limit || 10
        }&categories=${categories || "science"}&difficulty=${
          difficulty || "medium"
        }`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: Array<Question> = await response.json();

      setQuestions(data);
      setIsLoading(false);
    }

    getApiData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoading,
    score,
    currentQuestion,
    currentQuestionNumber,
    selectedAnswer,
    shuffledAnswers,
    questionLength: questions?.length,
    chooseAnswer,
    nextQuestion,
  };
};
