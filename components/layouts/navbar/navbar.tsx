import {
  Flex,
  IconButton,
  Button,
  Collapse,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "assets/icons/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "./components/desktop-nav";
import { MobileNav } from "./components/mobile-nav";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        justifyContent="space-between"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        py={2}
        px={8}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <IconButton
          display={{ md: "none" }}
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Mobile Navigation"}
        />

        <ChakraLink as={Link} aria-label="Navigate to homepage" href="/">
          <Image src={Logo} alt="quiz-it" height={64} />
        </ChakraLink>

        <DesktopNav />

        <Button aria-label="Toggle color mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </>
  );
}
