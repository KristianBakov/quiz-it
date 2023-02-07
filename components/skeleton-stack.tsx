import { Stack, Container, Skeleton } from "@chakra-ui/react";
import React from "react";

const SkeletonStack = () => {
  return (
    <Stack as={Container} maxW={"4xl"} my={20} gap={5}>
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
    </Stack>
  );
};

export default SkeletonStack;
