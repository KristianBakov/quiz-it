import { Heading, Stack, CheckboxGroup, Checkbox, Box } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import { categories } from "../../../common/constants";

interface CategorySelectionCheckboxGroupProps {
  handleCheckboxToggle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CategorySelectionCheckboxGroup = ({
  handleCheckboxToggle,
}: CategorySelectionCheckboxGroupProps) => {
  return (
    <Box>
      <Heading mb={3} as="h2" size="md">
        Select Categories:
      </Heading>
      <Stack spacing={3} direction="column">
        <CheckboxGroup
          colorScheme="pink"
          defaultValue={[categories[5][1], categories[7][1]]}
        >
          {categories.map(([label, value]) => {
            return (
              <Checkbox
                value={value}
                onChange={handleCheckboxToggle}
                key={value}
              >
                {label}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </Stack>
    </Box>
  );
};

export default CategorySelectionCheckboxGroup;
