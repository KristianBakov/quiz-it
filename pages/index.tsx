import { Heading, Container, Text, Stack } from "@chakra-ui/react";
import FadeIn from "../components/fade-in";
import { CTAButtonWithPrompt } from "../components/pages/home/cta-button-with-prompt";

export default function Home() {
  return (
    <Container as="main" maxW={"3xl"}>
      <FadeIn>
        <Stack
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          minHeight="70vh"
          justifyContent="center"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Test your knowledge <br />
            <Text as={"span"} color={"pink.400"}>
              with a quiz
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Puzzle your brain and test your knowledge with Quiz it&apos;s wide
            range of trivia on various topics. Compete with friends to see who
            can earn the most points, or play solo and learn something new. No
            matter how you choose to use Quiz it, it&apos;s a great way to keep
            your brain active.
          </Text>

          <CTAButtonWithPrompt />
        </Stack>
      </FadeIn>
    </Container>
  );
}
