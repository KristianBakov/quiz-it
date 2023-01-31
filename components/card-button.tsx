import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Icon as ChakraIcon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import Link from "next/link";

type CardLinkProps = Record<"title" | "description", string> & {
  icon: IconType;
};

const CardLink = ({ title, description, icon: Icon }: CardLinkProps) => {
  return (
    <Link href="/">
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
    </Link>
  );
};

export default CardLink;
