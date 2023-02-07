import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Question } from "../common/interfaces";

export const useQuiz = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Array<Question>>();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, SetScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions?.[currentQuestionNumber];

  const isMountedRef = useRef(false);
  const router = useRouter();

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
      SetScore((prevValue) => prevValue + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    setCurrentQuestionNumber((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (!router.isReady || isMountedRef.current) return;
    async function getApiData() {
      const { limit, categories, difficulty } = router.query;

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
      isMountedRef.current = true;
    }

    getApiData();
  }, [router.isReady]);

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
