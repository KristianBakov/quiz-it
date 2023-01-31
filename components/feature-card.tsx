import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import { IconType } from "react-icons";

// interface FeatureCardProps {
//   title: string;
//   description: string;
// }
type FeatureCardProps = Record<"title" | "description", string> & {
  icon: IconType;
};

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Card>
      <CardBody>
        <Stack
          maxWidth={"2xl"}
          textAlign="center"
          alignItems="center"
          spacing="3"
        >
          <Heading size="md">{title}</Heading>
          <ChakraIcon as={Icon} color="pink.300" boxSize={50} />
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
