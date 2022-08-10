import React from "react";
import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";
import brandLogo from "../assets/logo.png";
import SignUp from "../components/forms/SignUp";
import banner from "../assets/MainSideBanner.jpg";
export default function TwoBoxLayout() {
  return (
    <Flex height={"100vh"}>
      <Box flex={1} w="100%">
        <Flex
          height={"100%"}
          justifyContent="center"
          alignItems={"center"}
          w="100%"
          p={4}
          flexDirection="column"
          gap={5}
        >
          <Image height={"5rem"} w="5rem" src={brandLogo}></Image>
          {/* <Box> */}
          <Flex gap={1}>
            <Text fontSize={"4xl"} fontWeight="600">
              Welcome to
            </Text>
            <Text fontSize={"4xl"} fontWeight="600" color={"purple.600"}>
              Quizania!
            </Text>
          </Flex>
          <Text fontSize={"md"} color={"purple.600"}>
            Make quizzes for your classroom quickly.
          </Text>
          <SignUp></SignUp>
        </Flex>
      </Box>
      <Box
        backgroundImage={banner}
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        flex={2}
        w="100%"
      ></Box>
    </Flex>
  );
}
