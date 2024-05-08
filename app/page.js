import { Box, Text, Flex } from "@chakra-ui/react";

import Navbar from "@/components/landing-page/navbar";
import Hero from "@/components/landing-page/hero";
import About from "@/components/landing-page/about";
import Property from "@/components/landing-page/property";
import Contact from "@/components/landing-page/contact";

export default function Home() {
  return (
    <main>
      <Box w={"full"} minH={"100vh"}>
        <Navbar />
        <Hero />
        <About />
        <Property />
        <Contact />
        <Flex justifyContent={"center"}>
          <Text fontSize={"md"} color={"black"} py={5}>
            © 2024. All rights reserved Kost Putra Darma 5
          </Text>
        </Flex>
      </Box>
    </main>
  );
}
