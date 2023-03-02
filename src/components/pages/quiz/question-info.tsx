import { HStack, Badge, Text } from "@chakra-ui/react";
import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { Question } from "../../../common/interfaces";

export interface QuestionInfoProps {
  currentQuestionNumber: number;
  questionLength?: number;
  currentQuestion?: Question;
}

const QuestionInfo = ({
  currentQuestionNumber,
  questionLength,
  currentQuestion,
}: QuestionInfoProps) => {
  return (
    <HStack justifyContent="space-between">
      <Text>
        {currentQuestionNumber + 1}/{questionLength}
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
          <Text textTransform="capitalize">{currentQuestion?.category}</Text>
        </Badge>
        <Badge
          display="flex"
          alignItems="center"
          gap={2}
          px={4}
          py={1}
          borderRadius={12}
        >
          <Text textTransform="capitalize">{currentQuestion?.difficulty}</Text>
        </Badge>
      </HStack>
    </HStack>
  );
};

export default QuestionInfo;
