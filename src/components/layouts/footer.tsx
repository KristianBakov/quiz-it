import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="fixed"
      bottom={0}
      width="100%"
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Stack py={4} px={8} spacing={4} alignItems="center">
          <Text>
            © {new Date().getFullYear()} Kristian Bakov. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
