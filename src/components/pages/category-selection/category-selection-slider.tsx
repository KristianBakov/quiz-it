import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

interface CategorySliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

const CategorySelectionSlider = ({
  sliderValue,
  setSliderValue,
}: CategorySliderProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
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
  );
};

export default CategorySelectionSlider;
