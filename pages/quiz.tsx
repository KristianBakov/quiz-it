import { Container } from "@chakra-ui/react";
import { useQuiz } from "../hooks/use-quiz";
import ResultsSection from "../components/pages/quiz/results-page";
import SkeletonStack from "../components/skeleton-stack";
import QuizQuestion from "../components/pages/quiz/quiz-question";

const Quiz = () => {
  const {
    questionLength,
    currentQuestionNumber,
    isLoading,
    score,
    currentQuestion,
    shuffledAnswers,
    selectedAnswer,
    nextQuestion,
    chooseAnswer,
  } = useQuiz();

  const isQuizEnded = currentQuestionNumber === questionLength;

  if (isLoading) {
    return isLoading && <SkeletonStack />;
  }

  return (
    <Container as="main" maxW={"4xl"} my={20}>
      {!isQuizEnded ? (
        <QuizQuestion
          currentQuestion={currentQuestion}
          shuffledAnswers={shuffledAnswers}
          selectedAnswer={selectedAnswer}
          currentQuestionNumber={currentQuestionNumber}
          questionLength={questionLength}
          chooseAnswer={chooseAnswer}
          nextQuestion={nextQuestion}
        />
      ) : (
        <ResultsSection score={score} questionLength={questionLength} />
      )}
    </Container>
  );
};

export default Quiz;
