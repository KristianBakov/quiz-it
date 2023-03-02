import { Container, Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { CARD_DATA } from "../../../common/constants";
import FeatureCard from "../../feature-card";

const CardSection = () => {
  return (
    <Container as="section" maxW={"6xl"} p={{ base: 4, md: 4 }}>
      <Stack alignItems="center" pb={6}>
        <Heading size="md" py={5}>
          What you should be excited about:
        </Heading>
        <Stack direction={{ base: "column", lg: "row" }} gap={4}>
          {CARD_DATA.map((card, index) => (
            <FeatureCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              key={index}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default CardSection;
