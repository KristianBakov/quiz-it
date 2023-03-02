import {
  Stack,
  useColorModeValue,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../../../common/constants";
import { NavItem } from "../../../../common/interfaces";

export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Box py={2}>
      <ChakraLink
        as={Link}
        to={href ?? "#"}
        fontWeight={600}
        color={useColorModeValue("gray.600", "gray.200")}
      >
        {label}
      </ChakraLink>
    </Box>
  );
};
