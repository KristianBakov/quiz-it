import { Flex, Icon as ChakraIcon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { GiMaterialsScience } from "react-icons/gi";
import React from "react";

interface BadgeProps {
  children: string;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <Flex
      gap={2}
      px={2}
      py={1}
      alignItems="center"
      bgColor="blue.800"
      borderRadius={12}
      color="blue.300"
      width="min-content"
    >
      <GiMaterialsScience />
      <Text>{children}</Text>
    </Flex>
  );
};

export default Badge;
