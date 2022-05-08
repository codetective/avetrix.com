import {
  Box,
  Container,
  SimpleGrid,
  chakra,
  VisuallyHidden,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import data from "../data";
import Logo from "./Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box bg="brand.100" color={"gray.300"}>
      <Container as={Stack} maxW={"container.xl"} py={10} px="8">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={3}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>...company catchphrase here</Text>
            <Stack>
              <Text>{data.name}</Text>
              <Text> {data.location}</Text>
              <Text>Nigeria</Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"/"}>Home</Link>
            <Link href={"/about_us"}>About Us</Link>
            <Link href={"/projects"}>Project Portfolio</Link>
            <Link href={"/why_us"}>Why Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Services</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Get in touch!</ListHeader>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Link href={"tel:" + data.phone}>
              <HStack
                cursor="pointer"
                _hover={{
                  color: "brand.300",
                }}
              >
                <Box as="span" color="brand.300">
                  <FaPhoneAlt />
                </Box>
                <Text as="span">{data.phone}</Text>
              </HStack>
            </Link>
            <Link href={"tel:" + data.phone2}>
              <HStack
                cursor="pointer"
                _hover={{
                  color: "brand.300",
                }}
              >
                <Box as="span" color="brand.300">
                  <FaPhoneAlt />
                </Box>
                <Text as="span">{data.phone2}</Text>
              </HStack>
            </Link>
            <Link href={"mailto:" + data.email}>
              <HStack
                cursor="pointer"
                _hover={{
                  color: "brand.300",
                }}
              >
                <Box as="span" color="brand.300">
                  <FaEnvelope />
                </Box>
                <Text as="span">{data.email}</Text>
              </HStack>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <hr />
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear() + ". "}
          <Box as="span" color="brand.300">
            Avetrix Controls Limited.
          </Box>{" "}
          All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
