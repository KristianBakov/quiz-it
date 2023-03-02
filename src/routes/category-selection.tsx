import { Container, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import React, { useRef, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { categories, difficultyLevels } from "../common/constants";
import CategorySelectionCheckboxGroup from "../components/pages/category-selection/category-selection-checkbox-group";
import CategorySelectionRadioGroup from "../components/pages/category-selection/category-selection-radio-section";
import CategorySelectionSlider from "../components/pages/category-selection/category-selection-slider";

const CategorySelection = () => {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const categoriesRef = useRef<Set<string>>(
    new Set<string>([categories[5][1], categories[7][1]])
  );
  const difficultyRef = useRef<string>(difficultyLevels[1][1]);
  const navigate = useNavigate();

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
              {difficultyLevels.map((difficultyLevel) => {
                return (
                  <Radio value={difficultyLevel[1]} key={difficultyLevel[1]}>
                    {difficultyLevel[0]}
                  </Radio>
                );
              })}
            </Stack>
          </RadioGroup>
        </CategorySelectionRadioGroup>
      </Stack>

      <CategorySelectionSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />

      <Button
        display="block"
        m="0 auto"
        bgColor="pink.500"
        onClick={() => {
          setIsLoading(true);
          navigate(
            `/quiz?categories=${Array.from(categoriesRef.current).join(
              ","
            )}&difficulty=${difficultyRef.current}&limit=${sliderValue}`
          );
        }}
      >
        {isLoading ? "Redirecting..." : "QUIZ IT!"}
      </Button>
    </Container>
  );
};

export default CategorySelection;
