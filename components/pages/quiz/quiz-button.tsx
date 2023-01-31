import { Button, StyleProps } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    StyleProps {
  children: string;
}

const QuizButton = ({ children, ...nativeButtonAttributes }: ButtonProps) => {
  return (
    <Button
      minW={{ base: 100, md: 300 }}
      width="300px"
      textAlign="center"
      height="auto"
      whiteSpace="normal"
      color="white"
      rounded={"md"}
      fontSize="18"
      py={3}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      cursor={nativeButtonAttributes.disabled ? "not-allowed" : "pointer"}
      {...nativeButtonAttributes}
    >
      {children}
    </Button>
  );
};

export default QuizButton;
