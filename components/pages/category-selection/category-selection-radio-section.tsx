import { Heading, RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CategorySelectionRadioGroupProps {
  children: ReactNode;
}

const CategorySelectionRadioGroup = ({
  children,
}: CategorySelectionRadioGroupProps) => {
  return (
    <Box>
      <Heading mb={3} as="h2" size="md">
        Select Difficulty:
      </Heading>

      {children}
    </Box>
  );
};

export default CategorySelectionRadioGroup;
