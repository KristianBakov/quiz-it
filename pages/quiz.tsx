import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Badge,
  HStack,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  calc,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import QuizButton from "../components/pages/quiz/quiz-button";
import { GiMaterialsScience } from "react-icons/gi";
import { FcCheckmark } from "react-icons/fc";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { NAV_ITEMS } from "../common/constants";
import Link from "next/link";

interface QuizProps {
  data: Question[];
}

interface Question {
  category: string;
  difficulty: string;
  id: string;
  correctAnswer: string;
  question: string;
  incorrectAnswers: string[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    categories = "science",
    difficulty = "medium",
    limit = 10,
  } = context.query;

  const res = await fetch(
    `https://the-trivia-api.com/api/questions?limit=${limit}&categories=${categories}&difficulty=${difficulty}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return { props: { data } };
};

const Quiz = () => {
  const [isLoading, setLoading] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, SetScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState<Array<string>>([]);
  const [isEnded, setIsEnded] = useState(false);
  const router = useRouter();
  const defaultAnswerBackground = useColorModeValue("pink.700", "pink.600");
  const [questions, setQuestions] = useState<Array<Question>>();
  const currentQuestion = questions?.[currentQuestionNumber];

  async function getApiData() {
    setLoading(true);
    const response = await fetch(
      `https://the-trivia-api.com/api/questions?limit=20`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: Array<Question> = await response.json();

    setQuestions(data);

    console.log(questions);
  }

  useEffect(() => {
    //call api once to set data
    getApiData();
  }, []);

  useEffect(() => {
    if (!currentQuestion) return;
    setShuffledAnswers(
      [
        currentQuestion.correctAnswer,
        ...currentQuestion.incorrectAnswers,
      ].shuffle()
    );
  }, []);

  const chooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion?.correctAnswer) {
      SetScore((prevValue) => prevValue + 1);
    }
  };

  const nextQuestion = () => {
    let newCount = currentQuestionNumber + 1;
    if (newCount === questions?.length) {
      setIsEnded(true);
      return;
    }

    setSelectedAnswer("");

    setCurrentQuestionNumber((prevValue) => prevValue + 1);

    setShuffledAnswers(
      [
        questions[newCount].correctAnswer,
        ...questions[newCount].incorrectAnswers,
      ]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  return (
    <Container as="main" maxW={"4xl"} my={20}>
      {!isEnded ? (
        <Box textAlign={"center"}>
          <HStack justifyContent="space-between">
            <Text>
              {currentQuestionNumber + 1}/{questions.length}
            </Text>

            <HStack>
              <Badge
                display="flex"
                alignItems="center"
                gap={2}
                px={4}
                py={1}
                borderRadius={12}
              >
                <GiMaterialsScience />
                <Text textTransform="capitalize">
                  {currentQuestion.category}
                </Text>
              </Badge>
              <Badge
                display="flex"
                alignItems="center"
                gap={2}
                px={4}
                py={1}
                borderRadius={12}
              >
                <Text textTransform="capitalize">
                  {currentQuestion.difficulty}
                </Text>
              </Badge>
            </HStack>
          </HStack>

          <Box>
            <Heading
              as="h1"
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
              lineHeight={"110%"}
              py={12}
            >
              {currentQuestion.question}
            </Heading>
            <Flex
              wrap="wrap"
              alignItems="center"
              justifyContent="center"
              gap={8}
            >
              {shuffledAnswers.length > 0 &&
                shuffledAnswers.map((answer) => (
                  <QuizButton
                    backgroundColor={
                      Boolean(selectedAnswer)
                        ? currentQuestion.correctAnswer === answer
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

          {selectedAnswer &&
            (selectedAnswer === currentQuestion.correctAnswer ? (
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
      ) : (
        <Box textAlign={"center"}>
          <HStack justifyContent="center">
            <Heading as="h1">
              {
                celebrationText[
                  Math.floor(Math.random() * celebrationText.length)
                ]
              }
            </Heading>
            <FcCheckmark size={30} />
          </HStack>
          <Heading as="h2" size="lg" mt={5}>
            Your score is: {(100 * score) / questions.length}%{" "}
          </Heading>

          <Text mt={5}>Perhaps you would like to try another quiz?</Text>

          <HStack justifyContent="center" gap={4} mt={5}>
            <Button backgroundColor="pink.500" onClick={() => router.reload()}>
              Random Quiz
            </Button>
            <Button
              backgroundColor="pink.500"
              onClick={() => router.push("category-selection")}
            >
              Custom Quiz
            </Button>
          </HStack>
        </Box>
      )}
    </Container>
  );
};

const celebrationText = [
  "WOW! Look at that!",
  "You are awesome!",
  "Congrats!",
  "You nailed it!",
];

export default Quiz;
