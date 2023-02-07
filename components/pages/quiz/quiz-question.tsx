import { Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import QuestionInfo, { QuestionInfoProps } from "./question-info";
import QuestionContent, { QuestionContentProps } from "./question-content";

interface QuizQuestion extends QuestionInfoProps, QuestionContentProps {
  nextQuestion: () => void;
}

const QuizQuestion = ({
  currentQuestion,
  shuffledAnswers,
  selectedAnswer,
  currentQuestionNumber,
  questionLength,
  chooseAnswer,
  nextQuestion,
}: QuizQuestion) => {
  return (
    <Box textAlign={"center"}>
      <QuestionInfo
        currentQuestion={currentQuestion}
        currentQuestionNumber={currentQuestionNumber}
        questionLength={questionLength}
      />

      <QuestionContent
        currentQuestion={currentQuestion}
        shuffledAnswers={shuffledAnswers}
        selectedAnswer={selectedAnswer}
        chooseAnswer={chooseAnswer}
      />

      {selectedAnswer &&
        (selectedAnswer === currentQuestion?.correctAnswer ? (
          <Heading as="h2" size="lg" color="green.400" mt={5}>
            Correct!
          </Heading>
        ) : (
          <Heading as="h2" size="lg" color="red.400" mt={5}>
            Incorrect!
          </Heading>
        ))}

      {selectedAnswer && (
        <Button mt={5} onClick={nextQuestion}>
          Next
        </Button>
      )}
    </Box>
  );
};

export default QuizQuestion;
