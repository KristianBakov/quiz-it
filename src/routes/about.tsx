import { Container, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/icons/main-logo.png";

const About = () => {
  return (
    <Container as="main" maxW={"3xl"}>
      <Stack
        textAlign={"center"}
        alignItems="center"
        spacing={{ base: 8, md: 14 }}
        minHeight="70vh"
        justifyContent="center"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"90%"}
        >
          About Quiz It
        </Heading>
        <Text color={"gray.500"}>
          Quiz it is an easy-to-use app for trivia enthusiasts. With just a
          click, users can play fun and engaging trivia games. Unlike other
          apps, Quiz it does not require registration or room creation, making
          it a great option for all trivia lovers. Give it a try and discover
          why Quiz it is the ultimate destination for quizzing.
        </Text>
        <Text color={"gray.500"} lineHeight={"90%"}>
          Never stop being curious!
        </Text>
        <Image src={Logo} alt="quiz-it" height={64} />
      </Stack>
    </Container>
  );
};

export default About;
