import {
  Box,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../../common/constants";

export const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems="center"
      display={{ base: "none", md: "flex" }}
      flex="auto"
      ml={10}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <ChakraLink
            as={Link}
            p={2}
            to={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </ChakraLink>
        </Box>
      ))}
    </Stack>
  );
};
