import {
  Container,
  Radio,
  RadioGroup,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React, { useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
import { categories } from "../common/constants";
import CategorySelectionCheckboxGroup from "../components/pages/category-selection/category-selection-checkbox-group";
import CategorySelectionRadioGroup from "../components/pages/category-selection/category-selection-radio-section";
import CategorySelectionSlider from "../components/pages/category-selection/category-selection-slider";

const CategorySelection = () => {
  const [sliderValue, setSliderValue] = React.useState(10);

  const [isLoading, setIsLoading] = useState(false);
  const categoriesRef = useRef<Set<string>>(
    new Set<string>([categories[5][1], categories[7][1]])
  );
  const difficultyRef = useRef("medium");

  const handleCheckboxToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    e.target.checked
      ? categoriesRef.current.add(val)
      : categoriesRef.current.delete(val);
  };

  return (
    <Container as="main" maxW={"2xl"} my={20}>
      <Stack direction="row" justifyContent="space-between">
        <CategorySelectionCheckboxGroup
          handleCheckboxToggle={handleCheckboxToggle}
        />

        <CategorySelectionRadioGroup>
          <RadioGroup
            onChange={(e) => (difficultyRef.current = e)}
            defaultValue={difficultyRef.current}
            colorScheme="pink"
          >
            <Stack spacing={5} direction="column">
              <Radio value="easy">Easy</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="hard">Hard</Radio>
            </Stack>
          </RadioGroup>
        </CategorySelectionRadioGroup>
      </Stack>

      <CategorySelectionSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />

      <ChakraLink
        as={Link}
        width="fit-content"
        fontWeight={600}
        display="block"
        textAlign="center"
        borderRadius={8}
        py={2}
        px={5}
        m="0 auto"
        bgColor="pink.500"
        color="white"
        href={`quiz?categories=${Array.from(categoriesRef.current).join(
          ","
        )}&difficulty=${difficultyRef.current}&limit=${sliderValue}`}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? "Redirecting..." : "QUIZ IT!"}
      </ChakraLink>
    </Container>
  );
};

export default CategorySelection;
