import { HStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { END_QUIZ_TEXT } from "../../../common/constants";
import { useQuiz } from "../../../hooks/use-quiz";

interface ResultsPageProps {
  score: number;
  questionLength: number;
}

const ResultsSection = ({ score, questionLength }: ResultsPageProps) => {
  return (
    <Box textAlign={"center"}>
      <HStack justifyContent="center">
        <Heading as="h1">
          {END_QUIZ_TEXT[Math.floor(Math.random() * END_QUIZ_TEXT.length)]}
        </Heading>
        <FcCheckmark size={30} />
      </HStack>

      <Heading as="h2" size="lg" mt={5}>
        You scored: {(100 * score) / questionLength}%
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
  );
};

export default ResultsSection;
