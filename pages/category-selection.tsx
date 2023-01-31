import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Heading,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { categories } from "../common/constants";

const CategorySelection = () => {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const categoriesRef = useRef<Set<string>>(
    new Set<string>([categories[5][1], categories[7][1]])
  );
  const difficultyRef = useRef("medium");

  return (
    <Container as="main" maxW={"2xl"} my={20}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Heading mb={3} as="h2" size="md">
            Select Categories:
          </Heading>
          <Stack spacing={3} direction="column">
            <CheckboxGroup
              colorScheme="pink"
              defaultValue={[categories[5][1], categories[7][1]]}
            >
              {categories.map(([label, value], index) => {
                return (
                  <Checkbox
                    value={value}
                    onChange={(e) => {
                      const val = e.target.value;

                      e.target.checked
                        ? categoriesRef.current.add(val)
                        : categoriesRef.current.delete(val);
                    }}
                    key={index}
                  >
                    {label}
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </Stack>
        </Box>

        <Box>
          <Heading mb={3} as="h2" size="md">
            Select Difficulty:
          </Heading>
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
        </Box>
      </Stack>

      <Box my={10}>
        <Heading mb={3} as="h2" size="md">
          Number of Questions
        </Heading>
        <Slider
          id="slider"
          value={sliderValue}
          min={1}
          max={20}
          colorScheme="pink"
          onChange={(v) => setSliderValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
            1
          </SliderMark>
          <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
            10
          </SliderMark>
          <SliderMark value={20} mt="1" ml="-2.5" fontSize="sm">
            20
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="pink.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Box>

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
