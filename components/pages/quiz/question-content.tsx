import { Heading, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import QuizButton from "./quiz-button";
import QuizQuestion from "./quiz-question";

export interface QuestionContentProps
  extends Pick<QuizQuestion, "currentQuestion"> {
  shuffledAnswers: Array<string>;
  selectedAnswer: string;
  chooseAnswer: (answer: string) => void;
}

const QuestionContent = ({
  currentQuestion,
  shuffledAnswers,
  selectedAnswer,
  chooseAnswer,
}: QuestionContentProps) => {
  const defaultAnswerBackground = useColorModeValue("pink.700", "pink.600");

  return (
    <Box>
      <Heading
        as="h1"
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
        lineHeight={"110%"}
        py={12}
      >
        {currentQuestion?.question}
      </Heading>
      <Flex wrap="wrap" alignItems="center" justifyContent="center" gap={8}>
        {shuffledAnswers.length > 0 &&
          shuffledAnswers.map((answer) => (
            <QuizButton
              backgroundColor={
                Boolean(selectedAnswer)
                  ? currentQuestion?.correctAnswer === answer
                    ? "green.300"
                    : "red.500"
                  : defaultAnswerBackground
              }
              disabled={Boolean(selectedAnswer)}
              onClick={() => chooseAnswer(answer)}
              aria-label="choose this answer"
              key={answer}
            >
              {answer}
            </QuizButton>
          ))}
      </Flex>
    </Box>
  );
};

export default QuestionContent;
